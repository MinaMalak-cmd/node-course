const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const screensRouter = require('./routes/screens');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminData.routes)
app.use(shopRouter);
app.use(screensRouter);
app.use(express.static(path.join(__dirname,'public')));

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle : 'Page Not Found',
        path:"/404"
    });
}); // 404 page
app.listen(3005); 
