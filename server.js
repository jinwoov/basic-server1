'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;

// app.get('/', (request, response) => {
//   response.send('hellow')
// });

app.use(express.static('./public')); ////will serve or run everything that is in the public folder////

app.get('/hello', (request,response) => {
  response.send('hellow nodemon nodemon')
})

app.get('/chaching', (request,response) => {
  response.send('in the bank')
})

app.get('/facebook', (request,response) => {
  response.send('myspace is better')
})

app.get('/istagram', (request,response) => {
  response.send('snapchat is better')
})

app.get('/linkedin', (request,response) => {
  response.send('linkedout')
})

app.get('/github', (request,response) => {
  response.send('gittyup gittyup')
})


app.listen(PORT, () => console.log('proof of lie port', `${PORT}`));

