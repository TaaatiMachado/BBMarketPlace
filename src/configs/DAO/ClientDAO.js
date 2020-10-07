class ClientDAO{
    constructor(db){
        this._db = db;
        this._getClients = 'SELECT * FROM CLIENTS';
        this._getClientById = 'SELECT * FROM CLIENTS WHERE id_client = ?'
        this._insertClient = 'INSERT INTO CLIENTS (name, email, password, cpf, phone, address) VALUES (?,?,?,?,?,?)'
        this._modifyClient = 'UPDATE CLIENTS SET name = ?, email = ?, password = ?, cpf = ?, phone = ?, address = ? WHERE id_client = ?'
        this._deleteClient = 'DELETE FROM CLIENTS WHERE id_client = ?'
    }

    getClients(){
        return new Promise((resolve, reject)=>{
            this._db.all(this._getClients, (err, rows)=>{
                if(err){
                    reject(`Error getting clients: ${err}`)
                }
                    resolve(rows)
            })
        })
    }

    getClientById(req){
        const {id_client} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.all(this._getClientById, [id_client], (err, rows)=>{
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
            this._db.run(this._insertClient, [name, email, password, cpf, phone, address], (err)=>{
                if(err){
                    reject(`Error inserting client: ${err}`)
                }
                    resolve('Success!')
            })
        })
    }

    modifyClient(req){
        const {id_client, name, email, password, cpf, phone, address} = req.body;
        return new Promise((resolve, reject)=>{
            this._db.run(this._modifyClient, [name, email, password, cpf, phone, address, id_client], (err)=>{
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
            this._db.run(this._deleteClient, [id_client], (err)=>{
                if(err){
                    reject(`Error deleting client: ${err}`)
                }
                    resolve('Success!')
            })
        })
    }
}