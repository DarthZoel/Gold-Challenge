const express = require('express')
const { getAllReview, editReview, createReview, deleteReview } = require('../controllers/reviewcontroller')
const routes = express.Router()

routes.get('/review', getAllReview)
routes.post('/review', createReview)
routes.put('/review', editReview)
routes.delete('/review', deleteReview)

module.exports = routes