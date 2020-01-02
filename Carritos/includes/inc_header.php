<!DOCTYPE html>
<html lang="es">
<head>
    <base href="<?php echo BASEPATH;?>">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Usamos el operador ternario para hacer el titulo -->
    <title><?php echo (isset($data['title']) ? $data['title'] : 'Proyecto 01 - Carrito');?></title>

    <!--Bootstrap 4-->
    <link rel="stylesheet" href="<?php echo CSS.'bootstrap.min.css';?>"> 


    <!-- Font awesome-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">


    <!--  WaitMe   -->
    <link rel="stylesheet" href="assets/plugins/waitMe/waitMe.min.css">
</head>
<body>
    