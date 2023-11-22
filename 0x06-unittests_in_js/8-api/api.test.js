const request = require('request');
const { expect } = require('chai');

const app = require('./api');

describe('Index page', () => {
  before((done) => {
    app.listen(7865, () => {
      console.log('API available on localhost port 7865');
      done();
    });
  });

  it('Correct status code?', (done) => {
    request.get('http://localhost:7865/', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Add other tests as needed

  after(() => {
    app.close();
  });
});
