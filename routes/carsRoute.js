const router = require('express').Router();
const Car = require('../models/cars');
//add new car
router.post('/cars', async (req, res)=>{
    try {
     const newCar =   await Car.create(req.body);
     res.json(newCar)
    } catch (error) {
        console.log(error)
    }
})
//get all the cars
router.get('/cars', async (req, res)=>{
    try {
        const allCars = await Car.find();
        res.json(allCars)
    } catch (error) {
        console.log(error)
    }
})
module.exports = router