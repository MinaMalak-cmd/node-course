const Product = require('../../models/product');

exports.addToCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Add to cart', 
        path: '/cart',
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true
    })
}
exports.getAllProducts = (req, res, next) => {
    Product.getProducts((products) => {
        res.render('shop/product-list', {
            prods : products, 
            pageTitle:"Hello!", 
            path:"/",
            value : 100, 
            hasProduct : products?.length > 0,
            activeShop : true,
            productCSS : true,
        });
    });
}

