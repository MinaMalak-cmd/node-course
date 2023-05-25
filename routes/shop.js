const express = require('express');
const router = express.Router();
const productController = require('../Controllers/Product/Products');
const shopController = require('../Controllers/Shop/Shop');

router.get('/cart', shopController.addToCart);
router.get('/products', shopController.getAllProducts);
router.get('/',  productController.getAllProducts);

module.exports  = router;