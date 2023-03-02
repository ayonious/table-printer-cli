#!/usr/bin/env node
import { Command } from 'commander';
import * as fs from 'fs';

import printTableFromInp from './src/service';

const program = new Command();

program
  .option('-i, --input <value>', 'input string')
  .option('-s, --stdin', 'read input from stdin')
  .parse(process.argv);

const options = program.opts();

if (options.input) {
  console.log('program.input', options.input);
  printTableFromInp(options.input);
} else if (options.stdin) {
  printTableFromInp(fs.readFileSync(0).toString());
} else {
  console.log('Error: Cant detect input option');
}
