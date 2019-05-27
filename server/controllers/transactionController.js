import TransactionModel from '../models/transactionModel';


const { credit } = TransactionModel;

export default class AccountController {
  static creditBankAccount(req, res) {
    let transaction;


    try {
      transaction = credit(req, res);
      return res.status(201).json({
        status: 201,
        data: transaction,
      });
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: 'Internal server error Unable to create new Bank account',
      });
    }
  }
}
