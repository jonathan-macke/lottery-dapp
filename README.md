# Lottery Dapp

Install and start a hardhat node
```shell
yarn install
npx hardhat compile
npx hardhat node
```


Deployed contracts (run scripts and connect to the hardhat node)
```shell
yarn hardhat run scripts/Lottery.ts --network localhost
```

Contract addresses will be printed in the log 
```
token address contract: 0x94099942864EA81cCF197E9D71ac53310b1468D8
lottery address contract: 0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6
```
