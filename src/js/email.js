// Email & tooltip
const emailValue = 'hello@alexandregaliay.com';
const emailLink = document.querySelector('.email');
const tooltip = document.querySelector('.tooltip');
const origText = tooltip.textContent;

emailLink.addEventListener('click', copyEmail);
emailLink.addEventListener('mouseover', updateTooltip);

function copyEmail(event) {
  const el = document.createElement('textarea');
  el.value = emailValue;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  tooltip.textContent = 'Copied';
  event.preventDefault();
}

function updateTooltip() {
  if(tooltip.textContent != origText) {
    tooltip.textContent = origText;
  }
}
