class ProductDAO{
    constructor(db){
        this._db = db;
        this._getProducts = 'SELECT * FROM PRODUCTS';
        this._getProductsBySupplier = "SELECT * FROM PRODUCTS WHERE id_provider = ?"
        this._getProductBySupplier = 'SELECT * FROM PRODUCTS WHERE id_product = ? AND id_provider = ?'
        this._insertProduct = 'INSERT INTO PRODUCTS (evaluation, name, description, price, quantity, id_provider, img) VALUES (?,?,?,?,?,?,?)';
        this._modifyProduct = 'UPDATE PRODUCTS SET evaluation = ?, name = ?, description = ?, price = ?, quantity = ?, id_provider = ?, img = ? WHERE id_product = ?';
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

    getProductsBySupplier(req){
        const {id_provider} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.all(this._getProductsBySupplier, [id_provider], (err, rows)=>{
                if(err){
                    reject(`Error getting products: ${err}`)
                }
                if(rows.length >0){
                    resolve(rows)
                }else{
                    resolve('Não foram encontrados registros')
                }    
                
                    
            })
        })
    }

    getProductBySupplier(req){
        const {id_product, id_provider} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.all(this._getProductBySupplier, [id_product, id_provider], (err, rows)=>{
                if(err){
                    reject(`Error getting products: ${err}`)
                }
                    if(rows.length >0){
                        resolve(rows)
                    }else{
                        resolve('Não foram encontrados registros')
                    }
            })
        })
    }
    insertProduct(req){
        const {evaluation, name, description, price, quantity, id_provider, img}  = req.body;
        return new Promise((resolve, reject)=>{
            this._db.run(this._insertProduct, [evaluation, name, description, price, quantity, id_provider, img], (err)=>{
                if(err){
                    reject(`Error inserting product: ${err}`)
                }
                    resolve('Success!')
            })
        })
    }

    modifyProduct(req){
        const {id_product, evaluation, name, description, price, quantity, id_provider, img}  = req.body;
        return new Promise((resolve, reject)=>{
            this._db.run(this._modifyProduct, [evaluation, name, description, price, quantity, id_provider, img, id_product], (err)=>{
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

module.exports = ProductDAO;