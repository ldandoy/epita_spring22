const express = require('express')
const { v4: uuidv4 } = require('uuid')

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
    return response.status(200).json(todos)
})

Router.post('/', (req, res) => {
    const {todo} = req.body

    todo.id = uuidv4()

    todos.push(todo)

    return res.status(200).json(todo)
})

Router.put('/:index', (req, res) => {
    const {index} = req.params // from the route
    // const {test} = req.query // For params from url ?test=toto
    
    const {isDone, label} = req.body // from the body
    
    if (typeof todos[index] != 'undefined') {
        if (typeof isDone != 'undefined') {
            todos[index].isDone = isDone
        }
        if (typeof label != 'undefined') {
            todos[index].label = label
        }
    } else {
        return res.status(500).json({"msg": "Todo not found !"})
    }

    return res.status(200).json(todos[index])
})

Router.delete('/:index', (req, res) => {
    const {index} = req.params

    if (typeof todos[index] != 'undefined') {
        todos.splice(index, 1)
        return res.status(200).json({"msg": "Todo well deleted !"})
    } else {
        return res.status(500).json({"msg": "Todo not found !"})
    }
})

module.exports = Router