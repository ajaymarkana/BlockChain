//SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0 < 0.7.0;

contract ownable{
  address owner;

  constructor() public{
    owner = msg.sender;
  }

  modifier onlyOwner(){
    require(msg.sender == owner,"must be owner");
    _;
  }
} 
contract secretVault{
  string secret;

  constructor(string memory _secret) public{
    secret = _secret;
  }

  function getSecret() public view returns(string memory){
    return secret;
  }
}

contract myCon is ownable {
address SecretVault;

constructor(string memory _secret) public{
  secretVault _secretvault = new secretVault(_secret);
  SecretVault = address(_secretvault);
  super;
}

function getSecret() public view onlyOwner returns(string memory)
{
  secretVault _secretvault = secretVault(SecretVault);
  return _secretvault.getSecret();
}
}