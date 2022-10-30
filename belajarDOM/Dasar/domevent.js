const p3 = document.querySelector('.p3');



function ubahWarna() {
    p2.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;

const p4 = document.querySelector('.p4');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const libaru = document.createElement('li');
    const teks = document.createTextNode('ini item baru');
    libaru.appendChild(teks);

    
    ul.appendChild(libaru)
});