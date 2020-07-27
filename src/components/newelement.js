const newElement = (tag, classes) => {
  const element = document.createElement(tag);
  element.classList.add(...classes.split(" "));
  return element;
};
export default newElement;