document.addEventListener('DOMContentLoaded',setup);
let sky;
let layers;
let x = 0;
let animation;
const maxOffset = .05;
const maxOffsetY = .4;
const speed = .03; //less than 1;

//zoom
const p = 200
let z2=150;
const a = .01;
let vel = 0;

function setup(){
    const domEl = document.getElementById('skyline');
    x = 0;

    //NOTE turn these on for left-to-right parallax mouse tracking
    // animation = requestAnimationFrame(move);
    // domEl.addEventListener('mousemove',updateMouse);

    sky = { domEl, x } //TODO requires update;
    layers = [5,4,3,2,1].map(num => {
        const domEl = document.getElementById(`layer-${num}`);
        const t = {x: 0, y: 0, s: 1}
        return { domEl, t }
    })
    
    document.addEventListener('scroll', scroll);
    zoom();
}

function updateMouse(e){
    x = e.clientX - window.innerWidth/2;
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


///CURRENTLY DISABLED/////////

//NOTE: PARALLAX MOUSE TRACKING
function move(){
    animation = requestAnimationFrame(move);
    const delta = x - sky.x;
    sky.x += delta * speed;
    const pct = sky.x/window.innerWidth*2 * 100;
    layers.forEach((layer,i) => {
        layer.t.x = pct * maxOffset * (i/(layers.length-1));
        layer.domEl.style.transform = `scale(${layer.t.s})translateX(${layer.t.x}%)translateY(${layer.t.y}%)`;
    })
}

/////////////////////
//NOTE: ZOOM
function zoom(){
    layers.forEach((layer,i) => {
        const z = (i+1)/(layers.length+2)*50;
        const scaleInit = p/(p - z);
        const scaleNew = (p-z2)/(p-z-z2);
        layer.t.s = scaleNew / scaleInit;
        if (layer.t.s < 1){
            layer.domEl.style.transform = `translateX(${layer.t.x}%)translateY(${layer.t.y}%)`;
            return;
        }
        layer.domEl.style.transform = `scale(${layer.t.s})translateX(${layer.t.x}%)translateY(${layer.t.y}%)`
    })
    vel += a;
    z2 -= vel;
    requestAnimationFrame(zoom)
}
