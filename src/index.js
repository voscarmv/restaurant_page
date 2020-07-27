import _ from 'lodash';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './assets/img/example.jpg';
import printMe from './print.js';
import 'bootstrap';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash now imported from this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myImage = new Image();
  myImage.src = Example;

  element.appendChild(myImage);

  btn.innerHTML = 'Click for console message';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
