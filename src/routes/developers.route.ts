import { Router } from 'express';
import DeveloperController from '../controllers/DeveloperController';

const developersRouter = Router();

developersRouter.get('/', DeveloperController.index);
developersRouter.post('/', DeveloperController.create);

export { developersRouter };
