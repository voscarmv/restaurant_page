import newElement from '../rendering/newelement.js'
import nestElements from '../rendering/nestelements.js';
import listElements from '../rendering/listelements.js';

const message = () => {
  console.log('home');
};

const Navbar = () => {
  const navbar = newElement('nav', 'navbar navbar-expand-lg navbar-light bg-light');
  listElements(
    navbar,
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
          newElement('a', 'nav-link', 'Home', () => { console.log('HOme'); }, ['href', '#'])
        ),
        nestElements(
          newElement('li', 'nav-item'),
          newElement('a', 'nav-link', 'Menu', null, ['href', '#'])
        ),
        nestElements(
          newElement('li', 'nav-item'),
          newElement('a', 'nav-link', 'Contact', null, ['href', '#'])
        )
      )
    )
  );

  return navbar;
};

export default Navbar;

/*
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
*/