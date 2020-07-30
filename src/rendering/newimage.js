const newImage = (...args) => {
  let image = null;
  let classes = null;
  let element = null;
  const zero = 0;
  const one = 1;
  if (args.length > 0) {
    image = args[zero];
  }
  if (args.length > 1) {
    classes = args[one];
  }
  if (image != null) {
    element = new Image();
    element.src = image;
  }
  if (classes != null) {
    element.classList.add(...classes.split(' '));
  }
  return element;
};

export default newImage;