import throttle  from 'lodash.throttle';
import Player from '@vimeo/player';

  const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
const currentTime = localStorage.getItem("videoplayer-current-time")
    ? localStorage.getItem("videoplayer-current-time") : 0;   
player.setCurrentTime(currentTime);

player.on('timeupdate',throttle(onPlay,1000));
function onPlay (event) {
    
    localStorage.setItem("videoplayer-current-time", event.seconds);
    if (event.seconds == event.duration) {
        localStorage.setItem("videoplayer-current-time", 0);
    }
};
