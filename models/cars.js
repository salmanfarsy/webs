const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name:String,
    brand:String,
    image:String,
    desc:String,
    price:Number
})

module.exports = mongoose.model('Car', carSchema);