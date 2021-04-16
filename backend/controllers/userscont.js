const express = require('express')
const USERS = express.Router()
const User = require('../models/usersmod')
const bcrypt = require('bcrypt')

USERS.post('/', (req, res)=> {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (err, createdUser) => {
        if (err) {
            res.status(400).json({error : err.message})
        }
        res.status(200).send(createdUser)
    })
})

// curl -d '{"username": "test2", "password":"test2"}' -H "Content-Type: application/json" -X POST http://localhost:3003/users

module.exports = USERS;