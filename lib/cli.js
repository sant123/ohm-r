#!/usr/bin/env node

'use strict';

const ohm = require('./ohm-r');
const numeral = require('numeral');

const format = '0,0.[00]';

function getResult() {
  try {
    return ohm.calc.apply(this, process.argv.slice(2));
  } catch (error) {
    return error;
  }
}

function formatNumber(input) {
  return numeral(input).format(format);
}

const result = getResult();

if (result instanceof Error) {
  return console.error(result.message);
}

const message = `
Ohms: ${formatNumber(result.ohms)}
Tolerance:
    Min: ${formatNumber(result.tolerance.min)}
    Max: ${formatNumber(result.tolerance.max)}`;

console.log(message);
