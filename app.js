//packages
const express = require('express');
const app = express();
//express config
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
//routes
app.get('/', (req, res)=>{
    res.render('home' , {title:'Home'})
})


//port
app.listen(3000, ()=>{
   console.log('server On')
})