document.addEventListener('DOMContentLoaded', () => {
    const videos = Array.from(document.getElementsByTagName('video'));
    videos.forEach(vid => {
        vid.addEventListener('click', () => {
            videos.forEach(vid => vid.pause());
            vid.play()
        });
       
    })
})