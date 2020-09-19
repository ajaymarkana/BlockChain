var contractABI = [

    {
        "constant": true,
        "inputs": [],
        "name": "last_completed_migration",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "completed",
            "type": "uint256"
          }
        ],
        "name": "setCompleted",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
];
var contractAddress = "0x28d19Bf987983A01459B8C78019b28DcFB5F551E";

var web3 =- new web3("http://127.0.0.1:7545");

var simpleStrg = new web3.eth.Contract(contractABI,contractAddress);

document.addEventListener("DOMContentLoaded", () =>{
  const $setData = document.getElementById("setData");
  const $getData = ducument.getElementById("data");
  let accounts = [];

  web3.eth.getAccounts()
  .then(_accounts =>{
    accounts = _accounts
  });

  const getData = () =>{
    simpleStrg.methods
    .getData()
    .call()
    .then(result => {
      $getData.innerHTML = result;
    });
  };
  getData();

  $setData.addEventListener("submit", e => {
    e.preventDefault();
    const data = e.target.elements[0].value;
    simpleStrg.methods.setData(data)
    .send({from : accounts[0]})
    .then(getData);
  });
});
