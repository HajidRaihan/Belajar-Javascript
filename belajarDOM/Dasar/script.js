
// ----DOM SELECTION ----

// document.getElementById() -> mengembalikan element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'grey';
// judul.innerHTML = 'Hajid Raihan';


// // document.getelementByTagName() -> HTML Collection

// const p = document.getElementsByTagName('p');

// for (let index = 0; index < p.length; index++) {
//     p[index].style.backgroundColor = 'lightblue';
    
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// document.getElementsByClassName -> HTML Collection
//  const p1 = document.getElementsByClassName('p1');
//  p1[0].innerHTML = 'ini diubah dari javascript';
 

// document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange'

// const p = document.querySelectorAll('p');
// p[1].innerHTML = 'ini diubah melalui javascript';

// ----------------------------------------------------------
// // DOM Manipulation -> manipulasi element
// const judul = document.getElementById('judul');
// judul.setAttribute('name', 'hajid');
// judul.removeAttribute('name');

// judul.classList.add('label');

//------------------------------------------------------------
// DOM manipulation -> manipulasi Node
// Buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan didalam paragraf
pBaru.appendChild(teksPBaru);

//simpan pBaru di akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksliBaru = document.createTextNode('ini item Baru');
liBaru.appendChild(teksliBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

const libaru2 = document.createElement('li');
const teksliBaru2 = document.createTextNode('ini item baru lagi');
libaru2.appendChild(teksliBaru2);

const li3 = ul.querySelector('li:nth-child(4)');
ul.insertBefore(libaru2, li3)

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.querySelector('section#b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const texth2Baru = document.createTextNode('Judul Baru');
h2Baru.appendChild(texth2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
libaru2.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';