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
  static create(req, res) {
    const { type } = req.body;
    const token = req.body.token || req.headers.token;
    const decodedToken = decode(token);
    // console.log(decodedToken); // { id: 1, iat: 1558795050, exp: 1558805850 }

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

  static modify(req, res) {
    const { accountId } = req.params;
    const { accountStatus } = req.body;
    let accountIndex;

    const account = accounts.find((eachAccount, index) => {
      if (eachAccount.id === parseInt(accountId, 10)) {
        accountIndex = index;
        return eachAccount;
      }
    });
    if (!account) { return res.status(404).send({ status: 404, error: 'The Account does not exist' }); }

    account.status = accountStatus;
    accounts.splice(accountIndex, 1, account);
    return account;
  }

  static remove(req, res) {
    const { accountId } = req.params;
    let accountIndex;

    const account = accounts.find((eachAccount, index) => {
      if (eachAccount.id === parseInt(accountId, 10)) {
        accountIndex = index;
        return eachAccount;
      }
    });

    if (!account) { return false; }
    accounts.splice(accountIndex, 1);
    return 'Account successfully deleted';
  }
}
