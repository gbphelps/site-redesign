document.addEventListener('DOMContentLoaded', () => {
    const videos = Array.from(document.getElementsByTagName('video'));
    videos.forEach(vid => {
        vid.addEventListener('click', () => {
            videos.forEach(vid => vid.pause());
            vid.play()
        });
       
    })



    const features = Array.from(document.getElementsByClassName('feature'));
    features.forEach(f => {
        const play = f.getElementsByClassName('play')[0];
        const video = f.getElementsByTagName('video')[0];
        const pause = f.getElementsByClassName('pause')[0];

        play.addEventListener('click',()=>{
            features.forEach(f => {
                const play = f.getElementsByClassName('play')[0];
                const video = f.getElementsByTagName('video')[0];
                const pause = f.getElementsByClassName('pause')[0];
                pause.classList.add('hidden');
                play.classList.remove('hidden');
                video.pause();
            })
            video.play();
            pause.classList.remove('hidden');
            play.classList.add('hidden');
        })

        pause.addEventListener('click',()=>{
            video.pause();
            play.classList.remove('hidden');
            pause.classList.add('hidden');
        })
    })
})