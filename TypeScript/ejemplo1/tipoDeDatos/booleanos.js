var esNuevo = false;
var deseaImprimir = true;
var juan = 'juan';
var juan2 = 'Juan';
var dato1 = 100;
var dato2 = 10;
var aceptarDescuento = (12 + 18 == 30);
var sonNombreIguales = (juan == juan2);
var sonAmbosVerdadero = aceptarDescuento && sonNombreIguales;
var compararaNumeros = (dato1 != dato2);
var algunoEsIgual = aceptarDescuento || sonNombreIguales;
var esAlgunaVerdadera = aceptarDescuento || sonNombreIguales || sonAmbosVerdadero || compararaNumeros || algunoEsIgual;
var sonTodasVerdaderas = aceptarDescuento && sonNombreIguales && sonAmbosVerdadero && compararaNumeros && algunoEsIgual;
/*console.log('Este booleano es ' + aceptarDescuento);
console.log('Este booleano es ' + sonNombreIguales);
console.log('Son en verdad ambos verdaderos ' + sonAmbosVerdadero)
console.log('Hay alguno que es verdadero ' + algunoEsIgual)
console.log('En verdad dato1 es diferente a dato2 ' + compararaNumeros)


console.log('Hay alguna variable tipo boolean que es verdadera ' + esAlgunaVerdadera)
console.log('Todas las variables tipo boolean son verdadera ' + sonTodasVerdaderas)*/
