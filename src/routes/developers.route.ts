import { Router } from 'express';

const developersRouter = Router();

developersRouter.get('/', (request, response) => {
  response.json({ message: 'rota de index' });
});

developersRouter.post('/', (request, response) => {
  response.json({ message: 'rota de index' });
});

export { developersRouter };
