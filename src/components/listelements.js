import newElement from './newelement.js';

const listElements = (container, ...elements) => {
  elements.forEach(
    (element) => {
      container.appendChild(element);
    }
  );
};

export default listElements;