const EventEmitter = require('events');
const evento = new EventEmitter();

evento.on('mensagemEnviada', function(qqcoisa){
    console.log('ouvi esse evento', qqcoisa.nomeDoEvento);

});

