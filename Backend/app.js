const express = require('express') //importing express
const { books } = require('./database/connection')
const app = express() //fucntion calling
// const app = require('express')()
app.use(express.json()) //for post method, request handling
require("./database/connection")

const bookRoute = require('./routes/bookRoute')

app.use("",bookRoute);


//Listening/Confirming
app.listen(3000,function(){
    console.log("server/backend/node has started at port 3000");
})