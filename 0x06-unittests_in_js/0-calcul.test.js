const assert = require("assert");
const calculateNumber = require('./0-calcul.js');

const numA = 10;
const numB = 10;
var round = calculateNumber(numA, numB);

describe("round test", function() {
    it('when first number is rounded', function() {
        assert.strictEqual(calculateNumber(3.6, 0.4), 4);
    });

    it('when second number is rounded', function() {
        assert.strictEqual(calculateNumber(1.4, 0.5), 2);
    });

    it('when both numbers are rounded', function() {
        assert.strictEqual(calculateNumber(2.5, 0.5), 4);
    });
});
