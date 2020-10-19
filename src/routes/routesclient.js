
const ClientController = require('../controller/ClientController');

module.exports = (app) =>{ 

    app.get('/', ClientController.loginClient());

    app.post('/login', ClientController.loggedClient());

    app.get('/clients', ClientController.listClients()); 
    
    //app.get('/clients/:id', ClientController.listClientsId());

    app.post('/clients/add', ClientController.addClients());

    app.put('/clients/update', ClientController.updateClients());

    app.delete('/clients', ClientController.deleteClients());
 
}