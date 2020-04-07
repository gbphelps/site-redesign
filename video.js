// document.addEventListener('DOMContentLoaded', () => {
//     Array.from(document.getElementsByTagName('video')).forEach(vid => {
//         vid.addEventListener('mouseenter', () => vid.play());
//         vid.addEventListener('mouseleave', () => vid.pause());
//     })
// })


document.addEventListener('DOMContentLoaded', () => {
    const features = Array.from(document.getElementsByClassName('feature'));
    features.forEach(f => {
       f.addEventListener('click',()=>{
           features.forEach(f => {
               f.classList.remove('active');
               f.getElementsByTagName('video')[0].pause();
            });
           f.classList.toggle('active');
           f.getElementsByTagName('video')[0].play();
       })
    })
})