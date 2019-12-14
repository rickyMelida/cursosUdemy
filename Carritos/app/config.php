<?php
    /*

    *URL constantes 

    */

    define('PORT', '7879');
    define('BASEPATH', '/Cursos%20Udemy/Carritos/');
    define('URL', 'http://127.0.0.1:'.PORT.BASEPATH);

    /**
     * Constantes para los paths de los archivos
     */
    define('DS', DIRECTORY_SEPARATOR);
    define('ROOT', getcwd().DS);
    define('APP', ROOT.'app'.DS);
    define('INCLUDES', ROOT.'includes'.DS);
    define('VIEWS', ROOT.'views'.DS);

    define('ASSETS', URL.'assets/');
    define('CSS', ASSETS.'css/');
    define('IMAGES', ASSETS.'images/');
    define('JS', ASSETS.'js/');
    define('PLUGINS', ASSETS.'plugins/');


    /**
     * Constantes adicionales
     */
    //Costo del envop
     define('SHIPPING_COST', 99.90);
     




