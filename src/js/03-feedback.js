import Throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('[name="email"]');
const message = form.querySelector('[name="message"]');
const localKey = 'feedback-form-state';

form.addEventListener('input', Throttle(storageFormData, 500));
form.addEventListener('submit', onFormSubmit);
window.addEventListener('load', showStorage);

const savedData = JSON.parse(localStorage.getItem(localKey));

function onFormSubmit(event) {
  event.preventDefault();
  console.dir(savedData);
  localStorage.removeItem(localKey);
  event.currentTarget.reset();
}

function storageFormData(event) {
  const formValue = { email: '', message: '' };
  if (localStorage.getItem(localKey)) {
    Object.assign(formValue, JSON.parse(localStorage.getItem(localKey)));
  }
  formValue[event.target.name] = event.target.value;
  localStorage.setItem(localKey, JSON.stringify(formValue));
}
function showStorage() {
  if (localStorage.getItem(localKey)) {
    email.value = savedData.email;
    message.value = savedData.message;
  }
}
