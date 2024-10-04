const chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");
const utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe("sendPaymentRequestToApi", function() {
    let calculateNumberStub;
    let consoleSpy;
    
    beforeEach(function() {
      calculateNumberStub = sinon.stub(utils, 'calculateNumber').returns(10);
      consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function() {
      calculateNumberStub.restore();
      consoleSpy.restore();
    });
    
    it('should call Utils function with right arguments and log correct message to console', function() {
      sendPaymentRequestToApi(100, 20);
	
      // Verify that utils method is called
      expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;

      expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    });
});
