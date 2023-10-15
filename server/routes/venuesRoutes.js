const express = require('express')
const routes = express.Router()
const VenuesControllers = require('../controllers/venuesController')

routes.get('/all-venues', VenuesControllers.getAllVenue)
routes.post('/book-venue', VenuesControllers.bookVenue)

module.exports = routes