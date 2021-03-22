const express = require('express');
const h_router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');

h_router.get('/' , (req , res)=>{

    User.find({}).then((result)=>{
        console.log(result);
        res.render('home' , {result:result});
    }).catch((err)=>{
        res.render('error');
    })
   

})

module.exports = h_router;