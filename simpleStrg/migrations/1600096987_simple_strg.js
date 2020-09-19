const simpleStrg = artifacts.require("./simpleStrg");

module.exports = function(deployer) {
  deployer.deploy(simpleStrg);
};
