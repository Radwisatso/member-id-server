const { User } = require('../models')

class UserController {
    
    static async login(req, res) {
        console.log(req.body.email)
        try {
            const result = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (!result) return res.status(404).json('Email Address is not exists')
            const updateStatus = await User.update({
                is_logged_in: true
            }, {
                where: {
                    email: result.email
                },
                returning: true
            })
            res.status(200).json('Login successful!')
        } catch (error) {       
            console.log(error)
            res.status(500).json(error)
        }
    }
}

module.exports = UserController;