
const ProductController = require('../controller/ProductController');

module.exports = (app) =>{ 

    app.get('/products', ProductController.listProducts()); 
    
    app.get('/products/suppliers', ProductController.listSupplier())
    app.post('/products/suppliers', ProductController.listProductsSuplier())

    app.post('/products/add', ProductController.addProducts());

    app.put('/products/update', ProductController.updateProducts());

    app.delete('/products', ProductController.deleteProducts())
 
}