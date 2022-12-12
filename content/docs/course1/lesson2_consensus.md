---
title: '🕮 Lesson 2 - Consensus'
version: '✔️ v1.0'
slug: "lesson2"
number: 2
menu:
  docs:
    parent: "Course 1"
weight: 12
toc: true
---

<!--
## Table of contents

- [Introduction](#introduction)
- [What is a consensus protocol?](#what-is-a-consensus-protocol)
- [What are the most famous consensus protocols?](#what-are-the-most-famous-consensus-protocols)
  - [What is Proof of Work?](#what-is-proof-of-work)
  - [What is Proof of Stake?](#what-is-proof-of-stake)
- [Conclusion](#conclusion)
-->

# Introduction

Knowing the main concepts of Blockchain is a good start. But before going into details on how to use this technology, it is important do understand better how this technology works.
In this lesson, we give more details on the core of Blockchain: consensus protocols.

# What is a consensus protocol?

In blockchains like Bitcoin or Ethereum, the nodes in the p2p network need to reach an agreement on the ledger's current state. [Consensus protocols](https://en.wikipedia.org/wiki/Consensus_(computer_science)) 📚 help achieving the agreement or consensus in a trustless setting. To be able to secure the consensus in such setting, the protocol must achieve [Byzantine Fault Tolerance](https://en.wikipedia.org/wiki/Byzantine_fault) 📚. 

This security property is explained in this [video](https://www.youtube.com/watch?v=VWG9xcwjxUg) 🎬 [04:09].

Consensus protocols ensure a total order over the blocks and prevent certain kinds of attacks by relying on both mathematical and economic hypothesis. Theoretically, an attacker could compromise consensus by controlling 51% of the nodes of the network. However, consensus protocols are designed to make this economically unfeasible (checkout this website that evaluates the cost of the attack for each blockchain: https://www.crypto51.app).

To learn more about the 51% attack, you can watch this [video](https://www.youtube.com/watch?v=BuTj9raHQOU) 🎬 [03:54].

# What are the most famous consensus protocols?

If you want to dig into consensus mechanisms, you can have a look at this [academic paper](https://drops.dagstuhl.de/opus/volltexte/2017/8016/pdf/LIPIcs-DISC-2017-1.pdf) 📖 or this [academic survey](https://pure.unamur.be/ws/portalfiles/portal/54177953/Blockchain_Consensus_Protocols.pdf) 📖

## What is Proof of Work?

Ethereum, like Bitcoin, currently uses a consensus protocol called [Proof of Work (PoW)](https://en.wikipedia.org/wiki/Proof_of_work) 📚. This protocol allows all nodes in the p2P network to agree on the current state of the blockchain, and secures the network against a variety of attacks. The nodes participating in this protocol are called miners and the execution of this protocol is called [mining](https://en.wikipedia.org/wiki/Cryptocurrency#Mining) 📚. They are involved in  the process of verifying and approving Bitcoin transactions, through solving complex mathematical problems using high-performance mining computers.

**Hashes & Puzzle**

Understanding hashes is the first step in understanding mining. A hash will take an input of any length, and generate seemingly randomised output of a specific length (SHA-256 is a one-way function – every input string, no matter the size, transforms as a fixed 256 bit output, but the reverse is not possible).
The same input will always generate the same output, but changing just one character will drastically change the output. For example, `b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9` is the hash (SHA-256) of "hello world", and `0fc30e735a0228a31cbbb969988b4f50e02e737f979f091d7d224b765443f5d4` is the hash of "hello worle". You can try it using: https://cryptii.com (replace `Enigma Machine` with `Modern cryptography/Hash function` and configure the output to `bytes` and group by `None`).

This behaviour makes it very difficult to predict what input gives a particular output. To keep track of the map between an input and its hash, some lookup tables called rainbow tables are available [online](http://project-rainbowcrack.com/table.htm) 📖. However it is nearly impossible to find a hash a specific pattern like for instance a hash with a single zero at the front. For example, you can try altering the last letter of "hello world" to get a hash starting with a zero. It will take you multiple attempts to finally get "hello worlz" which equates to `0309d44b424edadb9f3b16ba2a716619275e4eebd6cbbe0621e0aefd51bbf08d` using SHA-256.

This pattern of hash starting with à zero creates a puzzle whose difficulty is measurable and which it's impossible to perform better than blind guessing (brute force approach). This blind guessing is important because its creates a fair competition. Miners have to achieve a hash with a numeric value lower than a specified number. This number is called the target. If your hash attempt gives you a number less than the target, which is the same thing as having a bunch of zeros at the front of the hash, then you win and you get to "mine the block" (finds the appropriate hash). To find such a small hash takes millions of attempts, or more accurately, the whole mining network, with everyone trying at the same time, needs millions of billions of tries to get it right.

Miners have to solve such puzzles with a serie of zero based on a formula that evaluates the difficulty of guessing after a fixed amount of time (around `10 minutes` for Bitcoin and `12-14 seconds`for Ethereum). Each validated block includes a reward in Bitcoins for the successfull miner. It's not really that mining "generates" the Bitcoin in any sense, it's just that it's written into Bitcoin code that a transaction block starts with a unique transaction called a "coinbase" transaction, which is the only type of transaction with no inputs. It only has an output, consisting of the reward plus the transaction fees. So in exchange for finding the correct hash, miners earn both transaction fees and the block reward. The number of Bitcoins in that reward decreases over time, with the current block reward being `6.25 Bitcoin`. 

Note that computing all the hashes requires a huge investments in Mining hardware (using [GPU](https://coinformant.com.au/why-are-gpus-used-for-mining/) 📖 or an [ASIC](https://en.wikipedia.org/wiki/Application-specific_integrated_circuit) 📚) and [electrical energy](https://digiconomist.net/bitcoin-energy-consumption/) 📖, which means you're likely to end up spending more than you would earn.
It is in the miners best interest to produce valid blocks, because if they are caught lying (which is very easy since verification of the certificate is easy) - they just wasted all that energy and computation for nothing and therefore lost their money and time. As such, solving the mathematical problem means the miner *really, really* wants to propose the new block, and is willing to spend energy and computation to receive the reward. To explore mining profitability, you can use an online [calculator](https://etherscan.io/ether-mining-calculator) 📖.

**Fork**

Occasionally, two miners will produce valid blocks roughly at the same time. This can cause different nodes in the network to include different blocks in their blockchain. The technical term for this is a *fork*.
However, for blockchains to proceed in a stable fashion, a single contiguous chain needs to be chosen as the "correct chain" to prevent the splitting of state. 

Bitcoin and Ethereum use the "longest chain" rule to do this. Whichever chain is accepted by a higher number of nodes and continues to grow longer is chosen as the 'correct chain', and the forked chain is gotten rid of.
Occasionally, this means that transactions which get mined as part of a temporary fork may be rolled back once the fork is gotten rid of in favour of a different longer chain. This introduces the concept of *Finality*.

The blocks which form the forked chain and end up getting deleted are called *Uncle Blocks*. The miner clearly put in work to produce that Uncle block, and likely just lost out on the mining reward due to network latencies. As such, the Ethereum network still rewards Uncle block miners with 1.75 ETH for their hard work.

A transaction has "finality" on Ethereum when it's part of a block that can't change.
Because miners work in a decentralized way, two valid blocks can get mined at the same time. This creates a temporary fork. Eventually, one of these chains will become the accepted chain after a subsequent block has been mined and added, making it longer.
But to complicate things further, transactions rejected on the temporary fork may have been included in the accepted chain. This means it could get reversed. So finality refers to the time you should wait before considering a transaction irreversible. For Ethereum, the recommended time is six blocks or just over 1 minute. After six blocks, you can say with relative confidence that the transaction was successful (more than 99.999% chance it will not be reverted now). You can wait longer for even greater assurances.

**Ethash**

<!-- TODO: refactor to reuse Ethash code / https://github.com/LearnWeb3DAO/What-is-Proof-of-Work -->

The Ethereum proof-of-work protocol, [Ethash](https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/mining-algorithms/ethash/) 📖, requires miners to go through an intense race of trial and error. The process goes as follows:
- The miner selects a group of transactions to include in a potential block
- Based on the block they create, the network has rules to choose a slice of data (roughly ~1GB in size) from the current state of the blockchain network. These rules are not particularly relevant, but you can read more about them in the [Ethash documenation](https://cryptobook.nakov.com/cryptographic-hash-functions/proof-of-work-hash-functions) 📖.
- They put the dataset through a hashing function to calculate a `target` value. This `target` is a number, which is inversely proportionate to the mining difficulty. The higher the mining difficulty, the lower the `target`, and vice versa.
- Then, the miner uses brute force to try to find another random number called the `nonce`. 
- Putting the combination of the dataset, target, nonce, and a couple other values through a hashing function should result in a number that is lower than the `target`.
- `HashFunction(dataset, nonce, ...) = a number` 
- The higher the mining difficulty, the lower the `target`, and hence the harder it is to find a `nonce` which satisfies this condition.
- Miners keep using trial-and-error to find a valid value for the `nonce` which satisfies the condition. There is no formula to calculate the `nonce`.

The mining difficulty becomes less or more difficult based on how many miners are on the network, to ensure that a block can be reliably produced roughly every ~15 seconds. If it becomes too easy and there are a lot of miners, blocks will be produced much faster than 15 seconds. Likewise, if it becomes too hard and there are not a lot of miners, blocks will take a long time to be produced. Difficulty is calculated by the network automatically.

There is no way to solve this other than brute force, as currently there does not exist a way to reverse hash functions. Therefore, to know if a certain `nonce`, when appended to the dataset results in a specific hash, the only way possible is to try random values for the `nonce` and check.

Take some time to read this section thoroughly, this is all there is to Proof of Work. It might seem quite anticlimactic, but think about what we started off wanting to prove. We wanted to prove that miners did hard work to produce this block, and it wasn't a piece of cake for them. Since they did hard work, it is in their best interest to not lie. This sort of computation puzzle does exactly that, because finding a valid `nonce` is a computationally hard problem - but verifying it is easy, so other nodes can easily verify that the miner did in fact find a valid `nonce`, which means they did in fact put in the work.

Note that soon, Proof of Work will be phased out in favour of [Proof of Stake](
https://en.wikipedia.org/wiki/Proof_of_stake) 📚 with Ethereum 2.0 at "The Merge". We will talk about this in later tracks, and deprecate the Proof of Work tutorial once it does happen.

## What is Proof of Stake?

To deep dive into how it works, we also suggest the following resources:
- [Dan Boneh: Blockchain Primitives: Cryptography and Consensus](https://youtu.be/V0JdeRzVndI) 🎬 [56:36]

<!-- TODO: https://github.com/ethereumbook/ethereumbook/blob/develop/14consensus.asciidoc -->

# Conclusion

In this lesson, we explain what is a consensus and proof of work is used in Bitcoin and Ethereum. In the next lesson, we will see how to interact with a blockchain using a cryptocurrency wallet.


<!--
### What is Mining?

Mining is the process that helps create new blocks of transactions to be added to the Ethereum blockchain network. It also helps keep the network secure from attacks.

Just like Bitcoin, Ethereum currently uses a Proof-of-Work (PoW) consensus mechanism, which is heavily reliant on mining. Ethereum miners use their time and computation power to process new incoming transactions and produce new blocks.

#### Why do miners exist?
Most people think that mining is simply a way of adding new transactions and creating new coins. But, we mentioned above, that mining also helps keep the network secure. Why is that?

In decentralized systems like Ethereum, we need to ensure that everyone in the world agrees on the ordering of transactions. 

For example, if Alice sent Bob 1 ETH, which he further sent to Charlie, the order of the transactions NEEDS to be as follows

Alice -> Bob 1 ETH<br>
Bob -> Charlie 1 ETH

Any other transaction order will not work, and it is important everyone agrees to this. 

Miners, therefore, are also responsible for validating cryptocurrency transactions on the blockchain network and adding them to the ledger. Importantly, this process prevents the [double-spending](https://en.wikipedia.org/wiki/Double-spending) of digital currency. 

#### Why would anyone become a miner?
Just like physical currencies, when someone executes a transaction, the state of the blockchain must be updated to reflect the debit/credit of each account involved. 

Digital platforms however are prone to attacks, and can be manipulated. Miners therefore not only propose new blocks and validate all transactions, they also need to produce a certificate of legitimacy that all transactions in their proposed block are valid.

Producing this certificate is a computationally hard and complex challenge. This is what all of Proof of Work is about. We will go more in depth about this in a later tutorial, but for now, just know that producing this certificate is quite hard.

But, given a certificate of legitimacy, it is extremely easy for a third party to verify if it is valid or not. 

For the miners hard work in producing these certificates and executing transactions, they are rewarded in the form of new coins. In Ethereum, when a miner successfully mines a block, they receive 2 ETH for their hard work. Ethereum started with a block reward of 5 ETH, but this was lowered to 3 ETH with the Byzantium upgrade in 2017, and then again down to 2 ETH with the Constantinople upgrade in 2019.

Since decentralized systems lack a central authoirity, the mining process is extremely crucial to the safety and validity of the network. Therefore, the mining reward acts as incentive to participate in the transaction validation process.

#### Who can become a miner?
Technically speaking, anyone can become a miner on Ethereum by running the Ethereum node software. However, not everyone can mine Ethereum *profitably*. 

In most cases, miners purchase specialized hardware to mine profitably. It is unlikely for average computers to earn enough mining rewards to cover the associated electrical and hardware costs for mining.

#### Costs of Mining
- Costs of hardware necessary to build and maintain the hardware
- Electrical costs of powering the mining rig
- Potential cost of equipment to support the mining rig (coolers, ventilators, energy monitors, electrical wiring, solar farms, etc.)

#### How are Ethereum transactions mined?
1. A user signs a transaction request from their account
2. The transaction is broadcasted to the Ethereum network through a node
3. Upon hearing of the new transaction, each node in the network adds the transaction to their local mempool (memory pool). The mempool is a list of transactions that nodes have heard about but have not yet been included as part of a block.
4. At some point, a miner groups a lot of transactions into a potential block, in a way that maximizes transaction fees they earn while staying under the block gas limits. Then,
    1. The miner verifies the validity of each transaction. This involves things like checking that no one is trying to transfer ether they don't own, or that the signature is invalid, or the request is malformed, etc.
    2. The miner then executes the transaction on their local copy of the Ethereum Virtual Machine (EVM). It awards the transaction fees for each such request to their own account.
    3. The miner begins the process of creating the Proof-of-Work certificate of legitimacy for the entire block, after all transactions in the block have been verified and executed on their local EVM.
5. Eventually, the miner finishes producing the certificate of legitimacy for the block, which includes the user's transaction. The miner then broadcasts the completed block to the world, which includes the certificate and the new state information for the blockchain.
6. Other nodes hear about the new block. They verify the certificate (which is easy to do), execute all transactions in the block on their local copies of the EVM, and verify that their EVM state matches the one proposed by the miner. 
7. Once other nodes have verified everything proposed by the miner, they add this block to their blockchain node, and accept the new EVM state as "the current state of the blockchain".
8. Each node removes the transactions included within the block from their local mempool.
9. This process repeats.

#### Different methods of Mining
In the technology's early days, when it was quite easy to become a miner, most miners used CPU-based mining running on their desktops and laptops. However, CPU-mining is quite slow and impractical in today's age because it can take months to earn even a tiny amount of mining rewards, while constantly running your CPU at 100% of it's capacity and paying for high electrical costs.

GPU-based mining is the most common approach these days. This approach can maximize the computation power by bringing together multiple GPUs under a single mining rig, putting them all to work in parallel thereby increasing overall capacity and throughput of the one rig.

Application-Specific Integrated Circuit (ASIC) mining is also quite popular. These are hardware chips designed specifically to mine Ethereum. You can purchase ASICs online for most popular blockchain networks. However, they are expensive, and as more and more miners join the network and mining becomes harder, the hardware becomes obsolete quickly. A brand new ASIC would usually only last 1-2 years max. 

Another option that is growing these days is cloud mining, which allows individual miners to leverage the power of dedicated mining facilities, without owning any hardware. 

#### Mining Pools
Most individual miners do not have enough resources to set up huge mining facilities with thousands of GPUs and ASICs. Mining pools allow miners to combine their computational resources in order to increase their chances of mining blocks. If anyone in the mining pool succeeds at mining a block, the reward is distributed proportionately to everyone in the pool based on their computational power they contribute to the pool.

<!--
https://github.com/protofire/blockchain-learning-path

https://learn.bybit.com/blockchain/what-is-hashing-in-blockchain/


It maintains consensus across all the computers in it's network with Proof of Work (PoW). In the near future Ethereum will be moving to a Proof of Stake (PoS) mechanism.
-->

<!--
## Visual Demo of Mining
Watch this video to get a visual demo of the mining process.

[![Visual Demo of Mining](https://i.imgur.com/ceWN69r.png)](https://www.youtube.com/watch?v=zcX7OJ-L8XQ "Visual Demo of Mining")


## Resources
The following are additional recommended, but optional, readings and viewings to learn more about mining:
- [What does it mean to mine Ethereum?](https://docs.ethhub.io/using-ethereum/mining/)
- [Top Ethereum Miners](https://etherscan.io/stat/miner?range=7&blocktype=blocks)
- [Etherscan Mining Calculator](https://etherscan.io/ether-mining-calculator)

Blockchain publique (réseau p2p et ledger accessible par tous)
Orienté transfert de fonds pseudo-anonyme (cryptomonnaie, double spending)
Propriétés
Immutable & intègre
Transparent
Sans intermédiaire
Résilient

Proof of Work (Preuve de Travail) : les valideurs sont en compétition pour résoudre un problème mathématique complexe (à droite). Le valideur gagnant met à jour la chaîne de blocs et la diffuse dans le réseau. La réalisation du « travail » prend du temps et consomme des ressources (puissance de calcul / énergie = difficulté)
https://www.youtube.com/watch?v=3EUAcxhuoU4

Proof of Stake (Preuve de Possession) : le valideur de chaque bloc est défini suivant une règle inhérente à l’algorithme. De manière générale, le paramètre principal est la quantité d’actifs détenus et «bloqués» sur un «compte». Cette méthode est beaucoup plus économe en énergie
https://www.youtube.com/watch?v=psKDXvXdr7k


[![But how does Bitcoin actually work?](https://i.imgur.com/b6FKTLt.png)](https://www.youtube.com/watch?v=bBC-nXj3Ng4)

## Resources
The following are recommended, but optional, readings/viewings to understand more about Proof of Work.
- [Anderson Brownworth Blockchain Mining Demo](https://andersbrownworth.com/blockchain)
- [What is Proof of Work? by Binance Academy](https://www.youtube.com/watch?v=3EUAcxhuoU4)
- [A technical explanation of Proof of Work by Khan Academy](https://www.youtube.com/watch?v=9V1bipPkCTU)
- [51% Attacks](https://en.bitcoin.it/wiki/Majority_attack)
- [Transaction Finality](https://blog.ethereum.org/2016/05/09/on-settlement-finality/)
- [Ethash](https://eth.wiki/en/concepts/ethash/ethash)

https://future.com/state-crypto-builders-guide/


The math problem that these mining computers solve serves no purpose other than to secure Bitcoin's network from attackers wishing to "double spend". Miners are not creating a massive rainbow table or computing the human genome. As more computers are thrown at the problem, and hardware advances, the problem is artificially made more difficult to compensate. 

This seems incredibly wasteful to me as we start to read about the [electrical costs of the Bitcoin network](https://www.bbc.com/news/technology-22153687) and think about the fact that Bitcoin could easily run on just 3 computers to be considered distributed. 

This is why I have high hopes for alternative cryptocurrencies, such as Peercoin, that implement proof-of-stake. This will allow us to enjoy the benefits that a cryptocurrency provides, but be able to run the network securely on fewer devices, and not hammering their CPU/electricity whilst doing so. The network could run on multi-purpose devices, such as people's phones and tablets rather than purpose-built and costly ASICs that will be redundant in a few years.



**Sybil Resistance** measures how a protocol would do against a **Sybil attack**.

A **Sybil attack** is the problem when one user or group pretends to be many different users. Security against this type of attack is essential for a decentralized blockchain to allow miners to be rewarded based on the resources they put in, not just random selection.

Hypothetically, if we were to choose the producer of a block just by random selection instead of Proof of Work, one could execute a Sybil attack quite easily.

Suppose there are 2 miners on the network. Alice and Bob. By random selection, they should be getting roughly half of the mining rewards each. Now, Charlie comes along, but pretends to be 2 different users - Charlie and Darcy. By random selection now, Charlie would end up receiving 1/2 the mining rewards as he is pretending to be 2 different users, whereas Alice and Bob only get 1/4 each instead of 1/3 which they should.

Proof of Work protects against Sybil attacks by making miners put up a large amount of computational power as collateral, therefore having them expend a lot of electrical energy. This is done through the solving of the computation puzzle to prove that the miners are 'putting in the work'. This acts as an economic deterrent to Sybil attacks. 

Since rewards are given out to successful miners, and miners become successful roughly proportional to their share of computational power on the network, it doesn't matter anymore if you're pretending to be 1 user or 2 or 100. You will get the same amount of mining rewards as your computation power stays the same.

-->
