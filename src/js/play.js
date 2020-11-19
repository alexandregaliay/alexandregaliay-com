import Particles from './play/particles.js';
import RetroGrid from './play/retrogrid.js';

document.querySelector('footer a').addEventListener('click', event => {
  document.body.classList.add('play');
  new Particles();
  new RetroGrid();
  insertExit();
  event.preventDefault;
});

function insertExit() {
  const exitTag = document.createElement('div');
  exitTag.className = 'exit';
  
  const exitText = document.createElement('span');
  exitText.innerText = 'back';
  exitTag.append(exitText);

  document.querySelector('footer').append(exitTag);

  const keySequence = ['b', 'a', 'c', 'k'];
  let userInput = new Array(keySequence.length);

  window.addEventListener('keydown', ({ key }) => {
    userInput = [ ...userInput.slice( 1 ), key ];
    if (keySequence.every((v, k) => v === userInput[k])) {
      deletePlayground();
    }
} );
}

function deletePlayground() {
  document.body.classList.remove('play');
  document.querySelector('.exit').remove();
  document.querySelector('.particles').remove();
  document.querySelector('.three-grid').remove();
}
