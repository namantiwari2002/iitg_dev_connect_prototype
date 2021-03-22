const express = require('express');
const p_routes = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');

p_routes.get('/profile/:p_id' , (req , res) => {

    User.findOne({p_id : req.params.p_id} , (err , data) => {

        if(err){
            res.render('error');
        }else{
            res.render('profile' , {data:data});
        }

    })

})

module.exports = p_routes;