import chai from 'chai';
import chaiHTTP from 'chai-http';
import app from '../app';

const { expect } = chai;
chai.use(chaiHTTP);

describe('GET /', () => {
  it('should return status 200 and a message', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('No matching routes', () => {
  it('should return status 404 and a message', (done) => {
    chai.request(app)
      .get('/dsddsdsds')
      .end((err, res) => {
        expect(res.status).to.be.equal(404);
        done();
      });
  });
});
