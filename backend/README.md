# BB MarketPlace 
Quer testar em produção ? acesse o link : 

![image](https://user-images.githubusercontent.com/56409950/97031277-644b3600-1536-11eb-8955-b2d1eb179061.png)

 API REST para um marketplace. As entidades envolvidas nesse sistema são:
 
  - Clientes/usuários
  - Produtos
  - Lojas/fornecedores
  - Compras
  
# Features

  - Fornecedor cadastra um produto
  - Cliente visualiza o produto
  - Cliente realiza compra do produto


You can also:
  - Visualizar produtos 
  - Autenticar email e senha 
  - Inserir avatar

# Deseja colaborar com o projeto? 
 Clone o repositorio com o comando: git clone "https://github.com/TaaatiMachado/BBMarketPlace.git"
 
 Abra o terminal e execute npm install, as dependencias do projeto serão baixadas para node_module
 para iniciar o projeto na sua maquina, execute o comando: npm start 
# Dependencies
> "express": "^4.17.1"
> "method-override": "^3.0.0"
>  "nodemon": "^2.0.5",
> "sqlite": "^4.0.15"
> "sqlite3": "^5.0.0"


### Tech

Projeto foi desenvolvido com o seguinte padrão:

* [Bootstrap](https://getbootstrap.com/) - HTML e CSS enhanced for web apps!
* [node.js](https://nodejs.org/en/) - evented I/O for the backend
* [Express](https://expressjs.com/pt-br/) - fast node.js network app framework 
* [Sqlite](https://www.sqlite.org/index.html) - database
* [MVC](https://pt.wikipedia.org/wiki/MVC) - acrônimo de Model-View-Controller

# HTTP e CRUD
Metodo GET Podemos Listar Clientes/Ususuarios, Fornecedores, Produtos e Compas realizadas.

### GET. endpoints - Clientes/Users
```
{ 
 "name": "Cauê Mário Roberto Jesus",
 "email": "cauemariorobertojesus@arcante.com.br",
 "password":"wqayGMX6df", 
 "cpf" :"132.433.123-45",
 "phone":"(11) 98281-5199",
 "address":"Rua Rogério Cardoso "
} 
```
### GET. endpoints - Produtos
```
{ 
 "evaluation": "Bom",
 "name": "Fone de ouvido",
 "description":"Fone de ouvido sem fio", 
 "price" :"100,00",
 "quantity":"1",
 "id_provider":""
} 
```
### GET. endpoints - Lojas/fornecedor 
```
{ 
 "name": "AMAZAO",
 "phone": "1132212312",
 "company_name":"AMZO", 
 "eni" :"48.730.794/0001-75",
 "address":"Av. avenida avenida",
} 
```
### GET. endpoints - Compras
```
{ 
 "id_product": "1",
 "id_client": "3",
} 
```

# POST. 
##### endpoints - Clientes/Users, Produtos, Lojas/fornecedor, Compras

Seguindo a linha dos exemplos acima no metodo GET.

Podemos com o metodo **POST** inserir novos Clientes, Produtos, Fornecedores e Compras com ids assosciados.

# PUT.
##### endpoints - Clientes/Users, Produtos, Lojas/fornecedor, Compras

Seguindo a linha dos exemplos acima no metodo POST.

Podemos com o metodo **PUT** atualizar/modificar Clientes, Produtos, Fornecedores.

# DELETE.
##### endpoints - Clientes/Users, Produtos, Lojas/fornecedor, Compras

Seguindo a linha dos exemplos acima no metodo PUT.

Podemos com o metodo **DELETE** deletar Clientes, Produtos, Fornecedores e Compras(Cancelamento).

#### TESTES COM MOCHA 


### Developers:
![image](https://user-images.githubusercontent.com/56409950/97037700-0ae80480-1540-11eb-9e18-f1a94a9f8180.png)


Want to contribute? Great!



 
