    const mostrar = () => {
    
            var pagina = $('#pagina_1');
            var task_server = '../../task_server/';


            $.ajax({
                url: '../procesos/paginacion.php',
                method: 'post',
                dataType: 'json',
                data: {pagina: pagina.attr('id')},  
                success: function(data) {
                    pagina.addClass('active');

                    ///Especificaciones para la primera tarea

                    $('#id_tarea_1').html(data[0].id_tarea);
                    $('#descripcion_1').html(data[0].des_tarea);
                    $('#fecha_gen_1').html(data[0].fecha_gen);

                    if(data[0].estado == 'Pendiente') {
                        //Cambiamos el color del texto si es un pendiente
                        $('#id_tarea_' + (i+1)).addClass('text-danger');
                        $('#descripcion_' + (i+1)).addClass('text-danger');
                        $('#fecha_gen_' + (i+1)).addClass('text-danger');


                        $('#fecha_cierre_' + (i+1)).addClass('text-danger');
                        $('#h_inicio_' + (i+1)).addClass('text-danger');
                        $('#h_fin_' + (i+1)).addClass('text-danger');
                        $('#h_h_' + (i+1)).addClass('text-danger');

                        $('#fecha_cierre_1').html('dd-mm-aaaa');
                        $('#h_inicio_1').html('00:00:00');
                        $('#h_fin_1').html('00:00:00');
                        $('#h_h_1').html('00:00:00');

                        if($('.ver_detalles')) {
                            $('.btn-ver-1').removeClass('ver_detalles');
                        }
                        $('.btn-ver-1').text('Cerrar');
                        $('.btn-ver-1').addClass('cerrar_pendientes');
                        $('.btn-ver-1').attr('id', data[0].id_tarea);
                    }else { 
                        $('#fecha_cierre_1').html(data[0].fecha_cierre);
                        $('#h_inicio_1').html(data[0].hora_i);
                        $('#h_fin_1').html(data[0].hora_f);
                        $('#h_h_1').html(data[0].horas_h);

                        if($('.cerrar_pendientes')) {
                            $('.btn-ver-1').removeClass('cerrar_pendientes');
                        }

                        $('.btn-ver-1').text('Ver Detalles');
                        $('.btn-ver-1').addClass('ver_detalles');
                        $('.btn-ver-1').attr('id', data[0].id_tarea);

                    }

                    let tareas = $('#tareas');

                    //Empezamos copiar y modificar los datos de las tareas
                    for (let  i= 1;  i<10; i++) {
                        tarea_esp = $('#tarea_esp').clone();


                        //Modificamos los nombres de id de las tareas
                        tarea_esp.find('#id_tarea_1').attr('id', 'id_tarea_' + (i+1));
                        tarea_esp.find('#descripcion_1').attr('id', 'descripcion_'+ (i+1));
                        tarea_esp.find('#fecha_gen_1').attr('id', 'fecha_gen_'+ (i+1));
                        tarea_esp.find('#fecha_cierre_1').attr('id', 'fecha_cierre_'+ (i+1));
                        tarea_esp.find('#h_inicio_1').attr('id', 'h_inicio_'+ (i+1));
                        tarea_esp.find('#h_fin_1').attr('id', 'h_fin_'+ (i+1));
                        tarea_esp.find('#h_h_1').attr('id', 'h_h_'+ (i+1));

                        tarea_esp.find('#tarea_1').attr('id', 'tarea_'+ (i+1));
                        tarea_esp.find('a').attr('href', '#tarea_'+ (i+1));

                        tarea_esp.find('.btn-ver-1').attr('id', data[i].id_tarea);

                        tarea_esp.appendTo(tareas);


                        $('#id_tarea_' + (i+1)).html(data[i].id_tarea);
                        $('#descripcion_' + (i+1)).html(data[i].des_tarea);
                        $('#fecha_gen_' + (i+1)).html(data[i].fecha_gen);
                        
                        //$('.btn-ver-'+(i+1)).attr('id', data[i].id_tarea);

                        if(data[i].estado == 'Pendiente') {
                            $('#id_tarea_' + (i+1)).addClass('text-danger');
                            $('#descripcion_' + (i+1)).addClass('text-danger');
                            $('#fecha_gen_' + (i+1)).addClass('text-danger');

                            $('#fecha_cierre_' + (i+1)).addClass('text-danger');
                            $('#fecha_cierre_' + (i+1)).html('dd-mm-aaa');

                            $('#h_inicio_' + (i+1)).addClass('text-danger');
                            $('#h_inicio_' + (i+1)).html('hh:mm:ss');

                            $('#h_fin_' + (i+1)).addClass('text-danger');
                            $('#h_fin_' + (i+1)).html('hh:mm:ss');
                            
                            $('#h_h_' + (i+1)).addClass('text-danger');
                            $('#h_h_' + (i+1)).html('hh:mm:ss');

                            if($('.ver_detalles')) {
                                $('#'+data[i].id_tarea).removeClass('ver_detalles');
                            }
                            $('#'+data[i].id_tarea).text('Cerrar');
                            $('#'+data[i].id_tarea).addClass('cerrar_pendientes');
                        }else {
                            $('#fecha_cierre_' + (i+1)).html(data[i].fecha_cierre);
                            $('#h_inicio_' + (i+1)).html(data[i].hora_i);
                            $('#h_fin_' + (i+1)).html(data[i].hora_f);
                            $('#h_h_' + (i+1)).html(data[i].horas_h);

                            if($('.cerrar_pendientes')) {
                                $('#'+data[i].id_tarea).removeClass('cerrar_pendientes');
                            }
                            $('#'+data[i].id_tarea).text('Ver Detalles');
                            $('#'+data[i].id_tarea).addClass('ver_detalles');
                        }
                        
                        
                    }
                }

            });
    }
    
        