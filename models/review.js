const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    name:String,
    text:String,
    rating:Number
})

module.exports = mongoose.model('Review', reviewSchema);