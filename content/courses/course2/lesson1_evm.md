---
title: '🕮 Lesson 1 - EVM'
version: '✔️ v1.0'
slug: "lesson1"
number: 1
menu:
  courses:
    parent: "Course 2"
weight: 21
toc: true
---

<!--
## Table of contents
- [What is the Ethereum Virtual Machine ?](#what-is-the-ethereum-virtual-machine-)
- [How does gas works on Ethereum ?](#how-does-gas-works-on-ethereum-)
- [Conclusion](#conclusion)
-->

# What is the Ethereum Virtual Machine ?

The Ethereum Virtual Machine (EVM) is the heart of the Ethereum protocol.
It is the computation engine that handles Smart Contract deployment and execution.
More precisely, it is a quasi–Turing-complete state machine; "quasi" because all execution processes are limited to a finite number of computational steps by the amount of gas available for any given Smart Contract execution. As such, the halting problem is "solved" (all program executions will halt) and the situation where execution might (accidentally or maliciously) run forever, thus bringing the Ethereum platform to halt in its entirety, is avoided.

For each new transactions, the EVM computes a valid state transition of the Ethereum global state, named the *world state*, as a result of Smart Contract code execution.
Ethereum is then a transaction-based state machine.
It can be thought of as a global decentralized computer containing millions of executable objects, each with its own permanent data store.

The EVM has a stack-based architecture, storing all in-memory values on a stack. 
It has several addressable data components:
- An immutable program code ROM, loaded with the bytecode of the smart contract to be executed
- A volatile memory, with every location explicitly initialized to zero
- A permanent storage that is part of the Ethereum state, also zero-initialized

The EVM runs low-level bytecode. Smart contracts are typically written in a high-level language, such as Solidity, and they must be compiled to bytecode.
Once compiled, they are deployed on the Ethereum platform using a special contract creation transaction, which is identified as such by being sent to the special contract creation address, namely 0x0. 
Each contract is identified by an Ethereum address, which is derived from the contract creation transaction as a function of the originating account and nonce.


The Ethereum network exists solely for the purpose of keeping the single, continuous, uninterrupted, and immutable operation of the state machine that is the Ethereum blockchain. 
It is the environment in which all Ethereum accounts and smart contracts and data live. 
At any given block, Ethereum has one and only one globally accepted 'state'. 
The Ethereum Virtual Machine (EVM) is what defines the rules for computing a new valid state from block to block.

Instead of a distributed ledger, Ethereum can be described as a distributed [state machine](https://en.wikipedia.org/wiki/Finite-state_machine) 📚. 
A state machine is essentially any machine that can change from one state to another in response to certain inputs.

For Ethereum, the state is a bit complex. It is described using a large data structure which contains all the state of the blockchain. 
The specific rules of how state can change from block to block is defined by the EVM.
We recommand reading this presentation to learn more about it [Ethereum EVM: Illustrated](https://takenobu-hs.github.io/downloads/ethereum_evm_illustrated.pdf) 📖

To dig into details, you can also watch this video from Ethereum Engineering Group: [Understanding EVM](https://www.youtube.com/watch?v=RxL_1AfV7N4) 🎬 [01:30:40]

# How does gas works on Ethereum ?

Gas is the fuel of Ethereum. Gas is not ether—it’s a separate virtual currency with its own exchange rate against ether. Ethereum uses gas to control the amount of resources that a transaction can use, since it will be processed on thousands of computers around the world. The open-ended (Turing-complete) computation model requires some form of metering in order to avoid denial-of-service attacks or inadvertently resource-devouring transactions.

Gas is separate from ether in order to protect the system from the volatility that might arise along with rapid changes in the value of ether, and also as a way to manage the important and sensitive ratios between the costs of the various resources that gas pays for (namely, computation, memory, and storage).

Gas, described in more detail in [gas], is an incredibly important consideration in smart contract programming. Gas is a resource constraining the maximum amount of computation that Ethereum will allow a transaction to consume. If the gas limit is exceeded during computation, the following series of events occurs:

An "out of gas" exception is thrown.

The state of the contract prior to execution is restored (reverted).

All ether used to pay for the gas is taken as a transaction fee; it is not refunded.

Because gas is paid by the user who initiates the transaction, users are discouraged from calling functions that have a high gas cost. It is thus in the programmer’s best interest to minimize the gas cost of a contract’s functions. To this end, there are certain practices that are recommended when constructing smart contracts, so as to minimize the gas cost of a function call.

- [EVM Opcodes](https://www.ethervm.io/) 📖
- [EVM in details](https://github.com/ethereumbook/ethereumbook/blob/develop/13evm.asciidoc) 📖

# Conclusion

In this lesson, we provided a brief overview of the EVM. In the next lesson, we will see how it use it by deploying a Smart Contract.

<!--
https://ethereum.org/en/developers/tutorials/yellow-paper-evm/

What Is a Smart Contract?

The term smart contract has been used over the years to describe a wide variety of different things.
In the 1990s, cryptographer Nick Szabo coined the term and defined it as “a set of promises, specified in digital form, including protocols within which the parties perform on the other promises.” 
Since then, the concept of smart contracts has evolved, especially after the introduction of decentralized blockchain platforms with the invention of Bitcoin in 2009.

In the context of Ethereum, the term is actually a bit of a misnomer, given that Ethereum smart contracts are neither smart nor legal contracts, but the term has stuck.
In this book, we use the term “smart contracts” to refer to immutable computer programs that run deterministically in the context of an Ethereum Virtual Machine as part of the Ethereum network protocol—i.e., on the decentralized Ethereum world computer.

Let’s unpack that definition:

Computer programs
Smart contracts are simply computer programs. The word “contract” has no legal meaning in this context.

Immutable
Once deployed, the code of a smart contract cannot change. Unlike with traditional software, the only way to modify a smart contract is to deploy a new instance.

Deterministic
The outcome of the execution of a smart contract is the same for everyone who runs it, given the context of the transaction that initiated its execution and the state of the Ethereum blockchain at the moment of execution.

EVM context
Smart contracts operate with a very limited execution context. They can access their own state, the context of the transaction that called them, and some information about the most recent blocks.

Decentralized world computer
The EVM runs as a local instance on every Ethereum node, but because all instances of the EVM operate on the same initial state and produce the same final state, the system as a whole operates as a single "world computer."
-->



<!--

!!WARNING: LearnWeb3 took this content https://github.com/takenobu-hs/ethereum-evm-illustrated under BSD Licence...

## Prerequisites
Some basic understanding of [bytes](https://en.wikipedia.org/wiki/Byte) 📚, [memory](https://en.wikipedia.org/wiki/Computer_memory) 📚, and the [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) 📚 is required to understand the EVM. 

---

## Ethereum as a State Machine
Blockchains like Bitcoin are often described as 'distributed ledgers' which enable the existence of a decentralized currency using fundamental tools of cryptography.

A cryptocurrency can behave like a 'normal' currency because of the rules which govern what one can and cannot do to modify this ledger. For example, a Bitcoin address cannot spend more Bitcoin than it has previously received. These rules underpin all transactions that take place on Bitcoin, and similarly other blockchains.

While Ethereum also has its native cryptocurrency, the Ether, it also enables a much more powerful function that we have seen - Smart Contracts. For this more complex feature, we need a more powerful analogy than just 'distributed ledger'.

![](/wp-content/uploads/2022/07/evm.png)

## Ethereum State Transition
On a high level, the EVM behaves similar to a mathematical state transition function. Given the current state, and a new set of valid transactions, it produces a new state. The output is deterministic, which means that for the same input, it will always produce the same output.

```
Y(S, T) = S'
```

Given the old valid state `S`, and a new set of valid transactions `T`, the state transition function `Y` produces the new valid state `S'`.

The state in Ethereum is stored as a really large data structure called a [Merkle Patricia Trie](https://eth.wiki/en/fundamentals/patricia-tree) 📚. You do not need to understand exactly how it is structured, but if you want to, you can read the given link.

## EVM Layer
The EVM lives as a layer in the software stack of Ethereum.

![](/wp-content/uploads/2022/07/layer.png)

Ethereum nodes contain implementations of the EVM, and the EVM can then execute EVM code on it. EVM code is compiled smart contract bytecode that can be executed.

## EVM Code Generation

![](/wp-content/uploads/2022/07/code1.png)

![](/wp-content/uploads/2022/07/code2.png)

## EVM Instructions (OPCODES)
The EVM itself behaves as a stack machine with a maximum depth of 1024 items on the stack. Each item in the stack is a 256-bit (32 bytes) word.

During execution, the EVM maintains a transient **memory**, as a 32 byte addressed byte array, which does not persist between transactions. The transient memory is cleared when a new transaction is being executed.

Smart contracts, however, do maintain their own state in the blockchain. This state is also modeled as a Merkle Patricia Trie. This is commonly refered to as the EVM **storage** during transaction execution.

The EVM has logic present that allows it to execute [EVM Opcodes](https://ethereum.org/en/developers/docs/evm/opcodes/) 📖, which perform standard operations on the stack like `XOR`, `ADD`, `AND`, `SUB`, `MUL` etc. The EVM also implements a number of blockchain-specific stack operations, such as `BALANCE` and `BLOCKHASH`. 

When a smart contract is compiled into bytecode (represented in hexadecimal), it compiles down to EVM opcodes. These opcodes are what get executed on the EVM.

![](/wp-content/uploads/2022/07/gas.png)

# Ethereum Storage and Execution

We have been writing smart contracts over the last few tracks, and briefly mentioned that Ethereum smart contracts run within this thing called the Ethereum Virtual Machine (EVM). 

We also briefly mentioned in passing that EVM is capable of running certain OPCODES, and deals with data present either in the stack or heap. If you have a formal computer science background, that may have made sense to you, but for everyone else, what does this actually mean?

In this level, we will dig deeper into the EVM execution engine and how data is stored, manipulated, and ran throughout the course of a transaction.

Let's recap a few things we taught in earlier tracks before moving ahead.

Recall that Ethereum works as a transaction-based state machine. Starting at some state `s1`, a transaction manipulates certain data to shift the world state to some state `s2`. 

![](/wp-content/uploads/2022/07/store1.png)

To group things together, transactions are packed together in blocks. Generally speaking, each block changes the world state from state `s1` to `s2`, and the conversion is calculated based on the state changes made by every transaction within the block.

When we think of these state changes, Ethereum can be thought of as a state chain. 

![](/wp-content/uploads/2022/07/store2.png)

But, what is this world state?

## World State

The World State in Ethereum is a mapping between addresses and account states. Each address on Ethereum has it's own state, this could be a user account (EOA) or a smart contract.

![](/wp-content/uploads/2022/07/world_state.png)

Each block essentially manipulates multiple account states, thereby manipulating the overall world state of Ethereum.

## Account State

Alright, so the world state is comprised of various account states. What is an account state?

![](/wp-content/uploads/2022/07/account1.png)

The account state contains a few common things, like the nonce and the balance (in ETH). Additionally, smart contracts also contain a storage hash and a code hash. The two hashes act as references to a separate state tree, which store state variables and the bytecode of the smart contract respectively.

![](/wp-content/uploads/2022/07/account2.png)

Recall that there are two types of accounts in Ethereum. Externally owned accounts (e.g. Coinbase Wallets, Metamask Wallets, etc.) and Smart Contract Accounts. 

EOA's are controlled by private keys, and do not have any EVM code. Contract accounts on the other hand contain EVM code and are controlled by the code itself, and do not have private keys associated with them.

## Types of Transactions

There are two types of transactions on Ethereum mainly. Those which create new contracts, and those which just send messages.

Sending messages here implies making a transaction that either transfers ETH, or calls functions on a smart contract. They are just different types of messages that can be sent by an EOA. 

![](/wp-content/uploads/2022/07/tx1.png)

When a contract creation transaction is made, a new account is added to the world state. The transaction carries with it the bytecode of the contract to be created and the initializing code (i.e. constructor calls). 

![](/wp-content/uploads/2022/07/tx2.png)

On the other hand, for all other transactions, i.e. message calls, the account state of an existing account is modified following the transaction. 

![](/wp-content/uploads/2022/07/tx3.png)

## Messages

Messages in Ethereum are passed between two accounts. They consist primarily of two things - `data` and `value`.

`data` is a set of bytes, that indicate the type of transaction that needs to take place (transfer ETH, mint an NFT, vote in a DAO, etc) and `value` is the Ether value that is transfered along with the transaction.

Transactions made by EOA's send a mesasge to the recipient account. Contract accounts can also send messages to accounts through the EVM code.

![](/wp-content/uploads/2022/07/message.png)

## The Ethereum Virtual Machine

Let's talk about the EVM now.

Just like how Java ships with the JVM, and Javascript and Python also have their own runtime environments, Ethereum Smart Contracts' runtime environment is the EVM.

The EVM has a stack-based architecture. A massive simplification of modern CPU architectures. 

![](/wp-content/uploads/2022/07/evm1.png)

The smart contract code, or EVM code, lives in an immutable storage location within the EVM. 

For runtime calculations, i.e. local variables and such, the EVM has access to two storage locations - the stack and the memory (i.e. heap). 

The EVM also has access to the persistent world state i.e. account state to read and write to e.g. changing state variables within a contract.

![](/wp-content/uploads/2022/07/evm2.png)

The stack is a simple stack that supports PUSH/POP operations, and each stack element is 256 bits (32 bytes) and has a max depth of 1024 elements. 

The memory (or heap) is a linear memory structure, and can store dynamic sized data i.e. strings and dynamic arrays during runtime.

The account storage is part of the world state, and is the persistent storage where any changes made will continue to stay even after the transaction is done executing.

## Stack

![](/wp-content/uploads/2022/07/stack1.png)


Stack is a Last-in First-out data structure used to hold temporary values. Think of it like a stack of plates. The plate you stack on the top, will be the first one that gets removed. Stacks are used for fast operations on fixed size data across computer science, and EVM is no different.

![](/wp-content/uploads/2022/07/stack2.png)

All operations from the EVM are run on the stack. The EVM stack supports doing operations with the top 16 elements of the stack, and no deeper. The other 1008 stack elements can be used to store operational data such as OPCODES to run and such.

> Fun fact: In Solidity, you will get a compilation error if you write a function that has more than 16 local variables declared in it. Because the stack cannot work with data beyond the top 16 elements, having more than 16 variables means that operations on some of them will not be possible within the EVM.

## Memory

The EVM memory is a linearly addressed memory, that can be addressed at the byte level. You can store either 8 bits (1 byte) or 256 bits (32 bytes) at a time in memory, but can only read from memory in chunks of 256 bits (32 bytes). Memory is used to store dymanic values in solidity like variable length arrays, strings etc.

Initially, all memory locations have the value of zero. During transaction execution however, the values can be updated and modified.

![](/wp-content/uploads/2022/07/memory.png)

## Account Storage

The persistent account storage is a mapping from 256-bit keys to 256-bit values. All locations in persistent storage are also initially defined as zero (thereby the property of integers in Solidity having initial value of 0, booleans being false, strings being empty, etc.)

![](/wp-content/uploads/2022/07/account_storage.png)

The keys within these mappings are often referred to as slots. Each state variable in a smart contract is assigned a slot within the account storage, in the order they were defined. 

So, for a contract that looks like this:

```solidity
contract Sample {
    uint256 first;
    uint256 second;
    address third;
}
```

`first` will have Slot #0, `second` will have Slot #1, `third` will have Slot #2.

This concept of slots will turn out to be very important when we start learning about `DELEGATECALL` (`.delegatecall()`) in Solidity later in this track.

## Execution Model

Let's take a look at the high level execution model within the EVM. This diagram may seem a bit confusing at first, but read through this section and you will understand what is going on.

![](/wp-content/uploads/2022/07/exec_model.png)

The EVM contains a Program Counter (PC). The PC, also sometimes called the instruction pointer, is a value that points to where a computer is as part of code execution.

If you think of the EVM code as a list of instructions to run, the PC will point to the instruction that needs to be run. Initially, the PC points at zero, i.e. the first instruction. When that is run, the PC gets updated to point to the next instruction, and so on.

The instruction being pointed to by the PC executes certain operations with the given data. These operations happen on the stack, and the stack can read/write values from both the memory and the account storage.

I've used this analogy before and I will use it again - think of memory like your RAM and the account storage like your hard disk. The stack (instruction processor) can read/write data from the RAM and the Hard Disk, but only changes made to the Hard Disk data will continue to persist after the code is finished running, whereas the memory will be cleared.

So far, this is quite similar to an actual CPU architecture. For those of you with formal Computer Science backgrounds, if you ever took a hardware or computer processors class in college, you must have been taught something similar about how actual processors work. The EVM behaves very similarly.

But, there is one special thing here. The EVM also stores a  counter for how much gas is available. Every operation executed by the EVM costs a certain amount of gas, and the EVM will keep executing operations as long as there is enough gas to run the operation. If the gas available ever goes below what is necessary to keep running, the entire execution will stop and cause a failed transaction. As we taught before, this is done to avoid having infinite loops within the EVM which could bring the Ethereum network to a halt. Therefore, for complex transactions, you need to pay higher gas to cover the execution costs.

## Gas during Execution

![](/wp-content/uploads/2022/07/gas_exec.png)

Highlighting the above points, you can see that the EOA passes a certain amount of gas to the contract account when it sends a message. The EVM code runs and uses up some of the gas. If any gas is left over, it is refunded back to the EOA. 

However, if the EVM code runs out of gas i.e. not enough gas was supplied, the execution would fail and the transaction would fail. No gas is refunded in this case as the EVM still had to execute all those operations to figure out that the gas supplied was too less, so the gas is charged for the work that was done.
-->



<!--
It might also be helpful to familiarize yourself with some cryptography like [hash functions](https://en.wikipedia.org/wiki/Cryptographic_hash_function) 📚.

A simple state machine is a coin-operated turnstile, commonly found in subways or train stations, to prevent people from entering unless they pay using a coin or have a ticket.
![](https://i.imgur.com/66Mee9k.png)

The initial state for a turnstile is locked. In the locked state, if you keep pushing it, it remains locked. If you insert a coin, it moves to the unlocked state. If you keep inserting coins, it remains in the unlocked state. Once you push in the unlocked state (and someone passes through), it becomes locked again.


## EVM Implementations
All implementations of the EVM must adhere to the specification described in the [Ethereum Yellowpaper](https://ethereum.github.io/yellowpaper/paper.pdf). Over Ethereum's history, the EVM has undergone multiple revisions, and there now exist multiple implementations of the EVM in various programming languages.

All Ethereum clients include an EVM implementation. In addition to those, there are multiple standalone implementations as well.

### Ethereum Clients (with EVM)
- [Geth](https://geth.ethereum.org/) | Programming Language = Go
- [OpenEthereum](https://github.com/openethereum/openethereum) | Programming Language = Rust
- [Nethermind](https://nethermind.io/) | Programming Language = C# (.NET)
- [Besu](https://consensys.net/quorum/developers/) | Programming Language = Java
- [Erigon](https://github.com/ledgerwatch/erigon) | Programming Language = Go

### Standalone EVM Implementations
- [Py-EVM](https://github.com/ethereum/py-evm) | Programming Language = Python
- [evmone](https://github.com/ethereum/evmone) | Programming Language = C++
- [ethereumjs-evm](https://github.com/ethereumjs/ethereumjs-monorepo) | Programming Language = Javascript
- [Enclave EVM](https://github.com/microsoft/eevm) | Programming Language = C++

## Extra Resources
The following are recommended, but optional, readings/viewings for learning more about the EVM.
- [Ethereum EVM: Illustrated](https://takenobu-hs.github.io/downloads/ethereum_evm_illustrated.pdf) 📖
- [EVM Opcodes](https://www.ethervm.io/) 📖
- [Understanding EVM](https://www.youtube.com/watch?v=RxL_1AfV7N4) 🎬

- [Merkle Patricia Trie](https://www.youtube.com/watch?v=OxofT39TJgg) 🎬

-->
