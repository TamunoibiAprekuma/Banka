import express from 'express';
import userRouter from './userRoute';
import accountRoute from './accountRoute';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Welcome to Banka home page');
});

router.use('/auth', userRouter);
router.use('/accounts', accountRoute);
router.all('*', (req, res) => {
  res.status(404).send('No such route');
});


export default router;
