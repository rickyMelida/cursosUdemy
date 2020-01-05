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
            $html = '<h1>Estoy cargando con Ajax</h1>';
            json_output(200, 'OK', $html);
        break;
        
        default:
         # Default
    }
?>