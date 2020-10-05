const express = require('express'); //Bibioteca express
const app = express(); //Servidor
const port = process.env.PORT || 3000; //Porta

//Tomada do servidor
app.listen(port, () =>{
    console.log("Servidor funcionando na porta " + port);
});
