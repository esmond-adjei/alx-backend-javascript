const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spyConsole;

  beforeEach(() => {
    if (!spyConsole) {
      spyConsole = sinon.spy(console);
    }
  });

  afterEach(() => {
    spyConsole.log.resetHistory();
  });

  it('should check if sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spyConsole.log.calledWith('The total is: 120')).to.be.true;
    expect(spyConsole.log.calledOnce).to.be.true;
  });

  it('should check if sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spyConsole.log.calledWith('The total is: 20')).to.be.true;
    expect(spyConsole.log.calledOnce).to.be.true;
  });
});