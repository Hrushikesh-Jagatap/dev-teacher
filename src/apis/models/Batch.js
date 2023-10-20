const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({

  userId: {
    type: String,
    ref: 'Teacher',
  },

  batch_id: {
    type: String,
    unique: true
  },

  // student_id: [{
  //   type: String,
  // }],
   student_userId: [{
    type: String,
    default: null
  }],

  batch_name: {
    type: String,
    required: true
  },

  className: {
    type: String,
    required: true,
  },

  Subject: {
    type: String,
    required: true,
  },

  Language: {
    type: String,
    required: true,
  },

  BatchStartDate: {
    type: Date,
    required: true,
  },

  BatchEndDate: {
    type: Date,
    required: true,
  },

  classDuration: {
    type: String,
    required: true,
  },

  classTime: {
    type: String,
    required: true,
  },

  numberOfChapters: {
    type: Number,
    required: true,
  },

  chapters: [
    {
      Id: {
        type: String,
        deafult:null,
        unique: true
      },
      name: {
        type: String,
        required: true,
      },

      status: {
        type: Boolean,
        default: false
      },
    },
  ],

  assignments: [
    {
      Id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
  exams: [
    {
      Id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
});

const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch;
