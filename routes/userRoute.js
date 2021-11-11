const router = require('express').Router();
const User = require('../models/user');
//get User
router.get('/user', async (req, res)=>{
    try {
     res.json('this is the users route')   
    } catch (error) {
        console.log(error)
    }
})
//check admin
router.get('/user/:email', async (req, res)=>{
    const email = req.params.email;
    try {
        const user = await User.findOne({email});
        res.json(user)
    } catch (error) {
        console.log(error)
    }
})
//make new admin
router.post('/user/:email', async (req, res)=>{
    const email = req.params.email;
    try {
        const user = await User.findOneAndUpdate({email}, {isAdmin:true});
        res.json(user)
    } catch (error) {
        console.log(error)
    }
})
//creat new user in db
router.post('/user', async (req, res)=>{
    try {
        const newUser = await User.create(req.body);
        res.json(newUser)
    } catch (error) {
        console.log(error)
    }
})
module.exports = router