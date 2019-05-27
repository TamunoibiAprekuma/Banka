import express from 'express';
import userRouter from './userRoute';
import accountRoute from './accountRoute';
import transactionRouter from './transactionRoute';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Welcome to Banka home page');
});

router.use('/auth', userRouter);
router.use('/accounts', accountRoute);
router.use('/transactions', transactionRouter);

router.get('/users/me', (req, res) => {
  const token = req.header('x-auth');
  res.send(token);
});
router.all('*', (req, res) => {
  res.status(404).send('No such route');
});


export default router;
