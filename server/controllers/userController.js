const db = require("../models/db")

class UserController {
    static async getUser(req, res) {
        try {
            const dbUser = await db.select("*").from("users")
            res.status(200).send(dbUser)
        } catch (error) {
            res.status(404).json(error)
        }

    }
    static async getUserById(req, res) {
        const user_id = req.params.id.slice(1)
        try {
            const dbUser = await db.select("*").from("users").where({user_id})
            if(dbUser.length == 0){
                return res.status(401).send('user not found');
            }
            res.status(200).send(dbUser)
        } catch (error) {
            res.status(404).json(error)
        }

    }
    static async loginUser(req, res) {
        const { username, password } = req.body;
        try {
            const user = await db('users').where({ username, password }).first();
            if (!user) {
                return res.status(401).send('Invalid username or password');
            }
            req.session.user = {user};
            res.status(302).redirect('/api/home');
            
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error during login');
        }

    }
    static async createUser(req, res) {
        const { username, email, password } = req.body
        const userData = {
            username,
            email,
            password,
        }
        try {
            const userExists = await db('users').where({ email }).orWhere({ username }).first();
            if (userExists) {
                return res.status(400).send('User already exists');
            }
            await db("users").insert(userData)
            //console.log("sampe usercontroller, createUser post")
            res.status(201).json("user created")
        } catch (error) {
            res.status(500).json(error)
        }

    }
    static async deleteUser(req, res) {
        const { username } = req.body
        const userData = {
            username,
        }
        try {
            await db("users").where(userData).del()
            res.status(200).json("user deleted")
        } catch (error) {
            res.status(404).json(error)
        }

    }
    static async logout(req, res) {
        try {
            req.session.destroy((err) => {
                if (err) {
                  console.error(err);
                  res.send('Error during logout.');
                } else {
                    res.status(302).redirect('/api/login');
                }
              });
              
        } catch (error) {
            res.status(404).json(error)
        }
    }
}

module.exports = UserController