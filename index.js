#!/usr/bin/env node

const program = require('commander');
const pushCollection = require('./src/pushCollection');
const pushEnvironment = require('./src/pushEnvironment');

program
  .command('pushC')
  .description('Push Collection to Workspace')
  .action(pushCollection)

program
  .command('pushC')
  .description('Push Environment to Workspace')
  .action(pushEnvironment)

program.parse(process.argv)