const db = require("../models/db")


class VenuesControllers {
    static async getAllVenue(req, res) {
        try {
            const dbVenues = await db.select("*").from("fields")
            res.status(200).json(dbVenues)
        } catch (error) {
            res.status(404).json(error)
        }

    }
    static async getVenueById(req, res) {
        const field_id = req.params.id.slice(1)
        try {
            const venue = await db('fields').where({ field_id }).first();
            if (!venue) {
                return res.status(404).send('field not found');
            }
            console.log(venue)
            res.render("fieldBook", {venue})
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error retrieving field');
        }

    }
    static async bookVenue(req, res) {
        const { user_id, field_id, start_time, total_price } = req.body;
        const newBooking = {
            user_id,
            field_id,
            start_time,
            total_price
        };
        try {
            const existingBooking = await db('bookings').where({ start_time }).andWhere({field_id}).first();
            if (existingBooking) {
                return res.status(409).send('field already booked for this time');
            }
            await db("bookings").insert(newBooking)
            res.status(201).json(`field booked succesfully`)
        } catch (error) {
            res.status(404).json(error)
        }

    }
    static async cancelBookVenue(req, res) {
        const booking_id = req.params.id.slice(1);
        const data = {
            booking_id
        };
        try {
            const existingBooking = await db('bookings').where(data).first();
            if (!existingBooking) {
                return res.status(404).send('Booking not found');
            }
            await db('bookings').where(data).del();
            return res.send('Venue booking canceled successfully');
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error canceling venue booking');
        }

    }
}

module.exports = VenuesControllers