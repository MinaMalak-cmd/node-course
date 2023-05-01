const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const path = require('path');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminData.routes)
app.use(shopRouter)
app.use(express.static(path.join(__dirname,'public')));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
}); // 404 page
app.listen(3005); 
