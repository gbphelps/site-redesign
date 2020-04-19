document.addEventListener('DOMContentLoaded',()=>{
    const loading = document.getElementById('loading');
    const text = loading.innerHTML;
    loading.innerHTML = "";
    for (let i=0; i<text.length; i++){
        const div = document.createElement('div');
        const span = document.createElement('span');
        span.innerHTML=text[i];
        
        loading.appendChild(div);
        div.classList.add('zoom');
        Object.assign(div.style, {
            animationDelay: `${.1*i}s`,
            display: 'flex',
            alignItems: 'center',
            padding: '4px', 
            animationFillMode: 'both', 
        })

        div.appendChild(span);
        span.classList.add('float');

        Object.assign(span.style, {
            animationDelay: `${-.2*i}s`    
        })
    }

    let promises = Array.from(document.getElementsByTagName('img')).map((el) => {
        return new Promise(r => {
            el.addEventListener('load',r);
            el.addEventListener('error',r);
            el.addEventListener('progress',() => {
                console.log('hello')
            })
        })
    })

    promises = promises.concat(Array.from(document.getElementsByTagName('video')).map(el => new Promise(r => {
        el.addEventListener('canplaythrough',r);
        el.addEventListener('progress', (e)=>{
            console.log(e)
        })
        el.addEventListener('error', r);
    })))

    promises.push(new Promise(r => setTimeout(r, 5000)));
    

    Promise.all(promises).then(() => {
        document.getElementById('content').classList.remove('hidden');
        Array.from(document.getElementsByClassName('zoom')).forEach(el => {
            el.classList.add('zoom-out');
        })
        
    })
    
})