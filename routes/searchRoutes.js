const express = require('express');
const search_router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');

search_router.post('/search' , (req,res)=>{

    const regex = new RegExp(escapeRegex(req.body.search), 'gi');
    
    User.find({ $text: { $search: regex } }).then((result)=>{
        console.log(result);
        res.render('search' , {result:result});
    }).catch((err)=>{
        res.render('error');
    })
    

})

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = search_router;