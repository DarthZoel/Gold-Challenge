const db = require("../models/db")

class ViewControllers {
    static async getLandingPage(req, res) {
        try {
            const user = req.session.user;
            //console.log(user.user.username)
            res.render("home", {user})
            res.status(200)
        } catch (error) {
            res.status(404).json(error)
        }

    }
    static async getBookingPage(req, res) {
        try {
            const user = req.session.user;
            const dbVenues = await db.select("*").from("fields")
            res.render("booking", {dbVenues, user})
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
    static async getContactUs(req, res) {
        try {
            const user = req.session.user
            res.render("contactUs", {user})
            res.status(200)
        } catch (error) {
            res.status(404).json(error)
        }

    }
}

module.exports = ViewControllers