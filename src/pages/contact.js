import newElement from '../rendering/newelement.js';
import listElements from '../rendering/listelements.js';

const Contact = (() => {
  const contact = listElements(
    newElement('div', 'page contact d-flex flex-column'),
    newElement('h1', 'contact-title', 'Contact'),
    newElement('p', 'contact-text', 'Comments? Questions? Drop us a line!'),
    listElements(
      newElement('form'),
      listElements(
        newElement('div', 'form-group'),
        newElement('label', null, 'E-mail:', null, ['for', 'email']),
        newElement('input', 'form-control', null, null, ['id', 'email'], ['placeholder', 'Enter your e-mail here'])
      ),
      listElements(
        newElement('div', 'form-group'),
        newElement('label', null, 'Message:', null, ['for', 'message']),
        newElement('textarea', 'form-control', null, null, ['id', 'message'], ['placeholder', 'Your message here'], ['rows', '5'])
      ),
      newElement('button', 'btn btn-warning', 'Send')
    )
  );
  return contact;
})();

export default Contact;