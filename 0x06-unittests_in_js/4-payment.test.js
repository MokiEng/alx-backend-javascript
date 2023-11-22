// 4-payment.test.js

const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogStub;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogStub.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith('The total is: 10')).to.be.true;
  });
});
