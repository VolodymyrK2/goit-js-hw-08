import Player from '@vimeo/player';
// import throttle  from 'lodash.throttle';
  const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
const currentTime = localStorage.getItem("videoplayer-current-time")
    ? localStorage.getItem("videoplayer-current-time") : 0;   
// _.throttle(console.log(10),0); 
player.setCurrentTime(currentTime);

player.on('timeupdate',onPlay);
function onPlay (event) {
    
    console.log(event.seconds);
    console.log(event.duration);
    localStorage.setItem("videoplayer-current-time", event.seconds);
    if (event.seconds == event.duration) {
        localStorage.setItem("videoplayer-current-time", 0);
    }
};
