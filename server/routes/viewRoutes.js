const express = require('express')
const routes = express.Router()
const ViewControllers = require('../controllers/viewController')

routes.get('/home', ViewControllers.getLandingPage)
routes.get('/booking', ViewControllers.getBookingPage)
routes.get('/signup', ViewControllers.getSignUpPage)
routes.get('/login', ViewControllers.getLoginPage)


module.exports = routes