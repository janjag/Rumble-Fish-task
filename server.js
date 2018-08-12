'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Dummy function for calculating average time of adding a block to the ethereum blockchain
const calculateTime = () => parseFloat((Math.random(20) *20), 10).toFixed(2);

// App
const app = express();
app.use('/dist', express.static(__dirname + '/dist'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
  res.send(`Average time of adding a block to the ethereum blockchain: \n ${calculateTime()}s.`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);