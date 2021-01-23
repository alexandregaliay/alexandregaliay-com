export default function triggerAnimation(selector, init = true) {
  const el = document.querySelector(selector)
  if (!init) {
    el.classList.remove('animate')
    void el.offsetWidth
  }
  el.classList.add('animate')
}
