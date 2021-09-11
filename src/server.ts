import express from 'express';

const app = express();

app.get('/', (request, response) => {
  console.log('teste');
});

app.listen(3333, () => console.log('Server is running!'));