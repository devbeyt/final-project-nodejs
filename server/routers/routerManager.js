const routerLogin = require('./LoginRouter')
const routerHome = require('./homeRouter')
const routerSignUp = require('./signUpRouter')



module.exports = function(app){   
app.use("/",routerHome)
app.use('/login',routerLogin)
app.use('/',routerSignUp)
}