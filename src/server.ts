import express from 'express';

const app = express();

app.use(express.json());

app.post('/teste', (request, response) => {
  const { nome } = request.body;

  return response.json({ nome });
});

app.listen(3333, () => console.log('Server iss running!'));