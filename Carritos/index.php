<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Proyecto 1 - Carrito</title>

    <!--Bootstrap 4-->
    <!--link rel="stylesheet" href="assets/css/bootstrap.min.css"-->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css"> 


    <!-- Font awesome-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">


    <!--  WaitMe   -->
    <link rel="stylesheet" href="assets/plugins/waitMe/waitMe.min.css">
</head>
<body>

    <!-- Barra de navegacion -->
    <div class="w-100">
    
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#"> <i class="fas fa-shopping-cart"></i> Carritos <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tienda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Carrito</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Buscar..">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    </div>
    <!-- Fin de la Barra de navegacion -->
    

    <!-- Contenido -->
    <div class="container-fluid py-5">
        <div class="row">
            <div class="col-xl-8">
                <h1>Productos</h1>
                <div class="row">
                    <div class="col-3 mb-3">
                        <div class="card">
                            <img src="https://placeimg.com/300/300/tech" class="card-img-top"></img>
                            <div class="card-body p-2">
                                <h5 class="card-title text-truncate">Titulo del producto lorem ipsum con texto mas largo</h5>
                                <button class="btn btn-sm btn-success " data-toggle="tooltip" title="Agregar al carrito"><i class="fas fa-plus"></i>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 mb-3">
                        <div class="card">
                            <img src="https://placeimg.com/300/300/tech" class="card-img-top"></img>
                            <div class="card-body p-2">
                                <h5 class="card-title text-truncate">Titulo del producto lorem ipsum con texto mas largo</h5>
                                <button class="btn btn-sm btn-success " data-toggle="tooltip" title="Agregar al carrito"><i class="fas fa-plus"></i>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 mb-3">
                        <div class="card">
                            <img src="https://placeimg.com/300/300/tech" class="card-img-top"></img>
                            <div class="card-body p-2">
                                <h5 class="card-title text-truncate">Titulo del producto lorem ipsum con texto mas largo</h5>
                                <button class="btn btn-sm btn-success " data-toggle="tooltip" title="Agregar al carrito"><i class="fas fa-plus"></i>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 mb-3">
                        <div class="card">
                            <img src="https://placeimg.com/300/300/tech" class="card-img-top"></img>
                            <div class="card-body p-2">
                                <h5 class="card-title text-truncate">Titulo del producto lorem ipsum con texto mas largo</h5>
                                <button class="btn btn-sm btn-success " data-toggle="tooltip" title="Agregar al carrito"><i class="fas fa-plus"></i>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 mb-3">
                        <div class="card">
                            <img src="https://placeimg.com/300/300/tech" class="card-img-top"></img>
                            <div class="card-body p-2">
                                <h5 class="card-title text-truncate">Titulo del producto lorem ipsum con texto mas largo</h5>
                                <button class="btn btn-sm btn-success " data-toggle="tooltip" title="Agregar al carrito"><i class="fas fa-plus"></i>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 mb-3">
                        <div class="card">
                            <img src="https://placeimg.com/300/300/tech" class="card-img-top"></img>
                            <div class="card-body p-2">
                                <h5 class="card-title text-truncate">Titulo del producto lorem ipsum con texto mas largo</h5>
                                <button class="btn btn-sm btn-success " data-toggle="tooltip" title="Agregar al carrito"><i class="fas fa-plus"></i>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 bg-light">
                <h1>Carrito</h1>
                <!--- Contenido del carrito  -->
                <div class="table-responsive">
                    <table class="table table-hover table-striped table-sm">
                        <thead>
                            <tr>
                                <th >Producto</th>
                                <th class="text-center">Cantidad</th>
                                <th class="text-center">Total</th>
                                <th class="text-right"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="align-middle">
                                    Producto 1
                                    <small class="d-block text-muted">SKU 123456789</small>
                                </td>
                                <td class="align-middle text-center" width="5%">
                                    <input type="number" value="1" min="0" max="50" class="form-control form-control-sm">
                                </td>
                                <td class="align-middle text-center">$149.90</td>
                                <td class="text-right align-middle"><i class="fas fa-times text-danger"></i></td>
                            </tr>
                            <tr>
                                <td class="align-middle">
                                    Producto 2
                                    <small class="d-block text-muted">SKU 123456789</small>
                                </td>
                                <td class="align-middle text-center" width="5%">
                                    <input type="number" value="1" min="0" max="50" class="form-control form-control-sm">
                                </td>
                                <td class="align-middle text-center">$95.90</td>
                                <td class="text-right align-middle"><i class="fas fa-times text-danger"></i></td>
                            </tr>
                            <tr>
                                <td class="align-middle">
                                    Producto 3
                                    <small class="d-block text-muted">SKU 123456789</small>
                                </td>
                                <td class="align-middle text-center" width="5%">
                                    <input type="number" value="1" min="0" max="50" class="form-control form-control-sm">
                                </td>
                                <td class="align-middle text-center">$42.20</td>
                                <td class="text-right align-middle"><i class="fas fa-times text-danger"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button class="btn btn-sm btn-danger">Vaciar Carrito</button>
                <!--- Fin del contenido del carrito  -->
                <br><br>
                <!--- Total del Carrito  -->
                <table class="table">
                    <tr>
                        <th class="border-0">Subtotal</th>
                        <td class="text-success text-right border-0">$250.50</td>
                    </tr>
                    <tr>
                        <th>Envio</th>
                        <td class="text-success text-right">$100.00</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td class="text-success text-right"> <h3 class="font-weight-bold">$350.50</h3></td>
                    </tr>
                </table>
                <!--- Fin del Total del Carrito  -->


                <!--- Boton de Pagar Ahora  -->
                    <button class="btn btn-info btn-lg btn-block">Pagar Ahora</button>
                <!--- Fin del boton de Pagar Ahora  -->


            </div>
        </div>
        <!-- Contenido del sitio -->
    </div>
    <!-- Fin del Contenido -->


    <!--  Footer --->
    <div class="container-fluid bg-light py-5">
        <footer id="footer">
            <div class="row">
                <div class="col-xl-4">
                    <ul class="list-unstyled">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">RSS</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">GitHub</a></li>
                    </ul>
                </div>
                <div class="col-xl-4">
                    <ul class="list-unstyled">
                        <li><a href="#">Tienda</a></li>
                        <li><a href="#">Carrito</a></li>
                        <li><a href="#">Terminos y condiciones</a></li>
                    </ul>
                </div>
                <div class="col-xl-4 text-right">
                    <p>Desarrollado por <a href="#">Ricardo Melida</a>.</p>
                </div>
            </div>
        </footer>
    </div>
    <!-- Fin del Footer --->


    <!-- JQuery 3.4.1 -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    
    <!--  Popper JS-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        
    <!-- Bootstrap 4-->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>


    <!--  Sweet Alert 2-->
    <script src="assets/js/sweetalert2.all.js"></script>

    <!--  WaitMe   -->
    <script src="assets/plugins/waitMe/waitMe.min.js"></script>

    <script>
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    </script>
</body>
</html>