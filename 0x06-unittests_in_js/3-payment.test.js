const chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");
const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
// const calculateNumber = utils.calculateNumber;

describe("sendPaymentRequestToApi", function() {
    it('should call Utils function', function() {
	const spy = sinon.spy(utils, "calculateNumber");
	sendPaymentRequestToApi(100, 20);
	
	// Verify that utils method is called
	expect(spy.calledWith('SUM', 100, 20)).to.be.true;
	spy.restore();
    });
    
    it('should call Utils function once', function() {
      const spy = sinon.spy(utils, "calculateNumber");
      sendPaymentRequestToApi(100, 20);
      
      // Verify that utils method is called once
      expect(spy.calledOnce).to.be.true;
    });
});
