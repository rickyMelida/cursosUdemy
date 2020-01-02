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
            'products' => [],
            'total_products' => 0,
            'subtotal' => 0,
            'shipment' => 0,
            'total' => 0,
            'payment_url' => null
        ];

        $_SESSION['cart'] = $cart;

        return $_SESSION['cart'];

     }
?>