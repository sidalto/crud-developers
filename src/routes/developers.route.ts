import { Router } from 'express';
import { DeveloperController } from '../controllers/DeveloperController';

const developersRouter = Router();
// const developerRepository = new DeveloperRepository();
// const developerService = new DeveloperService(developerRepository);
const developersController = new DeveloperController();

developersRouter.get('/', developersController.index);
developersRouter.post('/', developersController.create);
developersRouter.get('/:id', developersController.showById);
// developersRouter.get('', developersController.showByQuery);
developersRouter.put('/:id', developersController.update);
developersRouter.patch('/:id', developersController.update);
developersRouter.delete('/:id', developersController.delete);

export { developersRouter };
