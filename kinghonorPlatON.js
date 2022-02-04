const Web3 = require('web3');
const fs = require('fs');
const avalanche = require('./platon');

const web3 = new Web3('http://35.247.155.162:6789');

// test account
let testAccountPrivateKey = fs.readFileSync('.secret');
testAccountPrivateKey = JSON.parse(testAccountPrivateKey).key;

let NFTContractAddress = '0xe37a7a25183609Bb553757cB8274797522c52100';
let crossChainContractAddress = '0xAF8028Ea3c2D889482F1B9092f1792B8414ceC1A';

let NFTRawData = fs.readFileSync('./KingHonorNFT.json');
let NFTAbi = JSON.parse(NFTRawData).abi;
let NFTContract = new web3.eth.Contract(NFTAbi, NFTContractAddress);

async function init() {
    // set cross chain contract
    await avalanche.sendTransaction(NFTContract, 'setCrossChainContract', testAccountPrivateKey, [crossChainContractAddress]);
    // register target
    await avalanche.sendTransaction(NFTContract, 'registerTarget', testAccountPrivateKey, ['mintTo', 'address', 'to', '']);
    await avalanche.sendTransaction(NFTContract, 'registerTarget', testAccountPrivateKey, ['transferFrom', 'address,address,uint256', 'from,to,tokenId', '']);
    await avalanche.sendTransaction(NFTContract, 'registerTarget', testAccountPrivateKey, ['safeTransferFrom', 'address,address,uint256,bytes', 'from,to,tokenId,data', '']);
    // register method
    await avalanche.sendTransaction(NFTContract, 'registerDestinationMethod', testAccountPrivateKey, ['ETHEREUM', '0x014D1B7c2Be089C963b3055411DD76559B8c4eF9', 'mintTo']);
    await avalanche.sendTransaction(NFTContract, 'registerDestinationMethod', testAccountPrivateKey, ['ETHEREUM', '0x014D1B7c2Be089C963b3055411DD76559B8c4eF9', 'crossChainTransferFrom']);
    await avalanche.sendTransaction(NFTContract, 'registerDestinationMethod', testAccountPrivateKey, ['ETHEREUM', '0x014D1B7c2Be089C963b3055411DD76559B8c4eF9', 'crossChainSafeTransferFrom']);
}

// async function sendGreeting() {
//     await avalanche.sendTransaction(NFTContract, 'sendGreeting', testAccountPrivateKey, ['NEAR', 'Greetings', 'Greeting from Avalanche', '2022-01-01']);
// }

init();
// sendGreeting();