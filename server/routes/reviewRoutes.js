const express = require('express')
const { getAllReview, editReview, createReview, deleteReview, getAllReviewByFieldId } = require('../controllers/reviewController')
const routes = express.Router()

routes.get('/review', getAllReview)
routes.get('/review/:id', getAllReviewByFieldId)
routes.post('/review', createReview)
routes.put('/review/:id', editReview)
routes.delete('/review/:id', deleteReview)

module.exports = routes