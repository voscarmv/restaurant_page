import newElement from '../rendering/newelement';
import nestElements from '../rendering/nestelements';
import listElements from '../rendering/listelements';
import Home from '../pages/home';
import Menu from '../pages/menu';
import Contact from '../pages/contact';
import mainContainer from './maincontainer';
import Logo from '../assets/img/loge.jpg';
import newImage from '../rendering/newimage';

const Navbar = () => {
  const navbar = listElements(
    newElement('nav', 'navbar navbar-expand-lg navbar-light fixed-top bg-white'),
    listElements(
      newElement('a', 'navbar-brand', null, () => { mainContainer.display(Home); }, ['href', '#']),
      newImage(Logo, 'logo-img d-inline-block align-top mr-2'),
      newElement('span', 'logo', 'HotDoge Hotdogs!'),
    ),
    nestElements(
      newElement(
        'button',
        'navbar-toggler',
        null, null,
        ['type', 'button'],
        ['data-toggle', 'collapse'],
        ['data-target', '#navbarNav'],
        ['aria-controls', 'navbarNav'],
        ['aria-expanded', 'false'],
        ['aria-label', 'Toggle navigation'],
      ),
      newElement('span', 'navbar-toggler-icon'),
    ),
    nestElements(
      newElement('div', 'collapse navbar-collapse', null, null, ['id', 'navbarNav']),
      listElements(
        newElement('ul', 'navbar-nav'),
        nestElements(
          newElement('li', 'nav-item active'),
          newElement('a', 'nav-link', 'Home', () => { mainContainer.display(Home); }, ['href', '#']),
        ),
        nestElements(
          newElement('li', 'nav-item'),
          newElement('a', 'nav-link', 'Menu', () => { mainContainer.display(Menu); }, ['href', '#']),
        ),
        nestElements(
          newElement('li', 'nav-item'),
          newElement('a', 'nav-link', 'Contact', () => { mainContainer.display(Contact); }, ['href', '#']),
        ),
      ),
    ),
  );

  return navbar;
};

export default Navbar;
