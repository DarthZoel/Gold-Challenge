const db = require("../models/db")

class ViewControllers {
    static async getLandingPage(req, res) {
        try {
            res.render("home")
            res.status(200)
        } catch (error) {
            res.status(404).json(error)
        }

    }
    static async getBookingPage(req, res) {
        try {
            const dbVenues = await db.select("*").from("fields")
            //console.log(dbVenues[0].field_name)
            res.render("booking", {dbVenues})
            res.status(200)
        } catch (error) {
            res.status(404).json(error)
        }

    }
    static async getSignUpPage(req, res) {
        try {
            res.render("signup")
            res.status(200)
        } catch (error) {
            res.status(404).json(error)
        }

    }
    static async getLoginPage(req, res) {
        try {
            res.render("login")
            res.status(200)
        } catch (error) {
            res.status(404).json(error)
        }

    }
}

module.exports = ViewControllers