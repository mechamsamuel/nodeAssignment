var expect = require('expect');
var math = require('./../math.js');

describe('adder', function () {
    it('should add two arguments', function () {
        expect(math.adder(2, 5)).toEqual(7);
    });

    it('should be a number', function () {
        expect(math.adder(2, 5)).toBeA('number');
    });

});

describe('multiplyer', function () {
    it('should add two arguments', function () {
        expect(math.multiplyer(2, 5)).toEqual(10);
    });

    it('should be a number', function () {
        expect(math.adder(2, 5)).toBeA('number');
    });

});
