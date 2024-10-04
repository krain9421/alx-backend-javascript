const chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");
const utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe("sendPaymentRequestToApi", function() {
    let consoleSpy;
    
    beforeEach(function() {
      consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function() {
      consoleSpy.restore();
    });
    
    it('should call Utils function with 100, 20 and log correct message to console', function() {
      sendPaymentRequestToApi(100, 20);
	
      // Verify that the console method is called once
      expect(consoleSpy.calledOnce).to.be.true;
      // Verify that the console logs correct message
      expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    });

    it('should call Utils function with 10, 10 and log correct message to console', function() {
      sendPaymentRequestToApi(10, 10);
      // Verify that the console method is called once
      expect(consoleSpy.calledOnce).to.be.true;
      // Verify that the console logs correct message
      expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    });
});
