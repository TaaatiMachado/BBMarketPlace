
const SaleController = require('../controller/SaleController');

module.exports = (app) =>{ 

    app.get('/sales', (SaleController.listSale())); 

    app.post('/sales/add', SaleController.addSale());

    app.post('/products/sales', SaleController.listSaleProductId());

    app.post('/clients/sales', SaleController.listSaleUserId());

    app.delete('/sales', SaleController.deleteSale());
 
} 