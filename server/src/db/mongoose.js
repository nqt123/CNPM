const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nqt123:Nqt123abc123@cluster0-0inms.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify : false
})

