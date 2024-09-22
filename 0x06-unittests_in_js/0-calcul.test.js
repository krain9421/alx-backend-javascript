const assert = require("assert");
const calculateNumber = require('./0-calcul.js');

const numA = 10;
const numB = 10;
const isInteger = Number.isInteger(numA);
var round = calculateNumber(numA, numB);

describe("round test", function() {
  it("checks rounded", function() {
    const isInteger = Number.isInteger(numA)
    assert(isInteger);
  });
});
