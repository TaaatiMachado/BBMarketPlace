const ClientDAO = require('../configs/DAO/ClientDAO'); 
const ProductDAO = require('../configs/DAO/ProductDAO'); 
const db = require('../configs/db')
const login = require('../view/login')
const newUser = require('../view/user')
const clientesView = require('../view/clients')

class ClientController {
    
    static loggedClient(){
        return (req, resp) =>{
            const clientDAO = new ClientDAO(db);
            clientDAO.getClients()
            .then((clients)=> {
                
                clients.forEach(element => {

                    if (element.email == req.body.email && element.password == req.body.password ){
                        
                        const productDAO = new ProductDAO(db);
                        productDAO.getProducts()
                        .then((products)=> {
                            clientDAO.getClientByEmail(req.body.email)
                            .then(cliente=>{
                                resp.send(newUser(products, cliente));
                            })
                            
                        })
                        .catch((err) => {console.log(err)});
                    }
                    
                });
            })
            .catch((err) => {console.log(err)});
        }
    }

    static loginClient(){
        return (req, resp) => {
            const clientDAO = new ClientDAO(db);
            clientDAO.getClients()
            .then((clients)=> {
                resp.send(login());
            })
            .catch((err) => {console.log(err)});
        }
    };

    static listClients(){
        return (req, resp) => {
            const clientDAO = new ClientDAO(db);
            clientDAO.getClients()
            .then((clients)=> {
                resp.send(clientesView(clients));
            })
            .catch((err) => {console.log(err)});
        }
    };

    static listClientsId() {
        return (req, resp) => {
            const clientDAO = new ClientDAO(db);
            clientDAO.getClientById(req)
            .then((clients) => {
                resp.send(clientesView(clients));
            })
            .catch((err) => {console.log(err)});
        }
    };

    static addClients() {
        return (req, resp) => {
            const clientDAO = new ClientDAO(db);
            clientDAO.insertClient(req)
            .then((clients)=>{
                resp.redirect('/clients')
            })
            .catch((err) => {console.log(err)});
        }
    }

    static updateClients() {
        return (req, resp) => {
            const clientDAO = new ClientDAO(db);
            clientDAO.modifyClient(req)
            .then((clients) => {
                resp.redirect('/clients')
            })
            .catch((err) => {console.log(err)});
        }
    }

    static deleteClients() {
        return (req, resp) => {
            console.log(req.body.idCliente)
            const clientDAO = new ClientDAO(db);
            clientDAO.deleteClient(req.body.idCliente)
            .then((response) => {
                resp.redirect('/clients')
            })
            .catch((err) => {console.log(err)});
        }
    }
}

module.exports = ClientController;