const User = require('./../models/users')

module.exports.signupGet = function(req,res){
    res.render('signUp')
}

module.exports.signupPost = function(req,res){
    
    const NewUser = new User({
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        email:req.body.email,
        password:req.body.password
    })

    console.log(NewUser)

    res.render('signUp')
}