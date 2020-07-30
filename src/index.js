import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Layout from './pages/layout';
import Home from './pages/home';
import pageBody from './components/pagebody';

const pagecontent = (() => {
  const container = Layout(pageBody.create(), Home);
  return container;
})();

document.body.appendChild(pagecontent);
