const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');

router.get('/create' , (req , res)=>{

    res.render('create');

})

router.post('/create' , (req , res) => {

    var p_id = req.body.roll + "." + req.body.fname;
    var p_token = Math.floor(Math.random()*10000) + "." + req.body.fname + "." + Math.floor(Math.random()*10000);

    const new_user = new User({

        _id:new mongoose.Types.ObjectId(),
        p_id : p_id,
        p_token : p_token,
        fname : req.body.fname,
        lname : req.body.lname,
        roll : req.body.roll,
        branch: req.body.branch,
        profile_picture : req.body.image,
        stack: req.body.stack

    });

    new_user.save()
        .then((result)=>{
            console.log('Profile created');
            res.render('profile_created' , {p_id : p_id , p_token : p_token});
        })
        .catch((err) => {
            console.log('error' , err);
        })

})

module.exports = router;