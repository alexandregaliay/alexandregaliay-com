let emailValue = 'hello@alexandregaliay.com'
let emailLink = document.querySelector('.email')
const tooltip = document.querySelector('.tooltip')
let origText = tooltip.textContent

function copyValue(event) {
  const el = document.createElement('textarea')
  el.value = emailValue
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  tooltip.textContent = 'Copied'
  setTimeout(updateTooltip, 3000)
  event.preventDefault()
}

function updateTooltip() {
  if(tooltip.textContent != origText) {
    tooltip.textContent = origText
  }
}

export default function emailCopy() {
  emailLink.addEventListener('click', copyValue)
  emailLink.addEventListener('mouseover', updateTooltip)
}