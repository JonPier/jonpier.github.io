// A--------------------------

console.log("A.");
let nets_avg=(97+112+101)/3;
nets_avg=nets_avg.toFixed(2);

let knicks_avg=(109+95+106)/3;
knicks_avg=knicks_avg.toFixed(2);

if (nets_avg>knicks_avg && nets_avg>=100) {
    console.log(`The Nets win with a ${nets_avg} average. `);
  }
  else if (knicks_avg>nets_avg && knicks_avg>=100) {
    console.log(`The Knicks win with a ${knicks_avg} average. `);
  }
  else if (knicks_avg===nets_avg && knicks_avg>100 && nets_avg>100) {
    console.log(`They're tied with ${knicks_avg} and ${nets_avg} average. `);
  }
  else
    console.log(`Nobody Wins! `);


// B----------------------
console.log("\n\nB.\n");
let bill=275;
let tip;

switch (true){
  case bill>=30 && bill<=300:
    tip=bill*0.15;
    break;
  default:
    tip=bill*0.20;
  }

let total=bill+tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${total}`)


//C------------------------
console.log("\n\nC.\n");

function celsiusToFahrenheit (temp){
  let celsiusConvert= temp*9/5+32;
  console.log(`${temp}°C is ${celsiusConvert}°F`);
}

function fahrenheitToCelsius(temp) {
  let fahrenheitConvert= (temp-32)*5/9;
  console.log( `${temp}°F is ${fahrenheitConvert}°C`);
}

let tempCelsius= 30;
let tempFahrenheit = 86;

celsiusToFahrenheit(tempCelsius);
fahrenheitToCelsius(tempFahrenheit);
