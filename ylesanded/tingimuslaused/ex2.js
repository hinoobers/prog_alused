const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage Leedu perenimi? ', nimi => {
    if(nimi.endsWith("ne")) {
        console.log("Abielus");
    } else if(nimi.endsWith("te")) {
        console.log("Vallaline");
    } else if(nimi.endsWith("e")) {
        console.log("Maaramata");
    } else {
        console.log("Pole leedulanna perekonnanimi");
    }
    rl.close();
});