// 3-payment.test.js

const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;

  beforeEach(() => {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    calculateNumberSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct sum', () => {
    const consoleLogStub = sinon.stub(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith('The total is: 120')).to.be.true;
    consoleLogStub.restore();
  });
});
