// import newElement from './newelement.js';
import nestElements from './nestelements.js';

const Footer = () => {
  const footer = nestElements(['footer'], ['div', null, 'Footer']);
  // footer.innerHTML = 'Footer';
  return footer;
};

export default Footer;