const mongoose = require('mongoose');

let cachedConnection = null;

async function connectDB() {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('⚠️ MONGODB_URI not set. Database operations will be mocked or skipped.');
    return null;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      bufferCommands: false
    });
    cachedConnection = conn;
    console.log(`✅ MongoDB Connected successfully to database: "${conn.connection.name}"`);
    return conn;
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    // Don't crash serverless or dev server; return null
    return null;
  }
}

module.exports = connectDB;
