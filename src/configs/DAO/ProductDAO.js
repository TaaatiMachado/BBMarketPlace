class ProductDAO{
    constructor(db){
        this._db = db;
        this._getProducts = 'SELECT * FROM PRODUCTS';
        this._getProductsBySupplier = 'SELECT * FROM PRODUCTS INNER JOIN PROVIDERS ON id_provider = id'
        this._getProductBySupplier = 'SELECT * FROM PRODUCTS INNER JOIN PROVIDERS ON id_provider = id WHERE id_product = ?'
        this._insertProduct = 'INSERT INTO PRODUCTS (evaluation, name, description, price, quantity, id_provider) VALUES (?,?,?,?,?,?)';
        this._modifyProduct = 'UPDATE PRODUCTS SET evaluation = ?, name = ?, description = ?, price = ?, quantity = ?, id_provider = ? WHERE id_product = ?';
        this._deleteProduct = 'DELETE FROM PRODUCTS WHERE id_PRODUCT = ?'
    }

    getProducts(){
        return new Promise((resolve, reject)=>{
            this._db.all(this._getProducts, (err, rows)=>{
                if(err){
                    reject(`Error getting products: ${err}`)
                }
                    resolve(rows)
            })
        })
    }

    getProductsBySupplier(){
        return new Promise((resolve, reject)=>{
            this._db.all(this._getProductsBySupplier, (err, rows)=>{
                if(err){
                    reject(`Error getting products: ${err}`)
                }
                    resolve(rows)
            })
        })
    }

    getProductsBySupplier(req){
        const {id_product} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.all(this._getProductBySupplier, [id_product], (err, rows)=>{
                if(err){
                    reject(`Error getting products: ${err}`)
                }
                    resolve(rows)
            })
        })
    }
    insertProduct(req){
        const {evaluation, name, description, price, quantity, id_provider}  = req.body;
        return new Promise((resolve, reject)=>{
            this._db.run(this._insertProduct, [evaluation, name, description, price, quantity, id_provider], (err)=>{
                if(err){
                    reject(`Error inserting product: ${err}`)
                }
                    resolve('Success!')
            })
        })
    }

    modifyProduct(req){
        const {id_product, evaluation, name, description, price, quantity, id_provider}  = req.body;
        return new Promise((resolve, reject)=>{
            this._db.run(this._modifyProduct, [evaluation, name, description, price, quantity, id_provider, id_product], (err)=>{
                if(err){
                    reject(`Error modifying product: ${err}`)
                }
                    resolve('Success!')
            })
        })
    }
    deleteProduct(req){
        const {id_product} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.run(this._deleteProduct, [id_product], (err)=>{
                if(err){
                    reject(`Error deleting product: ${err}`)
                }
                    resolve('Success!')
            })
        })
    }
}