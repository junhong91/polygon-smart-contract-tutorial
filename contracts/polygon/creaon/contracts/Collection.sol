// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Collection {
    uint storedData;

    constructor() {
  		  storedData = 0;
  	}

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}