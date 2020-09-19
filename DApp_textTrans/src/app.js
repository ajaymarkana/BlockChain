var Tx = require("ethereumjs-tx");

const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:7545");

const addr1 = "0x73c451372151585D00De1FFFE245b3921A0dAa6B";
const addr2 = "0xCE9a50598975D3d5acEe87FaC4b67606e2dc901D";

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1,"hex");
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2,"hex");

let abi = ` [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "data",
          "type": "string"
        }
      ]`;
