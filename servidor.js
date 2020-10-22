const express = require('express'); 
const app = express();
const routesClient = require('./src/routes/routesclient.js')
const routesProduct = require('./src/routes/routesproduct.js')
//const routessales = require('./src/routes/routessale.js')
const routessupplier = require('./src/routes/routessupplier.js')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.use('/estatico', express.static('src/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
  }))
//console.log(express)

routesClient(app)
 
routesProduct(app)
//routessales(app)
routessupplier(app)




app.listen(8080, () => {
    console.log(`Servidor iniciado com sucesso`);

});

module.exports = app;