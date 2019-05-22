import express from 'express';

const accountRouter = express.Router();

accountRouter.post('/', (req, res) => res.send('hello'));

export default accountRouter;
