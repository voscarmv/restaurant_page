import newElement from '../rendering/newelement.js';
import nestElements from '../rendering/nestelements.js';

const Home = (() => {
  const home = nestElements(
    newElement('div'),
    newElement('h1', null, 'Home')
  );
  return home;
})();

export default Home;