# polygon-smart-contract-tutorial

Deploy smart contract on polygon network

## Truffle

#### Test contract

```sh
truffle develop
truffle test
```

output

```sh
...
Using network 'development'.

Compiling your contracts...
===========================
> Compiling ./test/TestCollection.sol
> Artifacts written to /var/folders/xc/jxvcxfc901nd0jmqv594w8sw0000gn/T/test--89605-BscbjjTFIYq2
> Compiled successfully using:
   - solc: 0.8.0+commit.c7dfd78e.Emscripten.clang

  TestCollection
    ✓ testInitialStoredDataUsingDeployedContract (60ms)
    ✓ testSettingStoredData (56ms)

  2 passing (6s)
```

#### Deploy smart contract

compile smart contract

```sh
truffle compile
```

deploy to mumbai test network

```sh
truffle migrate --network matic
```

## Reference

- [learn web3 dapp](https://github.com/figment-networks/learn-web3-dapp)
- [Polygon Academy](https://academy.polygon.technology/module-1-getting-started/environment-setup-and-installation)
- [Tutorial NFT marketplace](https://github.com/Polygon-Academy/Tutorial-nft-marketplace)
