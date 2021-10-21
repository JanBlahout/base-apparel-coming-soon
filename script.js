'use strict';

console.log('hello world');

var inputText = document.querySelector('.input-field');

const btn = document.querySelector('.btn');

function checkEmail() {
  const email = inputText.value;
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regex)) {
    alert('Your email is okay');
  } else {
    document.querySelector('label').classList.add('visible');
    document.querySelector('input').classList.add('border-invalid');
    document.querySelector('.error-icon').classList.add('visible');
    setTimeout(removeClass, 1500);
  }
}

function removeClass() {
  document.querySelector('label').classList.remove('visible');
  document.querySelector('input').classList.remove('border-invalid');
  document.querySelector('.error-icon').classList.remove('visible');
}

btn.addEventListener('click', checkEmail);
