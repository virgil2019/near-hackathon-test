const abiStr = '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256[][]","name":"arrayParam","type":"uint256[][]"}],"name":"arrayAsParamTest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[][]","name":"arrayParam","type":"uint256[][]"}],"name":"arrayAsParamTest2","outputs":[{"internalType":"uint256[][]","name":"","type":"uint256[][]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"arrayDelete","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"arrayDeleteTest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"arrayModify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"arrayPop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"arrayPush","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"arrayPush10","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"arrayPushFor10","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multiArrayReturnTest","outputs":[{"internalType":"uint256[][]","name":"","type":"uint256[][]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"multi_array","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"newArray","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"os","outputs":[{"internalType":"uint8","name":"a","type":"uint8"},{"internalType":"uint8","name":"b","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"senderTest","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"single_array","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"structArrayReturnTest","outputs":[{"components":[{"internalType":"address","name":"fromAddress","type":"address"},{"internalType":"bytes","name":"toAddress","type":"bytes"},{"internalType":"bytes","name":"toChain","type":"bytes"},{"internalType":"uint256","name":"amount","type":"uint256"},{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"fromChain","type":"string"},{"internalType":"string","name":"sender","type":"string"},{"internalType":"uint256","name":"count","type":"uint256"},{"internalType":"bool","name":"executed","type":"bool"},{"internalType":"address","name":"contractAddress","type":"address"},{"internalType":"string","name":"action","type":"string"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct Test.ReceivedMessage","name":"rm","type":"tuple"}],"internalType":"struct Test.TransferRecord[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"fromAddress","type":"address"},{"internalType":"bytes","name":"toAddress","type":"bytes"},{"internalType":"bytes","name":"toChain","type":"bytes"},{"internalType":"uint256","name":"amount","type":"uint256"},{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"fromChain","type":"string"},{"internalType":"string","name":"sender","type":"string"},{"internalType":"uint256","name":"count","type":"uint256"},{"internalType":"bool","name":"executed","type":"bool"},{"internalType":"address","name":"contractAddress","type":"address"},{"internalType":"string","name":"action","type":"string"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct Test.ReceivedMessage","name":"rm","type":"tuple"}],"internalType":"struct Test.TransferRecord","name":"ts","type":"tuple"}],"name":"structAsParamTest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"structGasDelete","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint8","name":"a","type":"uint8"},{"internalType":"uint8","name":"b","type":"uint8"},{"internalType":"uint8[30]","name":"c","type":"uint8[30]"}],"internalType":"struct Test.OrderStruct","name":"os0","type":"tuple"}],"name":"structGasTest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"structGasTest1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"structGasTest2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"structGasTest3","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"structReturnTest","outputs":[{"components":[{"internalType":"address","name":"fromAddress","type":"address"},{"internalType":"bytes","name":"toAddress","type":"bytes"},{"internalType":"bytes","name":"toChain","type":"bytes"},{"internalType":"uint256","name":"amount","type":"uint256"},{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"fromChain","type":"string"},{"internalType":"string","name":"sender","type":"string"},{"internalType":"uint256","name":"count","type":"uint256"},{"internalType":"bool","name":"executed","type":"bool"},{"internalType":"address","name":"contractAddress","type":"address"},{"internalType":"string","name":"action","type":"string"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct Test.ReceivedMessage","name":"rm","type":"tuple"}],"internalType":"struct Test.TransferRecord","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tr","outputs":[{"internalType":"address","name":"fromAddress","type":"address"},{"internalType":"bytes","name":"toAddress","type":"bytes"},{"internalType":"bytes","name":"toChain","type":"bytes"},{"internalType":"uint256","name":"amount","type":"uint256"},{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"fromChain","type":"string"},{"internalType":"string","name":"sender","type":"string"},{"internalType":"uint256","name":"count","type":"uint256"},{"internalType":"bool","name":"executed","type":"bool"},{"internalType":"address","name":"contractAddress","type":"address"},{"internalType":"string","name":"action","type":"string"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct Test.ReceivedMessage","name":"rm","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tran","outputs":[{"internalType":"address","name":"fromAddress","type":"address"},{"internalType":"bytes","name":"toAddress","type":"bytes"},{"internalType":"bytes","name":"toChain","type":"bytes"},{"internalType":"uint256","name":"amount","type":"uint256"},{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"fromChain","type":"string"},{"internalType":"string","name":"sender","type":"string"},{"internalType":"uint256","name":"count","type":"uint256"},{"internalType":"bool","name":"executed","type":"bool"},{"internalType":"address","name":"contractAddress","type":"address"},{"internalType":"string","name":"action","type":"string"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct Test.ReceivedMessage","name":"rm","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_as","type":"string"}],"name":"writeAString","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
const erc20Address = "0x651867c8C3a0d6247C0A953f0EbAda1F1B98F6B8"

var Web3 = require("web3");
const web3 = new Web3('https://api.avax-test.network/ext/bc/C/rpc');

const mint = async function () {
    let contract = new web3.eth.Contract(JSON.parse(abiStr), erc20Address, null);
    let data = await contract.methods.senderTest().call(null, function(error,result){console.log(error, result)});
    console.log('data', data);
}

const senderTest = async function () {
    let contract = new web3.eth.Contract(JSON.parse(abiStr), erc20Address, null);
    let data = await contract.methods.senderTest().encodeABI();
    console.log('data', data);
    let tx = {
        from: '0xbFdad7729edcb50da2273353bE4064E68AF62e7E',
        to: erc20Address,
        // value: "1000000000000000000",
        chainId: '0xA869',
        data: data,
        gasPrice: "100000000000", 
        gas: "2100000", 
    };
    let st = await web3.eth.call(tx);
    console.log(st);
}

const arrayPush = async function () {
    let nonce = web3.utils.numberToHex(await web3.eth.getTransactionCount('0xbFdad7729edcb50da2273353bE4064E68AF62e7E'));
    let contract = new web3.eth.Contract(JSON.parse(abiStr), erc20Address, null);
    let data = contract.methods["arrayPush"].apply(contract.methods, [1]).encodeABI();
    console.log("nonce", nonce, data)
    let tx = {
        from:from,
        to: erc20Address,
        // value: "1000000000000000000",
        chainId: 43113,
        data: data,
        gasPrice: "10000000000000", 
        gas: "2100000", 
        nonce: nonce,
    };
    // 签名交易
    let signTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    // 发送交易
    let receipt = await web3.eth.sendSignedTransaction(signTx.rawTransaction);
    console.log("sign tx data:\n", signTx.rawTransaction)
    // let st = await web3.eth.call(tx);
    console.log(receipt);
}

// mint();
// arrayPush();
senderTest();