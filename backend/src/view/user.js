function newUser(produto, clientes) {
    let cardUser = '';
    let cardProd = '';
    clientes.forEach(cliente=>{
      cardUser += 
    `<div class="card m-5 p-3 align-self-baseline" style="width: 18rem;">
        <img src="/estatico/assets/img/IMG_3520.PNG" class="card-img-top profile-pic" alt="..." >>
        <div class="card-body">
            <h5 class="card-title">${cliente.name}</h5>
            <p class="card-text">Bem-vindo(a)!</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Comprar</li>
            <li class="list-group-item">Produtos</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Logout</a>
            <a href="#" class="card-link">Configs</a>
        </div>
    </div>`
    })
    

    produto.forEach (produto => {
        
        cardProd +=   
        `<div class="card m-5 p-3 justify-content-around" style="width: 13rem;" data-id-produto="${produto.id_product}">
        <img src="${produto.img}" class="card-img-top" style="height: 12.4rem; width: auto;">>
        <div class="card-body">
          <h5 class="card-title">${produto.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${produto.description}</li>
          <li class="list-group-item">${produto.evaluation}</li>
          <li class="list-group-item">${produto.price}</li>
        </ul>
        <div class="card-body d-flex flex-row justify-content-around ">
            <a href="#" class="btn banana-btn mr-2 align-self-end">COMPRAR</a>
            <a href="#" class="btn banana-btn align-self-end"> ♥ </a>
        </div>
        </div>`
    
    
    });


    return `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <link rel="shortcut icon" type="image/x-icon" href="assets/img/IMG_3522.PNG">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/estatico/assets/css/basicStyle.css">
        <title>Banana Banana Marketplace</title>
    </head>
    <body>
        <!-- NAVBAR -->
        <nav class="navbar navbar-dark nav-color d-flex flex-row justify-content-center">
            <a class="navbar-brand" href="#">
              <img src="/estatico/assets/img/IMG_3524.PNG" width="150" class="d-inline-block align-top" loading="lazy">
            </a>
          </nav>
    <main class="d-flex justify-content-around ">
    
      <!--USER-->
      <!--Aqui entra o card de perfil do usuário-->

        ${cardUser}
    
      <!--PRODUTOS-->
      <div class="card m-5 d-flex flex-row flex-wrap justify-content-around">
        <!--Aqui entram os cards de produtos-->

        ${cardProd}
        
      </div>
    </main>
    
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    </body>
    </html>`;

    };


module.exports = newUser;