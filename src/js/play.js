import Particles from './play/particles.js';
import RetroGrid from './play/retrogrid.js';

document.querySelector('footer a').addEventListener('click', createPlayground);

// Start playing
function createPlayground(event) {
  document.body.classList.add('play');
  new Particles();
  new RetroGrid();
  insertExit();
  event.preventDefault;
}

// Exit door
function insertExit() {
  const exitTag = document.createElement('div');
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
    document.querySelector('.letter_' + key).classList.add('active');
    userInput = [ ...userInput.slice( 1 ), key ];
    if (keySequence.every((v, k) => v === userInput[k])) {
      deletePlayground();
    }
  });

  window.addEventListener('keyup', ({ key }) => {
    document.querySelector('.letter_' + key).classList.remove('active');
  });
}

// Stop playing
function deletePlayground() {
  document.body.classList.remove('play');
  document.querySelector('.exit').remove();
  document.querySelector('.particles').remove();
  document.querySelector('.three-grid').remove();
}
