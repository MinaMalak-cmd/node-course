const express = require('express');
const app = express();

const feedRoutes = require('./routes/feed');


app.use(express.json());
const handleCORSOrigin = (req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}
app.use(handleCORSOrigin);


app.use('/feed',feedRoutes);
app.use('/', (req,res,err)=>{
    res.send('<h1>Welcome!</h1>');
})

app.listen(3005); 
