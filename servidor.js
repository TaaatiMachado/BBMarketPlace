const sqlite = require('sqlite3').verbose();
// const db = new sqlite.Database('srcconfigs/');
const express = require('express'); //Biblioteca express
const app = express();


//Rotas

//lista todoas as tarefas 

app.get("/", (req, resp) => {
    resp.send("TESTANDO ROTA");
})




app.listen(8080, () => {
    console.log(`Servidor iniciado com sucesso`);

})

