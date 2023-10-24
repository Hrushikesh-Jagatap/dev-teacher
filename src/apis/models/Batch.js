const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
  userId: {
    type: String, // The user ID of the teacher, which comes from the frontend
  },

  batch_id: {
    type: String, // This should be generated on the backend, not provided by the frontend
    // unique: true, // Ensure batch IDs are unique
  },

  student_userId: [{
    type: String, // Array of student user IDs, which come from the frontend
    default: null, // Default value is set to null
  }],

  batch_name: {
    type: String, // The name of the batch, provided by the frontend
  },

  className: {
    type: String, // Class name from the frontend

  },

  Subject: {
    type: String, // Subject from the frontend
  },

  Language: {
    type: String, // Language from the frontend
  },

  BatchStartDate: {
    type: Date, // Start date of the batch, provided by the frontend
  },

  BatchEndDate: {
    type: Date, // End date of the batch, provided by the frontend
  },

  classDuration: {
    type: String, // Duration from the frontend
  },

  classTime: {
    type: String, // Class time from the frontend
  },

  numberOfChapters: {
    type: Number, // Number of chapters, provided by the frontend
  },

  chapters: {
    type: [String], // Array of strings
    default: [],   // Default value is an empty array
  },

  // Array of chapter names, provided by the frontend

  assignments: [{
    Id: {
      type: String, // Assignment ID from the frontend
      // required: true, // You can add this constraint if required
    },

    name: {
      type: String, // Assignment name from the frontend
      // required: true, // You can add this constraint if required
    },
  }],


  exams: [{
    Id: {
      type: String, // Exam ID from the frontend
      // required: true, // You can add this constraint if required
    },
    name: {
      type: String, // Exam name from the frontend
      // required: true, // You can add this constraint if required
    },
  }],

});

const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch;
