const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage astme alus: `, alus => {

  rl.question(`Sisestage astme astendaja: `, astendaja => {
    rl.close();

    const vastus = alus**astendaja;
    console.log(vastus);
  });
});
