const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage ainepunktide arv: ", punktideArv => {
    rl.question("Sisestage nädalate arv: ", nadalateArv => {
        rl.close();

        const ajakulu = (26*punktideArv) / nadalateArv;

        console.log(Math.round(ajakulu));
    });
});