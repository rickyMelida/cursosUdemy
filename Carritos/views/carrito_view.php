<?php require_once "./includes/inc_header.php";?>
<?php require_once "./includes/inc_navbar.php";?>

<!-- Contenido -->
<div class="container-fluid py-5">
    <div class="row">
        <!-- Products -->
        <div class="col-xl-8">
            <h1>Productos</h1>
            <div class="row">
                <?php foreach($data['products'] as $p): ?>
                    <div class="col-3 mb-3">
                        <div class="card">
                            <img src="<?php echo IMAGES.$p['imagen'];?>" class="card-img-top" alt="<?php echo $p['nombre'];?>"></img>
                            <div class="card-body p-2">
                                <h5 class="card-title text-truncate"><?php echo $p['nombre'];?></h5>
                                <p class="text-success"><?php echo format_currency($p['precio']);?></p>
                                <button class="btn btn-sm btn-success " data-toggle="tooltip" title="Agregar al carrito"><i class="fas fa-plus"></i>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                <?php endforeach;?>
            </div>
        </div>

        <!-- Cart -->
        <div class="col-xl-4 bg-light">
            <h1>Carrito</h1>
            <!--- Contenido del carrito  -->
            <div id="cart_wrapper">

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
                        <td class="text-success text-right"> <?php echo SHIPPING_COST;?> </td>
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
    </div>
    <!-- Contenido del sitio -->
</div>
<!-- Fin del Contenido -->

<?php require_once "./includes/inc_footer.php";?>

    