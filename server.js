'use strict';

const express = require('express');
const cors = require('cors');
const apikey= '97cadc8a409e423087025a8e073e6873';
const ethUrl = 'https://mainnet.infura.io/' + apikey;
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(ethUrl));

// Constants
const PORT = 8080;
const HOST = 'localhost';

// Dummy function for calculating average time of adding a block to the ethereum blockchain
const calculateTime = () => parseFloat((Math.random(20) *20), 10).toFixed(2);

/**
 * @param  {number} count Number of previos blocks for calculation, default is 10.  
 */
function averageTime(count = 10) {
  // console.time('function starts');
  const block = web3.eth.blockNumber;
  const results = [];
  const times = [];
  let sum = null;
  let avg = null;
  
  for(let i = 0; i<count; i++) {
    results.push(web3.eth.getBlock(block - i, false).timestamp);
  }
  results.forEach((result, index) => {
    if(index === 0) {return;}
    // console.log(`for ${index}: ${results[index-1]} - ${result} => ${(results[index-1] - result)}`);
    times.push((results[index-1] - result));
  });

  sum = times.reduce((pVal,cVal) => pVal + cVal);
  avg = (sum/times.length).toFixed(2)
  // console.timeEnd('function starts');
  return avg;
}

// App
const app = express();
app.use(cors());
app.use('/', express.static(__dirname + '/dist'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.get('/api/', (req, res) => {
  const count = req.query.count;
  const data = {
    "time": averageTime(count)
  };
  console.log(data);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(JSON.stringify(data));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
