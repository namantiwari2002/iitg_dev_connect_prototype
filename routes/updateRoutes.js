const express = require('express');
const update_router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');

update_router.post('/update' , (req , res) => {

    User.findOneAndUpdate(
        {p_token : req.body.p_token} , 
        {$set: {

        fname : req.body.fname,
        lname : req.body.lname,
        roll : req.body.roll,
        branch: req.body.branch,
        profile_picture : req.body.image,
        stack: req.body.stack

        }}
    )
        .then((data) => {
            res.render('update' , {data : data})
        })
        .catch((err) => {
            res.render('error');
        })

})

module.exports = update_router;