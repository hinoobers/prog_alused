const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Taringute arv: ", taringuteArv => {
    for(let i = 0; i < taringuteArv; i++) {
        let number = Math.round(Math.random() * 6);
        if(number > 6) {
            // ymardamine
            number = 6;
        } else if(number < 1) {
            // taringul ei ole numbrit alla 1
            number = 1;
        }

        console.log(number);
    }

    rl.close();
});