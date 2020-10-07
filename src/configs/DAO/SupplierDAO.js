class SupplierDAO{
    constructor(db){
        this._db = db;
    }

    getSuppliers(){
        return new Promise((resolve, reject)=>{
            this._db.all('SELECT * FROM PROVIDERS', (err, rows)=>{
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
            this._db.all('SELECT * FROM PROVIDERS WHERE id = ?', [id], (err, rows)=>{
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
            this._db.run('INSERT INTO PROVIDERS (name, phone, company_name, eni, address) VALUES (?,?,?,?,?)', 
            [name, phone, company_name, eni, address], (err)=>{
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
            this._db.run('UPDATE PROVIDERS SET name = ?, phone = ?, company_name = ?, eni = ?, adress = ? WHERE id = ?', 
            [name, phone, company_name, eni, address, id ], (err)=>{
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
            this._db.run('DELETE FROM PROVIDERS WHERE id = ?', [id], (err)=>{
                if(err){
                    reject(`Error deleting provider: ${err}`)
                }
                    resolve('Success!')
            })
        })
    }
}