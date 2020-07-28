import newElement from '../rendering/newelement.js'
import nestElements from '../rendering/nestelements.js';
import listElements from '../rendering/listelements.js';
import Home from '../pages/home.js';
import Menu from '../pages/menu.js';
import Contact from '../pages/contact.js';
import mainContainer from '../components/maincontainer.js';

const Navbar = () => {
  const navbar = listElements(
    newElement('nav', 'navbar navbar-expand-lg navbar-light bg-light'),
    newElement('a', 'navbar-brand', 'Navbar', null, ['href', '#']),
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
        ['aria-label', 'Toggle navigation']
      ),
      newElement('span', 'navbar-toggler-icon')
    ),
    nestElements(
      newElement('div', 'collapse navbar-collapse', null, null, ['id', 'navbarNav']),
      listElements(
        newElement('ul', 'navbar-nav'),
        nestElements(
          newElement('li', 'nav-item active'),
          newElement('a', 'nav-link', 'Home', () => { mainContainer.display(Home); }, ['href', '#'])
        ),
        nestElements(
          newElement('li', 'nav-item'),
          newElement('a', 'nav-link', 'Menu', () => { mainContainer.display(Menu); }, ['href', '#'])
        ),
        nestElements(
          newElement('li', 'nav-item'),
          newElement('a', 'nav-link', 'Contact', () => { mainContainer.display(Contact); }, ['href', '#'])
        )
      )
    )
  );

  return navbar;
};

export default Navbar;
