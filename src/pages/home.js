import newElement from '../rendering/newelement.js';
import nestElements from '../rendering/nestelements.js';
import listElements from '../rendering/listelements.js';
import newImage from '../rendering/newimage.js';
import hotDoge from '../assets/img/doge.jpg'

const Home = (() => {
  const home = listElements(
    newElement('div', 'container page'),
    nestElements(
      newElement('div', 'row'),
      newElement('div', 'col'),
      newElement('h1', 'home-title', 'henlo fren!!')
    ),
    listElements(
      newElement('div', 'row'),
      listElements(
        newElement('div', 'col-6'),
        newElement(
          'p',
          'home-text',
          'Welcome to <span class="inline-logo">HotDoge Hotdogs!</span>'
        ),
        newElement(
          'p',
          'home-text',
          'We have the tastiest selection of hotdogs, delivered at your doorstep 24/7!'
        ),
        newElement(
          'p',
          'home-text',
          'Check out our menu to order online!'
        ),
        newElement(
          'p',
          'home-text',
          'Disclaimer: Our hotdoges are 100% vegan. No doge has been harmed in the making of our hotdogs.'
        ),
      ),
      nestElements(
        newElement('div', 'col-6'),
        newImage(hotDoge, 'w-100')
      )
    )
  );
  return home;
})();

export default Home;
