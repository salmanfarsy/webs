//modules
const express = require('express'),
app = express(),
dotenv = require('dotenv'),
cors = require('cors'),
carsRoute = require('./routes/carsRoute'),
orderRoute = require('./routes/orderRoute'),
userRoute = require('./routes/userRoute'),
reviewRoute = require('./routes/reviewRoute'),
mongoose = require('mongoose');

//mongoose
mongoose.connect(process.env.MONGO_URL).then(()=> console.log('database connected')).catch((error)=> console.log('not Connected'))
//config
dotenv.config()
app.use(express.json());
app.use(cors());


//routes
app.get('/', (req, res)=>{
    res.json('Hello this Server is Running')
})
app.use('/api', carsRoute);
app.use('/api', orderRoute);
app.use('/api', userRoute);
app.use('/api', reviewRoute);
//port

app.listen(process.env.PORT, ()=>{
    console.log('your server is on')
})