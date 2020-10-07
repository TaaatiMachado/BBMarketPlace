class ClientDAO{
    constructor(db){
        this._db = db;
    }

    getClients(){
        return new Promise((resolve, reject)=>{
            this._db.all('SELECT * FROM CLIENTS', (err, rows)=>{
                if(err){
                    reject(`Error getting clients: ${err}`)
                }
                    resolve(rows)
            })
        })
    }

    getClientById(){
        return new Promise((resolve, reject)=>{
            this._db.all('SELECT * FROM CLIENTS WHERE id_client = ?', [id_client], (err, rows)=>{
                if(err){
                    reject(`Error getting client: ${err}`)
                }
                    resolve(rows)
            })
        })
    }

    insertClient(req){
        const {name, email, password, cpf, phone, address} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.run('INSERT INTO CLIENTS (name, email, password, cpf, phone, address) VALUES (?,?,?,?,?,?)', 
                        [name, email, password, cpf, phone, address], (err)=>{
                if(err){
                    reject(`Error inserting clients: ${err}`)
                }
                    resolve('Success!')
            })
        })
    }

    modifyClient(req){
        const {id_client, name, email, password, cpf, phone, address} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.run('UPDATE CLIENTS SET name = ?, email = ?, password = ?, cpf = ?, phone = ?, address = ? WHERE id_client = ?', 
                        [name, email, password, cpf, phone, address, id_client], (err)=>{
                if(err){
                    reject(`Error modfying client: ${err}`)
                }
                    resolve('Success!')
            })
        })
    }

    deleteClient(req){
        const {id_client} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.run('DELETE FROM CLIENTS WHERE id_client = ?', [id_client], (err)=>{
                if(err){
                    reject(`Error deleting client: ${err}`)
                }
                    resolve('Success!')
            })
        })
    }
}