const chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");
const utils = require('./utils');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe("getPaymentTokenFromAPI", function() {
    it('should return a resolved promise with correct object when success is true', function() {
	
      // Verify that promise with correct object is returned
      return getPaymentTokenFromAPI(true).then(response => {
        expect(response).to.deep.equal({data: 'Successful response from the API' });
      });
      done();
    });
});
