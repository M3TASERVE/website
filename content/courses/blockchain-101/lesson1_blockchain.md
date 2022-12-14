---
title: 'ð® Lesson 1 - Blockchain'
version: 'âï¸ v1.0'
slug: "blockchain"
draft: false
summary: "quick summary"
number: 1
menu:
  courses:
    parent: "Blockchain 101"
weight: 11
toc: true
---

<!--
## Table of contents
- [Introduction](#introduction)
- [What is Blockchain?](#what-is-blockchain)
- [What are the most famous Blockchains?](#what-are-the-most-famous-blockchains)
  - [What is Bitcoin?](#what-is-bitcoin)
  - [What is Ethereum?](#what-is-ethereum)
- [Conclusion](#conclusion)
-->

# Introduction

To get started building decentralized applications, it is mandatory to grasp an overview of Blockchain first.
In this lesson, we introduce the main concepts of Blockchain and we give pointers to the most famous Blockchains.

# What is Blockchain?

A [blockchain](https://en.wikipedia.org/wiki/Blockchain) ð is essentially a trustless, peer-to-peer and continuously growing database (or ledger) of records, aka. blocks, that have been verified and shared among the entities participating in the network. 
Each block typically contains a timestamp, a cryptographic hash value of the previous block, and a set of transactions data. Once a new block is validated by consensus and written to the ledger, transactions cannot be altered retroactively without the collusion of the network majority.

This technology was popularized by the anonymous person (or group of persons) Satoshi Nakamoto, when the [Bitcoin Network](https://en.bitcoin.it/wiki/Main_Page) ð was released and described in a [whitepaper](https://bitcoin.org/bitcoin.pdf) ð in 2008.
Bitcoin is designed as a cryptocurrency network (BTC), and it handles primarily the transfer of a currency (BTC) across participants, without a trusted middleman or authority, while ensuring the network itself is secure and cannot be hacked. 
Itâs the first decentralized cryptocurrency that enables peer-to-peer transactions without involving any intermediators, like agents, governments, brokers, or banks. 
More precisely, Bitcoin was initially designed as a public transaction network, ie. a network free of access to anyone and where anyone can participate ([trustless network](https://preethikasireddy.medium.com/eli5-what-do-we-mean-by-blockchains-are-trustless-aa420635d5f6) ð). This network is implementing a consensus protocol that solve the [double-spending](https://en.wikipedia.org/wiki/Double-spending) ð problem without the need for any third party or trust authority, ie. it makes sure that each unit of value is transfered only once in decentralized setting.

This technology is not novel, but is rather a combination of well-known building blocks, including peer to-peer protocols, cryptographic primitives, distributed consensus algorithms and economic incentives mechanisms, all assembled together  to provide key characteristics, such as persistence, anonymity, fault-tolerance,
auditability and resilience.
To learn more about the history of this technology, you can watch this introduction [video](https://www.youtube.com/watch?v=ZbHLNinXy9E) ð¬ [04:20]

**What are the main concepts of Blockchain?**

To understand how this technology works, you can watch this [video](https://www.youtube.com/watch?v=3rL0OIXbMio) ð¬ [04:15]

**Nodes**

A blockchain network is managed autonomously through a [peer-to-peer](https://en.wikipedia.org/wiki/Peer-to-peer) ð distributed network of computer nodes. Without going into too much detail, you can simply think of each node in the network as keeping a copy of the global transaction ledger. Therefore, each node can individually verify and audit transactions happening on the network and ensure there was no illicit behaviour.

We distinguish [full nodes](https://bitcoin.org/en/full-node#what-is-a-full-node) ð that maintains a complete copy of the ledger from [light nodes](https://en.bitcoin.it/wiki/Lightweight_node) ð. Another type of node, called a [mining node](https://en.wikipedia.org/wiki/Bitcoin#Mining) ð, is responsible for grouping together new transactions being made on a network into a block, and proposing the block to be included onto the global ledger by everyone else. Mining is computationally hard, and very important to do securely, so miners whose blocks get accepted are given a token reward for their hard work.

**Decentralization**

In blockchain, decentralization refers to the transfer of control and decision-making from a centralized entity (individual, organization, or group thereof) to a distributed network. Decentralized networks strive to reduce the level of trust that participants must place in one another, and deter their ability to exert authority or control over one another in ways that degrade the functionality of the network.

Decentralization is not a new concept. When building a technology solution, three primary network architectures are typically considered: centralized, distributed, and decentralized. While blockchain technologies often make use of decentralized networks, a blockchain application itself cannot be categorized simply as being decentralized or not. Rather, decentralization is a sliding scale and should be applied to all aspects of a blockchain application. By decentralizing the management of and access to resources in an application, greater and fairer service can be achieved. Decentralization typically has some tradeoffs such as lower transaction throughput, but ideally, the tradeoffs are worth the improved stability and service levels they produce.

By storing data in a peer to peer network of nodes, the blockchain is by definition a decentralized network. The fact that data are duplicated on every node of the network is expensive but it also has significant benefits over the traditional approach that store data in a centralized manner. A few of which are listed here:
<!--
- Centralized authorities can censor or discriminate
- Reliance on central servers can be a single point of failure
- Data breaches in centralized systems expose data to pirates (ransomware)

On the other hand, decentralization brings about the opposite benefits.
- No censorship as there is no single authority or middleman that can censor you
- No downtime as the overall network is running across 1000's of nodes across the globe
- Highly attack resistant making it infeasible to manipulate or destroy data
-->
<img style="max-width: 100%;" src="/wp-content/uploads/2022/06/decentralization.png"></img>
<div class="image-caption"><a href="https://aws.amazon.com/fr/blockchain/decentralization-in-blockchain">Source</a></div>

Decentralization should be applied where it makes sense. Just because itâs a blockchain application doesnât mean it needs to be 100% decentralized. The goal of any blockchain solution is to deliver what the users of that solution need, and this may or may not include certain levels of decentralization.

**State Management**

Blockchains start off with a Genesis State when they launch. Bitcoin's genesis state happened in 2009 when the public network launched. Ethereum's Genesis State happened in 2015, when it launched.
Every transaction on a blockchain modifies the global state that is replicated across all nodes.

<img class="medium-image" src="/wp-content/uploads/2022/06/state.png"></img>

Since there are millions of transactions, transactions get grouped together in blocks. Hence the name. These blocks are chained together in a cryptographically verifiable way so they are historically traceable. The current state of a network can be recalculated at any time by starting from the genesis block and transitioning the state according to each block's information up until now.

<img class="medium-image" src="/wp-content/uploads/2022/06/chain.png"></img>

Every block has the following components:
* Data â a combined set of transactions that were mined, confirmed, and incorporated in the block.
* Nonce â Bitcoin uses a mining mechanism known as Proof of Work algorithm (the process of confirming transactions in the blockchain to prevent double spending), where a nonce is a random value that is used for variating the output value of the hash. Every block has to create a hash value, and in order to do that the block has to use nonce as a parameter.
* Hash â The digital signature of the block is called hash value. Itâs the value that the block gets when it combines the data, nonce, and previous hash value using the SHA-256 hash function. This function is used by the Bitcoin blockchain in particular and generates a 256 bit (64 character long) random hash output for every input.

To deep dive into how blockchains work, we also suggest the following resources:
- [What is a Blockchain? ](https://www.youtube.com/watch?v=kHybf1aC-jE) ð¬ [08:27]
- [But how does bitcoin actually work? by 3Blue1Brown](https://www.youtube.com/watch?v=bBC-nXj3Ng4) ð¬ [26:20]

# What are the most famous Blockchains?

There is a large state of the art of Blockchain technologies. During the last ten years, a lot of protocols and technologies have been proposed. Most of the time, they have been described in whitepapers (without peer review) and developped by small companies. This is explain that some technologies make the buzz and then disapear of the landscape two years later. Despite this turn over on technology trends, few blockchains have gather a community large enough to ensure their survival.
In this section, we will quickly cover the two main technologies that are the most famous, the oldest, and the most used at the moment: Bitcoin and Ethereum.

## What is Bitcoin?

[Bitcoin](https://en.bitcoin.it/wiki/Main_Page) ð is to date the most famous blockchain. It has been released in 2008 and described in a [whitepaper](https://bitcoin.org/bitcoin.pdf) ð by the anonymous person (or group of persons) Satoshi Nakamoto.
Bitcoin is designed as an electronic payment system that is based on cryptographic proof, instead of trust. Some holders buy bitcoin as an investment, wanting it to increase in value, while individuals and businesses use or accept payments as currency. Bitcoin-to-bitcoin transactions are made by digitally exchanging anonymous.

Here is a brief overview of its history:

| Date | Event |
|---|---|
| 19-aug-08 | Reservation of bitcoin.org domain name by an unknown Satoshi Nakamoto |
| 31-oct-08	| Bitcoin launch official annoncement with the publication of its whitepaper |
| 12-jan-09 | 1st transaction performed by Satoshi to test his system. Its a 10 bitcoin transaction to Hal Finney |
| 05-oct-09	| 1st estimate of the value of Bitcoin from its validation cost: 1 bitcoin is worth 0.001$US ~ 0.00071â¬ |
| 22-may-10	| Laszio Hanyecz buys 2 pizzas for 10 000 bitcoins. 1st buying of real goods using the network |
| 12-dec-10 | Last public message of Satoshi Nakamoto annoncing that he is leaving the project |
| fev-11 | Bitcoin's value reaches the dollar first and then the euro |
| nov-13 | Bitcoin's value is hover 1000$US (~736â¬) and 100 000 tx are performed in one day |

## What is Ethereum?

[Ethereum](https://ethereum.org/en/what-is-ethereum/) ð is a decentralized blockchain platform proposed by [Vitalik Buterin](https://en.wikipedia.org/wiki/Vitalik_Buterin) ð, a young programmer and co-founder of the Bitcoin Magazine. Unlike Bitcoin that support only cryptocurrency, Ethereum introduces [Smart Contracts](https://en.wikipedia.org/wiki/Smart_contract) ð.
Smart contracts are small computer programs that are replicated and processed on all the computers on the Ethereum network without a central coordinator. Smart Contracts allow for any number of possible applications to be built on top. It can help to digitize and automate the execution of business workflows (i.e., self-executing contracts or agreements), and whose proper execution is automatically enforced by the consensus mechanism of the Ethereum blockchain.
Because a deployed Smart Contract cannot be erased, Ethereum is sometimes identified as âThe unstoppable computerâ.

<img style="max-width: 400px;" src="/wp-content/uploads/2022/06/ethereum.png"></img>

Ethereum is running since the release of its [whitepaper](https://ethereum.org/en/whitepaper/) ð in 2015. On this platform, developers can build dApps, or decentralized applications, which can be executed on the Ethereum network. The global state of Ethereum therefore consists of more than just the balance of every account, but also the state of each dApp.
dApps are built on Ethereum using a Turing-complete programming language named [Solidity](https://en.wikipedia.org/wiki/Solidity) ð. You can write smart contracts using Solidity and deploy the smart contracts to the Ethereum Network.
Ethereum has a native currency called "Ether", or "ETH / Î". This token is required to pay transaction fees for transactions done on the Ethereum network. Each account is refered to with an address and each account linked to a balance informing on the amount of Ether owned by the account. This balance is indicated in Wei unit (1 Ether = 1e18 Wei).
To run a Smart Contract, one must send a transaction to its address. The terminaison of the program execution is guaranteed by a threshold in "gas". Each instruction of the program is mapped to a specific amount of gas and a program that reaches the gas limit is automatically stopped.

We advise you to read and watch the following material to go more into details:
* [Introduction to Ethereum](https://bitsonblocks.net/2016/10/02/gentle-introduction-ethereum/) ð
* [How does Ethereum work anyway?](https://www.preethikasireddy.com/post/how-does-ethereum-work-anyway) ð
* [Smart contracts explained](https://youtu.be/pWGLtjG-F5c) ð¬ [15:59]
* [Gas costs on Ethereum](https://youtu.be/Yh8cHUB-KoU) ð¬ [13:02]

# Conclusion

In this lesson, we provided a brief overview of blockchain and Ethereum. In the next lesson, we will see how it works and more precisely we will explain what is proof of work.

<!--
To go deeper into the topic, you can also explore the following ressources:
* [Consensys Knowledge Base](https://consensys.net/knowledge-base/)
* [Mastering Ethereum Book](https://github.com/ethereumbook/ethereumbook)
* [History of DeFi](https://youtu.be/qFBYB4W2tqU) ð¬ [18:44]
-->

<!--
- [Smart Contract simply explained](https://www.youtube.com/watch?v=ZE2HxTmxfrI)
- [Use cases](https://blockgeeks.com/guides/smart-contracts/)

https://www.simplilearn.com/tutorials/blockchain-tutorial/what-is-blockchain

Popular decentralized application (dapp) CryptoKitties crashed the Ethereum blockchain with 1.3 million transactions in December 2017. But since then, user numbers have dwindled into the hundreds.

#### Must Watch
- [But how does bitcoin actually work? by 3Blue1Brown](https://www.youtube.com/watch?v=bBC-nXj3Ng4)
- [Blockchain Demo by Anders Brownworth](https://andersbrownworth.com/blockchain)

#### Recommended
- [A Gentle Introduction to Blockchain Technology by Bits On Blocks](https://bitsonblocks.net/2015/09/09/gentle-introduction-blockchain-technology/)
- [How does a blockchain work by Simply Explained](https://www.youtube.com/watch?v=SSo_EIwHSd4)

Read through the âFoundational topicsâ (see the left nav bar) in the official Ethereum docs.
Please notice Austin and Andersâ videos on blockchain hashes, and play around with the tool they link; itâs a great visual way to understand.
Skim the other two sections, âEthereum Stackâ and âAdvanced.â
-->


<!--
Blockchain publique (mais Ã©galement utilisable en rÃ©seau privÃ©)
Protocoles de consensus disponibles: PoW, PoS, PoA, IBFT
Transactions basÃ©es sur des comptes (pas dâUTXO mais des adresses)
Crypto-monnaie native: Ether (ETH ou Î), 
Chaque compte a une Â«balanceÂ» en Wei (1 Ether = 1e18 Wei)
FonctionnalitÃ© de Smart Contract (âThe unstoppable computerâ - EVM)
Open source: goEthereum, Open Ethereum, Hyperledger Besu, â¦
Ethereum Mainnet mis Ã  jour rÃ©gulierement (EIP): https://ethereum.org/en/history/


Un Smart Contract est un accord entre plusieurs parties rÃ©digÃ© sous la forme dâun programme informatique

Ce programme est exÃ©cutÃ© dans une EVM (langage Turing complet) et son nombre dâinstructions est bornÃ© pour garantir la terminaison (gasLimit, gasPrice)

Chaque instruction a un coÃ»t en gas:
https://ethereum.org/en/developers/docs/gas
https://ethereum.org/en/developers/docs/evm/opcodes/

DiffÃ©rents langages de dÃ©veloppement comme Solidity existent et sont compilÃ©s en bytecode executable dans lâEVM
-->

