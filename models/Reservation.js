const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Guest name is required'],
      trim: true
    },
    phone: {
      type: String,
      required: [true, 'Phone/WhatsApp number is required'],
      trim: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true
    },
    guests: {
      type: Number,
      required: true,
      min: [1, 'Minimum 1 guest'],
      max: [50, 'For groups larger than 50, please call our banquet desk'],
      default: 2
    },
    date: {
      type: String,
      required: [true, 'Reservation date is required']
    },
    timeSlot: {
      type: String,
      required: [true, 'Time slot is required']
    },
    diningArea: {
      type: String,
      enum: ['Main Dining Hall', 'Outdoor Garden Courtyard', 'Romantic Moonlit Canopy', 'Private Dining Lounge'],
      default: 'Main Dining Hall'
    },
    specialRequests: {
      type: String,
      trim: true,
      default: ''
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending'
    },
    confirmationCode: {
      type: String,
      unique: true,
      default: () => `BM-${Math.floor(1000 + Math.random() * 9000)}`
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.models.Reservation || mongoose.model('Reservation', reservationSchema);
