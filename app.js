const express = require('express');
const app = express();

const feedRoutes = require('./routes/feed');

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false })); need it only in MVC projects
app.use(express.json());
app.use('/feed',feedRoutes);

app.use('/', (req,res,err)=>{
    res.send('<h1>Welcome!</h1>');
})

app.listen(3005); 
