const db = require("../models/db")

class ReviewControllers {
    static async getAllReview(req, res) {
        try {
            const dataReview = await db.select("*").from("reviews")
            res.status(200).json(dataReview)
        } catch (error) {
            res.status(404).json(error)
        }

    }
    static async getAllReviewByFieldId(req, res) {
        const field_id = req.params.id.slice(1)
        try {
            const result = await db.select("*").from("reviews").where({field_id})
            res.status(200).json(result)
        } catch (error) {
            res.status(404).json(error)
        }

    }
    static async createReview(req, res) {
        const { user_id, field_id, review_text, rating } = req.body;
        let data = {
            user_id,
            field_id,
            review_text,
            rating
        }
        try {
            await db('reviews').insert(data);
            res.send('Review created successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error creating review');
        }
    }
    static async editReview(req, res) {
        const reviewId = req.params.id.slice(1);
        const { reviewText } = req.body;
        try {
          const result = await db('reviews').where({ review_id: reviewId }).update({ review_text: reviewText });
          if (result === 0) {
            return res.status(404).send('Review not found');
          }
          return res.send('Review updated successfully');
        } catch (error) {
          console.error(error);
          return res.status(500).send('Error editing review');
        }

    }
    static async deleteReview(req, res) {
        const review_id = req.params.id.slice(1)
        try {
            const result = await db("reviews").where({review_id}).del()
            if(!result){
                return res.status(404).send("review not found")
            }
            res.status(200).json(`success delete review`)
        } catch (error) {
            res.status(404).json(error)
        }

    }
}

module.exports = ReviewControllers