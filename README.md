<h1 align="center">table-printer-cli</h1>
<h3 align="center">📟🍭Printing Pretty Tables on your terminal</h3>
<p align="center">
  <a href="https://travis-ci.org/ayonious/table-printer-cli">
    <img alt="Build Status" src="https://travis-ci.org/ayonious/table-printer-cli.svg?branch=master">
  </a>
  <a href="https://codecov.io/gh/ayonious/table-printer-cli">
    <img alt="codecov" src="https://codecov.io/gh/ayonious/table-printer-cli/branch/master/graph/badge.svg">
  </a>
  <a href="https://badge.fury.io/js/table-printer-cli">
    <img alt="npm version" src="https://badge.fury.io/js/table-printer-cli.svg">
  </a>
  <a href="https://packagephobia.now.sh/result?p=table-printer-cli">
    <img alt="install size" src="https://packagephobia.now.sh/badge?p=table-printer-cli@latest">
  </a>
</p>
<p align="center">
  <a href="https://david-dm.org/ayonious/table-printer-cli">
    <img alt="dependencies Status" src="https://david-dm.org/ayonious/table-printer-cli/status.svg">
  </a>
  <a href="https://david-dm.org/ayonious/table-printer-cli?type=dev">
    <img alt="devDependencies Status" src="https://david-dm.org/ayonious/table-printer-cli/dev-status.svg">
  </a>
</p>
<p align="center">
  <a href="https://github.com/prettier/prettier">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=plastic">
  </a>
</p>

## Synopsis

Printing Simple Table on your bash terminal. Its useful when you want to present some tables on console. There is a library that you can use similar way in nodejs/typescript Projects. [console-table-printer](https://www.npmjs.com/package/console-table-printer)

## Installation

```bash
npm install table-printer-cli -g
```

## Basic Example

Try this on your terminal.

```bash
ctp -i '[{ "id":3, "text":"like" }, {"id":4, "text":"tea"}]'
```

Output:

![Screenshot](https://cdn.jsdelivr.net/gh/ayonious/table-printer-cli@master/static-resources/quick-print.v3.png)

You can also pipe the input from stdin

```bash
echo '[{ "id":3, "text":"like" }, {"id":4, "text":"tea"}]' | ctp -s
```

## Detailed usage

```text
Usage: ctp [options]

Options:
  -i, --input <value>  input string
  -s, --stdin          read input from stdin
  -h, --help           display help for command
```

## License

[MIT](https://github.com/ayonious/table-printer-cli/blob/master/LICENSE)
