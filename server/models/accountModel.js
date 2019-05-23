import moment from 'moment';
import randomNumber from 'random-number';
import dummyData from './dummyData';


const { accounts } = dummyData;
const options = {
  min: 9874316514,
  max: 18743165140,
  integer: true,
};

export default class AccountModel {
  static create(req, res) {
    const { type } = req.body;


    const account = {
      id: accounts.length + 1,
      accountNumber: randomNumber(options),
      owner: 1,
      type,
      status: 'active',
      balance: 0.00,
      DateCreated: moment(),
    };

    try {
      accounts.push(account);
      return accounts;
    } catch (err) {
      return res.status(500).json({ error: true, message: 'Internal Server error' });
    }
  }
}
