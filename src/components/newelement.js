const newElement = (...args) => {
  let tag = null;
  let classes = null;
  let element = null;
  if(args.length > 0){
    tag = args[0];
  }
  if(args.length > 1){
    classes = args[1];
  }
  if(tag != null){
    element = document.createElement(tag);
  }
  if(classes != null){
    element.classList.add(...classes.split(" "));
  }
  return element;
};
export default newElement;