'use strict';

var onMusicKeyPress = function onMusicKeyPress(e) {
  if (e) {
    var keyCode = e.keyCode;
    var audio = document.querySelector('audio[data-key="' + keyCode + '"]');
    var key = document.querySelector('.key[data-key="' + keyCode + '"]');

    if (!audio) return;else {
      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    }
  }
};

var onTransitionEnded = function onTransitionEnded(e) {
  if (e.propertyName !== 'transform') return;else {
    e.target.classList.remove('playing');
  }
};

window.addEventListener('keydown', onMusicKeyPress);
var keys = document.querySelectorAll('.key');

keys.forEach(function (key) {
  return key.addEventListener('transitionend', onTransitionEnded);
});