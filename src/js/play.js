import Particles from './play/particles.js'
import RetroGrid from './play/retrogrid.js'
import triggerAnimation from './utils/anim.js'

export function init() {
  let particles = new Particles()
  let retrogrid = new RetroGrid()

  const name = document.createElement('h5')
  name.innerText = document.querySelector('h1 em').innerText
  document.querySelector('main').append(name)

  const job = document.createElement('h6')
  job.innerText = document.querySelector('h2 em').innerText
  document.querySelector('main').append(job)

  const exitTag = document.createElement('div')
  exitTag.className = 'exit'

  const exitLetters = document.createElement('span')
  exitLetters.className = 'letters'

  const keySequence = ['b', 'a', 'c', 'k']
  keySequence.forEach((letter) => {
    const letterSpan = document.createElement('span')
    letterSpan.innerText = letter
    letterSpan.className = 'letter_' + letter
    exitLetters.append(letterSpan)
  })

  exitTag.append(exitLetters)
  document.querySelector('footer').append(exitTag)

  let keyUp = function (e) {
    if (document.querySelector('.letter_' + e.key)) {
      document.querySelector('.letter_' + e.key).classList.remove('active')
    }
  }
  window.addEventListener('keyup', keyUp, true)

  let userInput = new Array(keySequence.length)
  let keyDown = function (e) {
    if (document.querySelector('.letter_' + e.key)) {
      document.querySelector('.letter_' + e.key).classList.add('active')
    }

    userInput = [...userInput.slice(1), e.key]
    if (keySequence.every((v, k) => v === userInput[k])) {
      // Remove playground
      document.querySelector('h5').remove()
      document.querySelector('h6').remove()
      document.querySelector('.exit').remove()
      document.querySelector('.particles').remove()
      document.querySelector('.three-grid').remove()
      window.removeEventListener('keyup', keyUp, true)
      window.removeEventListener('keydown', keyDown, true)
      particles = null
      retrogrid = null

      // Re trigger animations
      triggerAnimation('#page-transition', false)
      triggerAnimation('#wrapper', false)
      triggerAnimation('.links', false)
      triggerAnimation('footer', false)

      document.body.classList.remove('play')
    }
  }
  window.addEventListener('keydown', keyDown, true)
}
