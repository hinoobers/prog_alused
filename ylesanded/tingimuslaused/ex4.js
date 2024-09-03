const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Kas soovite istekoha valida ("ise") voi loosida ("loos")? ', kohaValikuSoov => {
    if(kohaValikuSoov == "ise") {
        rl.question('Kas soovite istuda akna aares ("akken") voi mitte ("muu")? ', kohaValik => {
            console.log(`Valisite ise. ${kohaValik == "muu" ? "Vahekaigukoht" : "Aknakoht"}`);
            rl.close();
        });
    } else {
        const rand = Math.random() * 100;
        if(rand <= 33) {
            console.log("Istekoht loositi. Aknakoht");
        } else {
            console.log("Istekoht loositi. Vahekaigukoht");
        }

        rl.close();
    }
});