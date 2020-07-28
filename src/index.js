import _ from 'lodash';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Layout from './pages/layout.js';
import Home from './pages/home.js';
import newElement from './rendering/newelement.js';

const pagecontent = (() => {
  const container = Layout(newElement('div', null, null, null, ['id', 'content']), Home);
  return container;
})();

document.body.appendChild(pagecontent);
