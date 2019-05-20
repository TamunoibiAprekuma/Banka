import 'babel-polyfill';
import chai from 'chai';
import chaiHTTP from 'chai-http';
import passwordHash from 'password-hash';
import app from '../app';

chai.use(chaiHTTP);
const { expect } = chai;

const baseUrl = '/auth';
const hashedPassword = passwordHash.generate('password');
const user = {
  firstName: 'First Name',
  lastName: 'Last Name',
  phone: '08136540893',
  password: hashedPassword,
  email: 'example@gmail.com',
  isAdmin: true,
  type: 'staff',
};
describe('POST /auth/signup', () => {
  it('Should create user account', async () => {
    try {
      const res = await chai.request(app)
        .post(`${baseUrl}/signup`)
        .send(user);
      expect(res).to.have.status(201);
      expect(res.body.data[0]).to.deep.equal(user);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  });
  it('Should throw 400 if first Name is empty', (done) => {
    user.firstName = '';
    try {
      chai.request(app)
        .post(`${baseUrl}/signup`)
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.errors[0]).to.eql('First Name is required');
          done();
        });
    } catch (err) {
      console.log(err);
    }
  });
  it('Should throw 400 if last Name Name is empty', (done) => {
    user.lastName = '';
    user.firstName = 'First Name';
    try {
      chai.request(app)
        .post(`${baseUrl}/signup`)
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.errors[0]).to.eql('Last Name is required');
          done();
        });
    } catch (err) {
      console.log(err);
    }
  });
  it('Should throw 400 if email is empty', (done) => {
    user.email = '';
    user.firstName = 'First Name';
    user.lastName = 'Last Name';
    try {
      chai.request(app)
        .post(`${baseUrl}/signup`)
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.errors[0]).to.eql('Email is required');
          done();
        });
    } catch (err) {
      console.log(err);
    }
  });
  it('Should throw 400 if phone is empty', (done) => {
    user.phone = '';
    user.email = 'jondoe@gmail.com';
    user.firstName = 'First Name';
    user.lastName = 'Last Name';
    try {
      chai.request(app)
        .post(`${baseUrl}/signup`)
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.errors[0]).to.eql('The phone number is required');
          done();
        });
    } catch (err) {
      console.log(err);
    }
  });
});
