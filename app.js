const express = require('express')
const path = require('path')
const ejsLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const User = require('./server/models/users')


const dbURL = 'mongodb+srv://test:11456@cluster0.t4rkg.mongodb.net/node_blog?retryWrites=true&w=majority'
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>app.listen(8000))
.catch((err)=>console.log(err))




// ***************************** start server ***************************************
const app = express();
app.use(express.static('public'))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/server/views'))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(ejsLayouts)


const newUser = new User({
    name:"Jhone",
   surname:"Doe",
   email:String,
   username:'Jhone Doe',
   password:'12345'
})

newUser.save(function(err){
    if(err){
        console.log(err)
    }else{
        console.log('user elave edildi')
    }
})


// added routers
require('./server/routers/routerManager')(app)








