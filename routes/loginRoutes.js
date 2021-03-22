const express = require('express');
const loginRouter = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');

loginRouter.get('/login' , (req , res)=>{

    res.render('login');

})

module.exports = loginRouter;