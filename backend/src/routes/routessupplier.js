
const SupplierController = require('../controller/SupplierController');

module.exports = (app) =>{ 

    app.get('/suppliers', SupplierController.listSupplier()); 
    
    app.post('/suppliers/id', SupplierController.listSupplierId());

    app.post('/suppliers/add', SupplierController.addSupplier());

    app.put('/suppliers/update', SupplierController.updateSupplier());

    app.delete('/suppliers', SupplierController.deleteSupplier());
 
}