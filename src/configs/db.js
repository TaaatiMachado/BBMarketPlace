const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../configs/database.db');


process.on('SIGINT', () =>
    db.close(() => {
        console.log('Banco de dados encerrado!');
        process.exit(0);
    })
);

module.exports = db;