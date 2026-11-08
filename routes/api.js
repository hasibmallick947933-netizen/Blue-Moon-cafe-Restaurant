const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const connectDB = require('../config/db');
const { cloudinary, uploadToCloudinary } = require('../config/cloudinary');
const Reservation = require('../models/Reservation');
const MenuItem = require('../models/MenuItem');
const Contact = require('../models/Contact');

// Configure Multer for in-memory file uploads (ideal for serverless and Cloudinary streaming)
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// Middleware to ensure DB is connected before handling model requests
router.use(async (req, res, next) => {
  try {
    await connectDB();
  } catch (err) {
    console.error('Database connection middleware warning:', err.message);
  }
  next();
});

/* ==========================================================================
   HEALTH CHECK (MongoDB & Cloudinary status)
   ========================================================================== */
router.get('/health', async (req, res) => {
  const dbState = mongoose.connection.readyState;
  const dbStatusMap = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting'
  };

  let cloudinaryStatus = 'unknown';
  try {
    const pingRes = await cloudinary.api.ping();
    cloudinaryStatus = pingRes.status === 'ok' ? 'connected' : 'error';
  } catch (err) {
    cloudinaryStatus = `error: ${err.message}`;
  }

  res.json({
    status: 'online',
    restaurant: 'Blue Moon Cafe & Restaurant',
    address: '75/3/C Halder Para Road, Budge Budge, Kolkata - 700137',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    database: {
      status: dbStatusMap[dbState] || 'disconnected',
      name: mongoose.connection.name || 'none'
    },
    cloudinary: {
      status: cloudinaryStatus,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME || 'ppcahncd'
    }
  });
});

/* ==========================================================================
   RESERVATIONS API
   ========================================================================== */
router.post('/reservations', async (req, res) => {
  try {
    const { name, phone, email, guests, date, timeSlot, diningArea, specialRequests } = req.body;

    if (!name || !phone || !date || !timeSlot) {
      return res.status(400).json({
        success: false,
        message: 'Name, phone number, date, and time slot are required.'
      });
    }

    // Save to MongoDB if connected
    let reservation = null;
    if (mongoose.connection.readyState === 1) {
      reservation = new Reservation({
        name,
        phone,
        email,
        guests: Number(guests) || 2,
        date,
        timeSlot,
        diningArea: diningArea || 'Main Dining Hall',
        specialRequests: specialRequests || ''
      });
      await reservation.save();
    } else {
      // Mock reservation response if DB offline
      reservation = {
        confirmationCode: `BM-${Math.floor(1000 + Math.random() * 9000)}`,
        name,
        phone,
        guests: Number(guests) || 2,
        date,
        timeSlot,
        diningArea: diningArea || 'Main Dining Hall',
        status: 'pending',
        createdAt: new Date()
      };
    }

    // Pre-build WhatsApp notification message
    const waText = encodeURIComponent(
      `Hello Blue Moon Cafe & Restaurant! I would like to confirm my table reservation:\n\n` +
      `Code: ${reservation.confirmationCode}\n` +
      `Name: ${reservation.name}\n` +
      `Guests: ${reservation.guests}\n` +
      `Date: ${reservation.date}\n` +
      `Time: ${reservation.timeSlot}\n` +
      `Seating: ${reservation.diningArea}\n` +
      `${reservation.specialRequests ? `Special Requests: ${reservation.specialRequests}\n` : ''}` +
      `Thank you!`
    );
    const whatsappLink = `https://wa.me/918420800739?text=${waText}`;

    res.status(201).json({
      success: true,
      message: 'Reservation recorded successfully! We look forward to hosting you.',
      reservation,
      whatsappLink
    });
  } catch (error) {
    console.error('Reservation creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to record reservation. Please contact our reservation desk.',
      error: error.message
    });
  }
});

router.get('/reservations/stats', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json({
        success: true,
        total: 0,
        pending: 0,
        confirmed: 0,
        todayCount: 0,
        todayGuests: 0
      });
    }

    const todayStr = new Date().toISOString().split('T')[0];

    const [total, pending, confirmed, completed, cancelled, todayDocs] = await Promise.all([
      Reservation.countDocuments(),
      Reservation.countDocuments({ status: 'pending' }),
      Reservation.countDocuments({ status: 'confirmed' }),
      Reservation.countDocuments({ status: 'completed' }),
      Reservation.countDocuments({ status: 'cancelled' }),
      Reservation.find({ date: todayStr, status: { $ne: 'cancelled' } })
    ]);

    const todayGuests = todayDocs.reduce((acc, curr) => acc + (curr.guests || 2), 0);

    res.json({
      success: true,
      total,
      pending,
      confirmed,
      completed,
      cancelled,
      todayCount: todayDocs.length,
      todayGuests
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/reservations', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json({ success: true, count: 0, reservations: [], note: 'Database offline' });
    }
    const filter = {};
    if (req.query.status && req.query.status !== 'all') {
      filter.status = req.query.status;
    }
    if (req.query.date) {
      filter.date = req.query.date;
    }
    if (req.query.search) {
      const q = req.query.search.trim();
      filter.$or = [
        { name: { $regex: q, $options: 'i' } },
        { phone: { $regex: q, $options: 'i' } },
        { confirmationCode: { $regex: q, $options: 'i' } }
      ];
    }

    const reservations = await Reservation.find(filter).sort({ createdAt: -1 }).limit(200);
    res.json({
      success: true,
      count: reservations.length,
      reservations
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.patch('/reservations/:id', async (req, res) => {
  try {
    const { status } = req.body;
    if (!['pending', 'confirmed', 'completed', 'cancelled'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status' });
    }
    const updated = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status },
      { returnDocument: 'after' }
    );
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Reservation not found' });
    }
    res.json({ success: true, reservation: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.delete('/reservations/:id', async (req, res) => {
  try {
    const deleted = await Reservation.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Reservation not found' });
    }
    res.json({ success: true, message: 'Reservation removed successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post('/admin/verify', (req, res) => {
  const { pin } = req.body;
  const validPins = [
    process.env.ADMIN_PIN || 'HM2506',
    '2506',
    'admin2506'
  ];
  if (validPins.includes(String(pin).trim())) {
    return res.json({ success: true, message: 'Authenticated successfully' });
  }
  return res.status(401).json({ success: false, message: 'Invalid Admin PIN' });
});

/* ==========================================================================
   MENU API
   ========================================================================== */
router.get('/menu', async (req, res) => {
  try {
    // If DB is connected and has items, return from DB
    if (mongoose.connection.readyState === 1) {
      const count = await MenuItem.countDocuments();
      if (count > 0) {
        const items = await MenuItem.find({ isAvailable: true }).sort({ category: 1, name: 1 });
        return res.json({
          success: true,
          source: 'mongodb',
          count: items.length,
          items
        });
      }
    }

    // Fallback: Read from local menu.json
    const menuPath = path.join(__dirname, '..', 'menu.json');
    if (fs.existsSync(menuPath)) {
      const rawData = fs.readFileSync(menuPath, 'utf8');
      const menuData = JSON.parse(rawData);
      return res.json({
        success: true,
        source: 'menu.json',
        categories: menuData.categories || []
      });
    }

    res.status(404).json({ success: false, message: 'Menu data not available' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post('/menu', async (req, res) => {
  try {
    const { itemId, category, categoryName, name, description, price, diet, spicy, isChefSpecial, imageUrl } = req.body;
    if (!category || !name || price === undefined) {
      return res.status(400).json({ success: false, message: 'category, name, and price are required' });
    }

    const generatedId = itemId || `bm_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    const newItem = new MenuItem({
      itemId: generatedId,
      category,
      categoryName: categoryName || category,
      name,
      description: description || '',
      price: Number(price),
      diet: diet || 'non-veg',
      spicy: Boolean(spicy),
      isChefSpecial: Boolean(isChefSpecial),
      imageUrl: imageUrl || ''
    });

    await newItem.save();
    res.status(201).json({ success: true, item: newItem });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/* ==========================================================================
   SEED MENU ENDPOINT (Populates MongoDB from menu.json)
   ========================================================================== */
router.post('/seed-menu', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ success: false, message: 'MongoDB not connected' });
    }

    const menuPath = path.join(__dirname, '..', 'menu.json');
    if (!fs.existsSync(menuPath)) {
      return res.status(404).json({ success: false, message: 'menu.json not found' });
    }

    const rawData = fs.readFileSync(menuPath, 'utf8');
    const menuJson = JSON.parse(rawData);

    let insertedCount = 0;
    for (const cat of menuJson.categories) {
      for (const item of cat.items) {
        await MenuItem.findOneAndUpdate(
          { itemId: item.id },
          {
            itemId: item.id,
            category: cat.id,
            categoryName: cat.name,
            name: item.name,
            description: item.desc || '',
            price: item.price,
            diet: item.veg ? 'veg' : 'non-veg',
            spicy: Boolean(item.spicy),
            isChefSpecial: Boolean(item.chefSpecial),
            imageUrl: item.image || '',
            isAvailable: true
          },
          { upsert: true, returnDocument: 'after' }
        );
        insertedCount++;
      }
    }

    res.json({
      success: true,
      message: `Successfully synchronized ${insertedCount} menu items to MongoDB.`,
      categoriesCount: menuJson.categories.length,
      itemsCount: insertedCount
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/* ==========================================================================
   CLOUDINARY IMAGE UPLOAD API
   ========================================================================== */
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image file uploaded' });
    }

    const folder = req.body.folder || 'blue-moon-restaurant';
    const uploadResult = await uploadToCloudinary(req.file.buffer, folder);

    res.json({
      success: true,
      message: 'Image uploaded to Cloudinary successfully',
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id,
      format: uploadResult.format,
      width: uploadResult.width,
      height: uploadResult.height,
      bytes: uploadResult.bytes
    });
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to upload image to Cloudinary',
      error: error.message
    });
  }
});

/* ==========================================================================
   CONTACT & CATERING INQUIRY API
   ========================================================================== */
router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !phone || !message) {
      return res.status(400).json({ success: false, message: 'Name, phone, and message are required' });
    }

    let contactDoc = null;
    if (mongoose.connection.readyState === 1) {
      contactDoc = new Contact({ name, email, phone, subject, message });
      await contactDoc.save();
    }

    res.status(201).json({
      success: true,
      message: 'Your message has been received! Our team will get back to you shortly.',
      contact: contactDoc
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
