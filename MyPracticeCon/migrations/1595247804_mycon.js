var myCon = artifacts.require("myCon");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(myCon);
};
