const express = require('express')
const routes = express.Router()
const VenuesControllers = require('../controllers/venuesController')

routes.get('/all-venues', VenuesControllers.getAllVenue)
routes.get('/all-venues/:id', VenuesControllers.getVenueById)
routes.post('/book-venue', VenuesControllers.bookVenue)
routes.post('/cancelBookfield/:id', VenuesControllers.cancelBookVenue)

module.exports = routes