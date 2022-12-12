---
title: '🚀 Lesson 6 - Project Crowdfunding'
version: '✔️ v1.0'
slug: "lesson6"
number: 6
menu:
  docs:
    parent: "Course 2"
weight: 26
toc: true
---

<!-- 
## Table of contents
- [🚀 Build your Smart Contract for Crowdfunding](#-build-your-smart-contract-for-crowdfunding)

# What is an NFT ?

https://github.com/LearnWeb3DAO/NFT-Collection

* Unlimited amount of participants = problem

-->


# 🚀 Build your Smart Contract for Crowdfunding

In the lesson, you are asked to develop a Smart Contract that statisfies the following specifications:

We want to build a fundraising DApp. This application will enable creators to publish projects proposals in order to raise money in the form of ERC20 tokens (_token_).
A crowd funding campaign lasts for a fixed duration and money must be raised above a minimum goal to unklock the developpement of project (usage of the funds) otherwise the contributors are refunded.
- launching: anyone can create a campaign. It requires a minium goal to reach (_cap_), start and end dates (_openingTime_, _closingTime_) and duration cannot exceeed 90 days.
- raising: Contributors sends tokens to the contract during the raising stage. Campaign can be canceled by the creator at any moment. By default, the recipient of funds is the owner after that the campaign is closed. However if the campaign is canceled all the participants can individually ask to withdraw their funds.
- withdrawing: after the raising period is expired or the cap is reached, the creator can close the campaign and get the funds.

Technical hints:
* contract deployment corresponds to the launching stage. Parameters of the contract can be given in the contract constructor:
    `constructor(IERC20 token_, uint cap_, uint start_, uint end_);`
* this contract mixes the previous Vote contract and a set of Escrow contracts. The approve function of the ERC20 will also be usefull.

The Smart Contract must implement the following interface:
```js
interface ICrowdfunding {

    function creator() external view returns (address);
    function start() external view returns (uint);
    function end() external view returns (uint);
    function closed() external view returns (bool);

    function cap() external view returns (uint);
    function token() external view returns (address);
    function depositsOf(address participant) external view returns (uint256);
    function amountRaised() external view returns (uint256);

    function participate(uint256 amount) external;
    function close() external;
    function cancel() external;
    function withdraw() external;

    event Deposited(address indexed participant, uint256 amount);
    event Withdrawn(address indexed participant, uint256 amount);
    event Canceled();
    event Closed();
}
```


<!-- 

https://medium.com/blockchain-biz/the-difference-between-ethereum-protocols-erc-20-erc-721-erc-1155-and-more-f928b60aadbe

https://medium.com/@burgossrodrigo/nft-marketplace-with-auctions-and-direct-sell-ea8e65cf2b2

https://github.com/spandan114/Crowdfunding-DAPP/blob/master/contracts/Project.sol

https://thysniu.medium.com/how-to-escrow-erc20-tokens-in-solidity-with-remix-b35fe649472f#:~:text=Escrow%20Contract%20for%20ERC20%20Tokens,after%20the%20escrow%20is%20unlocked

https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/escrow/Escrow.sol


// Crowdsale https://github.com/OpenZeppelin/openzeppelin-contracts/tree/v2.5.0/contracts/crowdsale


ERC20
1. Swap | Faucet
2. Dapp DeFi ?
3. https://cryptomarketpool.com/create-a-crypto-faucet-using-a-solidity-smart-contract/

NFT
1. upload metadata to ipfs using pinata (format opensea) > https://itnext.io/storage-dapp-using-solidity-and-ipfs-62cf371b77dc
2. mint NFT testnet
3. add to collection opensea = https://docs.opensea.io/docs/getting-started
4. https://blog.chain.link/build-deploy-and-sell-your-own-dynamic-nft/



https://solidity-by-example.org/app/crowd-fund

https://solidity-by-example.org/signature
https://solidity-by-example.org/defi/staking-rewards

https://betterprogramming.pub/how-to-create-your-own-nft-smart-contract-tutorial-1b90978bd7a3

erc20 => add metamask + faucet contract >>> escrow ? swap between 2 erc ? crowdfunding ? ==> invest in project = badge reward nft :: pay to mint
nft > petshop ? => prb nb owners :::> use metamask https://trufflesuite.com/boxes/pet-shop/

https://github.com/dappuniversity/token_sale

https://dev.to/rounakbanik/tutorial-digital-signatures-nft-allowlists-eeb
https://medium.com/@ItsCuzzo/using-merkle-trees-for-nft-whitelists-523b58ada3f9

https://ethereum.org/fr/developers/tutorials/merkle-proofs-for-offline-data-integrity/
https://medium.com/quarkchain-official/efficient-on-chain-dynamic-merkle-tree-21b08f937893
https://medium.com/codex/creating-an-nft-whitelist-using-merkle-tree-proofs-9668fbe72cb4

-->

<!--
TODO: 
* ERC20
* ERC721
* ERC1155

#### ERC20 Tokens
In addition to Ether, people can create and use their own currencies on Ethereum. The most common form of currency is ERC20 tokens. ERC20 Tokens are smart contracts that fit a specific standard. Developers can extend beyond the standard, but should meet the minimum requirements when making their own token. The standardization allows for digital wallets to easily support all types of tokens, without needing specialized code for each token created.

#### ERC721 and ERC1155 Tokens
These are what are also called NFTs. These two standards, similar to ERC20, provide a base line for what requirements should be met when creating NFTs. They provide similar benefits as well, allowing wallets and NFT marketplaces to instantly be compatible with all NFT collections as they all follow one of these two standards.

- [https://cointelegraph.com/explained/erc-20-tokens-explained](https://cointelegraph.com/explained/erc-20-tokens-explained)
- [https://www.investopedia.com/news/what-erc20-and-what-does-it-mean-ethereum/](https://www.investopedia.com/news/what-erc20-and-what-does-it-mean-ethereum/)

## Prefer a Video?
If you would rather learn from a video, we have a recording available of this tutorial on our YouTube. Watch the video by clicking on the screenshot below, or go ahead and read the tutorial!

[![Cryptocurrency Tutorial](https://i.imgur.com/RVzkVsZ.png)](https://www.youtube.com/watch?v=5yM5bojHbmQ "Cryptocurrency Tutorial")

### Forked from https://github.com/BlockDevsUnited/NFT-Tutorial
## Prefer a Video?
If you would rather learn from a video, we have a recording available of this tutorial on our YouTube. Watch the video by clicking on the screenshot below, or go ahead and read the tutorial!

[![Cryptocurrency Tutorial](https://i.imgur.com/klHysek.png)](https://www.youtube.com/watch?v=uwnAXAsd428 "NFT Tutorial")

-->
