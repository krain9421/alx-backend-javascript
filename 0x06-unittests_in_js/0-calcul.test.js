const assert = require("assert");
const calculateNumber = require('./0-calcul.js');

const numA = 10.5;
const numB = 10.9;
var round = calculateNumber(numA, numB);

describe("round test", function() {
  it("checks rounded", function() {
    assert.equal(round, Math.round(numA) + Math.round(numB));
  });
});
