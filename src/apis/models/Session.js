const { string } = require('joi');
const mongoose = require('mongoose');
const sessionSchema = new mongoose.Schema({
    session_id: {
        type: String,
        required: true,
        uniqued: true
    },
    userId: {
        type: String,
        ref: 'Teacher',
        required: true
    },
    batch_id: {
        type: String,
        ref: 'Batch',
        required: true
    },
    chapter_id: {
        type: String,
        ref: 'Chapter',
        default: null
    },
    sessionName: {
        type: String,
        required: true,
        default: null
    },
    sessionDate: {
        type: Date,
        required: true,
        default: null
    },
    description: {
        type: String,
        required: true,
        default: null
    },
    mettingUrl: {
        type:String,
        default:null
    },
    ThumbNail: {
        type: String, 
        deafult:null
    },
    resources: [
        {
            type: String, // You can specify the appropriate type for resources, e.g., URL or file path
        },
    ],
    status: {
        type: Boolean,
        default: false
    }
});
const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;
