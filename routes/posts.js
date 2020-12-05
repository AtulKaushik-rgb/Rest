const express = require("express");

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hello we are on posts")
});


router.get('/specials',(req,res)=>{
    res.send("special post")
});

module.exports = router;