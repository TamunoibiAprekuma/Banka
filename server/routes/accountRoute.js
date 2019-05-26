import express from 'express';
import AccountValidator from '../middlewares/accountValidator';
import accountController from '../controllers/accountController';
import AuthValidator from '../middlewares/AuthValidator';

const { validateBankCreation, validateParam, validateStatus } = AccountValidator;
const { createBankAccount, modifyAccountStatus, deleteBankAccount } = accountController;
const { checkToken, isAdmin } = AuthValidator;


const accountRouter = express.Router();


accountRouter.post('/', validateBankCreation, checkToken, createBankAccount);
accountRouter.patch('/:accountId', validateParam, isAdmin, validateStatus, modifyAccountStatus);
accountRouter.delete('/:accountId', validateParam, isAdmin, deleteBankAccount);

/*
Parameter
   Make sure that the parameter :accountId is a number                            ===> validateParam
Token
   Make sure that the token belongs to an admin or a staff                        ===> isAdmin
*/

export default accountRouter;
