const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email:{type:String, unique:true},
    isAdmin:{type:Boolean, default:false}
})

module.exports = mongoose.model('User', userSchema);