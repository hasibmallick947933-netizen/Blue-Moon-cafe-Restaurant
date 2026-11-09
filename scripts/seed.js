require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const connectDB = require('../config/db');
const MenuItem = require('../models/MenuItem');

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function seedDatabase() {
  console.log('🔄 Connecting to MongoDB to seed all 171 authentic menu items...');
  const conn = await connectDB();
  if (!conn) {
    console.error('❌ Could not connect to MongoDB. Aborting seed.');
    process.exit(1);
  }

  const menuPath = path.join(__dirname, '..', 'menu.json');
  if (!fs.existsSync(menuPath)) {
    console.error('❌ menu.json not found at', menuPath);
    process.exit(1);
  }

  const menuData = JSON.parse(fs.readFileSync(menuPath, 'utf8'));
  console.log(`📋 Found ${menuData.categories.length} categories in menu.json`);

  // Clear existing items so no undefined/corrupted items remain
  await MenuItem.deleteMany({});
  console.log('🧹 Cleared existing items collection in MongoDB.');

  const itemsToInsert = [];
  const seenIds = new Set();

  for (const cat of menuData.categories) {
    const catName = cat.category;
    const catId = slugify(catName);

    for (const item of cat.items) {
      let itemId = `bm_${catId}_${slugify(item.name)}`;
      let counter = 1;
      while (seenIds.has(itemId)) {
        itemId = `bm_${catId}_${slugify(item.name)}_${counter++}`;
      }
      seenIds.add(itemId);

      const isVeg = Boolean(
        item.veg ||
        catId.includes('veg') ||
        item.name.toLowerCase().includes('veg ') ||
        item.name.toLowerCase().startsWith('veg') ||
        item.name.toLowerCase().includes('paneer') ||
        item.name.toLowerCase().includes('mushroom') ||
        item.name.toLowerCase().includes('baby corn') ||
        catId.includes('shake') ||
        catId.includes('mocktail') ||
        catId.includes('dessert') ||
        catId.includes('beverage')
      );

      itemsToInsert.push({
        itemId,
        category: catId,
        categoryName: catName,
        name: item.name,
        description: item.portion ? `Portion: ${item.portion}` : (item.desc || ''),
        price: Number(item.price) || 0,
        diet: isVeg ? 'veg' : 'non-veg',
        spicy: Boolean(item.spicy || item.name.toLowerCase().includes('chilli') || item.name.toLowerCase().includes('schezwan') || item.name.toLowerCase().includes('hot garlic')),
        isChefSpecial: Boolean(item.special || item.name.toLowerCase().includes('special') || item.name.toLowerCase().includes('blue moon')),
        imageUrl: item.image || '',
        isAvailable: true
      });
    }
  }

  const result = await MenuItem.insertMany(itemsToInsert);
  console.log(`✨ Successfully seeded ${result.length} authentic menu items into MongoDB!`);

  // Verify count
  const finalCount = await MenuItem.countDocuments();
  console.log(`📊 Verified count in database: ${finalCount} items`);

  await mongoose.disconnect();
  console.log('👋 Database connection closed successfully.');
  process.exit(0);
}

seedDatabase().catch(err => {
  console.error('Seed script error:', err);
  process.exit(1);
});
