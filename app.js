const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
const screensRouter = require('./routes/screens');
const ErrorController = require('./Controllers/Default/404');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRoutes)
app.use(shopRouter);
app.use(screensRouter);
app.use(express.static(path.join(__dirname,'public')));

app.use(ErrorController.get404); // 404 page
app.listen(3005); 
