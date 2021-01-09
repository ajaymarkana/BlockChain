//SPDX-License-Identifier: MIT
pragma solidity >= 0.5.2;


contract textTrans{
  event send(address addr1,address addr2,string message);

  function sendData() public {
    emit send(msg.sender,0x40f723B762890d7Fc41A85CDC160a1b166C6192d,"Ajay");
  }
  
}
contract receiver{
  mapping (address => string) public data;

  function getData(address _add) public view returns(string memory){
    return data[_add];
  }


}
