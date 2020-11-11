import Particles from './play/particles.js';
import RetroGrid from './play/retrogrid.js';

document.querySelector('footer a').addEventListener('click', function(e) {
  new Particles();
  new RetroGrid();
  e.preventDefault;
});

