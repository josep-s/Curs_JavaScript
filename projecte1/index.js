const { read } = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Pregunta: ', function(resposta) {
    console.log('La resposta és', resposta);
    rl.close();
});