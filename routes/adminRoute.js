const express = require('express');
const router = express.Router();
const productController = require('../Controllers/Product/ProductController');

router.get('/products', productController.getAddProduct);
router.post('/add-product', productController.postAddProduct);
router.post('/delete-product', productController.deleteProduct);

// exports.routes = router; this for multiple exports 

module.exports = router; // this for single exports 


