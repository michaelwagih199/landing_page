
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const fadeElmes = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
    body.classList.remove('no-scroll');
    //close Humberge
    if (header.classList.contains('open')) {
        header.classList.remove('open');
        fadeElmes.forEach(element => {
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        });
    }
    else {//open
        header.classList.add('open');
        body.classList.add('no-scroll');
        fadeElmes.forEach(element => {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
})