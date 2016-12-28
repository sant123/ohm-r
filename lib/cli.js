#!/usr/bin/env node

"use strict";

var ohm = require("./ohm-r");
var numeral = require("numeral");

var format = "0,0.[00]";

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

var result = getResult();

if (result instanceof Error) {
    return console.error(result.message);
}

var message =
`
Ohms: ${formatNumber(result.ohms)}
Tolerance:
    Min: ${formatNumber(result.tolerance.min)}
    Max: ${formatNumber(result.tolerance.max)}`;

console.log(message);
