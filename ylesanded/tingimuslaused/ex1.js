const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Õhutemperatuur: ', temp => {
    if(temp > 4) {
        console.log("Ei ole jaatumise ohtu");
    } else {
        console.log("On jaatumise oht")
    }
    rl.close();
});