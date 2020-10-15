
const ClientController = require('../controller/ClientController');

module.exports = (app) =>{ 

    app.get('/clients', ClientController.listClients()); 
    
    app.get('/clients/:id', ClientController.listClientsId());

    app.post('/clients/add', ClientController.addClients());

    app.put('/clients/:id', ClientController.updateClients());

    app.delete('/clients/:id', ClientController.deleteClients());
 
}