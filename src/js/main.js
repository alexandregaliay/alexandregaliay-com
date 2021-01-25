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
    import('./play.js').then(function(page) {
      page.init()
    })
  }
  event.preventDefault()
})
