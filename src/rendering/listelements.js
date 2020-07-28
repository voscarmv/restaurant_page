import newElement from './newelement.js';

const listElements = (container, ...elements) => {
  elements.forEach(
    (element) => {
      container.appendChild(element);
    }
  );
  return container;
};

export default listElements;