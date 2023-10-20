const mongoose = require('mongoose');
const chapterSchema = new mongoose.Schema({
    chapter_id: {
        type: String,
        unique: true,
        default: null
    },
    userId: {
        type: String,
        ref: 'Teacher',
        default: null
    },
    batch_id: {
        type: String,
        ref: 'Batch',
        required: true,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    resources: [
        {
            type: String,
            default: null    // You can specify the appropriate type for resources, e.g., URL or file path
        },
    ],
    status: {
        type: Boolean,
        default: false
    },
    session: [{
        Id: {
            type: String,
            ref: 'Session',
            default: null
        },
        name: {
            type: String,
            ref: 'Session',
            default: null
        }
    }]
});
const Chapter = mongoose.model('Chapter', chapterSchema);
module.exports = Chapter;
