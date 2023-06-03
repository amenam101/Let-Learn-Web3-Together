// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract Learn2Earn {

    uint256 public rewards;

    struct Unit {
        uint16 unitId;
        bool isCompleted;
    }

    mapping(address => Unit) public infoStudent;

    constructor (uint256 _rewards) {
        rewards = _rewards;
    }

    function initUnit(uint16 _unitId) public {
        (infoStudent[msg.sender].unitId)++;
        require(_unitId > 0 && _unitId <= infoStudent[msg.sender].unitId, "");
        require(_unitId == 1 || infoStudent[msg.sender].isCompleted == true,"");
        infoStudent[msg.sender].isCompleted = false;
    }

    function finishUnit(uint16 _unitId) public {
        require(_unitId > 0 && _unitId == infoStudent[msg.sender].unitId, "");
        infoStudent[msg.sender].unitId++;
        infoStudent[msg.sender].isCompleted = true;

        uint256 bal = rewards;
        rewards = 0;

        // Send ether
        (bool sent, ) = msg.sender.call{value: bal}("");
        require(sent, "Failed to send Ether");
    }
}

