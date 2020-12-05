const express = require("express");
const mongoose = require('mongoose');
const connectionString = require('dotenv/config');
const app = express();

//Middlewares
// app.use('/posts',()=>{
//     console.log("this is a middleware running")
// })

//Connect to database
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    ()=>{
    console.log("connected to db")
})

//Import routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);


//Routes
app.get('/',(req,res)=>{
    res.send("Hello we are live!")
});



app.listen(3000);
