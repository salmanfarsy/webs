//packages
const express = require('express');
const app = express();

//routes
app.get('/', (req, res)=>{
    res.send('hello to my new portfolio site')
})


//port
app.listen(3000, ()=>{
    'server On'
})