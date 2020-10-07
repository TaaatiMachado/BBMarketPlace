class ProductDAO{
    constructor(db){
        this._db = db;
        this._getProducts = 'SELECT * FROM PRODUCTS';
        this._getProductsBySupplier = 'SELECT * FROM PRODUCTS INNER JOIN PROVIDERS ON id_provider = id'
        this._getProductBySupplier = 'SELECT * FROM PRODUCTS INNER JOIN PROVIDERS ON id_provider = id WHERE id_product = ?'
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
}