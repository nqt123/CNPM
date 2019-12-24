const express = require('express')

const router = express.Router()
const Exam = require('../models/exam')

router.get('/exams', async (req, res) => {
    try {
        const exams = await Exam.find({})
        res.status(200).send(exams)
    } catch (error) {
        res.status(400).send({ error })
    }
})
router.get('/exams/:id', async (req, res) => {
    try {
        const exam = await Exam.findById(req.params.id)
        if (!exam) {
            return res.status(404).send({ error: "" })
        }
        res.status(200).send(exam)
    } catch (error) {
        res.status(400).send({ error: "Internal Error" })
    }
})
router.post('/exams', async (req, res) => {
    const exam = new Exam(req.body)
    try {
        await exam.save()
        res.status(201).send(exam)
    } catch (error) {
        res.status(400).send({ error })
    }
})

router.patch('/exams/:id', async (req, res) => {
    const exam = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!exam) {
        return res.status(404).send({ error: "Exam Not Found" })
    }
    return res.status(200).send(exam)
})
router.delete('/exams/:id', async (req, res) => {
    try {
        const exam = await Exam.findByIdAndRemove(req.params.id)
        res.status(200).send(exam)
    } catch (error) {
        res.status(400).send({ error: "Internal Error" })
    }
})
module.exports = router