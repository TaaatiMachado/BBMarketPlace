class SaleDAO{
    constructor(db){
        this._db = db;
        this._getSales = 'SELECT * FROM PURCHASES';
        this._getSalesByProductId = 'SELECT * FROM PURCHASES WHERE id_product = ?';
        this._getSalesByUserId = 'SELECT * FROM PURCHASES WHERE id_client = ?';
        this._insertSale = 'INSERT INTO PURCHASES (id_product, id_client) VALUES (?,?)';
        this._deleteSale = 'DELETE FROM PURCHASES WHERE id = ?'
    }

    getSales(){
        return new Promise((resolve, reject)=>{
            this._db.all(this._getSales, (err, rows)=>{
                if(err){
                    reject(`Error getting sales: ${err}`)
                }
                    resolve(rows)
            })
        })
    }

    getSalesByProductId(req){
        const {id_product} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.all(this._getSalesByProductId, [id_product], (err, rows)=>{
                if(err){
                    reject(`Error getting sales: ${err}`)
                }
                    resolve(rows)
            })
        })
    }

    getSalesByUserId(req){
        const {id_client} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.all(this._getSalesById, [id_client], (err, rows)=>{
                if(err){
                    reject(`Error getting sales: ${err}`)
                }
                    resolve(rows)
            })
        })
    }

    insertSale(req){
        const {id_product, id_client} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.run(this._insertSale, [id_product, id_client], (err)=>{
                if(err){
                    reject(`Error inserting sale: ${err}`)
                }
                    resolve('Success!')
            })
        })
    }

    deleteSale(req){
        const {id} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.run(this._deleteSale, [id], (err)=>{
                if(err){
                    reject(`Error deleting sale: ${err}`)
                }
                    resolve('Success!')
            })
        })
    }
}

module.exports = SaleDAO;