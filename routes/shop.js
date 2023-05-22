const express = require('express');
const router = express.Router();
const productController = require('../Controllers/Product/Products');

router.get('/',  productController.getAllProducts);

module.exports  = router;