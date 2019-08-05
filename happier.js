#!/usr/bin/env node

var program = require("commander");
const pkgJson = require('./package.json')

program
  .version(pkgJson.version)
  .command("me", "make me happier")
  .parse(process.argv);