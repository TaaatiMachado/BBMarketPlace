
const ProductController = require('../controller/ProductController');

module.exports = (app) =>{ 

    app.get('/products', ProductController.listProducts()); 
    
    /* app.get('/products/:id', ProductController.listProductsSuplier());

    app.post('/products/add', ProductController.addProducts());

    app.put('/products/:id', ProductController.updateProducts());

    app.delete('/products/:id', ProductController.deleteProducts()); */
 
}