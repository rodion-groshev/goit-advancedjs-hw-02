import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const param = {};

const formChanges = event => {
  const eventName = event.target.name;
  const eventValue = event.target.value;
  param[eventName] = eventValue;
};

const makePromise = event => {
  event.preventDefault();
  return new Promise((resolve, reject) => {
    const state = param.state;
    const delay = param.delay;
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(
          iziToast.show({
            color: 'green',
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: 'topCenter',
            messageColor: 'white',
            progressBar: false,
            icon: 'material-icons',
          })
        );
      } else {
        reject(
          iziToast.show({
            color: 'red',
            message: `❌ Rejected promise in ${delay}ms`,
            position: 'topCenter',
            messageColor: 'white',
            progressBar: false,
            icon: 'material-icons',
          })
        );
      }
    }, delay);
    event.target.reset();
  });
};

form.addEventListener('input', formChanges);
form.addEventListener('submit', makePromise);
