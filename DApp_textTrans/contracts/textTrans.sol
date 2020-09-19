//SPDX-License-Identifier: MIT
pragma solidity >0.5.2;

contract textTrans {

  mapping(address => string) data;

  event transfer(
    address indexed _from,
    address indexed _to,
    string  data
  );

 /*function getData() public view returns(string memory){
    return  name;
  } 

  function setData(string memory newName) public{
    name = newName;
  }*/ 

  function sendData(address _from,address _to,string memory name) public {
    data[_to] = data[_from];
    
    emit transfer(_from,_to,name);

}

function displayData(address add) public view returns(string memory){
  return data[add];
}

}
