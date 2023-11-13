//Setup express
const express = require('express')
const session = require('express-session');
const app = express()
const PORT = process.env.PORT || 3000

//Middleware
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'rahasia',
    resave: false,
    saveUninitialized: true,
  }));



//Routes
const routes = require('./routes')

//Using Routes
app.use("/api", routes)




// Turning On Server
app.listen(PORT, ()=>{
    console.log(`server nyala di port ${PORT}!`)
})

