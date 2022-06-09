const express = require('express')
const bcrypt = require('bcrypt')

const userModel = require('../models/userModel')

const Router = express.Router()

Router.post('/register', async(req, res) => {
    const {email, password, username} = req.body

    if ( (email && email !== "") && (password && password !== "" && password.length >= 6)) {
        const hash = bcrypt.hashSync(password, 10)
        
        try {
            const User = new userModel({
                email: email,
                username,
                password: hash,
                active: 1
            })

            const user = await User.save()
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({'msg': error.message})
        }
    } else {
        res.status(500).json({"msg": "Email and password are required, and password should be at least 6 caracters !"})
    }
})

/*
 * Params: Email and Password
 * Check if information are good (use bcrypt)
 * if it's good send back the user
 * try to add session to express
 */
Router.post('/login', async (req, res) => {
    const {email, password} = req.body

    if ( (email && email !== "") && (password && password !== "")) {
        const user = await userModel.findOne({'email': email})
        console.log(user)
    } else {
        res.status(500).json({"msg": "Email and password are required !"})
    }
})

module.exports = Router