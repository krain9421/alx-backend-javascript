const assert = require("assert");
const calculateNumber = require('./0-calcul.js');

const numA = 10;
const numB = 10;
var round = calculateNumber(numA, numB);

describe("round test", function() {
    it('should return -2 when a is -1.4 and b is -0.6', () => {
        assert.strictEqual(calculateNumber(-1.4, -0.6), -2);
    });

    it('should return 1 when a is 0.5 and b is 0.4', () => {
        assert.strictEqual(calculateNumber(0.5, 0.4), 1);
    });

    it('should return 4 when a is 3.6 and b is 0.5', () => {
        assert.strictEqual(calculateNumber(3.6, 0.5), 5);
    });

    it('should return -1 when a is -0.5 and b is -0.6', () => {
        assert.strictEqual(calculateNumber(-0.5, -0.6), -1);
    });

    it('should return 2 when a is 1.5 and b is 0.5', () => {
        assert.strictEqual(calculateNumber(1.5, 0.5), 3);
    });

    it('should return 3 when a is 2.5 and b is 0.5', () => {
        assert.strictEqual(calculateNumber(2.5, 0.5), 4);
    });
});
