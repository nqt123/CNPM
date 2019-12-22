const mongoose = require('mongoose')
const validator = require('validator')

const examSchema = new mongoose.Schema({
    title : String,
    category : [],
    section : String,
    tags : [],
    exercise : {
        type : mongoose.Types.ObjectId,
        ref : "Exercise"
    }
}, {timestamps : true})

const Exam = mongoose.model('Exam', examSchema)

module.exports = Exam