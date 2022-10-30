// const myArray = ["fendy", 54, true, "aim"];
// myArray.push("fudhol");

// const [, , third, fourth] = myArray;

// console.log(third);

// delete myArray[1];
// // for (const item of myArray) {
// //   console.log(item);
// // }

// console.log(...myArray);

// const biodata = {
//   nama: "hajid",
//   alamat: "barru",
//   umur: 18,
// };

// let nama = "icha";
// let alamat = "makassar";

// ({ nama, alamat } = biodata);

// // const { nama, alamat } = biodata;

// // console.log(nama, alamat);
// console.log(nama);

// let a = 1;
// let b = 2;

// console.log(a, b);

// [a, b] = [b, a];

// console.log(a, b);

// const myMap = new Map([
//   ["jakarta", "indonesia"],
//   ["makassar", "Sulawesi"],
// ]);

// console.log(myMap.get("jakarta"));
// myMap.set("takkalasi", "barru");
// console.log(myMap.get("takkalasi"));

// const numberSet = new Set([1, 2, 3, 4, 3, 2]);
// console.log(numberSet);
// numberSet.add(10);
// console.log(numberSet);

// weak map-----------------------------

// const { inspect } = require("util");

// let visitsCountMap = new WeakMap(); // Menyimpan daftar user

// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }

// let jonas = { name: "Jonas" };
// countUser(jonas); // Menambahkan user "Jonas"

// jonas = null; // Data object "Jonas" dihapus

// // delay dibutuhkan untuk menunggu garbage collector bekerja
// setTimeout(function () {
//   console.log(inspect(visitsCountMap, { showHidden: true }));
// }, 1000);

// /* output
//   WeakMap {  }
// */

//-----------function-------------
// function greeting(name) {
//   return `hai ${name}`;
// }

// // const haihai = greeting("hajid");
// console.log(greeting("hajid"));
// const namaku = "rehan";
// console.log(`hai ${namaku}`);
// console.log("hai " + namaku);

// const user = {
//   name: "hajid",
//   alamat: "makassar",
//   status: "mahasiswa",
// };

// function introduce({ name, status }) {
//   console.log(`${name} adalah ${status}`);
// }

// introduce(user);

// function exponentsFormula(baseNumber, exponent = 2) {
//   let result = baseNumber ** exponent;
//   console.log(`${baseNumber}^${exponent} = ${result}`);
// }

// exponentsFormula(3);

//-------function: rest parameter------------------------------------------
// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// console.log(sum(2, 3, 4, 5));

//-----------arrow function---------------

// const greeting = (name) => {
//   console.log(`hai ${name}`);
// };
// greeting("hajid");

// function minMax(arrayOfNumbers) {
//   let currentMin = arrayOfNumbers[0];
//   let currentMax = arrayOfNumbers[0];
//   for (value of arrayOfNumbers) {
//     if (value < currentMin) {
//       currentMin = value;
//     } else if (value > currentMax) {
//       currentMax = value;
//     }
//   }

//   console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
// }

// minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

//-----------Javascript OOP----------------------------------------------------
// -----class----
//cara pertama ----
// function Mail() {
//   this.from = "pengirim@gmail.com";
// }

// Mail.prototype.sendMessage = function (msg, to) {
//   console.log(`you send: ${msg} to ${to} from ${this.from}`);
// };
// Mail.prototype.greeting = function (name) {
//   console.log(`hai my name is ${name} from ${this.from}`);
// };

// const mail1 = new Mail();
// mail1.sendMessage("hallo", "penerima@gmail.com");
// mail1.greeting("Hajid");

//cara kedua--------
// class Mail {
//   constructor() {
//     this.from = "pengirim@gmail.com";
//   }
//   sendMessage(msg, to) {
//     console.log(`you send ${msg} to ${to} from ${this.from}`);
//   }
//   sendGreeting(name) {
//     console.log(`hai nama saya ${name} from ${this.from}`);
//   }
// }

// const mail1 = new Mail();
// mail1.sendMessage("hallo", "penerima@gmail.com");
// mail1.sendGreeting("hajid");

// class Mail {
//   constructor(author) {
//     this.from = author;
//     this._contacts = [];
//   }

//   sendMessage(msg, to) {
//     console.log(`you send: ${msg} to ${to} from ${this.from}`);
//     this._contacts.push(to);
//   }

//   showAllContacts() {
//     return this._contacts;
//   }
// }

// class WhatsApp extends Mail {
//   constructor(username, isBussinessAccount, phoneNumber) {
//     super(phoneNumber);
//     this.username = username;
//     // this.isBussinessAccount = isBussinessAccount;
//   }

//   sendMessage(msg, to) {
//     super.sendMessage(msg, to);
//     console.log("Send by WA");
//   }
// }

// // const wa1 = new WhatsApp("dicoding", true, "6281111111");
// const wa1 = new WhatsApp("di", true, "089000999888");
// wa1.sendMessage("halo", "089000999888");
// console.log(wa1.from); // undefined

//------------------------------------------------------
//------------LATIHAN OOP----------------------------------------

// class Animal {
//   constructor(name, age, isMammal) {
//     this.name = name;

//     this.age = age;

//     this.isMammal = isMammal;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, isMammal) {
//     super(name, age, true);
//   }

//   eat(name) {
//     return `${this.name} sedang makan!`;
//   }
// }

// class Eagle extends Animal {
//   constructor(name, age, isMammal) {
//     super(name, age, false);
//   }

//   fly(name) {
//     return `${this.name} sedang terbang!`;
//   }
// }

// const myRabbit = new Rabbit("Labi", 2);

// const myEagle = new Eagle("Elo", 4);

// console.log(myRabbit.eat());

// console.log(myEagle.fly());

//--------------FUNCTINAL PROGRAMING------------------------------
// -------array.map()
// const names = ["hajid", "kamu", "dia"];
// const namanama = names.map((name) => `${name}`);
// console.log(namanama);
//-----------array.filter()
// contoh jika ingin memfilter siswa yang lulus
// const students = [
//   {
//     name: "Harry",
//     score: 60,
//   },
//   {
//     name: "James",
//     score: 88,
//   },
//   {
//     name: "Ron",
//     score: 90,
//   },
//   {
//     name: "Bethy",
//     score: 75,
//   },
// ];

// const eligibleForScholarshipStudents = students.filter(
//   (student) => student.score > 85
// );

// console.log(eligibleForScholarshipStudents);

// ----array.reduce()
// contoh jika ingin menjumlahkan nilai siswa
// const students = [
//   {
//     name: "Harry",
//     score: 60,
//   },
//   {
//     name: "James",
//     score: 88,
//   },
//   {
//     name: "Ron",
//     score: 90,
//   },
//   {
//     name: "Bethy",
//     score: 75,
//   },
// ];

// const totalScore = students.reduce((acc, student) => acc + student.score, 0);

// console.log(totalScore);

//-----array.some()
//contoh jika ingin mengecek angka genap
// const array = [1, 2, 3, 4, 5];
// const even = array.some((element) => element % 2 === 0);

// console.log(even);

//-----array.find()
//contoh jika kita ingin mencari siswa dengan nama james
// const students = [
//   {
//     name: "Harry",
//     score: 60,
//   },
//   {
//     name: "James",
//     score: 88,
//   },
//   {
//     name: "Ron",
//     score: 90,
//   },
//   {
//     name: "Bethy",
//     score: 75,
//   },
// ];

// const findJames = students.find((student) => student.name === "James");
// console.log(findJames);

// /**
// output
// { name: 'James', score: 88 }
// **/

// //----array.sort()
// //contohnya jika kita ingin mengurutkan nilai dalam array
// const months = ["March", "Jan", "Feb", "Dec"];
// months.sort();
// console.log(months);
// // output: [ 'Dec', 'Feb', 'Jan', 'March' ]

// const array1 = [1, 30, 4, 1000, 101, 121];
// array1.sort();
// console.log(array1);
// // output: [ 1, 1000, 101, 121, 30, 4 ]

// //contoh untuk sorting angka dari kecil ke besar
// const compareNumber = (a, b) => {
//   return a - b;
// };
// const sorting = array1.sort(compareNumber);
// console.log(sorting);

// /**
// output
// [ 1, 4, 30, 1000 ]
// **/

//---------array.every()
// const scores = [70, 85, 90];
// const minimumScore = 65;

// const examPassed = scores.every((score) => score >= minimumScore);
// console.log(examPassed);

// /**
// output
// true
// **/

//--------array.foreach()
// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// names.forEach((name) => {
//   console.log(`Hello, ${name}!`);
// });

/**
 * output:
 * Hello, Harry!
 * Hello, Ron!
 * Hello, Jeff!
 * Hello, Thomas!
 *
 */

//latihan functional programming-------------------------
// const books = [
//   { title: "The Da Vinci Code", author: "Dan Brown", sales: 5094805 },
//   { title: "The Ghost", author: "Robert Harris", sales: 807311 },
//   { title: "White Teeth", author: "Zadie Smith", sales: 815586 },
//   { title: "Fifty Shades of Grey", author: "E. L. James", sales: 3758936 },
//   { title: "Jamie's Italy", author: "Jamie Oliver", sales: 906968 },
//   { title: "I Can Make You Thin", author: "Paul McKenna", sales: 905086 },
//   {
//     title: "Harry Potter and the Deathly Hallows",
//     author: "J.K Rowling",
//     sales: 4475152,
//   },
// ];

// const greatAuthors = books
//   .filter((book) => book.sales > 1000000)
//   .map((book) => {
//     return `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`;
//   });
// console.log(greatAuthors);
