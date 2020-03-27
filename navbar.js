
let scrolledUp = true, y, navbar, s;
document.addEventListener('DOMContentLoaded',()=>{ 
    navbar = document.getElementsByTagName('nav')[0];
    s = document.getElementById('skyline');
})

window.addEventListener('scroll', () => {
    const bottom = s.getBoundingClientRect().bottom;

    if (bottom < 0) {
       navbar.classList.add('detached');
    } else if (window.scrollY === 0) {
       navbar.classList.remove('detached');
    }

    scrolledUp = window.scrollY <= y || window.scrollY === 0;
    y = window.scrollY;

    if (scrolledUp){
        navbar.classList.remove('retracted')
    } else {
        navbar.classList.add('retracted')
    }

})


