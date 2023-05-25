const express = require('express');
const router = express.Router();
const productController = require('../Controllers/Product/ProductController');
const shopController = require('../Controllers/Shop/ShopController');

router.get('/cart', shopController.addToCart);
router.get('/products', shopController.getAllProducts);
router.get('/',  productController.getAllProducts);

module.exports  = router;