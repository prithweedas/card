#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import { white, cyan, green } from 'chalk';
import boxen from 'boxen';

// Because we like console, and captains.log sounds cool
const captains = console;

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'double-single',
};

// Text + chalk definitions
const data = {
  name: white('John Papa /'),
  handle: cyan('Disney Fan'),
  work: white('Web Developer and Full Stack Architect'),
  twitter: cyan('https://twitter.com/john_papa'),
  github: cyan('https://github.com/johnpapa'),
  linkedin: cyan('https://linkedin.com/in/papajohn'),
  web: cyan('https://johnpapa.net'),
  npx: white('npx @johnpapa/card'),
  labelWork: white.bold('      Work:'),
  labelTwitter: white.bold('   Twitter:'),
  labelGitHub: white.bold('    GitHub:'),
  labelLinkedIn: white.bold('  LinkedIn:'),
  labelWeb: white.bold('       Web:'),
  labelCard: white.bold('      Card:'),
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

const cardMessage = green(boxen(output, options));
captains.log(cardMessage);
