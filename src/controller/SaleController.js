const SaleDAO = require('../configs/DAO/SaleDAO');
const db = require('../configs/db')
const salesView = require('../view/sales')

class SaleController {

    static listSale(){
        return (req, resp) => {
            const saleDAO = new SaleDAO(db)
            saleDAO.getSales()
            .then((sales) => {
                resp.send(salesView(sales));
            })
            .catch((err) => {console.log(err)});
        }
    };
    
        static listSaleProductId() {
        return (req, resp) => {
            const saleDAO = new SaleDAO(db)
            saleDAO.getSalesByProductId(req)
            .then((sales) => {
                resp.send(salesView(sales));
            })
            .catch((err) => {console.log(err)});
        }
    };
    
        static listSaleUserId() {
        return (req, resp) => {
            const saleDAO = new SaleDAO(db)
            saleDAO.getSalesByUserId(req)
            .then((sales) => {
                resp.send(salesView(sales));
            })
            .catch((err) => {console.log(err)});
        }
    };
    
        static addSale() {
        return (req, resp) => {
            const saleDAO = new SaleDAO(db)
            saleDAO.insertSale(req)
            .then(() => {
                resp.redirect('/sales');
            })
            .catch((err) => {console.log(err)});
        }
    }
    
        static deleteSale() {
        return (req, resp) => {
            const saleDAO = new SaleDAO(db)
            saleDAO.deleteSale(req)
            .then(() => {
                resp.redirect('/sales');
            })
            .catch((err) => {console.log(err)});
        }
    }
    
}

module.exports = SaleController; 