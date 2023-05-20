const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');
const router = express.Router();
const app = express();


const products = []
router.get('/add-product',(req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product23', 
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true
    })
});

router.post('/add-product',(req, res, next) => {
    products.push({name : req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;


