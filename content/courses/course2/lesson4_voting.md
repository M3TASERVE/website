---
title: '🚀 Lesson 4 - Project Vote'
version: '✔️ v1.0'
slug: "lesson4"
number: 4
menu:
  courses:
    parent: "101-solidity"
weight: 24
toc: false
submit: true
---

<!-- 
## Table of contents
- [🚀 Build your Smart Contract for vote](#-build-your-smart-contract-for-vote)

# What is a DAO ?

TODO: add like to code

* Limited amount of participants = call smart contract

-->

# 🚀 Build your Smart Contract for vote

In the lesson, you are asked to develop a Smart Contract that statisfies the following specifications:

We want to build a voting DApp that enables authorities to initiate a vote.
* A vote is limited in time.
* A vote has multiple stages:
    * launching : A new vote must define it start / end dates, its choices and its set of participants. 
    Optional metadata can be provided such as a short description of the vote goal.
    Choices are a set of string and participants are identified by their addresses.
    Only a valid campaign that has an end date greater than the start date and a positive goal can be created.
    Only users registered as authorities can initiate or cancel a vote.
    * voting : during the vote duration, registered users can participate. Only the creator can cancel the vote at any time. Participants cannot cancel their participations.
    Only a set of registered participants can participate during the voting stage (whitelist).
    * closing : Results must be accessible by anyone. The vote cannot be canceled anymore.

Technical hints:
* contract deployment corresponds to the launching stage. Parameters of the contract can be given in the contract constructor:
    `constructor(bytes32[] memory choices_, address[] memory voters_, uint start_, uint end_, string metadata_);`

The Smart Contract must implement the following interface (note that interfaces do not define constructor and modifiers):
```js
interface IVote {
    
    function creator() external view returns (address);
    function closed() external view returns (bool);
    function start() external view returns (uint);
    function end() external view returns (uint);
    function metadata() external view returns (string memory);

    function choices(uint256) external view returns (bytes32, uint256);
    function getChoicesCount() external view returns (uint);

    function voters(uint256) external view returns (address);
    function getVotersCount() external view returns (uint);
    
    function votes(address) external view returns (uint256, bool, uint256);
    function votesCount() external view returns (uint);
   
    function vote(uint) external;
    function cancel() external;
    
    event Voted(address indexed voter, uint choice);
    event Canceled();
    event Closed();
}
```

<!--
Limitations:
- gas cost problem > store merkle of vote only ?
- decentralized metadata storage > ipfs
- avatar using ENS
- anonymity ? vote buyer ?

https://www.dappuniversity.com/articles/the-ultimate-ethereum-dapp-tutorial
https://github.com/dappuniversity/election/blob/master/contracts/Election.sol

==> focus EthersJS : getter with JsonRPC & tx with Metamask

https://esensconsulting.medium.com/un-projet-de-vote-sur-la-blockchain-ethereum-42ff858d57d0

https://hackingdistributed.com/2018/07/02/on-chain-vote-buying/

https://www.ankr.com/docs/learn/tutorials/create-voting-system/movie-voting-web3/


skeleton Dapp vote > clone + nodejs => address contract to test interactively => VS etherscan ===> UI Admin / UI Vote ==> GIVE CODE + ADDRESS 

https://vote.makerdao.com/
[tally dao](https://www.tally.xyz/)

https://snapshot.org/ => https://signator.io/ ; https://github.com/snapshot-labs/snapshot/
==> no ethereum :: full ipfs ==> relayer gas station

https://apecoin.com/governance

https://ens.domains/

https://github.com/snapshot-labs/stamp

-->
