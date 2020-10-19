const ProductDAO = require('../configs/DAO/ProductDAO'); 
const db = require('../configs/db')
const newUser = require('../view/user')

class ProductController {

    static listProducts() {
        return (req, resp) => {
            console.log(req.body)
            
        }
    };

    /* listProductsSuplier() {
        return (req, resp) => {
            this.productDAO.getProductsBySupplier()
            .then((products) => {
                resp.send(console.log(products));
            })
            .catch((err) => {console.log(err)});
        }
    }

    listProductSuplier() {
        return (req, resp) => {
            this.productDAO.getProductsBySupplier(req)
            .then((product) => {
                resp.send(console.log(product));
            })
            .catch((err) => {console.log(err)});
        }
    };

    addProducts() {
        return (req, resp) => {
            this.productDAO.insertProduct(req)
            .then((products) => {
                resp.send(console.log(products));
            })
            .catch((err) => {console.log(err)});
        }
    };

    updateProducts() {
        return (req, resp) => {
            this.productDAO.modifyProduct(req)
            .then((products) => {
                resp.send(console.log(products));
            })
            .catch((err) => {console.log(err)});
        }
    };

    deleteProducts() {
        return (req, resp) => {
            this.productDAO.deleteProduct(req)
            .then((products) => {
                resp.send(console.log(products));
            })
            .catch((err) => {console.log(err)});
        }
    }; */
}

module.exports = ProductController;