const isValidJson = (str: string): Boolean => {
  try {
    const jsonObj = JSON.parse(str);
    if (!Array.isArray(jsonObj)) {
      console.log('input Not an array');
      return false;
    }
    return true;
  } catch (err) {
    console.log('Invalid json input');
    return false;
  }
};

export const verifyInput = (inp: string): Boolean => {
  if (!isValidJson(inp)) {
    return false;
  }
  return true;
};

export default verifyInput;
