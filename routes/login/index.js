let logindetails = require('./fake_log')
let router = require('express').Router()
let jwt = require('jsonwebtoken')
let bcrypt=require('bcryptjs')

router.get('/', (req, res, send) => {
    if (req.query.username !== undefined && req.query.password !== undefined) {
        if (req.query.username == logindetails.email) {
            bcrypt.compare(req.query.password, logindetails.password, function (err, result) {
                if (result) {
                    const jwt = require('jsonwebtoken');


                        const JWTToken = jwt.sign({
                                email:req.query.password,
                                _id: req.query.username
                            },
                            'secret',
                            {
                                expiresIn: '2h'
                            });
                        return res.status(200).json({
                            success: 'Welcome to the JWT Auth',
                            token: JWTToken
                        });

                    res.status(200).json({
                        message: "login sucessfully"
                    })
                }
                else if (err) {
                    res.status(401).json({
                        message: "username or password is wrong"
                    })
                }
            })
        } else {
            res.status(401).json({
                message: "user name or password is wrong"
            })
        }
    } else {
        res.status(401).json({
            message: "enter username and password"
        })
    }
})
module.exports = router;
