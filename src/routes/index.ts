import { Router } from 'express';
import { developersRouter } from './developers.route';

const router = Router();

router.use('/developers', developersRouter);

export { router };
