const isValidJson = (str: string): Boolean => {
  try {
    const jsonObj = JSON.parse(str);
    if (!Array.isArray(jsonObj)) {
      console.error('"input" is not an array');
      return false;
    }
    return true;
  } catch (err) {
    console.log('Invalid JSON input');
    return false;
  }
};

export const verifyInput = (inp: string): Boolean => {
  return isValidJson(inp)
};
