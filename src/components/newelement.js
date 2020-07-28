const newElement = (...args) => {
  let tag = null;
  let classes = null;
  let html = null;
  let element = null;
  if(args.length > 0){
    tag = args[0];
  }
  if(args.length > 1){
    classes = args[1];
  }
  if(args.length > 2){
    html = args[2];
  }
  if(tag != null){
    element = document.createElement(tag);
  }
  if(classes != null){
    element.classList.add(...classes.split(" "));
  }
  if(html != null){
    element.innerHTML = html;
  }
  return element;
};
export default newElement;