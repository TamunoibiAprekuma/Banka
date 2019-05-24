import moment from 'moment';
import randomNumber from 'random-number';
import dummyData from './dummyData';
import authentication from '../helpers/Authenticator';


const { accounts } = dummyData;
const { decode } = authentication;
const options = {
  min: 9874316514,
  max: 18743165140,
  integer: true,
};

export default class AccountModel {
  static create(req, res) {
    const { type } = req.body;
    const token = req.body.token || req.headers.token;
    const decodedToken = decode(token);
    const owner = decodedToken.id;


    const account = {
      id: accounts.length + 1,
      accountNumber: randomNumber(options),
      owner,
      type,
      status: 'active',
      balance: 0.00,
      DateCreated: moment(),
    };

    try {
      accounts.push(account);
      return account;
    } catch (err) {
      return res.status(500).json({ error: true, message: 'Internal Server error' });
    }
  }
}
