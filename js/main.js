'use strict';

const onMusicKeyPress = (e) => {
  if (e) {
    const keyCode = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${keyCode}"]`)
    
    if (!audio) return;
    else {
      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing')
    }
  }
};

const onTransitionEnded = (e) => {
  if (e.propertyName !== 'transform') return;
  else {
    e.target.classList.remove('playing');
  }
}

window.addEventListener('keydown', onMusicKeyPress);
const keys = document.querySelectorAll('.key');

keys.forEach((key) => key.addEventListener('transitionend', onTransitionEnded));