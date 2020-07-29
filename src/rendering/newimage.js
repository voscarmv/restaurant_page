const newImage = (...args) => {
  let image = null;
  let classes = null;
  let element = null;
  if(args.length > 0){
    image = args[0];
  }
  if(args.length > 1){
    classes = args[1];
  }
  if(image != null){
    element = new Image();
    element.src = image;  
  }
  if(classes != null){
    element.classList.add(...classes.split(" "));
  }
  return element;
};

export default newImage;