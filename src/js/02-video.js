// import Player from '@vimeo/player';
// import Throttle from 'lodash.throttle';

// const timeKey = videoplayer - current - time;
// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// window.addEventListener('load', newStart);

// function durationToStorage({ seconds }) {
//   localStorage.setItem(timeKey, seconds);
//   console.log(seconds);
// }

// player.on('timeupdate', Throttle(durationToStorage, 1000));

// function newStart() {
//   if (!localStorage.getItem(timeKey)) {
//     return;
//   }
//   const currentVideoTime = localStorage.getItem(timeKey);
//   player
//     .setCurrentTime(currentVideoTime)
//     .then(() => player.play())

//     .catch(function (error) {
//       switch (error.name) {
//         case 'RangeError':
//           // the time was less than 0 or greater than the video’s duration
//           break;

//         default:
//           // some other error occurred
//           break;
//       }
//     });
// }

//===========================================================
// import Player from '@vimeo/player';
// import Throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// // сделали переменную для ключа
// const timeKey = 'videoplayer-current-time';
// // создали функцию, с помощью деструктаризации вытащили секунды собьекта тайм апдейт(записали в локальное хранилище)
// function durationSaveToStorage({ seconds }) {
//   localStorage.setItem(timeKey, seconds);
// }
// // при перезагрузки страницы перезагружался плеер
// window.addEventListener('load', newStart);
// player.on('timeupdate', Throttle(durationSaveToStorage, 1000));
// // функция которая ловит ивент лоад, если в локальном хранилище есть запись, достань их
// function newStart() {
//   if (!localStorage.getItem(timeKey)) {
//     return;
//   }
//   const currentVideoTime = localStorage.getItem(timeKey);

//   player
//     .setCurrentTime(currentVideoTime)
//     .then(() => {
//       player.play();
//       // seconds = the actual time that the player seeked to
//     })
//     .catch(function (error) {
//       switch (error.name) {
//         case 'RangeError':
//           // the time was less than 0 or greater than the video’s duration
//           break;

//         default:
//           // some other error occurred
//           break;
//       }
//     });
// }

import Player from '@vimeo/player';
// имортируем названия скрипта с пекендж джейсон
import Throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// переменная для удобства для функции videoplayer-current-time
const timekey = 'videoplayer-current-time';
player.on('timeupdate', durationSavelocalstorage);
// создали функцию, с помощью деструктаризации вытащили секунды собьекта тайм апдейт(записали в локальное хранилище)
function durationSavelocalstorage({ seconds }) {
  localStorage.setItem(timekey, seconds);
}
// localStorage.setItem('test', '123');

// при перезагрузки страницы перезагружался плеер
window.addEventListener('load', newStart);
player.on('timeupdate', Throttle(durationSavelocalstorage, 1000));
function newStart() {
  if (!localStorage.getItem(timekey)) {
    return;
  }
}
const currentVideoTime = localStorage.getItem(timekey);
player
  .setCurrentTime(currentVideoTime)
  .then(() => {
    player.play();
  })
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
