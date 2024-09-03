const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage kirja suurus: ', kirjaSuurus => {
    rl.question('Sisestage kirja teema pealkiri: ', teemaPealkiri => {
        rl.question('Kas kirjaga on kaasas fail: ', fail => {
            if(!teemaPealkiri || (fail && kirjaSuurus > 1)) {
                console.log("Kiri on spamm");
            } else {
                console.log("Kiri ei ole spamm");
            }

            rl.close();
        })
    })
});