const SaleDAO = require('../configs/DAO/SaleDAO');
const SaleDAO = require('../configs/DAO/SaleDAO');

class SaleController {
    constructor(db){
        this.saleDAO = new SaleDAO(db);
    }

    listSale(){
        return (req, resp) => {
            this.saleDAO.getSales()
            .then((sales) => {
                resp.send(console.log(sales));
            })
            .catch((err) => {console.log(err)});
        }
    };

    listSaleProductId() {
        return (req, resp) => {
            this.saleDAO.getSalesByProductId(req)
            .then((sales) => {
                resp.send(console.log(console.log(sales)));
            })
            .catch((err) => {console.log(err)});
        }
    };

    listSaleUserId() {
        return (req, resp) => {
            this.saleDAO.getSalesByUserId(req)
            .then((sales) => {
                resp.send(console.log(console.log(sales)));
            })
            .catch((err) => {console.log(err)});
        }
    };
    
    addSale() {
        return (req, resp) => {
            this.saleDAO.insertSale(req)
            .then(() => {
                resp.send(console.log("Success to insert a new Sale!"));
            })
            .catch((err) => {console.log(err)});
        }
    }

    deleteSale() {
        return (req, resp) => {
            this.saleDAO.deleteSale(req)
            .then(() => {
                resp.send(console.log("Success to delete!"));
            })
            .catch((err) => {console.log(err)});
        }
    }
}

module.exports = SaleController;