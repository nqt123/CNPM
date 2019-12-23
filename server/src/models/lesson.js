const mongoose = require('mongoose')
const validator = require('validator')

const lessonSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    updatedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    exercise: [],
    teachedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    rated: {
        type: Number,
        default: 0
    },
    viewNumber: {
        type: Number,
        default: 0
    },
    downloaded: {
        type: Number,
        default: 0
    },
    downloadAble : {
        type : Boolean,
        default : true
    },
    order : Number,
    category: [],
    relatedQuestion: [],
    attachedFiles: [],
    attachedVideos: [],
    attachedAudio: [],
    section: {
        order : Number,
        title : String,
    },
    tag: [],
    title: {
        type: String,
        minlength: 5
    },
    content: {
        type: String,
        minlength: 10
    },
    comment: []
}, { timestamps: true })

const Lesson = mongoose.model('Lesson', lessonSchema)
module.exports = Lesson