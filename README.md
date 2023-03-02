<h1 align="center">table-printer-cli</h1>
<h3 align="center">📟🍭Printing Pretty Tables on your terminal</h3>
<p align="center">
  <a href="https://dl.circleci.com/status-badge/redirect/gh/ayonious/table-printer-cli/tree/master"><img src="https://dl.circleci.com/status-badge/img/gh/ayonious/table-printer-cli/tree/master.svg?style=svg"></a>
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
  <a href="https://github.com/prettier/prettier">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=plastic">
  </a>
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fayonious%2Ftable-printer-cli?ref=badge_shield" alt="FOSSA Status">
    <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fayonious%2Ftable-printer-cli.svg?type=shield"/>
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
</p>

## Synopsis

Printing Simple Table on your bash terminal. Its useful when you want to present some tables on console. There is a library that you can use similar way in nodejs/typescript Projects. [console-table-printer](https://www.npmjs.com/package/console-table-printer)

## Installation

### Using npm

```bash
npm install --global table-printer-cli
```

### Using yarn

```bash
yarn global add table-printer-cli
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
