const mongoose = require('mongoose');

// Define the Batch schema
const batchSchema = new mongoose.Schema({
  batch_id: {
    type: String,
    required: true,
    unique: true,
  },
  batch_name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // teacher_Id: { 
  //   type:String,
  // },

  userId: { 
    type:String,
  },

  // student_id: [{
  //   type: String,
  // }],
   student_userId: [{
    type: String,
  }],
  lastdate: {
    type: Date,
  },
  classTime: {
    type: String,
  },
  duration: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
  syllabus: {
    type: String,
  },
  chapter: {
    type: String,
  },
  liveChat: {
    type: Boolean,
    default: true,
  },
  offlineChat: {
    type: Boolean,
    default: false,
  },
});

// Create the Batch model
const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch;
