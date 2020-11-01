const ProductDAO = require('../configs/DAO/ProductDAO');
const SupplierDAO = require('../configs/DAO/SupplierDAO'); 
const db = require('../configs/db')
const newUser = require('../view/user')
const produtosView = require('../view/products')
const produtosSupplierView = require('../view/productsSupplier')

class ProductController {

    static listSupplier() {
        return (req, resp) => {
            const supplierDAO = new SupplierDAO(db);
            supplierDAO.getSuppliers()
            .then((suppliers)=> {
                resp.send(produtosSupplierView(suppliers));
            })
            .catch((err) => {console.log(err)});

            
        }
    };
    
    static listProducts() {
        return (req, resp) => {
            const productDAO = new ProductDAO(db);
            productDAO.getProducts()
            .then((products)=> { 
                resp.send(produtosView(products));
            })
            .catch((err) => {console.log(err)});
        }
    };

    static listProductsSuplier() {
        return (req, resp) => {
            const productDAO = new ProductDAO(db);
            productDAO.getProductsBySupplier(req)
            .then((products) => {
                //console.log(products)
                resp.send(produtosView(products));
                
            })
            .catch((err) => {console.log(err)});
        }
    }

        static listProductSuplier() {
        return (req, resp) => {
            const productDAO = new ProductDAO(db);
            productDAO.getProductBySupplier(req)
            .then((product) => {
                resp.send(produtosView(product));
            })
            .catch((err) => {console.log(err)});
        }
    };
    
    static addProducts() {
        return (req, resp) => {
            console.log(req.body)
            const productDAO = new ProductDAO(db);
            productDAO.insertProduct(req)
            .then((products) => {

                resp.redirect('/products')
            })
            .catch((err) => {console.log(err)});
        }
    };
    
    static updateProducts() {
        return (req, resp) => {
            console.log(req.body)
            const productDAO = new ProductDAO(db);
            productDAO.modifyProduct(req)
            .then((products) => {
                resp.redirect('/products');
            })
            .catch((err) => {console.log(err)});
        }
    };
    
    static deleteProducts() {
        return (req, resp) => {
            const productDAO = new ProductDAO(db);
            productDAO.deleteProduct(req)
            .then((response) => {
                resp.redirect('/products')
            })
            .catch((err) => {console.log(err)});
        }
    };
}

module.exports = ProductController;