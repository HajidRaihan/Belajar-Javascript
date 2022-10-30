// const coffeeStock = require("./state");

// const makeCoffee = (type, miligrams) => {
//   if (coffeeStock[type] >= miligrams) {
//     console.log("Kopi berhasil dibuat!");
//   } else {
//     console.log("Biji kopi habis!");
//   }
// };

// makeCoffee("robusta", 80);

// const { coffeeStock, isCoffeMachineReady } = require("./state");

// console.log(coffeeStock);
// console.log(isCoffeMachineReady);

import coffeeStock from "./state.js";

const displayStock = (stock) => {
  for (const type in stock) {
    console.log(type);
  }
};

displayStock(coffeeStock);
