const { string } = require('joi');
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({

    session_id: {
        type: String,
    },

    userId: {
        type: String,
    },

    batch_id: {
        type: String,
    },

    chapter_id: {
        type: String,
        default: null
    },


    sessionName: {
        type: String,
        default: null
    },

    sessionDate: {
        type: Date,
        default: null
    },

    description: {
        type: String,
        default: null

    },

    mettingUrl: {
        type:String,
        default:'myeduc.ddns.net'
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

