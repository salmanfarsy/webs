const mongoose = require('mongoose');
const Car = require('./cars')

const orderSchema = new mongoose.Schema({
    username:String,
    email:String,
    address:String,
    phone:Number,
    car:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Car'
    },
    isDone:{type:Boolean, default:false}
})

module.exports = mongoose.model('Order', orderSchema);