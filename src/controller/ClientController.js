const ClientDAO = require('../configs/DAO/ClientDAO'); 

class ClientController {
    constructor(db) {
        this.clientDAO = new ClientDAO(db);
    }

    listClients() {
        return (req, resp) => {
            this.clientDAO.getClients()
            .then((clients)=> {
                resp.send(console.log(clients));
            })
            .catch((err) => {console.log(err)});
        }
    };

    listClientsId() {
        return (req, resp) => {
            this.clientDAO.getClientById(req)
            .then((clients) => {
                resp.send(console.log(clients));
            })
            .catch((err) => {console.log(err)});
        }
    };

    addClients() {
        return (req, resp) => {
            this.clientDAO.insertClient(req)
            .then((clients)=>{
                resp.send(console.log(clients));
            })
            .catch((err) => {console.log(err)});
        }
    }

    updateClients() {
        return (req, resp) => {
            this.clientDAO.modifyClient(req)
            .then((clients) => {
                resp.send(console.log(clients));
            })
            .catch((err) => {console.log(err)});
        }
    }

    deleteClients() {
        return (req, resp) => {
            this.clientDAO.deleteClient(req)
            .then((clients) => {
                resp.send(console.log(clients));
            })
            .catch((err) => {console.log(err)});
        }
    }
};

module.exports = ClientController;