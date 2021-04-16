const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/postgrad', { useNewUrlParser: true})

const usersController = require('./controllers/userscont')
app.use('/users', usersController)

app.get('/', (req, res)=> {
    res.send('hello')
})

app.listen(3003)