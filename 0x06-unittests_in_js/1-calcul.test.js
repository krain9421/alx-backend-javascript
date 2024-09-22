const assert = require("assert");
const calculateNumber = require('./1-calcul.js');
const SUM = "SUM";
const DIV = "DIVIDE";
const SUB = "SUBTRACT";

describe("round test", function() {
    it('Calculate type SUM', function() {
        assert.strictEqual(calculateNumber(SUM, 3.6, 0.4), 4);
    });

    it('Calculate type SUBTRACT', function() {
        assert.strictEqual(calculateNumber(SUB, 1.4, 0.5), 0);
    });

    it('Calculate type DIVIDE', function() {
        assert.strictEqual(calculateNumber(DIV, 1.4, 4.5), 0.2);
    });

    it('Calcuate type Error', function() {
        assert.equal(calculateNumber(DIV, 2.5, 0), "Error");
    });
});
