$(document).ready(function() {
    //Cargar el carro
    function load_cart() {
        var wrapper = $('#cart_wrapper'),
        action = 'get';

        //Peticion ajax
        $.ajax({
            url: 'ajax.php',
            type: 'POST',
            dataType: 'JSON',
            data:
            {
                action
            },
            beforeSend: function() {
                wrapper.waitMe();
            }
        }).done(function(res){
            if(res.status == 200) {
                wrapper.html(res.data);
            }
            console.log(res);
        }).fail(function(err) {
            Swal.fire('Ups!', 'Ocurrio un error','error');
            return false;
        }).always(function(){
            console.log('Ejecutando always');
            setTimeout(function() {
                wrapper.waitMe('hide');
            }, 3500);
        });


    };

    load_cart();
    //Agregar al carro al dar click al boton
    //Actualizar las cantidades del carro si el producto ya existe dentro
    
    //Actualizar carro del input
    
    //Barrar elemento del carro
    
    //Vaciar carro
    
    //Realizar pago
});