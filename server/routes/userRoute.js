import express from 'express';
import userController from '../controllers/userController';
import Middleware from '../middlewares';

const userRoute = express.Router();

userRoute.post('/signup', Middleware.validateSignUp);

export default userRoute;
