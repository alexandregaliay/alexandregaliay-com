import Particles from './play/particles.js';
import RetroGrid from './play/retrogrid.js';
import triggerAnimation from './anim.js';

var particles;
var retroGrid;

triggerAnimation('#page-transition', false);
triggerAnimation('#wrapper', false);
triggerAnimation('footer', false);
  
particles = new Particles();
retroGrid = new RetroGrid();
  
insertExit();

function insertExit() {
  const exitTag = document.querySelector('.exit');
  exitTag.className = 'exit';
  
  const exitLetters = document.createElement('span');
  exitLetters.className = 'letters';

  const keySequence = ['b', 'a', 'c', 'k'];
  keySequence.forEach(letter => {
    const letterSpan = document.createElement('span');
    letterSpan.innerText = letter;
    letterSpan.className = 'letter_' + letter;
    exitLetters.append(letterSpan);
  });

  exitTag.append(exitLetters);
  document.querySelector('footer').append(exitTag);

  let userInput = new Array(keySequence.length);
  window.addEventListener('keydown', ({ key }) => {
    if (document.querySelector('.letter_' + key)) {
      document.querySelector('.letter_' + key).classList.add('active');
    }
    userInput = [ ...userInput.slice( 1 ), key ];
    if (keySequence.every((v, k) => v === userInput[k])) {
      deletePlayground();
    }
  });

  window.addEventListener('keyup', ({ key }) => {
    if (document.querySelector('.letter_' + key)) {
      document.querySelector('.letter_' + key).classList.remove('active');
    }
  });
}

function deletePlayground() {
  retroGrid = null;
  particles = null;
  document.querySelector('.particles').remove();
  document.querySelector('.three-grid').remove();
  
  // Re trigger animations
  triggerAnimation('#page-transition',false);
  triggerAnimation('#wrapper',false);
  triggerAnimation('.links',false);
  triggerAnimation('footer',false);

}
