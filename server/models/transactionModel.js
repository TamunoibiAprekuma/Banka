import moment from 'moment';
import randomNumber from 'random-number';
import { log } from 'util';
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
  static credit(req, res) {
    const { type } = req.body;
    const token = req.body.token || req.headers.token;
    const decodedToken = decode(token);
    // console.log(decodedToken); // { id: 1, iat: 1558795050, exp: 1558805850 }

    const cashier = decodedToken.id;


    const account = {
      id: accounts.length + 1,
      accountNumber: randomNumber(options),
      cashier,
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
