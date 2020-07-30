const listElements = (container, ...elements) => {
  elements.forEach(
    (element) => {
      container.appendChild(element);
    },
  );
  return container;
};

export default listElements;