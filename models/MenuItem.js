const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema(
  {
    itemId: {
      type: String,
      required: true,
      unique: true
    },
    category: {
      type: String,
      required: true,
      trim: true
    },
    categoryName: {
      type: String,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true,
      default: ''
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    diet: {
      type: String,
      enum: ['veg', 'non-veg', 'egg'],
      default: 'non-veg'
    },
    spicy: {
      type: Boolean,
      default: false
    },
    isChefSpecial: {
      type: Boolean,
      default: false
    },
    imageUrl: {
      type: String,
      default: ''
    },
    isAvailable: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.models.MenuItem || mongoose.model('MenuItem', menuItemSchema);
