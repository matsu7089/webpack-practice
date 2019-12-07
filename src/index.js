import _ from 'lodash'
import './style.css'
import './style.scss'
import logo from './webpack-icon.png'

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'Webpack', '!!'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

document.body.appendChild(component());
document.body.classList.add('background');

const image = new Image();
image.src = logo;
image.width = 200;
image.height = 200;
document.body.appendChild(image);