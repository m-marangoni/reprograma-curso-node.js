const EventEmitter = require('events');
const event = new EventEmitter();

event.on('mensagemEnviada', function() {
   console.log('ouvi esse evento!');
});

event.emit('qualquer coisa aqui');  //nomes de eventos sempre devem indicar algo que aconteceu


// enviando dados adicionais

event.on('mensagemEnviada', function(qqcoisa){
    console.log('ouvi esse evento', qqcoisa.nomeDoEvento);

});
event.emit('mensagemEnviada', {nomeDoEvento: 'mensagemEnviada'});

