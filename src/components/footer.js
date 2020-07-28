import newElement from '../rendering/newelement.js';
import nestElements from '../rendering/nestelements.js';

const Footer = () => {
  const footer = nestElements(
    newElement('footer'),
    newElement('div', null, 'Footer')
  );
  // footer.innerHTML = 'Footer';
  return footer;
};

export default Footer;