const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should check if sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const utils = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(utils.calculateNumber.callCount).to.be.equal(1);
    utils.calculateNumber.restore();
  });
});