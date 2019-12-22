const mongoose = require('mongoose')
const validator = require('validator')

const recordSchema = new mongoose.Schema({
    user : {
        type : mongoose.Types.ObjectId,
        ref : "User"
    },
    examId : {
        type : mongoose.Types.ObjectId,
        ref : "Exam"
    },
    point : Number
}, {timestamps : true})

const Record = mongoose.model('Record', recordSchema)

module.exports = Record