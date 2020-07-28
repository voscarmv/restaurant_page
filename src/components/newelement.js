const newElement = (...args) => {
  let tag = null;
  let classes = null;
  let html = null;
  let attribs = null;
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
  if(args.length > 3){
    attribs = args.slice(3);
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
  if(attribs != null){
    attribs.forEach(
      (attrib) => {
        if(Array.isArray(attrib)){
          if(attrib.length > 1){
            element.setAttribute(attrib[0], attrib[1]);
          }
        }
      }
    );
  }
  return element;
};
export default newElement;