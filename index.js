const Web3 = require('web3');
const fs = require('fs');
const avalanche = require('./avalanche');

const web3 = new Web3('https://api.avax-test.network/ext/bc/C/rpc');

// test account
const testAccountPrivateKey =
    '0x18a764316e8e932bb8d8a3a97baaf9a8491e48e54b9162d4f96c63d6b89ac179';

let tokenContractAddress = '0x21B9c312d50FC48E8da995c5C016A76a2949337B';
let crossChainContractAddress = '0x6300e0dAf83716877A946384DCF19f90489C860C';
let lockerContractAddress = '0x61FA24Acb5fCF529Bb4D06340586E1a52A2b87a6';

let lockerRawData = fs.readFileSync('./../dante-cross-chain/avalanche/build/contracts/Locker.json');
let lockerAbi = JSON.parse(lockerRawData).abi;
let lockerContract = new web3.eth.Contract(lockerAbi, lockerContractAddress);

let crossChainRawData = fs.readFileSync('./../dante-cross-chain/avalanche/build/contracts/MultiPorterCrossChain.json');
let crossChainAbi = JSON.parse(crossChainRawData).abi;
let crossChainContract = new web3.eth.Contract(crossChainAbi, crossChainContractAddress);

let danteTokenRawData = fs.readFileSync('./../dante-cross-chain/avalanche/build/contracts/DanteToken.json');
let danteTokenAbi = JSON.parse(danteTokenRawData).abi;
let danteTokenContract = new web3.eth.Contract(danteTokenAbi, tokenContractAddress);

(async function() {
  // register porters
  // await avalanche.sendTransaction(crossChainContract, 'changePortersAndRequirement', testAccountPrivateKey, [['0xeBEf067F32413Ec22E0C04f3E9Df3D6bF38aa917'], 1]);
  // register target
  // await avalanche.sendTransaction(lockerContract, 'registerTarget', testAccountPrivateKey, ['receive', 'string,uint256', 'receiver,amount', '']);
  // let test = await avalanche.contractCall(crossChainContract, 'tokenContract', []);
  // console.log('test', test);
  // let test = await avalanche.contractCall(crossChainContract, 'sentMessageTable', ['NEAR', 0]);
  // console.log('test', test);

  // register interface
  // await avalanche.sendTransaction(lockerContract, 'registerInterface', testAccountPrivateKey, ['receiveToken', '{"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"receiveToken","type":"function"}']);

  // register method
  // await avalanche.sendTransaction(lockerContract, 'registerDestinationMethod', testAccountPrivateKey, ['NEAR', 'locker.shanks.testnet', 'receive']);
  // await avalanche.sendTransaction(lockerContract, 'registerDestinationMethod', testAccountPrivateKey, ['PlatON', 'lat1vvtaaw6nxmpjsgr9jtem806rt8hwd8uuj737aa', 'receive']);
  // let test = await avalanche.contractCall(lockerContract, 'methodMap', ['NEAR']);
  // console.log('test', test);

  // mint token
  // await avalanche.sendTransaction(danteTokenContract, 'mint', testAccountPrivateKey, ['0xeBEf067F32413Ec22E0C04f3E9Df3D6bF38aa917', '1000000000000000000000']);
  // await avalanche.sendTransaction(danteTokenContract, 'mint', testAccountPrivateKey, [lockerContractAddress, '1000000000000000000000']);
  // let test = await avalanche.contractCall(danteTokenContract, 'allowance', ['0xeBEf067F32413Ec22E0C04f3E9Df3D6bF38aa917', lockerContractAddress]);
  // console.log('test', test);
  // let test = await avalanche.contractCall(danteTokenContract, 'balanceOf', [lockerContractAddress]);
  // console.log('test', test);
  // Content memory content = Content("locker.shanks.testnet", "receive", data);

  // approve
  // await avalanche.sendTransaction(danteTokenContract, 'approve', testAccountPrivateKey, [lockerContractAddress, '10000000000000000000']);
  // let test = await avalanche.contractCall(danteTokenContract, 'allowance', ['0xeBEf067F32413Ec22E0C04f3E9Df3D6bF38aa917', lockerContractAddress]);
  // console.log('test', test);

  // send message
  // await avalanche.sendTransaction(lockerContract, 'sendToken', testAccountPrivateKey, ['georgecross.testnet', '1000000000000000000', 'NEAR']);
  // await avalanche.sendTransaction(lockerContract, 'sendToken', testAccountPrivateKey, ['lat1castv0uq87xdlh0cwphkgye4fc53hkftx78lxj', '1000000000000000000', 'PlatON']);

  // clear cross chain message
  // await avalanche.sendTransaction(crossChainContract, 'clearCrossChainMessage', testAccountPrivateKey, ['NEAR']);

  // query sent message
  // let test = await avalanche.contractCall(crossChainContract, 'getSentMessageNumber', ['NEAR']);
  // console.log(test);
  console.log('over');
})();