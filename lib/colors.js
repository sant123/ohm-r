'use strict';

class ResistanceColor {
  constructor(id, multiplier, tolerance) {
    this.id = id;
    this.multiplier = 10 ** multiplier;
    this.tolerance = tolerance; // In percent.
  }
}

const COLORS = {
  black: new ResistanceColor(0, 0, NaN),
  brown: new ResistanceColor(1, 1, 1),
  red: new ResistanceColor(2, 2, 2),
  orange: new ResistanceColor(3, 3, NaN),
  yellow: new ResistanceColor(4, 4, NaN),
  green: new ResistanceColor(5, 5, 0.5),
  blue: new ResistanceColor(6, 6, NaN),
  violet: new ResistanceColor(7, 7, NaN),
  gray: new ResistanceColor(8, 8, NaN),
  white: new ResistanceColor(9, 9, NaN),
  gold: new ResistanceColor(NaN, -1, 5),
  silver: new ResistanceColor(NaN, -2, 10),
};

const COLORNAMES = {
  BLACK: 'black',
  BROWN: 'brown',
  RED: 'red',
  ORANGE: 'orange',
  YELLOW: 'yellow',
  GREEN: 'green',
  BLUE: 'blue',
  VIOLET: 'violet',
  GRAY: 'gray',
  WHITE: 'white',
  GOLD: 'gold',
  SILVER: 'silver',
};

module.exports = { COLORS: COLORS, COLORNAMES: COLORNAMES };
