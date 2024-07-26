import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const param = {};

const formChanges = event => {
  const eventName = event.target.name;
  const eventValue = event.target.value;
  param[eventName] = eventValue;
};

const submitListener = event => {
  event.preventDefault();
  const state = param.state;
  const delay = param.delay;

  createPromise(state, delay)
    .then(delay => {
      iziToast.show({
        color: 'green',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topCenter',
        messageColor: 'white',
        progressBar: false,
        icon: 'material-icons',
      });
    })
    .catch(delay => {
      iziToast.show({
        color: 'red',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topCenter',
        messageColor: 'white',
        progressBar: false,
        icon: 'material-icons',
      });
    });

  event.target.reset();
};

function createPromise(state, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

form.addEventListener('input', formChanges);
form.addEventListener('submit', submitListener);
