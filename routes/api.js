const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/qwerty1234qwerty1234',userController.getUser)

router.post('/blackWin',userController.blackWin)

router.post('/whiteWin',userController.whiteWin)

router.post('/draw',userController.draw)
router.post('/reset',userController.reset)

module.exports = router