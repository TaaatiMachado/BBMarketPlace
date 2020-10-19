function loginView(){
    return `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <link rel="shortcut icon" type="image/x-icon" href="assets/img/IMG_3522.PNG">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="assets/css/basicStyle.css">
        <title>Banana Banana Marketplace</title>
    </head>
    <body>
        <!-- NAVBAR -->
        <nav class="navbar navbar-dark nav-color d-flex flex-row justify-content-center">
            <a class="navbar-brand" href="#">
              <img src="assets/img/IMG_3524.PNG" width="150" class="d-inline-block align-top" loading="lazy">
            </a>
          </nav>
    
    
    <main class="d-flex justify-content-around">
    
      <!--LOGIN-->
      <div class="card m-5 p-3 d-flex flex-column" style="width: 35rem;">
        <h3 class="mb-4"> Login </h3>
        <form action="/login" method="POST" style="width: 33rem;">
          <div class="form-group">
            <label for="inputEmail">Email</label>
            <input type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp" name="email">
          </div>
          <div class="form-group">
            <label for="inputPassword">Password</label>
            <input type="password" class="form-control" id="inputPassword" name="password">
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="rememberCheck">
            <label class="form-check-label" for="rememberCheck">Mantenha-me conectado</label>
          </div>
          <button type="submit" class="btn btn-lg btn-block banana-btn">Entrar</button>
        </form>
      </div>
    
    
    </main>
    
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}

module.exports = loginView;