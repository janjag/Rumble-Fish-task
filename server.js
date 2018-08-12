'use strict';

const express = require('express');
const cors = require('cors');

// Constants
const PORT = 8080;
const HOST = 'localhost';

// Dummy function for calculating average time of adding a block to the ethereum blockchain
const calculateTime = () => parseFloat((Math.random(20) *20), 10).toFixed(2);

// App
const app = express();
app.use(cors());
app.use('/', express.static(__dirname + '/dist'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.get('/api', (req, res) => {
  const data = {
    "time": calculateTime()
  };
  console.log(data);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(JSON.stringify(data));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);