
let scrolledUp = true, y, navbar, s;
document.addEventListener('DOMContentLoaded',()=>{ 
    navbar = document.getElementsByTagName('nav')[0];
    s = document.getElementById('skyline');
})

window.addEventListener('wheel', (e) => {
    console.log(e)
    const bottom = s.getBoundingClientRect().bottom;

    if (bottom < 0) {
       navbar.classList.add('detached');
    } else if (window.scrollY === 0) {
       navbar.classList.remove('detached');
    }

    scrolledUp = window.scrollY <= y;
    y = window.scrollY;

    if (scrolledUp || window.scrollY <= 0){
        navbar.classList.remove('retracted')
    } else {
        navbar.classList.add('retracted')
    }

})


