<?php
    require_once 'app/config.php';

    //Funcion para sacar un json en pantalla
    //echo json_encode($response);

    //Que tipo de peticion esta solicitando ajax
    if(!isset($_POST['action'])) {
        http_response_code(403);
        echo json_encode(['status' => 403]);
        die;
    }

    $action = $_POST['action'];

    //GET
    switch($action){
        case 'get':
            $cart =  get_cart();
            $output = 
            ' ';
            if(!empty($cart['products'])) {
                $output .= 
                '<div class="table-responsive">
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
                <!--- Fin del contenido del carrito  -->';
            }else {
                $output .= 'No hay productos en el  carrito ';
            }
            
            $output .=
                '<br><br>
                <!--- Total del Carrito  -->
                <table class="table">
                    <tr>
                        <th class="border-0">Subtotal</th>
                        <td class="text-success text-right border-0">'.format_currency($cart['subtotal']).'</td>
                    </tr>
                    <tr>
                        <th>Envio</th>
                        <td class="text-success text-right">'.format_currency($cart['shipment']).'</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td class="text-success text-right"> <h3 class="font-weight-bold">'.format_currency($cart['total']).'</h3></td>
                    </tr>
                </table>
                <!--- Fin del Total del Carrito  -->


                <!--- Boton de Pagar Ahora  -->
                    <button class="btn btn-info btn-lg btn-block" disabled>Pagar Ahora</button>
                <!--- Fin del boton de Pagar Ahora  -->';
            json_output(200, 'OK', $output);
        break;
        
        default:
         # Default
    }
?>