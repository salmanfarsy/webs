const router = require('express').Router();
const Review = require('../models/review');

//get reviews
router.get('/reviews', async (req, res)=>{
    try {
        const allreviews = await Review.find()
        res.json(allreviews);
    } catch (error) {
        console.log(error)
    }
})
//post reviews
router.post('/reviews', async (req, res)=>{
    try {
        const newReview = await Review.create(req.body)
        res.json(newReview)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router