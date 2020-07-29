import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';

const Menu = (() => {
  const menu = listElements(
    newElement('div', 'd-flex flex-wrap justify-content-between page'),
    listElements(
      newElement('div', 'd-flex flex-column pb-5'),
      newElement('h2', 'menu-name', 'Long Boy'),
      newElement('div', 'hotdog-image longboy'),
      newElement('p', 'menu-text', 'Long boy, haha! What? If you are hungry, this boy will not disappoint! A hotdog that will make your friends say "here come dat longboi!"'),
      newElement('button', 'btn btn-warning', 'Order!'),
    ),
    listElements(
      newElement('div', 'd-flex flex-column pb-5'),
      newElement('h2', 'menu-name', 'Im baby'),
      newElement('div', 'hotdog-image imbaby'),
      newElement('p', 'menu-text', 'Gently wrapped in a soft paper bag, you can take this baby home and kiss it good-night for just $1.99!'),
      newElement('button', 'btn btn-warning', 'Order!'),
    ),
    listElements(
      newElement('div', 'd-flex flex-column pb-5'),
      newElement('h2', 'menu-name', 'Flatdog'),
      newElement('div', 'hotdog-image flatdog'),
      newElement('p', 'menu-text', 'For those who enjoy alternative hotdog theories... what if hotdog was flat? This one comes wrapped in tin foil, in case you want to make a hat.'),
      newElement('button', 'btn btn-warning', 'Order!'),
    ),
  );
  return menu;
})();

export default Menu;