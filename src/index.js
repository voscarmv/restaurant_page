import _ from 'lodash';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Layout from './pages/layout.js';
import Home from './pages/home.js';
import pageBody from './components/pagebody.js';

const pagecontent = (() => {
  const container = Layout(pageBody.create(), Home);
  return container;
})();

document.body.appendChild(pagecontent);
