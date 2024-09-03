const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage enda vanus: ', vanus => {
    rl.question('Sisestage enda sugu: ', sugu => {
        rl.question('Sisestage enda treeningu tüüp: ', treening => {
            const maxPulsiSagedus = sugu == "m" ? 220-vanus : 206-0.88*vanus;

            if(treening == "1") {
                console.log(`Pulsisagedus peaks olema vahemikus ${Math.round(maxPulsiSagedus*0.5)} kuni ${Math.round(maxPulsiSagedus*0.7)}`);
            } else if(treening == "2") {
                console.log(`Pulsisagedus peaks olema vahemikus ${Math.round(maxPulsiSagedus*0.7)} kuni ${Math.round(maxPulsiSagedus*0.8)}`);
            } else if(treening == "3") {
                console.log(`Pulsisagedus peaks olema vahemikus ${Math.round(maxPulsiSagedus*0.8)} kuni ${Math.round(maxPulsiSagedus*0.87)}`);
            } else {
                console.log("Sellist treeningu tüüpi pole olemas! (On kas 1, 2 v6i 3)");
            }


            rl.close();
        });
    });
});