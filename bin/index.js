#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const boxen = require('boxen');
const chalk = require('chalk');

// Because we like console, and captains.log sounds cool
const captains = console;

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'single',
};

// Text + chalk definitions
const data = {
  name: chalk.white('John Papa /'),
  handle: chalk.cyan('Disney Fan'),
  work: chalk.white('Web Developer and Full Stack Architect'),
  twitter: chalk.cyan('https://twitter.com/john_papa'),
  github: chalk.cyan('https://github.com/johnpapa'),
  linkedin: chalk.cyan('https://linkedin.com/in/papajohn'),
  web: chalk.cyan('https://johnpapa.net'),
  npx: chalk.white('npx @johnpapa/card'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading
  + newline
  + newline
  + working
  + newline
  + twittering
  + newline
  + githubing
  + newline
  + linkedining
  + newline
  + webing
  + newline
  + newline
  + carding;

const cardMessage = chalk.green(boxen(output, options));
captains.log(cardMessage);
