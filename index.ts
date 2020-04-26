#!/usr/bin/env node

import printTableFromInp from './src/service';
import { program } from 'commander';
import * as fs from 'fs';

program
  .option('-i, --input <value>', 'input string')
  .option('-s, --stdin', 'read input from stdin')
  .parse(process.argv);

if (program.input) {
  console.log('program.input', program.input);
  printTableFromInp(program.input);
} else if (program.stdin) {
  printTableFromInp(fs.readFileSync(0).toString());
}
