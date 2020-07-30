const newElement = (...args) => {
  let tag = null;
  let classes = null;
  let html = null;
  let click = null;
  let attribs = null;
  let element = null;
  const argsarray = args;
  const zero = 0;
  const one = 1;
  const two = 2;
  const three = 3;
  const four = 4;
  if (argsarray.length > 0) {
    tag = argsarray[zero];
  }
  if (argsarray.length > 1) {
    classes = argsarray[one];
  }
  if (argsarray.length > 2) {
    html = argsarray[two];
  }
  if (argsarray.length > 3) {
    click = argsarray[three];
  }
  if (argsarray.length > 4) {
    attribs = argsarray.slice(four);
  }
  if (tag != null) {
    element = document.createElement(tag);
  }
  if (classes != null) {
    element.classList.add(...classes.split(' '));
  }
  if (html != null) {
    element.innerHTML = html;
  }
  if (click != null) {
    element.addEventListener('click', () => { click(); });
  }
  if (attribs != null) {
    attribs.forEach(
      (attrib) => {
        if (Array.isArray(attrib)) {
          if (attrib.length > 1) {
            element.setAttribute(attrib[0], attrib[1]);
          }
        }
      },
    );
  }
  return element;
};
export default newElement;