const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage oma nimi: `, nimi => {
    rl.question("Sisestage lubatud kiirus (km/h): ", suurimLubatud => {
        rl.question("Sisestage tegelik kiirus (km/h): ", tegelikKiirus => {
            rl.close();

            const over = tegelikKiirus - suurimLubatud;
            console.log(nimi + ", kiiruse ületamise eest on teie trahv", Math.min(190, (over*3)) + "€");
        });
    });
});
