"use strict";

var assert = require("chai").assert;
var ohm = require("../lib/ohm-r");

describe("[ohm-r]", function () {

    describe("[Should return 47000 Ω with tolerance between 44650 Ω and 49350 Ω]", function () {

        var result = ohm.calc("yellow", "violet", "orange", "gold");

        it("[47000 Ω]", function () {
            assert.equal(result.ohms, 47000);
        });

        describe("[tolerance]", function () {
            it("[min 44650 Ω]", function () {
                assert.equal(result.tolerance.min, 44650);
            });
            it("[max 49350 Ω]", function () {
                assert.equal(result.tolerance.max, 49350);
            });
        });

    });

    describe("[Should return 10000 Ω with tolerance between 9500 Ω and 10500 Ω]", function () {

        var result = ohm.calc("brown", "black", "orange", "gold");

        it("[10000 Ω]", function () {
            assert.equal(result.ohms, 10000);
        });

        describe("[tolerance]", function () {
            it("[min 9500 Ω]", function () {
                assert.equal(result.tolerance.min, 9500);
            });
            it("[max 10500 Ω]", function () {
                assert.equal(result.tolerance.max, 10500);
            });
        });

    });

    describe("[Should return 220 Ω with tolerance between 209 Ω and 231 Ω]", function () {

        var result = ohm.calc("red", "red", "brown", "gold");

        it("[220 Ω]", function () {
            assert.equal(result.ohms, 220);
        });

        describe("[tolerance]", function () {
            it("[min 209 Ω]", function () {
                assert.equal(result.tolerance.min, 209);
            });
            it("[max 231 Ω]", function () {
                assert.equal(result.tolerance.max, 231);
            });
        });

    });

    describe("[Should return 465000 Ω with tolerance between 460350 Ω and 469650 Ω]", function () {

        var result = ohm.calc("yellow", "blue", "green", "orange", "brown");

        it("[465000 Ω]", function () {
            assert.equal(result.ohms, 465000);
        });

        describe("[tolerance]", function () {
            it("[min 460350 Ω]", function () {
                assert.equal(result.tolerance.min, 460350);
            });
            it("[max 469650 Ω]", function () {
                assert.equal(result.tolerance.max, 469650);
            });
        });

    });

    describe("[Should return 276 Ω with tolerance between 262.2 Ω and 289.8 Ω]", function () {

        var result = ohm.calc("red", "violet", "blue", "black", "gold");

        it("[276 Ω]", function () {
            assert.equal(result.ohms, 276);
        });

        describe("[tolerance]", function () {
            it("[min 262.2 Ω]", function () {
                assert.equal(result.tolerance.min, 262.2);
            });
            it("[max 289.8 Ω]", function () {
                assert.equal(result.tolerance.max, 289.8);
            });
        });

    });

    describe("[Should throw an exception when a color does not exist]", function () {

        it("[Pink does not exist]", function () {
            assert.throws(function () {
                ohm.calc("pink", "violet", "blue", "black", "gold");
            });
        });

    });

    describe("[Should throw an exception when the number of colors are less than 4]", function () {

        it("[Providing 3 colors]", function () {
            assert.throws(function () {
                ohm.calc("yellow", "violet", "blue");
            });
        });

    });

    describe("[Should throw an exception when an input is empty or is not a string]", function () {

        it("[Undefined]", function () {
            assert.throws(function () {
                ohm.calc(undefined, "yellow", "violet", "blue");
            });
        });

        it("[Null]", function () {
            assert.throws(function () {
                ohm.calc(null, "yellow", "violet", "blue");
            });
        });

        it("[Empty]", function () {
            assert.throws(function () {
                ohm.calc("", "yellow", "violet", "blue");
            });
        });

        it("[Array]", function () {
            assert.throws(function () {
                ohm.calc([], "yellow", "violet", "blue");
            });
        });

        it("[Object]", function () {
            assert.throws(function () {
                ohm.calc({}, "yellow", "violet", "blue");
            });
        });

    });

});