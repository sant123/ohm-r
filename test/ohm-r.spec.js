"use strict";

const ohm = require("../lib/ohm-r");

describe("[ohm-r]", () => {

    describe("[Should return 47000 Ω with tolerance between 44650 Ω and 49350 Ω]", () => {

        const result = ohm.calc("yellow", "violet", "orange", "gold");

        test("[47000 Ω]", () => {
            expect(result.ohms).toBe(47000);
        });

        describe("[tolerance]", () => {
            test("[min 44650 Ω]", () => {
                expect(result.tolerance.min).toBe(44650);
            });
            test("[max 49350 Ω]", () => {
                expect(result.tolerance.max).toBe(49350);
            });
        });

    });

    describe("[Should return 10000 Ω with tolerance between 9500 Ω and 10500 Ω]", () => {

        const result = ohm.calc("brown", "black", "orange", "gold");

        test("[10000 Ω]", () => {
            expect(result.ohms).toBe(10000);
        });

        describe("[tolerance]", () => {
            test("[min 9500 Ω]", () => {
                expect(result.tolerance.min).toBe(9500);
            });
            test("[max 10500 Ω]", () => {
                expect(result.tolerance.max).toBe(10500);
            });
        });

    });

    describe("[Should return 220 Ω with tolerance between 209 Ω and 231 Ω]", () => {

        const result = ohm.calc("red", "red", "brown", "gold");

        test("[220 Ω]", () => {
            expect(result.ohms).toBe(220);
        });

        describe("[tolerance]", () => {
            test("[min 209 Ω]", () => {
                expect(result.tolerance.min).toBe(209);
            });
            test("[max 231 Ω]", () => {
                expect(result.tolerance.max).toBe(231);
            });
        });

    });

    describe("[Should return 465000 Ω with tolerance between 460350 Ω and 469650 Ω]", () => {

        const result = ohm.calc("yellow", "blue", "green", "orange", "brown");

        test("[465000 Ω]", () => {
            expect(result.ohms).toBe(465000);
        });

        describe("[tolerance]", () => {
            test("[min 460350 Ω]", () => {
                expect(result.tolerance.min).toBe(460350);
            });
            test("[max 469650 Ω]", () => {
                expect(result.tolerance.max).toBe(469650);
            });
        });

    });

    describe("[Should return 276 Ω with tolerance between 262.2 Ω and 289.8 Ω]", () => {

        const result = ohm.calc("red", "violet", "blue", "black", "gold");

        test("[276 Ω]", () => {
            expect(result.ohms).toBe(276);
        });

        describe("[tolerance]", () => {
            test("[min 262.2 Ω]", () => {
                expect(result.tolerance.min).toBe(262.2);
            });
            test("[max 289.8 Ω]", () => {
                expect(result.tolerance.max).toBe(289.8);
            });
        });

    });

    describe("[Should throw an exception when a color does not exist]", () => {

        test("[Pink does not exist]", () => {
            expect(() => {
                ohm.calc("pink", "violet", "blue", "black", "gold");
            }).toThrow();
        });

    });

    describe("[Should throw an exception when the number of colors are less than 4]", () => {

        test("[Providing 3 colors]", () => {
            expect(() => {
                ohm.calc("yellow", "violet", "blue");
            }).toThrow();
        });

    });

    describe("[Should throw an exception when an input is empty or is not a string]", () => {

        test("[Undefined]", () => {
            expect(() => {
                ohm.calc(undefined, "yellow", "violet", "blue");
            }).toThrow();
        });

        test("[Null]", () => {
            expect(() => {
                ohm.calc(null, "yellow", "violet", "blue");
            }).toThrow();
        });

        test("[Empty]", () => {
            expect(() => {
                ohm.calc("", "yellow", "violet", "blue");
            }).toThrow();
        });

        test("[Array]", () => {
            expect(() => {
                ohm.calc([], "yellow", "violet", "blue");
            }).toThrow();
        });

        test("[Object]", () => {
            expect(() => {
                ohm.calc({}, "yellow", "violet", "blue");
            }).toThrow();
        });

    });

});