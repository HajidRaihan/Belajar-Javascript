const angka1 = document.getElementById('angka1');
const angka2 = document.getElementById('angka2');
const div = document.getElementById('div1')
// const pHasil = document.getElementById('hasil')

// angka1.addEventListener('input', function () {
    
// })
const submit = document.getElementById('tombol');
submit.addEventListener('click', function () {
    const a = angka1.value;
    const b = angka2.value;
    const c = parseInt(a);
    const d = parseInt(b);
    
    const hasil = document.createElement('p')
    const textHasil = document.createTextNode(c + d);

    hasil.appendChild(textHasil);
    // pHasil.innerHTML = hasil;

    div.appendChild(hasil);
    
    // const sectionForm = document.querySelector('section #form')

    // submit.appendChild(hasil)
    // console.log(hasil)
})




