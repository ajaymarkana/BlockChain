var textTrans = artifacts.require("./textTrans.sol");
var receiver = artifacts.require("./textTrans.sol");


module.exports = function(deployer) {
  deployer.deploy(textTrans);
  deployer.deploy(receiver);
};

