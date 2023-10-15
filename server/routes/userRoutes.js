const express = require('express')
const { createUser, getUser } = require('../controllers/userController')
const routes = express.Router()

routes.get('/user', getUser)
routes.post('/user', createUser)


module.exports = routes