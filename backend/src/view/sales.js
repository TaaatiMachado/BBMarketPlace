const salesView = (sales)=>{
    let cardSales = '';
    
    if(typeof(sales) == 'string'){
        
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
        <section class="main d-flex justify-content-around">

        <!--PRODUTO-->
        <!--Aqui entra o card de produto não encontrado-->
    
          ${sales}
      
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

    }else{
        sales.forEach(sale=>{
            cardSales += 
            `
    
            <div class="card m-5 p-3" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id do cliente: ${sale.id_client}</li>
                    <li class="list-group-item">Id do produto: ${sale.id_product}</li>
                    
                </ul>
                <div class="card-body">
                    
                    <form id="deletarVenda" action="/sales" method="POST">
                        <input type="hidden" name="_method" value="DELETE">
                        <input type="hidden" name="id" value="${sale.id}" />
                        <input type="submit" class="card-link btn-lg btn-block banana-btn" value="Remover" />
                    </form>
                    
                </div>
            </div>
            
            `
        })
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
        <section id="search" class="d-flex flex-column align-items-center">

        <ul class="nav nav-tabs mt-3" id="myTab" role="tablist">
            <li class="nav-item">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Id do Produto</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#supplier" role="tab" aria-controls="supplier" aria-selected="false">Id do Usuário</a>
            </li>
        
        </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="card d-flex flex-column justify-content-around m-4">            
                <form action="/products/sales" method="POST">
                <input type="number" class="m-4" id="searchByProductId" name="id_product" placeholder="Insira o id do produto" />
                <input type="submit" class="btn-lg banana-btn m-4" value="Buscar" />
                </form>
            </div>
        </div>

        <div class="tab-pane fade" id="supplier" role="tabpanel" aria-labelledby="profile-tab">
            <div class="card d-flex flex-column justify-content-around m-4">            
                <form action="/clients/sales" method="POST">
                    <input type="number" class="m-4" id="searchByUserId" name="id_client" placeholder="Insira o id do cliente" />
                    
                    <input type="submit" class="btn-lg banana-btn m-4" value="Buscar" />
                </form>
            </div>
        </div>
        
      </div>

            
            <input type="button" value="Adicionar Venda" data-toggle="modal" data-target="#modalCliente" class=" btn-lg banana-btn m-4" />
    
    
            <!-- Modal -->
                <div class="modal fade" id="modalCliente" tabindex="-1" role="dialog" aria-labelledby="modalClienteTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header text-center">
                        <h4 class="modal-title w-100 font-weight-bold">Adicionar Venda</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body mx-3">
                        <form action="/sales/add" method="POST">
                    
                        <div class="md-form mb-5">
                            <i class="fas fa-id-card-alt prefix grey-text"></i>
                            <input name="id_client" id="inputClient" type="number" class="form-control">
                            <label for="inputClient">Id do cliente</label>
                        </div>
                        
                        <div class="md-form mb-5">
                            <i class="fas fa-user prefix grey-text"></i>    
                            <input name="id_product" id="inputProduct" type="number" class="form-control">
                            <label for="inputProduct">Id do produto</label>
                        </div>
                    
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn-lg btn-block banana-btn">Adicionar</button>
                        <button type="button" class="btn-lg btn-block" data-dismiss="modal">Fechar</button>
                    </div>
                    </form>
                    </div>
                </div>
                </div>
    
        </section>
        <section class="main d-flex justify-content-around">
        <!--USER-->
        <!--Aqui entra o card de perfil do usuário-->
    
          ${cardSales}
      
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

}

module.exports = salesView;



