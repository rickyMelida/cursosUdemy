var cantidadDeNumerosEnviados = 15;
switch (cantidadDeNumerosEnviados) {
    case 25: {
        console.log('Son veinte y cinco');
        break;
    }
    case 20: {
        console.log('Son veinte');
        break;
    }
    case 15: {
        console.log('Son quince');
        break;
    }
    default: {
        console.log('No se cumplio ninguna de las expresiones');
    }
}
//1 Menu de canciones
//2 Menu de albunes
//3 Menu del perfil
//Enumeramos las distintas opciones del menu con el tipo de dato enum
var tipoMenu;
(function (tipoMenu) {
    tipoMenu[tipoMenu["canciones"] = 1] = "canciones";
    tipoMenu[tipoMenu["albums"] = 2] = "albums";
    tipoMenu[tipoMenu["perfil"] = 3] = "perfil";
})(tipoMenu || (tipoMenu = {}));
var menu = 3;
switch (menu) {
    case tipoMenu.canciones: {
        console.log('Accede a las canciones');
        break;
    }
    case tipoMenu.albums: {
        console.log('Accede a los albunes');
        break;
    }
    case tipoMenu.perfil: {
        console.log('Accede al perfil');
        break;
    }
    default: {
        console.log('El menu no existe');
    }
}
