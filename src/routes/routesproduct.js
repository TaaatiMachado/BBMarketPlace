
const ProductController = require('../controller/ProductController');

module.exports = (app) =>{ 

    app.get('/clients', ProductController.listProducts()); 
    
    app.get('/clients/:id', ProductController.listProductsSuplier());

    app.post('/clients/add', ProductController.addProducts());

    app.put('/clients/:id', ProductController.updateProducts());

    app.delete('/clients/:id', ProductController.deleteProducts());
 
}