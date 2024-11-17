// Style
import '../scss/style.scss'

// Email & tooltip
import { emailCopy } from './utils/email.js'
emailCopy()

// Trigger animations
import triggerAnimation from './utils/anim.js'
triggerAnimation('#page-transition')
triggerAnimation('#wrapper')
triggerAnimation('.links')
triggerAnimation('footer')

// Play
document.querySelector('footer a').addEventListener('click', (event) => {
  if (!document.body.classList.contains('play')) {
    document.body.classList.add('play')
    triggerAnimation('#page-transition', false)
    triggerAnimation('#wrapper', false)
    triggerAnimation('footer', false)
    import('./play.js').then(function (page) {
      page.init()
    })
  }
  event.preventDefault()
})
