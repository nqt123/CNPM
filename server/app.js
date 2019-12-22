const express = require('express')
require('./src/db/mongoose')


const userRouter = require('./src/routers/user')
const lessonRouter = require('./src/routers/lesson')
const examRouter = require('./src/routers/exam')
const excerciseRouter = require('./src/routers/exercise')
const recordRouter = require('./src/routers/record')
const commentRouter = require('./src/routers/comment')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }))
app.use(express.json({}))

app.use(userRouter)
app.use(lessonRouter)
app.use(examRouter)
app.use(excerciseRouter)
app.use(recordRouter)
app.use(commentRouter)


app.listen(PORT, () => {
    console.log("Server is Started")
})