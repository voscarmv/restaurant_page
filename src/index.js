import _ from 'lodash';
import './style.css';
import Example from './example.jpg';

function component() {
  const element = document.createElement('div');

  // Lodash now imported from this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myImage = new Image();
  myImage.src = Example;

  element.appendChild(myImage);

  return element;
}

document.body.appendChild(component());
