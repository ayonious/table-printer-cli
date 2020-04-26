import { printTable } from 'console-table-printer';

import verifyInput from './inputVerifier';

const printTableFromInp = (inp: string): void | string => {
  if (!verifyInput(inp)) {
    console.log(`not a valid json ${inp}`);
    return;
  }

  const jsonInp = JSON.parse(inp);
  printTable(jsonInp);
};

export default printTableFromInp;
