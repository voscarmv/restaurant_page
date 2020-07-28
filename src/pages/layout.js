import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import mainContainer from '../components/maincontainer.js';

const Layout = (container, content) => {
  const main = mainContainer.create();
  main.appendChild(content);
  container.innerHTML = '';
  container.appendChild(NavBar());
  container.appendChild(main);
  container.appendChild(Footer());
  return container;
};

export default Layout;