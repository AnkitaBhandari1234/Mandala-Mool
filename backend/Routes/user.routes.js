const express = require('express')
const userController = require('../Controllers/user.controller')
const route = express.Router()

route.post('/post',userController.postUser )
route.get('/get',userController.getUser)

module.exports = route