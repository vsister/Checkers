const mongoose = require('mongoose')
const connection = require('../config/db')

const userSchema = mongoose.Schema({
    Token: String,
    FirstName: String,
    LastName: String,
    Total: Number,
    White: Number,
    Black: Number,
    Draw: Number
})

const User = connection.model('User', userSchema)

module.exports = User