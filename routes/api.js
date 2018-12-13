const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/qwerty',userController.changeTotal)

module.exports = router