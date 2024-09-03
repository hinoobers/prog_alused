const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Mitu poialpoissi tahab ounu: ", poialpoisid => {
    let araAntud = 0;
    for(let i = 0; i < poialpoisid; i++) {
        if(Math.random() < 0.5) {
            araAntud += 1;
            console.log("1");
        } else {
            araAntud += 2;
            console.log("2");
        }
    }

    console.log("Lumivalgekesele jai " + (14-araAntud));
    rl.close();
});