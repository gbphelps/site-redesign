document.addEventListener('DOMContentLoaded',setup);
let sky;
let layers;
let x = 0;
let animation;
let svg;
let clientToSVG;
const maxOffset = .05;
const maxOffsetY = .3;
const speed = .03; //less than 1;
let midpoint;

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

function resize(){
    const box = svg.getBoundingClientRect();
    console.log({
        boxwidth: box.width, 
        windowidth: window.innerWidth,
        viewboxwidth: vb.width
    })
    clientToSVG = {
        x: vb.width / box.width,
        y: vb.height / box.height
    }
    midpoint.setAttribute('x1',window.innerWidth*clientToSVG.x/2 + vb.xMin);
    midpoint.setAttribute('x2',window.innerWidth*clientToSVG.x/2 + vb.xMin);
    midpoint.setAttribute('y1',0);
    midpoint.setAttribute('y2',vb.height);
}

function setup(){
    const domEl = document.getElementById('skyline');
    x = 0;

    window.addEventListener('resize', resize);
    //NOTE turn these on for left-to-right parallax mouse tracking
    // animation = requestAnimationFrame(move);
    // domEl.addEventListener('mousemove',updateMouse);

    svg = document.getElementsByTagName('svg')[0];
    svg.setAttribute('viewBox',`${vb.xMin} ${vb.yMin} ${vb.width} ${vb.height}`);

    const container = document.getElementById('svg-container');
    Object.assign(container.style,{
        "height": "130%",
        "min-height": `calc(100vw / ${vb.width - 50} * ${vb.height})`,
        "align-self": "flex-end",
        "z-index": 1,
        "position": "relative",
        "width": "100%"
    });

    midpoint = document.createElementNS('http://www.w3.org/2000/svg','line');
    midpoint.setAttribute('stroke', 'red');
    // svg.appendChild(midpoint);
    resize();

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
        layer.t.y = pct * maxOffsetY / clientToSVG.y * k;
        layer.domEl.setAttribute('transform',`
            translate(${layer.t.x})
            translate(0 ${layer.t.y})
            translate(0 ${vb.height})
            translate(${window.innerWidth*clientToSVG.x/2 + vb.xMin})
            scale(${layer.t.s})
            translate(${-window.innerWidth*clientToSVG.x/2 - vb.xMin})
            translate(0 ${-vb.height})
        `)
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
            translate(${window.innerWidth*clientToSVG.x/2 + vb.xMin})
            scale(${layer.t.s})
            translate(${-window.innerWidth*clientToSVG.x/2 - vb.xMin})
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
function zoom(){
    layers.forEach((layer,i) => {
        const z = (i+2)/(layers.length+1)*40;
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
            translate(${window.innerWidth*clientToSVG.x/2 + vb.xMin})
            scale(${layer.t.s})
            translate(${-window.innerWidth*clientToSVG.x/2 - vb.xMin})
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
    z = requestAnimationFrame(zoom);
    zoom.delay++;
    if (zoom.delay < 100) return; 

    layers.forEach((layer,i) => {
        const z = (i+2)/(layers.length+1)*40;
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
            translate(${window.innerWidth*clientToSVG.x/2 + vb.xMin})
            scale(${layer.t.s})
            translate(${-window.innerWidth*clientToSVG.x/2 - vb.xMin})
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
zoom.delay = 0;
zoom.progress = 0;
