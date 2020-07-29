const nestElements = (...args) => {
  for (let i = 1; i < args.length; i += 1) {
    args[i - 1].appendChild(args[i]);
  }
  if (args.length > 0) {
    return args[0];
  }
  return null;
};

export default nestElements;