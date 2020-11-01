const produtosSupplierView = (fornecedores)=>{
    let cardProviders = '';
    let cardProducts = '';
    
        fornecedores.forEach((fornecedor)=>{
        
        cardProviders +=`<option value="${fornecedor.id}">${fornecedor.company_name}</option>`
    })
    /* produtos.forEach((produto)=>{
        
        cardProducts +=
        `
        <div class="card m-5 p-3" style="width: 18rem;">
            <img src="${produto.img}" class="card-img-top profile-pic">
            <div class="card-body">
                <h5 class="card-title">${produto.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id do produto: ${produto.id_product}</li>
                <li class="list-group-item">Id do fornecedor: ${produto.id_provider}</li>
                <li class="list-group-item">Avaliação: ${produto.evaluation}</li>
                <li class="list-group-item">Descrição: ${produto.description}</li>
                <li class="list-group-item">Preço: ${produto.price}</li>
                <li class="list-group-item">Quantidade: ${produto.quantity}</li>
            </ul>
            <div class="card-body">
                <input type="button" name="editarCliente" class="card-link btn-lg btn-block banana-btn"" value="Editar" data-toggle="modal" data-target="#modalEdit${produto.id_product}" />
                <!-- Modal Editar -->
            <div class="modal fade" id="modalEdit${produto.id_product}" tabindex="-1" role="dialog" aria-labelledby="modalClienteTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header text-center">
                    <h4 class="modal-title w-100 font-weight-bold">Editar Produto</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body mx-3">
                    <form action="/products/update" method="POST">
                    <input type="hidden" name="_method" value="PUT">
                    <input type="hidden" name="id_product" value="${produto.id_product}" />
                    <div class="md-form mb-5">
                        <i class="fas fa-user prefix grey-text"></i>    
                        <input name="name" id="inputName" type="text" class="form-control" value="${produto.name}">
                        <label for="inputName">Nome</label>
                    </div>
                    
                    <div class="md-form mb-5">
                        <i class="fas fa-id-card-alt prefix grey-text"></i>
                        <input name="id_provider" id="inputProvider" type="text" class="form-control" value="${produto.id_provider}">
                        <label for="id_provider">Id fornecedor</label>
                    </div>
                    
                    <div class="md-form mb-5">
                        <i class="fab fa-readme prefix grey-text"></i>
                        <input name="description" id="inputDescription" type="text" class="form-control" value="${produto.description}">
                        <label for="inputDescription">Descrição</label>
                    </div>

                    <div class="md-form mb-5">
                        <i class="far fa-chart-bar prefix grey-text"></i>
                        <input name="evaluation" id="inputEvaluation" type="text" class="form-control" value="${produto.evaluation}">
                        <label for="inputEvaluation">Avaliação</label>
                    </div>
                    
                    <div class="md-form mb-5">
                        <i class="fas fa-dollar-sign prefix grey-text"></i>   
                        <input name="price" id="inputPrice" type="text" class="form-control" value="${produto.price}">
                        <label for="inputPrice">Preço</label>
                    </div>
                    
                    <div class="md-form mb-5">
                        <i class="fas fa-calculator prefix grey-text"></i>
                        <input name="quantity" id="inputQuantity" type="number" class="form-control" value="${produto.quantity}">
                        <label for="inputQuantity">Quantity</label>
                    </div>
                    
                    <div class="md-form mb-5">
                        <i class="fas fa-user-circle prefix grey-text"></i>
                        <input name="img" type="file" id="inputAdress" class="form-control">
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="submit" class="btn btn-primary">Atualizar</button>
                </div>
                </form>
                </div>
            </div>
            </div>
                
                <form id="deletarCliente" action="" method="POST">
                    <input type="hidden" name="_method" value="DELETE">
                    <input type="hidden" name="id_product" value="${produto.id_product}" />
                    <input type="submit" class="card-link btn-lg btn-block banana-btn" value="Remover" />
                </form>
                
            </div>
        </div>
        
        `
    }) */

    return `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <link rel="shortcut icon" type="image/x-icon" href="assets/img/IMG_3522.PNG">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/estatico/assets/css/basicStyle.css">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
        <!-- Google Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
        <!-- Bootstrap core CSS -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
        <!-- Material Design Bootstrap -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet">
        <title>Banana Banana Marketplace</title>
    </head>
    <body>
        <!-- NAVBAR -->
        <nav class="navbar navbar-dark nav-color d-flex flex-row justify-content-center">
            <a class="navbar-brand" href="#">
              <img src="/estatico/assets/img/IMG_3524.PNG" width="150" class="d-inline-block align-top" loading="lazy">
            </a>
          </nav>
    <main class="d-flex flex-column">
    <section id="search" class="d-flex flex-column align-items-center p-3">
        <div class="card d-flex flex-column justify-content-center m-4">            
            <form action="/products/suppliers" method="POST">

            <label class="ml-4" for="searchById">Fornecedor: </label>

            <select id="searchById" name="id_provider">
            <option value="teste">Selecione um fornecedor</option>
                ${cardProviders}
                
            </select>

            <input type="submit" class="btn-lg banana-btn m-4" value="Buscar" />
            </form>
        </div>
        <input type="button" value="Adicionar Produto" data-toggle="modal" data-target="#modalCliente" class=" btn-lg banana-btn m-4" />

    </section>  
    </main>
    
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <!-- JQuery -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.3/js/tether.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.2.0/js/mdb.min.js"></script>
    </body>
    </html>`;
}

module.exports = produtosSupplierView;