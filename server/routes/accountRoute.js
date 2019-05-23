import express from 'express';
import AccountValidator from '../middlewares/accountValidator';
import accountController from '../controllers/accountController';
import AuthValidator from '../middlewares/AuthValidator';

const { validateBankCreation } = AccountValidator;
const { createBankAccount } = accountController;
const { checkToken } = AuthValidator;


const accountRouter = express.Router();

accountRouter.post('/', validateBankCreation, checkToken, createBankAccount);

export default accountRouter;
