//listener a partir da instancia
const enviaMensagem = require('./enviamensagem.js');
const mensagem = new enviaMensagem();

mensagem.on('mensagemEnviada', mensagem => {
    console.log(`A mensagem "${mensagem}" foi enviada com sucesso!`);
});

    mensagem.enviar('Olá mundo!');



