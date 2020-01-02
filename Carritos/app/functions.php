<?php 

   function get_products() {
       //Como products esta haciendo return, todo lo que retorna va a la variable
       $products = require_once APP.'products.php';
       return $products;
   }

   //function render_view($view, $data = []) {
    function render_view($view) {

        if(!is_file(VIEWS.$view.'.php')) {
            //Si no existe la vista quiero que hagas esto
            echo "No existe la vista ".$view.'.php';
            die;
        }else {
            require_once VIEWS.$view.'.php';

        }
        
   }

?>