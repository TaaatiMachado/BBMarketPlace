
const SupplierController = require('../controller/SaleController');

module.exports = (app) =>{ 

    app.get('/clients', SupplierController.listSupplier()); 
    
    app.get('/clients/:id', SupplierController.listSupplierId());

    app.post('/clients/add', SupplierController.addSupplier());

    app.put('/clients/:id', SupplierController.updateSupplier());

    app.delete('/clients/:id', SupplierController.deleteSupplier());
 
}