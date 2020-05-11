'use strict';

const { COLORS, COLORNAMES } = require('./colors');

function getColor(color) {
  const resistanceColor = COLORS[color];

  if (!resistanceColor) {
    throw new Error(`The color "${color}" does not exist.`);
  }

  return resistanceColor;
}

function calc(...colors) {
  if (colors.length < 4) {
    throw new Error('The resistance must have at least 4 colors.');
  }

  const multiplierIndex = colors.length - 2;
  const multiplier = getColor(colors[multiplierIndex]).multiplier;

  const toleranceIndex = colors.length - 1;
  const tolerance = getColor(colors[toleranceIndex]).tolerance / 100;

  const firstNumbers = colors
    .slice(0, multiplierIndex)
    .map((color) => getColor(color).id)
    .join('');

  const ohms = firstNumbers * multiplier.toFixed(2);

  return { ohms: ohms, tolerance: { min: ohms * (1 - tolerance), max: ohms * (1 + tolerance) } };
}

module.exports = {
  calc: calc,
  colors: COLORNAMES,
};
