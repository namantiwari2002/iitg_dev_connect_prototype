const express = require('express');
const app = express();
const body = require('body-parser');
const mongoose = require('mongoose');
const {render} = require('ejs');
const bodyparser = require('body-parser');

//Routes
const createRoutes = require('./routes/createRoutes');
const searchRoutes = require('./routes/searchRoutes');
const b_searchRoutes = require('./routes/branchSearchRoutes');
const updateRoutes = require('./routes/updateRoutes');
const profileRoutes = require('./routes/profileRoutes');
const dashRoutes = require('./routes/dashboardRoutes');
const loginRoutes = require('./routes/loginRoutes');
const homeRoutes = require('./routes/homeRoutes');

const User = require('./models/users');

const dbUri = 'mongodb+srv://admin:admin@cluster0.vyvvy.mongodb.net/iitg_connect?retryWrites=true&w=majority';

mongoose.connect(dbUri , {userNewUrlParser : true , userUnifiedTopology : true})
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

app.set('view engine' , 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(bodyparser.urlencoded({extended : true })); 
app.use(express.json());


//Home route
app.use(homeRoutes);

//Login Routes
app.use(loginRoutes);

//Dashboard Routes
app.use(dashRoutes);

//Profile Routes
app.use(profileRoutes);

//Update Routes
app.use(updateRoutes);

//Branch Search Routes
app.use(b_searchRoutes);

//Search Routes 
app.use(searchRoutes);

//Create routes 
app.use(createRoutes);

app.listen(3000);