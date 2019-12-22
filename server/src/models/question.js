const mongoose = require('mongoose')
const validator = require('validator')

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    exerciseId: [{
        type: mongoose.Types.ObjectId,
        ref: "Exercise"
    }],
    lessonId: [{
        type: mongoose.Types.ObjectId,
        ref: "Lesson"
    }],
    examId: [{
        type: mongoose.Types.ObjectId,
        ref: "Exam"
    }],
    answers: [{
        number: Number,
        content: String
    }],
    correctAnswer: Number
}, { timestamps: true })

const Question = mongoose.model('Question', questionSchema)

module.exports = Question