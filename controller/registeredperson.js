const User = require('../model/registeredperson.js')

exports.createUser = (req, res) => {

    User.findOne({ email: req.body.email })
        .exec((error, candidate) => {
            if (candidate) return res.status(200).json({
                message: "Candidate already exist"
            })
            const { username, email, age, address, gender, divition } = req.body;

            const newuser = new User({
                username,
                email,
                age,
                address,
                gender,
                divition
            })

            newuser.save((error, result) => {
                if (error) {
                    return res.status(200).json(error)
                }

                if (result) {
                    return res.status(200).json({ message: "User is created successfully" })
                }
            })

        })
}
