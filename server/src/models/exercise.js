const mongoose = require('mongoose')
const validator = require('validator')

const exerciseSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    category: [],
    type: String,
    title: {
        type: String,
        minlength: 5
    },
    content: {
        type: String,
        minlength: 10
    },
    note: {
        type: String
    },
    comment: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    questions: {
        type: mongoose.Types.ObjectId,
        ref: 'Question'
    },
    viewNumber: Number,
    source: String,
    tags: [],
    section: [],
    downloaded: Number,
    rated: Number,
}, { timestamps: true })

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise