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
            this._db.all('SELECT * FROM CLIENTS WHERE id_client = ?', [req.body.id_client], (err, rows)=>{
                if(err){
                    reject(`Error getting clients: ${err}`)
                }
                    resolve(rows)
            })
        })
    }

    insertClient(req){
        return new Promise((resolve, reject)=>{
            this._db.run('INSERT INTO CLIENTS (name, email, password, cpf, phone, address) VALUES (?,?,?,?,?,?)', [req.body.name, req.body.email, req.body.password, req.body.cpf, req.body.phone, req.body.address], (err)=>{
                if(err){
                    reject(`Error getting clients: ${err}`)
                }
                    resolve('Adicionado com sucesso!')
            })
        })
    }

    modifyClient(req){
        return new Promise((resolve, reject)=>{
            this._db.run('UPDATE CLIENTS SET name = ?, email = ?, password = ?, cpf = ?, phone = ?, address = ? WHERE id_client = ?', [req.body.name, req.body.email, req.body.password, req.body.cpf, req.body.phone, req.body.address, req.body.id], (err)=>{
                if(err){
                    reject(`Error getting clients: ${err}`)
                }
                    resolve('Adicionado com sucesso!')
            })
        })
    }

    deleteClient(req){
        return new Promise((resolve, reject)=>{
            this._db.run('DELETE FROM CLIENTS WHERE id_client = ?', [req.body.id], (err)=>{
                if(err){
                    reject(`Error deleting clients: ${err}`)
                }
                    resolve('Deletado com sucesso!')
            })
        })
    }
}