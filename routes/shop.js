const express = require('express');
const router = express.Router();
const adminData = require('./admin');

router.get('/',(req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods : products, 
        pageTitle:"Hello!", 
        value : 100, 
        hasProduct : products.length > 0,
        activeShop : true,
        productCSS : true,
        // layout : false // if you want not to use layout 
    });
});

module.exports  = router;