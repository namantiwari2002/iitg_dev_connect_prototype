const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({

    _id:mongoose.Schema.Types.ObjectId,
    p_id:String,
    p_token:String,
    fname:String,
    lname:String,
    roll:Number,
    branch:String,
    profile_picture:String,
    stack:String,
    interests:String

})

userSchema.index({stack : 'text'});

const User = mongoose.model('User' , userSchema);

module.exports = User;