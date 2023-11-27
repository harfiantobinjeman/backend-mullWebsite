const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signUp= (req,res)=>{

    models.Users.findOne({where:{email:req.body.email}}).then(result => {
        if(result=== null){
            bcryptjs.genSalt(10, function(err, salt){
                bcryptjs.hash(req.body.password, salt, function(err, hash){
                    const user = {
                        firstName: req.body.firstName,
                        email:req.body.email,
                        password: hash
                    }
                
                    models.Users.create(user).then(result => {
                        res.status(201).json({
                            message: "User created successfully",
                        });
                    }).catch(error => {
                        res.status(500).json({
                            message: "Something went wrong!",
                        });
                    });
                });
            });
        }else{
            res.status(409).json({
                message: "Email already exists!",
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
        });
    }); 
}

const login = (req, res) => {
    models.Users.findOne({where:{email: req.body.email}}).then(user =>{
        if (user === null) {
            res.status(401).json({
                message:"Invalid credensial!",
            });
        } else {
            bcryptjs.compare(req.body.password, user.password, (err, result)=>{
                if (result) {
                    const token = jwt.sign({
                        email: user.email,
                        userId : user.id
                    }, process.env.JWT_KEY, (err, token)=>{
                        res.status(200).json({
                            message: "Authentication Succsesfully!",
                            token : token
                        })
                    })
                } else {
                    res.status(401).json({
                        message:"Invalid credensial!",
                    });
                }
            })
        }
    }).catch(error=>{
        res.status(500).json({
            message: "Something went",
        });
    });
}

module.exports = {
    signUp,
    login
}
