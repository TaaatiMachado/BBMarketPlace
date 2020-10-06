const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../configs/database.db');

const CLIENTS = `
    CREATE TABLE IF NOT EXISTS CLIENTS (
        id_client INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        password INTEGER,
        cpf INTEGER,
        phone INTEGER,
        address TEXT
    )
`;

const PRODUCTS = `
    CREATE TABLE IF NOT EXISTS PRODUCTS (
        id_product INTEGER PRIMARY KEY AUTOINCREMENT,
        evaluation INTEGER,
        name TEXT,
        description TEXT,
        price REAL,
        quantity INTEGER,
        id_provider INTEGER
    )
`;

const PROVIDERS = `
    CREATE TABLE IF NOT EXISTS PROVIDERS (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        phone INTEGER,
        company_name TEXT,
        eni INTEGER,
        address TEXT
    )
`;

const PURCHASES = `
    CREATE TABLE IF NOT EXISTS PURCHASES (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_product INTEGER,
        id_client INTEGER
       
    )
`;







const ADD_CLIENTS = `
    INSERT INTO CLIENTS (
        name,
        email,
        password,
        cpf,
        phone,
        address
    )
    VALUES 
        ('Sophia Lavínia', 'sosolavi@ci.com.br', 'br3434', '12345678933', '1113213132', 'Av. avenida avenida'),
        ('Marlene Isabelly', 'marl@gmailc.om', 'br3434', '12345678944', '1113213132', 'Av. avenida avenida'),
        ('Nat Kamilly', 'nnnn@ulbra.com', 'br3434', '12345678955', '1113213132', 'Av. avenida avenida')


`;

const ADD_PRODUCTS = `
    INSERT INTO PRODUCTS (
        evaluation,
        name,
        description,
        price,
        quantity,
        id_provider
    )
    VALUES 
        ('Bom', 'Fone de ouvido', 'Fone de ouvido sem fio', '100,00', '1', '000001'),
        ('Otimo', 'Iphone X pro ', 'Smartphone', '4000,00', '1', '000023'),
        ('Perfeito', 'Mi band5', 'Pulseira', '191,20', '1', '000032')


`;
const ADD_PROVIDERS = `
    INSERT INTO PROVIDERS (
        name,
        phone,
        company_name,
        eni,
        address
    )
    VALUES 
        ('AMAZAO', '1132212312', 'AMZO','48.730.794/0001-75', 'Av. avenida avenida'),
        ('ZAO', '1187786555', 'ZAOama','12.199.552/0001-50', 'Av. 123 avenida'),
        ('AMA', '1131111312', 'AMAzaO','32.123.794/0001-34', 'Av. agora foi')


`;

const ADD_PURCHASES = `
    INSERT INTO PURCHASES (
        id_product,
        id_client
    )
    VALUES 
        ('', ''),
        ('', ''),
        ('', '')


`;

db.serialize(() => {
    db.run(CLIENTS, (err) => {
        if (err) {
            console.log('Erro na criação da tabela de CLIENTS');
            process.exit(1);
        }
    });
    db.run(PRODUCTS, (err) => {
        if (err) {
            console.log('Erro na criação da tabela de PRODUCTS');
            process.exit(1);
        }
    });
    db.run(PROVIDERS, (err) => {
        if (err) {
            console.log('Erro na criação da tabela de PROVIDERS');
            process.exit(1);
        }
    });
    db.run(PURCHASES, (err) => {
        if (err) {
            console.log('Erro na criação da tabela de ');
            process.exit(1);
        }
    });
    db.run(ADD_CLIENTS, (err) => {
        if (err) {
            console.log('Erro ao popular tabela clients   ');
            process.exit(1);
        }
    });
    db.run(ADD_PRODUCTS, (err) => {
        if (err) {
            console.log('Erro ao popular tabela products');
            process.exit(1);
        }
    });
    db.run(ADD_PROVIDERS, (err) => {
        if (err) {
            console.log('Erro ao popular tabela PROVIDERS');
            process.exit(1);
        }
    });
    db.run(ADD_PURCHASES, (err) => {
        if (err) {
            console.log('Erro ao popular tabela PROVIDERS');
            process.exit(1);
        }
    });
});
