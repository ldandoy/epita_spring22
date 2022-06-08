const express = require('express')
const messageModel = require('../models/messageModel')

const Router = express.Router()

Router.get('/', async (req, res) => {
    messages = await messageModel.find({})
    return res.status(200).json(messages)
})

Router.post('/', async (req, res) => {
    const {message} = req.body

    const messageObj = new messageModel(message)
    await messageObj.save()
    return res.status(200).json(messageObj)
})

module.exports = Router