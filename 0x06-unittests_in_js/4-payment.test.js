const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should check if sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const spyConsole = sinon.spy(console);
    const calculateNumber = sinon.stub(Utils, 'calculateNumber');

    calculateNumber.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumber.callCount).to.be.equal(1);
    expect(spyConsole.log.calledWith('The total is: 10')).to.be.true;
    expect(spyConsole.log.callCount).to.be.equal(1);
    calculateNumber.restore();
    spyConsole.log.restore();
  });
});