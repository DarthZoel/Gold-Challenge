class UserController {
    static getUser(req, res) {
        try {
            console.log("sampe usercontroller, get user")
            res.status(200).json(`succes get user`)
        } catch (error) {
            res.status(404).json(error)
        }

    }
    static createUser(req, res) {
        try {
            console.log("sampe usercontroller, createUser post")
            res.status(201).json(`succes create user`)
        } catch (error) {
            res.status(404).json(error)
        }

    }
}

module.exports = UserController