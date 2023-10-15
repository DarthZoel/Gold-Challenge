class ReviewControllers {
    static getAllReview(req, res) {
        try {
            console.log("sampe controller get review")
            res.status(200).json(`succes getting review`)
        } catch (error) {
            res.status(404).json(error)
        }

    }
    static createReview(req, res) {
        try {
            console.log(`sampe controller buat review post`)
            res.status(201).json(`succes making review`)
        } catch (error) {
            res.status(404).json(error)
        }

    }
    static editReview(req, res) {
        try {
            console.log(`sampe controller edit review put`)
            res.status(201).json(`succes edit review`)
        } catch (error) {
            res.status(404).json(error)
        }

    }
    static deleteReview(req, res) {
        try {
            console.log(`sampe controller delete review`)
            res.status(200).json(`succes delete review`)
        } catch (error) {
            res.status(404).json(error)
        }

    }
}

module.exports = ReviewControllers