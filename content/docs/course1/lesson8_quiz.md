---
title: '✍️ Lesson 8 - Final questionnaire (1/2)'
version: '✔️ v1.0'
slug: "lesson8"
number: 8
menu:
  docs:
    parent: "Course 1"
weight: 18
toc: true
---

# What is blockchain ?
- Where is the amount of your cryptocurrency stored ?
  - [x] in the blocks
  - [ ] on the miners computers
  - [ ] at the bank
  - [ ] in your wallet
* What is a genesis block ?
  * [x] The first block containing the settings of the blockchain
  * [ ] The block containing the first transaction on the blockchain
  * [ ] The last block before the fork of the blockchain
* What is the common point between a full node and a light node in a blockchain network ?
  * [ ] the recorded blockchain history
  * [x] the capacity to submit transactions
  * [ ] the capacity to participate in mining
* Who can modify the existing state of a blockchain ?
  * [ ] Miners
  * [ ] Full nodes
  * [x] Anybody
* Which statement does not justify the use of consensus in a blockchain network ?
  * [ ] to avoid double spending
  * [ ] to avoid malicious behaviors
  * [ ] to share the same timestamps
  * [x] to distribute data among nodes
  * [ ] to share a ledger without relying on a centralized third party

<!--
* Why do miners do hard work to secure the network? [For block rewards, For goodwill, For fame]
* What is a node in a blockchain network? [A programming language, A cryptocurrency token, A computer running the blockchain software]
* Who created Bitcoin?
* What is a blockchain?
* Blockchains can be used for?
* What is a miner?
* What does P2P mean? 
-->

# What is consensus ?
* Consensus protocols are impossible to hack/tamper with ?
  * yes
  * no [x]
* What is it called when two different blocks are produced and included in parallel ?
  * Soft Fork [x]
  * Hard Fork
  * Double Spending
* What are uncle blocks ?
  * Blocks mined after the child block
  * Blocks that end up getting deleted
  * Blocks are that are included after a fork [x]
* When does a soft fork occurs in a blockchain network ?
  * when two blocks are validated at the same time [x]
  * when two parts of the network are desynchronized
  * when two different versions of the blockchain software are running
* Which statement best describes Proof of Work ?
  * Miners compete to solve computational puzzles. The winner of this competition gets to add a block to the blockchain [x]
  * Miners with the most currency are allowed to mine and add blocks to the blockchain
  * Miners work to compute an EVM routing problem. The first miner to solve the problem gets to add blocks to the Blockchain

<!--
* What is it called when one user tries to pretend to be many different users?
* Which of these is true about Proof of Work? Select all that apply. [""Miners are responsible for ensuring no user tries to become a miner", "Miners are responsible for producing new blocks", "Miners are responsible for ensuring the network isn't tampered with"]
* What is the technique used by miners to solve the mathematical problem to prove their work to the network? Bruteforce, Penetration Attack, Sybil Attack
* What do validators concern themselves with on sharded blockchains?
* Assuming a sharded blockchain implementation that has a Beacon chain to manage it, what happens if each node in the blockchain becomes 5x faster?
* What are subnetworks on Avalanche?
* How do cross-shard transactions work on NEAR?
* Which of the following are examples of Layer 1 blockchains?
* Can smart contract's be upgraded on Flow blockchain?
* What does Near blockchain use?
* It is viable to run a Flow node on your personal computer?
* What's the benefit of having a multi-role architecture in Flow?
* Which programming language is used to develop on Flow?
* Validators on Solana participate in a competition/race to be selected to propose a block?
* What are accounts on Solana?
* It is impossible for Solana programs to have bugs
* What is a difference between Ethereum and Solana?
-->

# What is mining ?
* Ledger is the chain of blocks that have been mined ?
  * yes [x]
  * no
* Mempool is the list of transactions that have been mined ?
  * yes
  * no [x]
* Mining pools help individual miners to combine their computational effort to increase the chances of mining blocks ?
  * yes [x]
  * no
* What does not change the mining reward per block ?
  * transaction fee 
  * bitcoin halving
  * time to mine the block [x]

<!--
* Can I an HD picture in a Bitcoin transaction ? [yes, no]
* It is very profitable to be a miner, for anybody
* Which is a more profitable method of mining? Using CPUs, Using GPUs, Using APUs
* Miners are paid to mine the blocks
* Miners exist in the network so as to ensure that users can be controlled
* Can I run the bitcoin software and participate in the mining for the bitcoin blockchain network with my laptop ? [yes, no]
* Should I expect earning a lot of Bitcoin using my laptop ? [yes, no]
* Which is the chip that was specifically designed to mine Ethereum?
* What consensus mechanism does Ethereum use currently?
* Ethereum will shift to PoR after 2022
* The mining reward for Ethereum is roughly:
-->

# What is a wallet ?
* What is a seed phrase ?
  * Seed phrase is like a password for your crypto wallet
  * Seed phrase is the password of your private key 
  * Seed phrase is a representation of your private key [x]
* What does not do a crypto wallet ?
  * Crypto wallet manages your seed phrases
  * Crypto wallet manages the private keys associated with your addresses
  * Crypto wallet displays your crypto balance
  * Crypto wallet submits transactions to the blockchain network
  * Crypto wallet participates in the blockchain network [x]
* What shouldn't you do to backup your private key ?
  * Store the seed phrases in the cloud [x]
  * Encrypting it and print it on a physical asset
  * Split it in shares and store them in different locations

# What is a Ethereum API ?
* What is a blockchain gateway ?
  * An interface to visualize mined transactions
  * An interface to submit transaction to a blockchain node in the cloud [x]
  * An interface to acquire cryptocurrencies
* What is the nonce of a transaction ?
  * The index of the transaction in a block
  * The index of the transaction in the history of the wallet [x]
  * The index of the transaction in the blockchain
* What is the main difference between Web2 and Web3 ?
  * The capability to pay online
  * The decentralized way to manage online resources [x]
  * The open access to web resources


<!--
* What is an public address? [An address represents a crypto currency, An address represents your account on the blockchain, an address represents your crypto balance]
* What are private keys? [Private key is like a password for your address that contains a bunch of letters and numbers, Private key is another name for an address, Private key refers to a crypto wallet]	

* What is the difference between encoding in hex and in base64? 
* Which one of the following is an Ethereum address? [2, bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh,		0x71C7656EC7ab88b098defB751B7401B5f6d8976F] 
-->

<!--
---

# What is Ethereum?
* What is the recommended time, on Ethereum, after which we can almost guarantee a block is not going to be deleted ?
* A transaction has "finality" on Ethereum when it's part of a block that can't change.
* Since blockchains like Ethereum are essentially distributed databases, consensus on the current state need to be met.
* What rule does Ethereum use to enforce that only one state of chain carries, even after a fork?
* In the Serenity/ETH 2.0 patch... Ethereum will move to proof of stake
* Ethereum currently runs on...
* If you write a smart contract on the Ethereum mainnet... it will be replicated and processed on all the computers on the Ethereum main network.
* You can create your own ERC-20 token without the permission of Ethereum
* Who's "Block time" is shorter?
* What runs Smart contracts?
* Who's "Block size" is bigger?
* If uncles are referenced as uncles by a later block
* What is the native currency of Ethereum?
* What is the max block size limit possible on the Ethereum network today?
* The value of gas price for a transaction was fixed before the London-upgrade
* The London Fork took place in Ethereum's London servers
* Which version of the Ethereum network provided better gas estimations for the network?
* A transaction that costs 100 Gwei today can cost 200 Gwei tomorrow

# What is Web3?
* Web3 is permissionless
* Web3 is trustless
* Web3 is controlled by a central authority
* Web3 is open
* Web3 is centralized
* Web2 is centralized
* Web3 is distributed
* Lots of data breaches happen in Web2


https://www.simplilearn.com/tutorials/blockchain-tutorial/blockchain-interview-questions
https://www.edureka.co/blog/interview-questions/blockchain-interview-questions/


Rendez-vous sur https://etherscan.io et répondez aux questions suivantes :

De quand date le 1er block ethereum ? Combien existe-t-il de blocks ?
Quelle est la taille du ledger actuellement ?
Combien coûte une transaction ? 
Combien rapporte une transaction à un miner ?
Est ce que les Smart Contracts sont beaucoup utilisés ?
Quel Smart Contract est beaucoup utilisé cette semaine ?

Rendez-vous sur https://www.blockchain.com/explorer et répondez aux questions suivantes :

De quand date le 1er block bitcoin ? Combien existe-t-il de blocks ?
Quelle est la taille du ledger actuellement ?
Combien coûte une transaction ? 
Combien rapporte une transaction à un miner ?
La difficulté de minage a-t-elle toujours augmenté ? Par exemple, que s’est il passé durant  l’été 2021 ?
-->
