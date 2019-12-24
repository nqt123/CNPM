const express = require('express')

const router = express.Router()
const Record = require('../models/record')

router.get('/records', async (req, res) => {
    try {
        const records = await Record.find({})
        res.status(200).send(records)
    } catch (error) {
        res.status(400).send({ error })
    }
})
router.get('/records/:id', async (req, res) => {
    try {
        const record = await Record.findById(req.params.id)
        if (!record) {
            return res.status(404).send({ error: "" })
        }
        res.status(200).send(record)
    } catch (error) {
        res.status(400).send({ error: "Internal Error" })
    }
})
router.post('/records', async (req, res) => {
    const record = new Record(req.body)
    try {
        await record.save()
        res.status(201).send(record)
    } catch (error) {
        res.status(400).send({ error })
    }
})

router.patch('/records/:id', async (req, res) => {
    const record = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!record) {
        return res.status(404).send({ error: "Record Not Found" })
    }
    return res.status(200).send(record)
})
router.delete('/records/:id', async (req, res) => {
    try {
        const record = await Record.findByIdAndRemove(req.params.id)
        res.status(200).send(record)
    } catch (error) {
        res.status(400).send({ error: "Internal Error" })
    }
})
module.exports = router