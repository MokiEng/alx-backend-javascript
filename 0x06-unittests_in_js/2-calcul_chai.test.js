// 2-calcul_chai.test.js

const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');
const { expect } = chai;

describe('calculateNumber', () => {
  it('should return the correct result for SUM operation', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return the correct result for SUBTRACT operation', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return the correct result for DIVIDE operation', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should throw an error for invalid type', () => {
    expect(() => calculateNumber('INVALID_TYPE', 1.4, 4.5)).to.throw(Error);
  });
});
