import newElement from '../rendering/newelement.js';
import nestElements from '../rendering/nestelements.js';

const Menu = (() => {
  const menu = nestElements(
    newElement('div'),
    newElement('h1', null, 'Menu')
  );
  return menu;
})();

export default Menu;