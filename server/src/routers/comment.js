const express = require('express')

const router = express.Router()
const Comment = require('../models/comment')

router.get('/comments', async (req, res) => {
    try {
        const comments = await Comment.find({})
        res.status(200).send(comments)
    } catch (error) {
        res.status(400).send({ error })
    }
})
router.get('/comments/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id)
        if (!comment) {
            return res.status(404).send({ error: "" })
        }
        res.status(200).send(comment)
    } catch (error) {
        res.status(400).send({ error: "Internal Error" })
    }
})
router.post('/comments', async (req, res) => {
    const comment = new Comment(req.body)
    try {
        await comment.save()
        res.status(201).send(comment)
    } catch (error) {
        res.status(400).send({ error })
    }
})

router.patch('/comments/:id', async (req, res) => {
    // const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    const comment = await Comment.findById(req.params.id)
    if (!comment) {
        return res.status(404).send({ error: "Comment Not Found" })
    }
    const updates = Object.keys(req.body)

    updates.forEach(update => comment[update] = req.body[update])

    await comment.save()

    return res.status(200).send(comment)
})
router.delete('/comments/:id', async (req, res) => {
    try {
        const comment = await Comment.findByIdAndRemove(req.params.id)
        res.status(200).send(comment)
    } catch (error) {
        res.status(400).send({ error: "Internal Error" })
    }
})
module.exports = router