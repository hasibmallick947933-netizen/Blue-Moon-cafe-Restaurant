require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Mount API routes
app.use('/api', apiRoutes);

// Serve Static Frontend Assets
app.use(express.static(path.join(__dirname), {
  maxAge: process.env.NODE_ENV === 'production' ? '1d' : '0',
  etag: true
}));

// Route root and HTML requests
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Dedicated Admin Panel Route for Reservation Management
app.get(['/admin', '/admin.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Fallback for non-API GET requests (SPA & direct page reloads)
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    return res.sendFile(path.join(__dirname, 'index.html'));
  }
  next();
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'production' ? undefined : err.message
  });
});

// Start Server if run directly (Render, local development)
if (require.main === module) {
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`
╔══════════════════════════════════════════════════════════════════╗
║   🌙 BLUE MOON CAFE & RESTAURANT - BACKEND SERVER ONLINE         ║
╠══════════════════════════════════════════════════════════════════╣
║   • Local URL:      http://localhost:${PORT}                       ║
║   • Health Check:   http://localhost:${PORT}/api/health            ║
║   • Menu API:       http://localhost:${PORT}/api/menu              ║
║   • Reservations:   http://localhost:${PORT}/api/reservations      ║
║   • Cloudinary:     ${process.env.CLOUDINARY_CLOUD_NAME || 'ppcahncd'}                             ║
║   • Environment:    ${process.env.NODE_ENV || 'development'}                           ║
╚══════════════════════════════════════════════════════════════════╝
      `);
    });
  });
}

// Export for Vercel Serverless
module.exports = app;
