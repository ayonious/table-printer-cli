import { printTable } from 'console-table-printer';
import verifyInput from './inputVerifier';
import banner from './banner';

const printTableFromArgs = (args: string[]): void | string => {
  if (!verifyInput(args)) {
    console.log(banner);
    return;
  }

  const jsonInp = JSON.parse(args[2]);
  printTable(jsonInp);
};

export default printTableFromArgs;
