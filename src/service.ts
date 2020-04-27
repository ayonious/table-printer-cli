import { printTable } from 'console-table-printer';

import verifyInput from './inputVerifier';

const printTableFromInp = (inp: string): void | string => {
  if (!verifyInput(inp)) {
    console.log(`not a valid input ${inp}`);
    return;
  }

  const jsonInp = JSON.parse(inp);
  printTable(jsonInp);
};

export default printTableFromInp;
