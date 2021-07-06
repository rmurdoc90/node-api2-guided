
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');
const server = express();
const adoptersRouter = require('./adopters/adopters-router')
const dogsRouter = require('./dogs/dogs-router')

server.use(express.json());
server.use('/api/adopters', adoptersRouter)
server.use('/api/dogs', dogsRouter)

// OTHER ENDPOINTS
server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Shelter API</h>
    <p>Welcome to the Lambda Shelter API</p>
  `);
});

module.exports = server;
