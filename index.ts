#!/usr/bin/env node

import service from './src/service';
import { program } from 'commander';

program
  .version(require('./package.json').version)
  .option('-i, --input', 'input string')
  .option('-s, --stdin', 'read input from stdin')
  .parse(process.argv);

if (program.input) {
  service(process.argv);
} else if (program.stdin) {
  const fs = require('fs');
  const stdinBuffer = fs.readFileSync(0); // STDIN_FILENO = 0
  service(stdinBuffer.toString());
}
