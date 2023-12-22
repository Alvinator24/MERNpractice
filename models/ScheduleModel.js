const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    courseCode: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    hall: {
        type: String,
        required: true
    },
    classroom: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    days: {
        type: String,
        required: true
    },
    professor: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Schedule", scheduleSchema);