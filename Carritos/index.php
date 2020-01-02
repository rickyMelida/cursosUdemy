<!-- PHP y sus funciones predefinidas estan todas atras de esto -->
<?php 
    require_once "./app/config.php";
    
    $data = 
    [
        'title' => 'Tienda de carrito', 
        'products' => get_products()
    ];

    //Render de la vista
    render_view('carrito_view', $data);
   
?>