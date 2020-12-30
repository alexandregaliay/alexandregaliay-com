import Particles from './playground/particles.js';
import RetroGrid from './playground/retrogrid.js';
new Particles();
new RetroGrid();

import triggerAnimation from './utils/triggeranimation.js';
triggerAnimation('#page-transition');
triggerAnimation('#wrapper');
triggerAnimation('footer');
  
const exitTag = document.querySelector('.exit');
exitTag.className = 'exit';

const exitLetters = document.createElement('span')
exitLetters.className = 'letters'

const keySequence = ['b', 'a', 'c', 'k']
keySequence.forEach(letter => {
  const letterSpan = document.createElement('span')
  letterSpan.innerText = letter
  letterSpan.className = 'letter_' + letter
  exitLetters.append(letterSpan)
});

exitTag.append(exitLetters)
document.querySelector('footer').append(exitTag)

let userInput = new Array(keySequence.length);
window.addEventListener('keydown', ({ key }) => {
  if (document.querySelector('.letter_' + key)) {
    document.querySelector('.letter_' + key).classList.add('active')
  }
  userInput = [ ...userInput.slice( 1 ), key ]
  if (keySequence.every((v, k) => v === userInput[k])) {
    // window.location.href = '/'
    window.history.back()
  }
});

window.addEventListener('keyup', ({ key }) => {
  if (document.querySelector('.letter_' + key)) {
    document.querySelector('.letter_' + key).classList.remove('active')
  }
})