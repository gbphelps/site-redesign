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

const vb = {
    xMin: 30,
    yMin: -200,
    width: 480,
    height: 350
}

function setup(){
    const domEl = document.getElementById('skyline');
    x = 0;

    //NOTE turn these on for left-to-right parallax mouse tracking
    // animation = requestAnimationFrame(move);
    // domEl.addEventListener('mousemove',updateMouse);

    const svg = document.getElementsByTagName('svg')[0];
    svg.setAttribute('viewBox',`${vb.xMin} ${vb.yMin} ${vb.width} ${vb.height}`);

    const container = document.getElementById('svg-container');
    Object.assign(container.style,{
        "height": "130%",
        "min-height": `calc(100vw / ${vb.width} * ${vb.height})`,
        "align-self": "flex-end",
        "z-index": 1,
        "position": "relative",
        "width": "100%"
    });


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
        layer.domEl.setAttribute('transform',`
            translate(${layer.t.x})
            translate(0 ${layer.t.y})
            translate(0 ${vb.height})
            translate(${vb.width/2})
            scale(${layer.t.s})
            translate(${-vb.width/2})
            translate(0 ${-vb.height})
        `)
        // layer.domEl.style.transform = `
        //     translateX(${layer.t.x}%)
        //     translateY(${layer.t.y}%)
        //     translateY(100%)
        //     translateX(50%)
        //     scale(${layer.t.s})
        //     translateX(-50%)
        //     translateY(-100%)
        // `;
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
        layer.domEl.setAttribute('transform',`
            translate(${layer.t.x})
            translate(0 ${layer.t.y})
            translate(0 ${150})
            translate(${480/2})
            scale(${layer.t.s})
            translate(${-480/2})
            translate(0 ${-150})
        `)
        // layer.domEl.style.transform = `
        //     translateX(${layer.t.x}%)
        //     translateY(${layer.t.y}%)
        //     translateY(100%)
        //     translateX(50%)
        //     scale(${layer.t.s})
        //     translateX(-50%)
        //     translateY(-100%)
        // `;
    })
}

/////////////////////
//NOTE: ZOOM
let z
function zoom(){
    z = requestAnimationFrame(zoom)
    layers.forEach((layer,i) => {
        const z = i/(layers.length-1)*40;
        const scaleInit = p/(p - z);
        const scaleNew = (p-z2)/(p-z-z2);
        layer.t.s = scaleNew / scaleInit;
        if (layer.t.s < 1){
            layer.t.s = 1;
            cancelAnimationFrame(z)
        }

        //viewBox="30 0 480 150"
        layer.domEl.setAttribute('transform',`
            translate(${layer.t.x})
            translate(0 ${layer.t.y})
            translate(0 ${150})
            translate(${480/2})
            scale(${layer.t.s})
            translate(${-480/2})
            translate(0 ${-150})
        `)
        // layer.domEl.style.transform = `
        //     translateX(${layer.t.x}%)
        //     translateY(${layer.t.y}%)
        //     translateY(100%)
        //     translateX(50%)
        //     scale(${layer.t.s})
        //     translateX(-50%)
        //     translateY(-100%)
        // `
    })
    vel += a;
    z2 -= vel;
}
