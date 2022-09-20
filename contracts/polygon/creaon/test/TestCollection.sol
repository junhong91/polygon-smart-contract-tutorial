// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Collection.sol";

contract TestCollection {

  function testInitialStoredDataUsingDeployedContract() public {
    Collection collection = Collection(DeployedAddresses.Collection());

    Assert.equal(collection.get(), 0, "storedData should be 0 initially");
  }

  function testSettingStoredData() public {
    Collection collection = new Collection();

    uint expected = 10000;

    collection.set(expected);

    Assert.equal(collection.get(), expected, "storedData should equal 10000");
  }

}
