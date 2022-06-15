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
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json({'msg': error.message})
        }
    } else {
        return res.status(500).json({"msg": "Email and password are required, and password should be at least 6 caracters !"})
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
        try {
            const user = await userModel.findOne({'email': email})

            if (!user) {
                return res.status(500).json({'msg': 'User not found !'})
            }

            if (!user.active) {
                return res.status(500).json({'msg': 'User not active !'})
            }
        
            if (!bcrypt.compareSync(password, user.password)) {
                return res.status(500).json({'msg': "Email or Password don't match !"})
            }

            req.session.user = {
                "_id": user._id
            }

            return res.status(200).json({'msg': 'User identified !'})
        } catch (error) {
            return res.status(500).json({'msg': error.message})
        }
    } else {
        return res.status(500).json({"msg": "Email and password are required !"})
    }
})

Router.get('/me', async (req, res) => {
    if (req.session.user) {

        const user = await userModel.findById(req.session.user._id, {
            'password': 0
        })

        if (!user) {
            return res.status(500).json({"msg": "You are not authenticated !"})
        }

        if (!user.active) {
            return res.status(500).json({'msg': 'User not active !'})
        }

        return res.status(200).json(user)
    }

    return res.status(500).json({"msg": "You are not authenticated !"})
})

module.exports = Router