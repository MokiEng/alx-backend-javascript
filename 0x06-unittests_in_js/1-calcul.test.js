// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the correct result for SUM operation', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return the correct result for SUBTRACT operation', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return the correct result for DIVIDE operation', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should throw an error for invalid type', () => {
    assert.throws(() => calculateNumber('INVALID_TYPE', 1.4, 4.5), Error);
  });
});
