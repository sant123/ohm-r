"use strict";

const { COLORS, COLORNAMES } = require("./colors");

function getColor(color) {
	var resistanceColor = COLORS[color];

	if (!resistanceColor)
		throw new Error(`The color "${color}" does not exist.`);

	return resistanceColor;
}

function calc(...colors) {
	if (colors.length < 4) { throw new Error("The resistance must have at least 4 colors."); }

	var multiplierIndex = colors.length - 2;
	var multiplier = getColor(colors[multiplierIndex]).multiplier;

	var toleranceIndex = colors.length - 1;
	var tolerance = getColor(colors[toleranceIndex]).tolerance / 100;

	var firstNumbers = colors.slice(0, multiplierIndex).map(color => getColor(color).id).join("");

	var ohms = firstNumbers * multiplier.toFixed(2);

	return { ohms: ohms, tolerance: { min: ohms * (1 - tolerance), max: ohms * (1 + tolerance) } };
}

module.exports = {
	calc: calc,
	colors: COLORNAMES
};