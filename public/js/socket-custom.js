
var socket = io(); 

//Escuchar información
socket.on('connect', function(){
    console.log('Conectado al servicio');
});    
socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
});

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'kimberlyn',
    mensaje: 'Hola Mundo'
}, function(resp){
    console.log('respuesta server: ', resp);
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ', mensaje);
});