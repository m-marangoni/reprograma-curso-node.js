const showMessage = name => `Hi, ${name}`;

function sayIt (name) {
    console.log(showMessage(name));
}

module.exports.startConversation = sayIt;