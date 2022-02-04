const Web3 = require('web3');
const fs = require('fs');
const avalanche = require('./ethereum');

const web3 = new Web3('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

// test account
let testAccountPrivateKey = fs.readFileSync('.secret');
testAccountPrivateKey = JSON.parse(testAccountPrivateKey).key;

let NFTContractAddress = '0x3Aa7f1A87176d1fEE22E53698B7508cf9E18c322';
let crossChainContractAddress = '0x014D1B7c2Be089C963b3055411DD76559B8c4eF9';

let NFTRawData = fs.readFileSync('./KingHonorNFTView.json');
let NFTAbi = JSON.parse(NFTRawData).abi;
let NFTContract = new web3.eth.Contract(NFTAbi, NFTContractAddress);

async function init() {
    // set cross chain contract
    await avalanche.sendTransaction(NFTContract, 'setCrossChainContract', testAccountPrivateKey, [crossChainContractAddress]);
    // // register interface
    await avalanche.sendTransaction(NFTContract, 'registerInterface', testAccountPrivateKey, ['mintTo', '{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"mintTo","outputs":[],"stateMutability":"nonpayable","type":"function"}']);
    await avalanche.sendTransaction(NFTContract, 'registerInterface', testAccountPrivateKey, ['crossChainTransferFrom', '{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"crossChainTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}']);
    await avalanche.sendTransaction(NFTContract, 'registerInterface', testAccountPrivateKey, ['crossChainSafeTransferFrom', '{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"crossChainSafeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}']);
}

init();