const router = require('express').Router();
const Order = require('../models/order');
const Car = require('../models/cars')
//get all orders
router.get('/order', async (req, res)=>{
    try {
        const orders = await Order.find().populate('car')
        res.json(orders)
    } catch (error) {
        console.log(error)
    }
})

//Add order
router.post('/order', async (req, res)=>{
    try {
        const newOrder = await Order.create(req.body)
        res.json(newOrder)
    } catch (error) {
        console.log(error)
    }
})
//update status
router.put('/order/:id', async (req, res)=>{
    const id = req.params.id;
    try {
        const updated = await Order.findByIdAndUpdate(id, req.body)
        res.json(updated)
    } catch (error) {
        console.log(error)
    }
})
//delete order
router.delete('/order/:id', async (req, res)=>{
    const id = req.params.id;
    try {
        const done = await Order.findByIdAndDelete(id)
        res.json(done)
    } catch (error) {
        console.log(error)
    }
})
//get users orders 
router.get('/order/:email', async (req, res)=>{
    const email = req.params.email
    try {
        const orders = await Order.find({email}).populate('car')
        res.json(orders)
    } catch (error) {
        console.log(error)
    }
})
module.exports = router