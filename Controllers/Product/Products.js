const products = [];
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product23', 
        path: '/add-product',
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true
    })
}
exports.postAddProduct = (req, res, next) => {
    products.push({name : req.body.title });
    res.redirect('/');
}
exports.getAllProducts = (req, res, next) => {
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
exports.deleteProduct = (req, res, next) => {
    products.splice(0, 1);
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
exports.products = products;