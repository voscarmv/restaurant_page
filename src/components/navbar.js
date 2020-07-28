import newElement from './newelement.js'
import nestElements from './nestelements.js';
import listElements from './listelements.js';

const Navbar = () => {
  const navbar = newElement('nav', 'navbar navbar-expand-lg navbar-light bg-light');
  listElements(
    navbar,
    newElement('a', 'navbar-brand', 'Navbar', ['href', '#']),
    nestElements(
      [
        'button',
        'navbar-toggler',
        null,
        ['type', 'button'],
        ['data-toggle', 'collapse'],
        ['data-target', '#navbarNav'],
        ['aria-controls', 'navbarNav'],
        ['aria-expanded', 'false'],
        ['aria-label', 'Toggle navigation']
      ],
      [
        'span',
        'navbar-toggler-icon'
      ]
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