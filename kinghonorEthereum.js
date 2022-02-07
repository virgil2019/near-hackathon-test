const Web3 = require('web3');
const fs = require('fs');
const avalanche = require('./ethereum');

const web3 = new Web3('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

// test account
let testAccountPrivateKey = fs.readFileSync('.secret');
testAccountPrivateKey = JSON.parse(testAccountPrivateKey).key;

let NFTContractAddress = '0xf45FbC436E7E4Dce993f9248721d87D8BcF5Ed8C';
let crossChainContractAddress = '0x9BF510E946B8470DbeBeBe0aC2BbD325e2e58270';

let NFTRawData = fs.readFileSync('./KingHonorNFTView.json');
let NFTAbi = JSON.parse(NFTRawData).abi;
let NFTContract = new web3.eth.Contract(NFTAbi, NFTContractAddress);

let CrossChainRawData = fs.readFileSync('./MultiPorterCrossChain.json');
let CrossChainAbi = JSON.parse(CrossChainRawData).abi;
let CrossChainContract = new web3.eth.Contract(CrossChainAbi, crossChainContractAddress);

async function init() {
    // register porters
    await avalanche.sendTransaction(CrossChainContract, 'changePortersAndRequirement', testAccountPrivateKey, [['0x30ad2981E83615001fe698b6fBa1bbCb52C19Dfa'], 1]); 
    // set cross chain contract
    await avalanche.sendTransaction(NFTContract, 'setCrossChainContract', testAccountPrivateKey, [crossChainContractAddress]);
    // register interface
    await avalanche.sendTransaction(NFTContract, 'registerInterface', testAccountPrivateKey, ['mintTo', '{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mintTo","outputs":[],"stateMutability":"nonpayable","type":"function"}']);
    await avalanche.sendTransaction(NFTContract, 'registerInterface', testAccountPrivateKey, ['crossChainTransferFrom', '{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"crossChainTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}']);
    await avalanche.sendTransaction(NFTContract, 'registerInterface', testAccountPrivateKey, ['crossChainSafeTransferFrom', '{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"crossChainSafeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}']);
    // transfer ownership
    await avalanche.sendTransaction(NFTContract, 'transferOwnership', testAccountPrivateKey, [crossChainContractAddress]);
}

async function test() {
    let info = [
        '1',
        'AVALANCHE',
        '0xe37a7a25183609Bb553757cB8274797522c52100',
        '0x3Aa7f1A87176d1fEE22E53698B7508cf9E18c322',
        'mintTo',
        '0x755edd17000000000000000000000000e8df0d0f31007311ae25a2a207565d1c350ac1b7'
      ]
    // register porters
    // await avalanche.sendTransaction(CrossChainContract, 'receiveMessage', testAccountPrivateKey, info); 

    let aa = await avalanche.contractCall(NFTContract, 'ownerOf', [1]);
    console.log('aa', aa);
}

async function clear() {
    await avalanche.sendTransaction(CrossChainContract, 'clearCrossChainMessage', testAccountPrivateKey, ['PlatON']);
}

// init();
test();
// clear();