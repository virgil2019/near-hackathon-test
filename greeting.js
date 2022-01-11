const Web3 = require('web3');
const fs = require('fs');
const avalanche = require('./avalanche');

const web3 = new Web3('https://api.avax-test.network/ext/bc/C/rpc');

// test account
let testAccountPrivateKey = fs.readFileSync('.secret');
testAccountPrivateKey = JSON.parse(testAccountPrivateKey).key;

let greetingContractAddress = '0x94856A714D2b566FAaEdAD34F6037fA2Ba21d3c2';
let crossChainContractAddress = '0x817b8b4667A67a6644b27C7C5a42Fc7804A351Eb';

let greetingRawData = fs.readFileSync('./Greetings.json');
let greetingAbi = JSON.parse(greetingRawData).abi;
let greetingContract = new web3.eth.Contract(greetingAbi, greetingContractAddress);

async function init() {
    // set cross chain contract
    await avalanche.sendTransaction(greetingContract, 'setCrossChainContract', testAccountPrivateKey, [crossChainContractAddress]);
    // register target
    await avalanche.sendTransaction(greetingContract, 'registerTarget', testAccountPrivateKey, ['receive_greeting', 'string,string,string,string', 'from_chain,title,content,date', '']);
    // register interface
    await avalanche.sendTransaction(greetingContract, 'registerInterface', testAccountPrivateKey, ['receiveGreeting', '{"inputs":[{"name":"title","type":"string"},{"name":"content","type":"string"},{"name":"date","type":"string"}],"name":"receiveGreeting","type":"function"}']);
    // register method
    await avalanche.sendTransaction(greetingContract, 'registerDestinationMethod', testAccountPrivateKey, ['NEAR', 'greeting.datlocker.testnet', 'receive_greeting']);
}

async function sendGreeting() {
    await avalanche.sendTransaction(greetingContract, 'sendGreeting', testAccountPrivateKey, ['NEAR', 'Greetings', 'Greeting from Avalanche', '2022-01-01']);
}

// init();
sendGreeting();