const emailValue = 'hello@alexandregaliay.com';
const emailLink = document.querySelector('.email');

emailLink.addEventListener('click', copyEmail);

function copyEmail(event) {
  const el = document.createElement('textarea');
  el.value = emailValue;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  event.preventDefault();
}
