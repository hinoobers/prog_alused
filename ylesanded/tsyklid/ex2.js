const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage ringide arv: ', ringideArv => {
    let porganditeArv = 0;

    for(let i = 0; i <= ringideArv; i++) {
        if(i % 2 == 0) { // iga teine ring
            porganditeArv += i;
            //console.log("Lisasin ", i);
        }
    }

    rl.close();
    console.log("Porgandite koguarv on " + porganditeArv);
});