const SupplierDAO = require('../configs/DAO/SupplierDAO');
const db = require('../configs/db')
const fornecedoresView = require('../view/supplier')

class SupplierController {
   
    static listSupplier() {
        return (req, resp) => {
            const supplierDAO = new SupplierDAO(db)
            supplierDAO.getSuppliers()
            .then((suppliers) => {
                resp.send(fornecedoresView(suppliers));
            })
            .catch((err) => {console.log(err)});
        }
    };

    static listSupplierId() {
        return (req, resp) => {
            const supplierDAO = new SupplierDAO(db)
            supplierDAO.getSupplierById(req)
            .then((suppliers) => {
                resp.send(fornecedoresView(suppliers));
            })
            .catch((err) => {console.log(err)});
        }
    };

    static addSupplier() {
        return (req, resp) => {
            const supplierDAO = new SupplierDAO(db)
            supplierDAO.insertSupplier(req)
            .then(() => {
                resp.redirect('/suppliers');
            })
            .catch((err) => {console.log(err)});
        }
    };
    
    static updateSupplier() {
        return (req, resp) => {
            const supplierDAO = new SupplierDAO(db)
            supplierDAO.modifySupplier(req)
            .then(() => {
                resp.redirect('/suppliers');
            })
            .catch((err) => {console.log(err)});
        }
    };
    
    static deleteSupplier() {
        return (req, resp) => {
            const supplierDAO = new SupplierDAO(db)
            supplierDAO.deleteSupplier(req)
            .then(() => {
                resp.redirect('/suppliers');
            })
            .catch((err) => {console.log(err)});
        }
    }
};

module.exports = SupplierController;