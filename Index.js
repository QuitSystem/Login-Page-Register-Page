const wrapper_box = document.querySelector('.wrapper-box');
const login_Link = document.querySelector('.login-link');
const register_Link = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn-Popup');
const iconClose = document.querySelector('.icon-close');

register_Link.addEventListener('click', () => {
  wrapper_box.classList.add('active');
});

login_Link.addEventListener('click', () => {
  wrapper_box.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
  wrapper_box.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
  wrapper_box.classList.remove('active-popup');
});