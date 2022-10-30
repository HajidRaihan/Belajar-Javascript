// const card = document.querySelector('div .card');

// const close = document.querySelector('div.card span:nth-child(4)');
// // const container = document.querySelector('div .container');
// const container = document.getElementsByClassName('container')[0];

// close.addEventListener('click', function () {
    
//     // container.removeChild(card)
//     card.style.display = 'none'
// })



// DOM TRAVERSAL ------------------------------------------------------------

const close = document.querySelectorAll('.close');

//cara 1
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (e) {
//         // close[i].style.display = 'none'
//         e.target.parentElement.style.display = 'none'
//    })
// }


// cara 2
close.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none'
    })
})



const nama = document.querySelector('.nama')
console.log(nama.previousElementSibling)
// console.log(nama.NextElementSibling)
