const Web3 = require('web3');
const fs = require('fs');
const avalanche = require('./platon');

const web3 = new Web3('http://35.247.155.162:6789');

// test account
let testAccountPrivateKey = fs.readFileSync('.secret');
testAccountPrivateKey = JSON.parse(testAccountPrivateKey).key;

let NFTContractAddress = '0x6Ba41d02A32F9DbB04868BEb7D12F77C3cF575Aa';
let crossChainContractAddress = '0xb6Ad052fd1c4bB8bD2dF1d91539103b481bF724a';

let NFTRawData = fs.readFileSync('./KingHonorNFT.json');
let NFTAbi = JSON.parse(NFTRawData).abi;
let NFTContract = new web3.eth.Contract(NFTAbi, NFTContractAddress);

let CrossChainRawData = fs.readFileSync('./MultiPorterCrossChain.json');
let CrossChainAbi = JSON.parse(CrossChainRawData).abi;
let CrossChainContract = new web3.eth.Contract(CrossChainAbi, crossChainContractAddress);

async function init() {
    // // set cross chain contract
    await avalanche.sendTransaction(NFTContract, 'setCrossChainContract', testAccountPrivateKey, [crossChainContractAddress]);
    // // register target
    await avalanche.sendTransaction(NFTContract, 'registerTarget', testAccountPrivateKey, ['mintTo', 'address', 'to', '']);
    await avalanche.sendTransaction(NFTContract, 'registerTarget', testAccountPrivateKey, ['transferFrom', 'address,address,uint256', 'from,to,tokenId', '']);
    await avalanche.sendTransaction(NFTContract, 'registerTarget', testAccountPrivateKey, ['safeTransferFrom', 'address,address,uint256,bytes', 'from,to,tokenId,data', '']);
    // register method
    await avalanche.sendTransaction(NFTContract, 'registerDestinationMethod', testAccountPrivateKey, ['ETHEREUM', '0x279Dbee63260750A621ee8498B3Afc89d4A8647f', 'mintTo']);
    await avalanche.sendTransaction(NFTContract, 'registerDestinationMethod', testAccountPrivateKey, ['ETHEREUM', '0x279Dbee63260750A621ee8498B3Afc89d4A8647f', 'crossChainTransferFrom']);
    await avalanche.sendTransaction(NFTContract, 'registerDestinationMethod', testAccountPrivateKey, ['ETHEREUM', '0x279Dbee63260750A621ee8498B3Afc89d4A8647f', 'crossChainSafeTransferFrom']);
}

async function mintTo() {
    await avalanche.sendTransaction(NFTContract, 'mintTo', testAccountPrivateKey, ['0xE8dF0d0f31007311aE25a2a207565D1C350AC1B7']);
}

async function transferTo(priKey, to, id) {
    const from = web3.eth.accounts.privateKeyToAccount(priKey).address;
    console.log(from, to, id);
    await avalanche.sendTransaction(NFTContract, 'transferFrom', priKey, [from, to, id]);
}

async function clear() {
    await avalanche.sendTransaction(CrossChainContract, 'clearCrossChainMessage', testAccountPrivateKey, ['ETHEREUM']);
}

// init();
// mintTo();
// transferTo('e57e84cb1a46e720caf15c225426169f8dde9fb56b5260eceb12a18b07231f6a', '0x5787b31b60FF997268325fC55723be072c6D23c7', 1);
// clear();