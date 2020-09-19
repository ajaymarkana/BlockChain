//SPDX-License-Identifier: MIT
pragma solidity >= 0.5.2 ;

contract simpleStrg {
  string public name = "Ajay";

  function getName() public view returns(string memory){
    return name;
  }

  function setName(string memory newName) public{
    name = newName;
  } 
  
}
