import newElement from '../rendering/newelement';
import nestElements from '../rendering/nestelements';

const Footer = () => {
  const footer = nestElements(
    newElement('footer', 'footer bg-white'),
    newElement('div', 'container', 'Copyleft &copy; 2020 Doge Industries. No rights reserved.'),
  );
  return footer;
};

export default Footer;