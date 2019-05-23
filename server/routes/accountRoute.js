import express from 'express';
import AccountValidator from '../middlewares/accountValidator';
import accountController from '../controllers/accountController';

const { validateBankCreation } = AccountValidator;
const { createBankAccount } = accountController;

const accountRouter = express.Router();

accountRouter.post('/', validateBankCreation, createBankAccount);

export default accountRouter;
