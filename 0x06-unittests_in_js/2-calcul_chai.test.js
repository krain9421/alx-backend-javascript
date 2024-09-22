const assert = require("assert");
const expect = chai.expect;
const calculateNumber = require('./1-calcul.js');
const SUM = "SUM";
const DIV = "DIVIDE";
const SUB = "SUBTRACT";

describe("round test", function() {
    it('Calculate type SUM', function() {
        expect(calculateNumber(SUM, 3.6, 0.4)).to.equal(4);
    });

    it('Calculate type SUBTRACT', function() {
        expect(calculateNumber(SUB, 1.4, 0.5)).to.equal(0);
    });

    it('Calculate type DIVIDE', function() {
        expect(calculateNumber(DIV, 1.4, 4.5)).to.equal(0.2);
    });

    it('Calcuate type Error', function() {
        expect(calculateNumber(DIV, 2.5, 0)).to.equal("Error");
    });
});
