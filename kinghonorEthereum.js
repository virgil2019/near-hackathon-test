const Web3 = require('web3');
const fs = require('fs');
const avalanche = require('./ethereum');

const web3 = new Web3('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

// test account
let testAccountPrivateKey = fs.readFileSync('.secret');
testAccountPrivateKey = JSON.parse(testAccountPrivateKey).key;

let NFTContractAddress = '0xa215eF1919f9cc314b4E0c31B96fB83eaeC0cf30';
let crossChainContractAddress = '0x3B8917472c7f3a2CCBc41f2f9f28A2D94bfb8c44';

let NFTRawData = fs.readFileSync('./KingHonorNFTView.json');
let NFTAbi = JSON.parse(NFTRawData).abi;
let NFTContract = new web3.eth.Contract(NFTAbi, NFTContractAddress);

let CrossChainRawData = fs.readFileSync('./MultiPorterCrossChain.json');
let CrossChainAbi = JSON.parse(CrossChainRawData).abi;
let CrossChainContract = new web3.eth.Contract(CrossChainAbi, crossChainContractAddress);

async function init() {
    // register senders
    await avalanche.sendTransaction(NFTContract, 'registerSourceSender', testAccountPrivateKey, ['PlatONEVM', '0x87F8E245E82Fc9db46A229691463139850362F3B', 'mintTo']); 
    await avalanche.sendTransaction(NFTContract, 'registerSourceSender', testAccountPrivateKey, ['PlatONEVM', '0x87F8E245E82Fc9db46A229691463139850362F3B', 'crossChainTransferFrom']); 
    await avalanche.sendTransaction(NFTContract, 'registerSourceSender', testAccountPrivateKey, ['PlatONEVM', '0x87F8E245E82Fc9db46A229691463139850362F3B', 'crossChainSafeTransferFrom']); 
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
    // let info = [
    //     '1',
    //     'PlatON',
    //     '0x78354ff87a55933617a5266c2Bab735E507184cE',
    //     '0xeFa8F716B8942A04D32240A507E52f69c9FB9a3e',
    //     'mintTo',
    //     '0x755edd17000000000000000000000000e8df0d0f31007311ae25a2a207565d1c350ac1b7'
    //   ]
    // // register porters
    // await avalanche.sendTransaction(CrossChainContract, 'receiveMessage', testAccountPrivateKey, info); 

    // let aa = await avalanche.contractCall(NFTContract, 'ownerOf', [1]);
    let aa = await avalanche.contractCall(CrossChainContract, 'getReceivedMessageNumber', ['PlatONEVM']);
    // let aa = await avalanche.contractCall(NFTContract, 'totalSupply', []);    
    // let aa = await avalanche.contractCall(NFTContract, 'owner', []);    
    console.log('aa', aa);
}

async function clear() {
    await avalanche.sendTransaction(CrossChainContract, 'clearCrossChainMessage', testAccountPrivateKey, ['PlatONEVM']);
}

init();
// test();
// clear();