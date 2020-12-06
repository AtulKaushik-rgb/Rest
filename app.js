const express = require("express");
const mongoose = require('mongoose');
const connectionString = require('dotenv/config');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json());

//Middlewares
// app.use('/posts',()=>{
//     console.log("this is a middleware running")
// })

//use cors
app.use(cors());


//Connect to database
mongoose.connect(
    process.env.DB_CONNECTION,
    //'mongodb://Atul:kaushik36@mongoclusterforatul.snpzo.mongodb.net/MongoClusterForAtul',
    { useNewUrlParser: true },
    ()=>{
    console.log("connected to db with query",process.env.DB_CONNECTION)
})

//Import routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);


//Routes
app.get('/',(req,res)=>{
    res.send("Hello we are live!")
});



app.listen(3000);
