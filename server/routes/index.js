import express from 'express';
import userRoute from './userRoute';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Welcome to Banka home page');
});

router.use('/auth', userRoute);


export default router;
