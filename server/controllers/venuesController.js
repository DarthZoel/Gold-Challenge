const dbVenues = require('../models/dbVenues.json')

class VenuesControllers {
    static getAllVenue(req, res) {
        try {
            console.log("sampe controller venue get")
            console.log(dbVenues)
            res.status(200).json(dbVenues)
        } catch (error) {
            res.status(404).json(error)
        }

    }
    static bookVenue(req, res) {
        try {
            const { nama } = req.body
            console.log(`sampe controller book venue post`)
            res.status(201).json(`makasih udah booking ya ${nama}`)
        } catch (error) {
            res.status(404).json(error)
        }

    }
}

module.exports = VenuesControllers