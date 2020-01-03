<?php
    require_once 'app/config.php';

    //Respuesta que regresa a Ajax
    $products = get_products();
    $response = 
    [
        'status' => 200,
        'mensaje' => 'Hola soy tu primera respuesta en ajax',
        'data' => $products

    ];

    //Funcion para sacar un json en pantalla
    echo json_encode($response);

?>