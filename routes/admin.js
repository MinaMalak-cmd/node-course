const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');
const router = express.Router();
const app = express();

console.log('app.get', app.get('title'));

const products = ['hello']
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product',(req, res, next) => {
    products.push(req.body.title);
    res.redirect('/');
});

exports.routes = router;
exports.products = products;


