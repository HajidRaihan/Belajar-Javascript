//-----------concurency-------------------------
// console.log("selamat datang");
// setTimeout(() => {
//   console.log("terima kasih sudah mampir, silahkan datang kembali!");
// }, 3000);
// console.log("Ada yang bisa dibantu?");

//-------callback function------------------

// const orderCoffee = (callback) => {
//   let coffee = null;
//   console.log("Sedang membuat kopi, silakan tunggu...");
//   setTimeout(() => {
//     coffee = "Kopi sudah jadi!";
//     callback(coffee);
//   }, 3000);
// };

// orderCoffee((coffee) => {
//   console.log(coffee);
// });

//----------promise-------------
// const executorFunction = (resolve, reject) => {
//   const isCoffeMakerReady = false;
//   if (isCoffeMakerReady) {
//     resolve("Kopi Berhasil Dibuat");
//   } else {
//     reject("Mesin kopi tidak bisa digunakan");
//   }
// };

// const makeCoffe = () => {
//   return new Promise(executorFunction);
// };

// const coffePromise = makeCoffe();
// console.log(coffePromise);

// function fetchUsername() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("JSUser");
//     }, 3000);
//   });
// }

// console.log("Fetching username...");
// fetchUsername().then((value) => {
//   console.log(`You are logged in as ${value}`);
// });
// console.log("Welcome!");

function findMin(a, b, c) {
  let minValue = a;

  if (a < b) {
    minValue = a;
  } else {
    minValue = b;
  }
  if (c < minValue) {
    minValue = c;
  }

  return minValue;
}
const min = findMin(5, 1, 2);

console.log(min);
