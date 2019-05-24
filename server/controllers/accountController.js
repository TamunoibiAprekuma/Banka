import AccountModel from '../models/accountModel';

const { create } = AccountModel;

export default class AccountController {
  static createBankAccount(req, res) {
    let account;


    try {
      account = create(req, res);
      return res.status(201).json({
        status: 201,
        data: account,
      });
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'Internal server error Unable to create new Bank account',
      });
    }
  }
}
