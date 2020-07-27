import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';

const Layout = (container, content) => {
  const main = document.createElement('main');
  main.appendChild(content());
  container.appendChild(NavBar());
  container.appendChild(main);
  container.appendChild(Footer());
};

export default Layout;