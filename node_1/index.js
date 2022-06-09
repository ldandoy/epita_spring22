const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

try {
    mongoose.connect('mongodb://127.0.0.1:27018/epita', {
        authSource: "admin",
        user: "root",
        pass: "example",
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Connect to DB !')
} catch (error) {
    console.log("Error DB connection: ", error)
}

const todoRouter = require('./routes/todoRoute')
const messageRouter = require('./routes/messageRoute')
const authRouter = require('./routes/authRoute')

const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.get('/', function (request, response) {
    return response.status(200).send('It works !')
})

app.post('/test', (request, response) => {
    const {name} = request.body

    if (!name && name == "") {
        return response.status(500).json('You have to give a name')
    }

    return response.status(200).json(`My name is ${name}`)
})

app.get('/test', (request, response) => {
    return response.status(200).json('It works on /test !')
})

app.use('/todos', todoRouter)
app.use('/messages', messageRouter)
app.use('/', authRouter)

const PORT = 4500
app.listen(PORT, () => {
    console.log('Server running on http://127.0.0.1:' + PORT)
})