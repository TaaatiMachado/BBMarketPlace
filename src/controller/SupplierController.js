const SupplierDAO = require('../configs/DAO/SupplierDAO');

class SupplierController {
    constructor(db) {
        this.supplierDAO = new SupplierDAO(db);
    }

    listSupplier() {
        return (req, resp) => {
            this.supplierDAO.getSuppliers()
            .then((suppliers) => {
                resp.send(console.log(suppliers));
            })
            .catch((err) => {console.log(err)});
        }
    };

    listSupplierId() {
        return (req, resp) => {
            this.supplierDAO.getSupplierById(req)
            .then((suppliers) => {
                resp.send(console.log(suppliers));
            })
            .catch((err) => {console.log(err)});
        }
    };

    addSupplier() {
        return (req, resp) => {
            this.supplierDAO.insertSupplier(req)
            .then(() => {
                resp.send(console.log("Successfully added!"));
            })
            .catch((err) => {console.log(err)});
        }
    };

    updateSupplier() {
        return (req, resp) => {
            this.supplierDAO.modifySupplier(req)
            .then(() => {
                resp.send(console.log("Successfully updated!"));
            })
            .catch((err) => {console.log(err)});
        }
    };

    deleteSupplier() {
        return (req, resp) => {
            this.supplierDAO.deleteSupplier(req)
            .then(() => {
                resp.send(console.log("Successfully deleted!"));
            })
            .catch((err) => {console.log(err)});
        }
    }
};

module.exports = SupplierController;