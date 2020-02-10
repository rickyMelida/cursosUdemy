<?php 

    function get_products() {
        //Como products esta haciendo return, todo lo que retorna va a la variable
        $products = require APP.'products.php';
        return $products;
    }

    function get_products_by_id($id) {
        $products = get_products();
        foreach($products as $i => $values) {
            if($values['id'] == $id) {
                return $products[$i];
            }
        }
        return false;
    }

    function render_view($view, $data = []) {

        if(!is_file(VIEWS.$view.'.php')) {
            //Si no existe la vista quiero que hagas esto
            echo "No existe la vista ".$view.'.php';
            die;
        }
            require_once VIEWS.$view.'.php';
    }

    function format_currency($number, $simbol='$') {
        if(!is_float($number) && !is_integer($number)) {
            $number = 0; 
        }
        return $simbol.number_format($number, 2, '.', ','); 
    }



    /**
     * 
     * ---------------------Funciones del carrito
     */

     function get_cart() {
         //Products
         // -id
         //-sku
         //- imagen
         //-nombre
         //-precio
         //-cantidad
         //Total products
         //Subtotal
         //shipment
         //Total
        //Payment url

        if(isset($_SESSION['cart'])) {
            return $_SESSION['cart'];
        }

        $cart =
        [
            'products'       => [],
            'total_products' => 0,
            'cart_totals'     => calculate_cart_totals(),
            'payment_url'    => null
        ];

        $_SESSION['cart'] = $cart;

        return $_SESSION['cart'];

     }

    function calculate_cart_totals() {
        //El carro no existe se inicializa
        if(!isset($_SESSION['cart']) || empty($_SESSION['cart']['products'])){
            $cart_totals =
            [
                'subtotal' => 0,
                'shipment' => 0,
                'total' => 0,
            ];
            $_SESSION['cart']['cart_total'] = $cart_totals;
            return $cart_totals;
        }
        
        //Calcular los totales segun los productos en carrito
        $subtotal = 0;
        $shipment = SHIPPING_COST;
        $total = 0;

        //Si no hay productos pero el carrito si existe ya
        if(empty($_SESSION['cart']['products'])) {
            $cart_totals =
            [
                'subtotal' => 0,
                'shipment' => 0,
                'total' => 0,
            ];
            $_SESSION['cart']['cart_totals'] = $cart_totals;
            return $cart_totals;
        }

        //Si ya hay productos hay que sumas las  cantidades
        foreach($_SESSION['cart']['products'] as $p ) {
            $_total = $p['cantidad'] * $p['precio'];
            $subtotal = floatval($subtotal + $_total); 
        }

        $total = floatval($subtotal + $shipment);
        $cart_totals =
            [
                'subtotal' => $subtotal,
                'shipment' => $shipment,
                'total' => $total,
            ];
            $_SESSION['cart']['cart_totals'] = $cart_totals;
            return $cart_totals;
    }

    function json_output($status=200, $msg='', $data=[]) {
        http_response_code($status);
        
        $r=
        [
            'status' => $status,
            'msg' => $msg,
            'data' => $data
        ];

        echo json_encode($r);
        die;
    }



?>