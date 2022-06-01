const express = require('express')
// let bodyParser = require('body-parser')

const todoRouter = require('./routes/todo')

const app = express()

app.use(express.json())
/*app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))*/

app.get('/', function (request, response) {
    response.status(200).send('It works !')
})

app.use('/todos', todoRouter)

const PORT = 4500

app.listen(PORT, function() {
    console.log(`Server is listening on http://localhost:${PORT}`)
})