const express = require('express');
const b_search_router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');

b_search_router.get('/branch/:b' , (req , res) => {
    
    User.find({ branch : req.params.b }).then((result)=>{
        console.log(result);
        res.render('branch' , {result:result , branch : req.params.b});
    }).catch((err)=>{
        res.render('error');
    })

})

module.exports = b_search_router;