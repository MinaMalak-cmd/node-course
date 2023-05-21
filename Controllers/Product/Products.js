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
    
    const products = []
    products.push({name : req.body.title });
    res.redirect('/');
}