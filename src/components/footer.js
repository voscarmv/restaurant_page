import newElement from '../rendering/newelement.js';
import nestElements from '../rendering/nestelements.js';

const Footer = () => {
  const footer = nestElements(
    newElement('footer', 'footer bg-white'),
    newElement('div', 'container', 'Copyleft © 2020 Doge Industries. No rights reserved.')
  );
  return footer;
};

export default Footer;