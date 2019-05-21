import express from 'express';
import AuthValidator from '../middlewares/AuthValidator';
import userController from '../controllers/userController';

const { validateSignUp, userExists, validateLogin } = AuthValidator;
const { createAccount } = userController;

const userRoute = express.Router();

userRoute.post('/signup', validateSignUp, userExists, createAccount);
userRoute.post('/login', validateLogin, loginUser);

export default userRoute;
