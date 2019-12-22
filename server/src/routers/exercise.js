const express = require('express')

const router = express.Router()
const Exercise = require('../models/exercise')

router.get('/exercises', async (req, res) => {
    try {
        const exercises = await Exercise.find({})
        res.status(200).send(exercises)
    } catch (error) {
        res.status(400).send({ error })
    }
})
router.get('/exercises/:id', async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id)
        if (!exercise) {
            return res.status(404).send({ error: "" })
        }
        res.status(200).send(exercise)
    } catch (error) {
        res.status(400).send({ error: "Internal Error" })
    }
})
router.post('/exercises', async (req, res) => {
    const exercise = new Exercise(req.body)
    try {
        await exercise.save()
        res.status(201).send(exercise)
    } catch (error) {
        res.status(400).send({ error })
    }
})

router.patch('/exercises/:id', async (req, res) => {
    const exercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!exercise) {
        return res.status(404).send({ error: "User Not Found" })
    }
    return res.status(200).send(exercise)
})
router.delete('/exercises/:id', async (req, res) => {
    try {
        const exercise = await Exercise.findByIdAndRemove(req.params.id)
        res.status(200).send(exercise)
    } catch (error) {
        res.status(400).send({ error: "Internal Error" })
    }
})
module.exports = router