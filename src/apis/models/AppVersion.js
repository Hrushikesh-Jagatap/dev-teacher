const mongoose = require('mongoose');
const appVersionSchema = new mongoose.Schema({
    teacher: {
        ios: {
            min: String,
            max: String,
            updateUrl: String,
        },
        android: {
            min: String,
            max: String,
            updateUrl: String,
        },
    },
    student: {
        ios: {
            min: String,
            max: String,
            updateUrl: String,
        },
        android: {
            min: String,
            max: String,
            updateUrl: String,
        },
    },
});
const AppVersion = mongoose.model('AppVersion', appVersionSchema);
module.exports = AppVersion;
