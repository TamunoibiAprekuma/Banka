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

  static modifyAccountStatus(req, res) {
    const { accountId } = req.params;
    res.send(accountId);
    // const account = { text: 'SELECT * FROM questions WHERE ID = $1', values: [id] };
    /*
    !  Steps
    1. Get the accountId
    2. Change the staus of the account.status from old status to new status
    3. Push the new status to account.status

    ! Stopped
    valdiateStatus of the account controller validation
    */
  }
}
