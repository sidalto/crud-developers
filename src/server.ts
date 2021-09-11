import express from 'express';
import { developersRouter } from './routes/developers.route';

const app = express();

app.use(express.json());

app.use('/developers', developersRouter);

app.listen(3333, () => console.log('Server is running!'));
