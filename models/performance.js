const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  // Don't forget to add the comma above then
  // add the 3 new properties below
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});
const performanceSchema = new Schema({
  title: { 
    type: String, 
    required: true
    
   },
   performanceDate:
   {
    type: String,
    enum: ['09-21-2024', '03-14-2023', '12-10-2023', '8-10-2024','12-23-2024'],
    required: true
  },
  soloist: {
    type: String,
    enum: ['Maxim Vengerov', 'Hilary Hahn', 'Isaac Perlman', 'Gil Shaham','Pinchas Zukerman'],
    required: true
  },
  concertHall:{

    type: String,
    enum: ['Walt Disney Concert Hall', 'Hollywood Bowl', 'The Roxy', 'El Rey Theatre','Greek Theatre'],
    required: true
  },
  nowShowing: { type: Boolean, default: true },
  reviews: [reviewSchema]
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Performance', performanceSchema);
