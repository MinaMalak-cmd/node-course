const express = require('express');
const router = express.Router();
const productController = require('../Controllers/Product/Products');

const products = []
router.get('/add-product',productController.getAddProduct);

router.post('/add-product',(req, res, next) => {
    products.push({name : req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;


