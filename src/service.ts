import { printTable } from 'console-table-printer';
import verifyInput from './inputVerifier';
import banner from './banner';

const printTableFromInp = (inp: string): void | string => {
  if (!verifyInput(inp)) {
    console.log(banner);
    return;
  }

  const jsonInp = JSON.parse(inp);
  printTable(jsonInp);
};

export default printTableFromInp;
