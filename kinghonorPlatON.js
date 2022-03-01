const Web3 = require('web3');
const fs = require('fs');
const avalanche = require('./platon');

// const web3 = new Web3('http://35.247.155.162:6789');
const web3 = new Web3('https://openapi.platon.network/rpc');

// test account
let testAccountPrivateKey = fs.readFileSync('.secret');
testAccountPrivateKey = JSON.parse(testAccountPrivateKey).key;

let NFTContractAddress = '0x87F8E245E82Fc9db46A229691463139850362F3B';
let crossChainContractAddress = '0x49766f787b1E184c5EeAEA36d1eC090Cf25BD72e';

let NFTRawData = fs.readFileSync('./KingHonorNFT.json');
let NFTAbi = JSON.parse(NFTRawData).abi;
let NFTContract = new web3.eth.Contract(NFTAbi, NFTContractAddress);

let CrossChainRawData = fs.readFileSync('./MultiPorterCrossChain.json');
let CrossChainAbi = JSON.parse(CrossChainRawData).abi;
let CrossChainContract = new web3.eth.Contract(CrossChainAbi, crossChainContractAddress);

async function init() {
    // set cross chain contract
    await avalanche.sendTransaction(NFTContract, 'setCrossChainContract', testAccountPrivateKey, [crossChainContractAddress]);
    // register target
    await avalanche.sendTransaction(NFTContract, 'registerTarget', testAccountPrivateKey, ['mintTo', 'address', 'to', '']);
    await avalanche.sendTransaction(NFTContract, 'registerTarget', testAccountPrivateKey, ['crossChainTransferFrom', 'address,address,uint256', 'from,to,tokenId', '']);
    await avalanche.sendTransaction(NFTContract, 'registerTarget', testAccountPrivateKey, ['crossChainSafeTransferFrom', 'address,address,uint256,bytes', 'from,to,tokenId,data', '']);
    // register method
    await avalanche.sendTransaction(NFTContract, 'registerDestinationMethod', testAccountPrivateKey, ['RINKEBY', '0xa215eF1919f9cc314b4E0c31B96fB83eaeC0cf30', 'mintTo']);
    await avalanche.sendTransaction(NFTContract, 'registerDestinationMethod', testAccountPrivateKey, ['RINKEBY', '0xa215eF1919f9cc314b4E0c31B96fB83eaeC0cf30', 'crossChainTransferFrom']);
    await avalanche.sendTransaction(NFTContract, 'registerDestinationMethod', testAccountPrivateKey, ['RINKEBY', '0xa215eF1919f9cc314b4E0c31B96fB83eaeC0cf30', 'crossChainSafeTransferFrom']);
}

async function mintTo() {
    await avalanche.sendTransaction(NFTContract, 'mintTo', testAccountPrivateKey, ['0xe4f6931504bda3530eda566f4047277372c75e25']);
}

async function transferTo(priKey, to, id) {
    const from = web3.eth.accounts.privateKeyToAccount(priKey).address;
    console.log(from, to, id);
    await avalanche.sendTransaction(NFTContract, 'transferFrom', priKey, [from, to, id]);
}

async function clear() {
    await avalanche.sendTransaction(CrossChainContract, 'clearCrossChainMessage', testAccountPrivateKey, ['RINKEBY']);
}

async function test() {
    let info = [
        '2',
        'PlatON',
        '0x78354ff87a55933617a5266c2Bab735E507184cE',
        '0xeFa8F716B8942A04D32240A507E52f69c9FB9a3e',
        'mintTo',
        '0x755edd17000000000000000000000000e8df0d0f31007311ae25a2a207565d1c350ac1b7'
      ]
    // register porters
    // await avalanche.sendTransaction(CrossChainContract, 'receiveMessage', testAccountPrivateKey, info);
    // let aa = await avalanche.contractCall(CrossChainContract, 'getReceivedMessageNumber', ['PlatON']);
    // let aa = await avalanche.contractCall(NFTContract, 'totalSupply', []);    
    let aa = await avalanche.contractCall(CrossChainContract, 'owner', []);    
    console.log('aa', aa);
}

// test();
// init();
mintTo();
// transferTo('e57e84cb1a46e720caf15c225426169f8dde9fb56b5260eceb12a18b07231f6a', '0x5787b31b60FF997268325fC55723be072c6D23c7', 1);
// clear();