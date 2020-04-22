const isValidJson = (str: string): Boolean => {
  try {
    const jsonObj = JSON.parse(str);
    if (!Array.isArray(jsonObj)) {
      console.log('c');
      return false;
    }
    return true;
  } catch (err) {
    console.log('Invalid json input');
    return false;
  }
};

const verifyInput = (args: string[]): Boolean => {
  if (args.length !== 3) {
    console.log('only one param allowed');
    return false;
  }

  if (!isValidJson(args[2])) {
    return false;
  }
  return true;
};

export default verifyInput;
