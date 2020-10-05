const sqlite3 = require('sqlite3').verbose(); //Importação do sqlite3
const db = new sqlite3.Database('configs/database.db'); //Instância do banco de dados

//Executa as instruções em fila
db.serialize(() => {
    //Criação de tabelas do banco de dados
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(255),
        email VARCHAR(255),
        tin BIGINT,
        phone BIGINT,
        adress VARCHAR(255)
    );`);
    db.run(`CREATE TABLE IF NOT EXISTS products (
        id BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        evaluation BIGINT,
        name VARCHAR(255),
        description text,
        price DOUBLE,
        quantity BIGINT,
        id_provider BIGINT
    );`);
    db.run(`CREATE TABLE IF NOT EXISTS providers (
        id BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(255),
        phone BIGINT,
        company_name VARCHAR(255),
        eni BIGINT,
        adress VARCHAR(255)
    );`);
    db.run(`CREATE TABLE IF NOT EXISTS purchases (
        id BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        id_product BIGINT,
        id_user BIGINT
      );`);
})


//Encerra banco de dados
process.on('SIGINT', () => {
    db.close(() => {
        console.log('banco de dados encerrado!');
        process.exit(0);
    });
});