const express = require('express')

const Router = express.Router()

const todos = []

/*
Todo: {
    id: 1,
    label: "label test",
    isDone: true
}
*/

Router.get('/', (request, response) => {
    response.status(200).json(todos)
})

Router.post('/', (req, res) => {
    const {todo} = req.body

    todos.push(todo)

    res.status(200).json(todo)
})

module.exports = Router