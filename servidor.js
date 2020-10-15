const express = require('express'); 
const app = express();
const routesClient = require('./src/routes/routesclient.js')
const routesProduct = require('./src/routes/routesproduct.js')
const routessales = require('./src/routes/routessale.js')
const routessupplier = require('./src/routes/routessale.js')
const bodyParser = require('body-parser')

routesClient(app)
routesProduct(app)
routessales(app)
routessupplier(app)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(8080, () => {
    console.log(`Servidor iniciado com sucesso`);

});

module.exports = app;