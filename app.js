const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const screensRouter = require('./routes/screens');
const path = require('path');
const app = express();

app.engine('hbs', expressHbs({layoutsDir: 'layouts/main-layout', defaultLayout: 'main-layout' }));
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminData.routes)
app.use(shopRouter);
app.use(screensRouter);
app.use(express.static(path.join(__dirname,'public')));

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle : 'Page Not Found'});
}); // 404 page
app.listen(3005); 
