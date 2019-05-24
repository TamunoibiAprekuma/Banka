import express from 'express';
import AccountValidator from '../middlewares/accountValidator';
import accountController from '../controllers/accountController';
import AuthValidator from '../middlewares/AuthValidator';

const { validateBankCreation, validateParam, valdiateStatus } = AccountValidator;
const { createBankAccount, modifyAccountStatus } = accountController;
const { checkToken } = AuthValidator;


const accountRouter = express.Router();

accountRouter.post('/', validateBankCreation, checkToken, createBankAccount);
accountRouter.patch('/:accountId/account-number', checkToken, validateParam, valdiateStatus, modifyAccountStatus);

export default accountRouter;
