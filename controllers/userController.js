const {comparePassword} = require('../helpers/bcrypt');
const {generateToken} = require('../helpers/jwt');
const {user} = require('../models');

class UserController {
    static async register(req,res) {
        try {
            let {email, password, username} = req.body;
            let query = await user.create({
                email,
                password,
                username,
            });
            
            let response = {
                id: query.id,
                username: query.username,
                email: query.email,
            };

            res.status(201).json(response);
        } catch(err) {
            res.status(500).json(err);
        }
    }

    static async login(req, res) {
        try {
            let {email, password} = req.body;
            let myUser = await user.findOne({
                where: {
                    email,
                }
            });

            if(!myUser) {
                throw {
                    name: 'User Login Error',
                    message: `User with email ${email} not found!`,
                };
            }
            let isCorrect = comparePassword(password, myUser.password);

            if(!isCorrect) {
                throw {
                    name: 'User Login Error',
                    message: `User password with email ${email}  doesn't match!`,
                };
            }

            let payload = {
                id: myUser.id,
                email: myUser.email
            };

            let token = generateToken(payload);

            return res.status(200).json({token});

        }catch(err) {
            return res.status(401).json(err);
        }
    }
}

module.exports = UserController;