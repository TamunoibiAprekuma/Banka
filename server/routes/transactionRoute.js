import express from 'express';
import TransactionValidator from '../middlewares/transactionValidator';
import TransactionController from '../controllers/transactionController';
import AuthValidator from '../middlewares/AuthValidator';

// const { validateBankCreation, validateParam, validateStatus } = TransactionValidator;
// const { creditBankAccount, debitBankAccount } = TransactionController;
const { creditBankAccount } = TransactionController;
const { validateParam, validateAmount } = TransactionValidator;
const { isStaff } = AuthValidator;


const transactionRouter = express.Router();


transactionRouter.post('/:accountId/credit', validateParam, isStaff, validateAmount, creditBankAccount);

transactionRouter.post('/:accountId/credit', (req, res) => {
  res.status(200).send('Successfull');
});

// transactionRouter.post('/:accountId', validateParam, isStaff, validateAmount, creditBankAccount);
// accountRouter.post('/:accountId', validateParam, isAdmin, validateStatus, modifyAccountStatus);
/*
Parameter
   Make sure that the parameter :accountId is a number                         ===> validateParam
Token
   Make sure that the token belongs to a staff                                 ===> isStaff
Amount
  Make sure it is a number                                                     ===> validateAmount
Credit
100 Naira was added to the account
*/

export default transactionRouter;
