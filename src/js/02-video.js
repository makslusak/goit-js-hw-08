import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const timekey = 'videoplayer-current-time';
player.on('timeupdate', durationSavelocalstorage);

function durationSavelocalstorage({ seconds }) {
  localStorage.setItem(timekey, seconds);
}

window.addEventListener('load', newStart);
player.on('timeupdate', Throttle(durationSavelocalstorage, 2000));
function newStart() {
  if (!localStorage.getItem(timekey)) {
    return;
  }
}
const currentVideoTime = localStorage.getItem(timekey);
player
  .setCurrentTime(currentVideoTime)
  .then(() => {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;
      default:
        // some other error occurred
        break;
    }
  });
