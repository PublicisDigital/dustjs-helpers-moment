// const jasmine = require("jasmine");
const formatter = require("../lib/formatter");
const moment = require("moment");
const dateInt = 1581694594716;

describe("Formatter Test Cases", () => {
    it("1. Formatter - No Test Case", () => {
        expect(true).toBe(true);
    });

    it("2. Formatter - type: format date: Integer", () => {
        const date = +new Date(dateInt);
        const params = {
            locale: 'en',
            type: 'format',
            format: 'DD MM YYYY',
            date, moment
        };

        expect(formatter(params)).toBeTruthy();
        expect(formatter(params)).toBe('14 02 2020');
    });

    it("2. Formatter - type: format date: Integer", () => {
        const params = {
            locale: 'en',
            type: 'format',
            format: 'DD MM YYYY',
            date: '14 02 2020', moment
        };

        expect(formatter(params)).toBeTruthy();
        expect(formatter(params)).toBe('14 02 2020');
    });
});