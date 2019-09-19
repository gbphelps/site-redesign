document.addEventListener('DOMContentLoaded',setup);
let sky;
let layers;
let x = 0;
let animation;
const maxOffset = .05;
const maxOffsetY = .4;
const speed = .03; //less than 1;




function setup(){
    const domEl = document.getElementById('skyline');
    x = 0;
    // animation = requestAnimationFrame(move);
    // domEl.addEventListener('mousemove',updateMouse);
    sky = { domEl, x } //TODO requires update;
    layers = [5,4,3,2,1].map(num => {
        const domEl = document.getElementById(`layer-${num}`);
        const t = {x: 0, y: 0, s: 1}
        return { domEl, t }
    })
    layers.forEach(layer => layer.domEl.style['transform-origin'] = '50% 100%')//
    document.addEventListener('scroll', scroll);
    zoom();
}

function updateMouse(e){
    x = e.clientX - window.innerWidth/2;
}

function move(){
    animation = requestAnimationFrame(move);
    const delta = x - sky.x;
    sky.x += delta * speed;
    const pct = sky.x/window.innerWidth*2 * 100;
    layers.forEach((layer,i) => {
        layer.t.x = pct * maxOffset * (i/(layers.length-1));
        layer.domEl.style.transform = `translateX(${layer.t.x}%)translateY(${layer.t.y}%)`;
    })
}

function scroll(e){
    const box = sky.domEl.getBoundingClientRect();
    if (box.bottom < 0) return;

    const pct = window.scrollY/(window.scrollY + box.bottom) * 100; 

    layers.forEach((layer,i) => {
        const k = (layers.length-i-1)/(layers.length-1);
        layer.t.y = pct * maxOffsetY * k;
        layer.domEl.style.transform = `translateX(${layer.t.x}%)translateY(${layer.t.y}%)scale(${layer.t.s})`;
    })

    // document.body.style.background = `rgb(${2.55*(100-pct) + 2*pct},${2.55*(100-pct) + 1*pct},${2.55*(100-pct) + .5*pct})`
}

/////////////////////
let z2=150;
function zoom(){
    layers.forEach((layer,i) => {
        const z = i/(layers.length-1)*20;
        const p = 200; 
        const scaleInit = p/(p - z);
        const scaleNew = (p-z2)/(p-z-z2);
        layer.t.s = scaleNew / scaleInit;
        if (layer.t.s < 1) return;
        layer.domEl.style.transform = `translateX(${layer.t.x}%)translateY(${layer.t.y}%)scale(${layer.t.s})`
    })
    z2 -= 1;
    requestAnimationFrame(zoom)
}
