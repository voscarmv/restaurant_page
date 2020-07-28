import newElement from './newelement.js';

const nestElements = (...args) => {
  let elements = [];
  args.forEach(
    (arg) => {
      elements.push(newElement(...arg));
    }
  );
  for(let i = 1; i < elements.length; i ++){
    elements[i-1].appendChild(elements[i]);
  }
  if(elements.length > 0){
    return elements[0];
  }
  return null;
};

export default nestElements;