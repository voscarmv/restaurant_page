import newElement from '../rendering/newelement.js';

const pageBody = (() => {
  const name = 'content';
  const create = () => newElement('div', null, null, null, ['id', name]);
  const get = () => document.getElementById(name);
  return {create, get}
})();

export default pageBody;