const express = require('express')
const { createUser, getUser, deleteUser, loginUser, getUserById } = require('../controllers/userController')
const routes = express.Router()

routes.get('/user', getUser)
routes.get('/user/:id', getUserById)
routes.post('/signup', createUser)
routes.post('/login', loginUser)
routes.delete('/user', deleteUser)


module.exports = routes