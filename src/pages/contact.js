import newElement from '../rendering/newelement.js';
import nestElements from '../rendering/nestelements.js';

const Contact = (() => {
  const contact = nestElements(
    newElement('div'),
    newElement('h1', null, 'Contact')
  );
  return contact;
})();

export default Contact;