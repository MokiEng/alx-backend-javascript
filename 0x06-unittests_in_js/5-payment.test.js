// 5-payment.test.js

const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleLogStub;

  beforeEach(() => {
    consoleLogStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    consoleLogStub.restore();
  });

  it('should log correct total for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith('The total is: 120')).to.be.true;
  });

  it('should log correct total for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith('The total is: 20')).to.be.true;
  });
});
