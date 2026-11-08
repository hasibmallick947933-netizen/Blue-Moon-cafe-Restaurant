require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const connectDB = require('../config/db');
const MenuItem = require('../models/MenuItem');

async function seedDatabase() {
  console.log('🔄 Connecting to MongoDB to seed menu items...');
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

  let count = 0;
  for (const cat of menuData.categories) {
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
      count++;
    }
  }

  console.log(`✨ Successfully seeded/updated ${count} menu items in MongoDB!`);
  await mongoose.disconnect();
  console.log('👋 Database connection closed.');
  process.exit(0);
}

seedDatabase().catch(err => {
  console.error('Seed script error:', err);
  process.exit(1);
});
