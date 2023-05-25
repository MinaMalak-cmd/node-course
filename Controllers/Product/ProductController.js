const Product = require('../../models/productModel');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product23', 
        path: '/admin/add-product',
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true
    })
}
exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.addProduct();
    res.redirect('/');
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
exports.getAdminProducts = (req, res, next) => {
    Product.getProducts((products) => {
        res.render('admin/products', {
            prods : products, 
            pageTitle:"Hello!", 
            path:"/admin/products",
            value : 100, 
            hasProduct : products?.length > 0,
            activeShop : true,
            productCSS : true,
        });
    });
}
exports.deleteProduct = (req, res, next) => {
    Product.deleteProduct();
    const products = Product.getProducts();
    res.render('shop', {
        prods : products, 
        pageTitle:"Hello!", 
        path:"/",
        value : 100, 
        hasProduct : products.length > 0,
        activeShop : true,
        productCSS : true,
    });
}
// exports.products = products;