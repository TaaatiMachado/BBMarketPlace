class SupplierDAO{
    constructor(db){
        this._db = db;
        this._selectProviders = 'SELECT * FROM PROVIDERS';
        this._selectProvider = 'SELECT * FROM PROVIDERS WHERE id = ?';
        this._insertSupplier = 'INSERT INTO PROVIDERS (name, phone, company_name, eni, address) VALUES (?,?,?,?,?)';
        this._modifySupplier = 'UPDATE PROVIDERS SET name = ?, phone = ?, company_name = ?, eni = ?, adress = ? WHERE id = ?';
        this._deleteSupplier = 'DELETE FROM PROVIDERS WHERE id = ?'
    }

    getSuppliers(){
        return new Promise((resolve, reject)=>{
            this._db.all(this._selectProviders, (err, rows)=>{
                if(err){
                    reject(`Error getting providers: ${err}`)
                }
                    resolve(rows)
            })
        })
    }

    getSupplierById(req){
        const {id} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.all(this._selectProvider, [id], (err, rows)=>{
                if(err){
                    reject(`Error getting provider: ${err}`)
                }
                    resolve(rows)
            })
        })
    }

    insertSupplier(req){
        const {name, phone, company_name, eni, address} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.run(this._insertSupplier, [name, phone, company_name, eni, address], (err)=>{
                if(err){
                    reject(`Error inserting provider: ${err}`)
                }
                    resolve('Success!')
            })
        })
    }

    modifySupplier(req){
        const {id, name, phone, company_name, eni, address} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.run(this._modifySupplier, [name, phone, company_name, eni, address, id ], (err)=>{
                if(err){
                    reject(`Error updating provider: ${err}`)
                }
                    resolve('Success!')
            })
        })
    }

    deleteSupplier(req){
        const {id} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.run(this._deleteSupplier, [id], (err)=>{
                if(err){
                    reject(`Error deleting provider: ${err}`)
                }
                    resolve('Success!')
            })
        })
    }
}