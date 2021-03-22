const express = require('express');
const dash_router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');

dash_router.post('/dashboard' , (req,res) => {

    User.findOne({p_token : req.body.p_token} , (err , data) => {

        if(err){
            res.render('error');
        }else{
            res.render('dashboard' , {data:data});
        }

    })

})

module.exports = dash_router;