const mongoose = require('mongoose')
const validator = require('validator')

const commentSchema = new mongoose.Schema({
    exerciseId : {
        type : mongoose.Types.ObjectId,
        ref : "Exercise"
    },
    lessonId : {
        type : mongoose.Types.ObjectId,
        ref : "Lesson"
    },
    userId : {
        type: mongoose.Types.ObjectId,
        ref : "User"
    },
    rated : Number,
    content : String
}, {timestamps : true})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment