const EventEmitter = require('events');

//const events = new EventEmitter();

//function enviar(mensagem){
 //   console.log('enviando mensagem', mensagem);
//   events.emit('mensagemEnviada', mensagem);
//}

//module.exports.enviar = enviar;

class EnviaMensagem extends EventEmitter {
    enviar(mensagem) {
        this.emit('mensagemEnviada', mensagem);
        console.log('enviando mensagem', mensagem);
    };
};
module.exports = EnviaMensagem;