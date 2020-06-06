import express from 'express';

const app = express();

app.get('/users', () => {
  console.log('Lista');
})

app.listen(3333);