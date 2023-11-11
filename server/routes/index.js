const express = require('express')
const routes = express.Router()
const venuesRoutes = require("./venuesRoutes")
const reviewRoutes = require("./reviewRoutes")
const userRoutes = require('./userRoutes')
const viewRoutes = require('./viewRoutes')

routes.use("/", viewRoutes)
routes.use("/", venuesRoutes)
routes.use("/", reviewRoutes)
routes.use("/", userRoutes)


module.exports = routes
