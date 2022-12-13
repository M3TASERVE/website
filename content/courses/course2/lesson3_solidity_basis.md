---
title: '🕮 Lesson 3 - Solidity basis'
version: '✔️ v1.0'
slug: "lesson3"
number: 3
menu:
  courses:
    parent: "Course 2"
weight: 23
toc: true
---

<!--
## Table of contents
- [What is Solidity ?](#what-is-solidity-)
- [Conclusion](#conclusion)
-->

# What is Solidity ?

- Solidity is an object-oriented, high-level language for implementing smart contracts. It is designed to target [Ethereum Virtual Machine(EVM)](https://coinmarketcap.com/alexandria/glossary/ethereum-virtual-machine-evm)
- It is a compiled language. The source code with a .sol extension can be compiled to hex-serialized binary using the [`solc`](https://www.npmjs.com/package/solc) compiler.
- It uses an ABI to define how data structures and functions are accessed in machine code (it is specified as a JSON array of function descriptions and events)
- It is [statically typed](https://solidity-fr.readthedocs.io/fr/latest/types.html): bool, int256/uint256, fixed/ufixed, address, arrays, map
- It supports inheritance, libraries and complex user-defined types and scopes using [keywords](https://solidity-fr.readthedocs.io/fr/latest/control-structures.html): struct, inheritance, modifier, private, public.
- It implements [primitive functions](https://solidity-fr.readthedocs.io/fr/latest/units-and-global-variables.html) like crypto or time and it uses a logging mechanism based on events


Example of Faucet.sol
```
// SPDX-License-Identifier: CC-BY-SA-4.0

// Version of Solidity compiler this program was written for
pragma solidity 0.6.4;

// Our first contract is a faucet!
contract Faucet {
    // Accept any incoming amount
    receive() external payable {}

    // Give out ether to anyone who asks
    function withdraw(uint withdraw_amount) public {
        // Limit withdrawal amount
        require(withdraw_amount <= 100000000000000000);

        // Send the amount to the address that requested it
        msg.sender.transfer(withdraw_amount);
    }
}
```
Note that Solidity offers a compiler directive known as a version pragma that instructs the compiler that the program expects a specific compiler (and language) version. Let’s look at an example: `pragma solidity ^0.6.0;`

```
$ solc --optimize --bin Faucet.sol
======= Faucet.sol:Faucet =======
Binary:
608060405234801561001057600080fd5b5060cc8061001f6000396000f3fe6080604052600436106
01f5760003560e01c80632e1a7d4d14602a576025565b36602557005b600080fd5b34801560355760
0080fd5b50605060048036036020811015604a57600080fd5b50356052565b005b67016345785d8a0
000811115606657600080fd5b604051339082156108fc029083906000818181858888f19350505050
1580156092573d6000803e3d6000fd5b505056fea26469706673582212205cf23994b22f7ba19eee5
6c77b5fb127bceec1276b6f76ca71b5f95330ce598564736f6c63430006040033
```
```
$ solc --abi Faucet.sol
======= Faucet.sol:Faucet =======
Contract JSON ABI
[{"inputs":[{"internalType":"uint256","name":"withdraw_amount","type":"uint256"}], \
"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}, \
{"stateMutability":"payable","type":"receive"}]
```

To learn Solidity, we recommend to start with this [video guide](https://www.youtube.com/watch?v=EhPeHeoKF88) 🎬 [01:39:10].

You can also try some [examples](https://solidity-by-example.org) 📖 and this interactive tutorial named [Cryptozombies](https://cryptozombies.io/) 📖.

And read the full [documentation](https://docs.soliditylang.org) 📖 and have a close look to the [style guide](https://docs.soliditylang.org/en/v0.8.15/style-guide.html) 📖.


# Conclusion

In this lesson, we learn the solidity basis to develop Smart Contract. Next lesson is an hands-on to apply those concepts.



<!--

https://www.tutorialspoint.com/solidity/solidity_interfaces.htm

https://github.com/ethereumbook/ethereumbook/blob/develop/07smart-contracts-solidity.asciidoc

ethersjs sandbox

https://trustchain.medium.com/abi-functions-explained-in-solidity-bd93cf88bdf2

-->

<!--

; this is not to be confused with an API, which defines this access in high-level, often human-readable formats as source code. The ABI is thus the primary way of encoding and decoding data into and out of machine code. In Ethereum, the ABI is used to encode contract calls for the EVM and to read data out of transactions. The purpose of an ABI is to define the functions in the contract that can be invoked and describe how each function will accept arguments and return its result. A contract’s ABI is specified as a JSON array of function descriptions and events. A function description is a JSON object with fields type, name, inputs, outputs, constant, and payable. An event description object has fields type, name, inputs, and anonymous.

## Building in Solidity

```go
// Define the compiler version you would be using
pragma solidity ^0.8.10;

// Start by creating a contract named HelloWorld
contract HelloWorld {

}
```


Data Types
First, let’s look at some of the basic data types offered in Solidity:

Boolean (bool)
Boolean value, true or false, with logical operators ! (not), && (and), || (or), == (equal), and != (not equal).

Integer (int, uint)
Signed (int) and unsigned (uint) integers, declared in increments of 8 bits from int8 to uint256. Without a size suffix, 256-bit quantities are used, to match the word size of the EVM.

Fixed point (fixed, ufixed)
Fixed-point numbers, declared with (u)fixedMxN where M is the size in bits (increments of 8 up to 256) and N is the number of decimals after the point (up to 18); e.g., ufixed32x2.

Address
A 20-byte Ethereum address. The address object has many helpful member functions, the main ones being balance (returns the account balance) and transfer (transfers ether to the account).

Byte array (fixed)
Fixed-size arrays of bytes, declared with bytes1 up to bytes32.

Byte array (dynamic)
Variable-sized arrays of bytes, declared with bytes or string.

Enum
User-defined type for enumerating discrete values: enum NAME {LABEL1, LABEL 2, ...}.

Arrays
An array of any type, either fixed or dynamic: uint32[][5] is a fixed-size array of five dynamic arrays of unsigned integers.

Struct
User-defined data containers for grouping variables: struct NAME {TYPE1 VARIABLE1; TYPE2 VARIABLE2; ...}.

Mapping
Hash lookup tables for key => value pairs: mapping(KEY_TYPE => VALUE_TYPE) NAME.

In addition to these data types, Solidity also offers a variety of value literals that can be used to calculate different units:

Time units
The units seconds, minutes, hours, and days can be used as suffixes, converting to multiples of the base unit seconds.

Ether units
The units wei, finney, szabo, and ether can be used as suffixes, converting to multiples of the base unit wei.

In our Faucet contract example, we used a uint (which is an alias for uint256) for the withdraw_amount variable. We also indirectly used an address variable, which we set with msg.sender. We will use more of these data types in our examples in the rest of this chapter.

Let’s use one of the unit multipliers to improve the readability of our example contract. In the withdraw function we limit the maximum withdrawal, expressing the limit in wei, the base unit of ether:

require(withdraw_amount <= 100000000000000000);
That’s not very easy to read. We can improve our code by using the unit multiplier ether, to express the value in ether instead of wei:

require(withdraw_amount <= 0.1 ether);
Predefined Global Variables and Functions
When a contract is executed in the EVM, it has access to a small set of global objects. These include the block, msg, and tx objects. In addition, Solidity exposes a number of EVM opcodes as predefined functions. In this section we will examine the variables and functions you can access from within a smart contract in Solidity.


### <u>Variables and types</u>

There are 3 types of variables in Solidity

- Local
  - Declared inside a function and are not stored on blockchain
- State
  - Declared outside a function to maintain the state of the smart contract
  - Stored on the blockchain
- Global
  - Provide information about the blockchain. They are injected by the Ethereum Virtual Machine during runtime.
  - Includes things like transaction sender, block timestamp, block hash, etc.
  - [Examples of global variables](https://docs.soliditylang.org/en/v0.8.9/units-and-global-variables.html)

The scope of variables is defined by where they are declared, not their value. Setting a local variable's value to a global variable does not make it a global variable, as it is still only accessible within it's scope.

```go
// Define the compiler version you would be using
pragma solidity ^0.8.10;

// Start by creating a contract named Variables
contract Variables {
    /*
        ******** State variables **********
    */
    /*
    uint stands for unsigned integer, meaning non negative integers
    different sizes are available. Eg
        - uint8   ranges from 0 to 2 ** 8 - 1
        - uint256 ranges from 0 to 2 ** 256 - 1
    `public` means that the variable can be accessed internally
     by the contract and can also be read by the external world
    */
    uint8 public u8 = 10;
    uint public u256 = 600;
    uint public u = 1230; // uint is an alias for uint256

    /*
    Negative numbers are allowed for int types. Eg
    - int256 ranges from -2 ** 255 to 2 ** 255 - 1
    */
    int public i = -123; // int is same as int256

    // address stands for an ethereum address
    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

    // bool stands for boolean
    bool public defaultBoo1 = false;

    // Default values
    // Unassigned variables have a default value in Solidity
    bool public defaultBoo2; // false
    uint public defaultUint; // 0
    int public defaultInt; // 0
    address public defaultAddr; // 0x0000000000000000000000000000000000000000

    function doSomething() public {
        /*
        ******** Local variable **********
        */
        uint ui = 456;

        /*
        ******** Global variables **********
        */

        /*
            block.timestamp tells us whats the timestamp for the current block
            msg.sender tells us which address called the doSomething function
        */

        uint timestamp = block.timestamp; // Current block timestamp
        address sender = msg.sender; // address of the caller
    }
}
```

### <u>Functions, Loops and If/Else</u>

```go

// Define the compiler version you would be using
pragma solidity ^0.8.10;

// Start by creating a contract named Conditions
contract Conditions {
    // State variable to store a number
    uint public num;

    /*
        Name of the function is set.
        It takes in a uint and sets the global variable num.
        It is a declared as a public function meaning
        it can be called from within the contract and also externally.
    */
    function set(uint _num) public {
        num = _num;
    }

    /*
        Name of the function is get.
        It returns the value of num.
        It is declared as a view function meaning
        that the function doesnt change the state of any variable.
        View functions in solidity do not require gas.
    */
    function get() public view returns (uint) {
        return num;
    }

    /*
        Name of the function is foo.
        It takes in  uint and returns an uint.
        It compares the value of x using if/else
    */
    function foo(uint x) public returns (uint) {
        if (x < 10) {
            return 0;
        } else if (x < 20) {
            return 1;
        } else {
            return 2;
        }
    }

    /*
        Name of the function is loop.
        It runs a loop till 10
    */
    function loop() public {
        // for loop
        for (uint i = 0; i < 10; i++) {
            if (i == 3) {
                // Skip to next iteration with continue
                continue;
            }
            if (i == 5) {
                // Exit loop with break
                break;
            }
        }
    }


}

```

### <u>Arrays, Strings</u>

Array can have a compile-time fixed size or a dynamic size.

```go

pragma solidity ^0.8.10;

contract Array {

    // Declare a string variable which is public
    string public greet = "Hello World!";
    // Several ways to initialize an array
    // Arrays initialized here are considered state variables that get stored on the blockchain
    // These are called storage variables
    uint[] public arr;
    uint[] public arr2 = [1, 2, 3];
    // Fixed sized array, all elements initialize to 0
    uint[10] public myFixedSizeArr;
    /*
        Name of the function is get
        It gets the value of element stored in an array's index
    */
    function get(uint i) public view returns (uint) {
        return arr[i];
    }

    /*
     Solidity can return the entire array.
     This function gets called with and returns a uint[] memory.
     memory - the value is stored only in memory, and not on the blockchain
              it only exists during the time the function is being executed

     Memory variables and Storage variables can be thought of as similar to RAM vs Hard Disk.
     Memory variables exist temporarily, during function execution, whereas Storage variables
     are persistent across function calls for the lifetime of the contract.
     Here the array is only needed for the duration while the function executes and thus is declared as a memory variable
    */
    function getArr(uint[] memory _arr) public view returns (uint[] memory) {
        return _arr;
    }

     /*
        This function returns string memory.
        The reason memory keyword is added is because string internally works as an array
        Here the string is only needed while the function executes.
    */
    function foo() public returns (string memory) {
        return "C";
    }

    function doStuff(uint i) public {
        // Append to array
        // This will increase the array length by 1.
        arr.push(i);
        // Remove last element from array
        // This will decrease the array length by 1
        arr.pop();
        // get the length of the array
        uint length = arr.length;
        // Delete does not change the array length.
        // It resets the value at index to it's default value,
        // in this case it resets the value at index 1 in arr2 to 0
        uint index = 1;
        delete arr2[index];
        // create array in memory, only fixed size can be created
        uint[] memory a = new uint[](5);
        // create string in memory
        string memory hi = "hi";
    }

 }
```
-->

<!-- 

We looked at some basic Solidity syntax. We covered variables, data types, functions, loops, conditional flows, and arrays. 

However, Solidity has a few more things, things which will be important through the coding assignments of the Sophomore track and beyond. In this tutorial, we will cover some more important Solidity topics.

# Mappings
Mappings in Solidity act like hashmaps or dictionaries in other programming languages. They are used to store the data in key-value pairs. 

Mappings are created with the syntax `mapping (keyType => valueType)`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Mapping {
    // Mapping from address to uint
    mapping(address => uint) public myMap;
    
    function get(address _addr) public view returns (uint) {
        // Mapping always returns a value.
        // If the value was never set, it will return the default value.
        // The default value for uint is 0
        return myMap[_addr];
    }

    function set(address _addr, uint _i) public {
        // Update the value at this address
        myMap[_addr] = _i;
    }

    function remove(address _addr) public {
        // Reset the value to the default value.
        delete myMap[_addr];
    }
}
```

We can also create nested mappings, where the `key` points to a second nested mapping. To do this, we set the `valueType` to a mapping itself.

```solidity
contract NestedMappings {
    // Mapping from address => (mapping from uint to bool)
    mapping(address => mapping(uint => bool)) public nestedMap;
    
    function get(address _addr1, uint _i) public view returns (bool) {
        // You can get values from a nested mapping
        // even when it is not initialized
        // The default value for a bool type is false
        return nestedMap[_addr1][_i];
    }

    function set(
        address _addr1,
        uint _i,
        bool _boo
    ) public {
        nestedMap[_addr1][_i] = _boo;
    }

    function remove(address _addr1, uint _i) public {
        delete nestedMap[_addr1][_i];
    }
}
```

## Enums
The word `Enum` stands for `Enumerable`. They are user defined types that contain human readable names for a set of constants, called members. They are commonly used to restrict a variable to only have one of a few predefined values. Since they are just an abstraction for human readable constants, in actuality, they are internally represented as `uint`s.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Enum {
    // Enum representing different possible shipping states
    enum Status {
        Pending,
        Shipped,
        Accepted,
        Rejected,
        Canceled
    }
    
    // Declare a variable of the type Status
    // This can only contain one of the predefined values
    Status public status;
    
    // Since enums are internally represented by uints
    // This function will always return a uint
    // Pending = 0
    // Shipped = 1
    // Accepted = 2
    // Rejected = 3
    // Canceled = 4
    // Value higher than 4 cannot be returned
    function get() public view returns (Status) {
        return status;
    }
    
    // Pass a uint for input to update the value
    function set(Status _status) public {
        status = _status;
    }
    
    // Update value to a specific enum members
    function cancel() public {
        status = Status.Canceled; // Will set status = 4
    }
}
```

## Structs
The concept of structs exists in many high level programming languages. They are used to define your own data types which group together related data. 

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract TodoList {
    // Declare a struct which groups together two data types
    struct TodoItem {
        string text;
        bool completed;
    }
    
    // Create an array of TodoItem structs
    TodoItem[] public todos;
    
    function createTodo(string memory _text) public {
        // There are multiple ways to initialize structs
        
        // Method 1 - Call it like a function
        todos.push(TodoItem(_text, false));
        
        // Method 2 - Explicitly set its keys
        todos.push(TodoItem({ text: _text, completed: false }));
        
        // Method 3 - Initialize an empty struct, then set individual properties
        TodoItem memory todo;
        todo.text = _text;
        todo.completed = false;
        todos.push(todo);
    }
    
    // Update a struct value
    function update(uint _index, string memory _text) public {
        todos[_index].text = _text;
    }
    
    // Update completed
    function toggleCompleted(uint _index) public {
        todos[_index].completed = !todos[_index].completed;
    }
}
```

## View and Pure Functions
You might have noticed that some of the functions we have been writing specify one of either a `view` or `pure` keyword in the function header. These are special keywords which indicate specific behavior for the function.

Getter functions (those which return values) can be declared either `view` or `pure`. 
- `View`: Functions which do not change any state values
- `Pure`: Functions which do not change any state values, but also don't read any state values

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract ViewAndPure {
    // Declare a state variable
    uint public x = 1;
    
    // Promise not to modify the state (but can read state)
    function addToX(uint y) public view returns (uint) {
        return x + y;
    }
    
    // Promise not to modify or read from state
    function add(uint i, uint j) public pure returns (uint) {
        return i + j;
    }
}
```

## Function Modifiers
Modifiers are code that can be run before and/or after a function call. They are commonly used for restricting access to certain functions, validating input parameters, protecting against certain types of attacks, etc.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Modifiers {
    address public owner;
    
    constructor() {
        // Set the contract deployer as the owner of the contract
        owner = msg.sender;
    }
    
    // Create a modifier that only allows a function to be called by the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        
        // Underscore is a special character used inside modifiers
        // Which tells Solidity to execute the function the modifier is used on
        // at this point
        // Therefore, this modifier will first perform the above check
        // Then run the rest of the code
        _;
    }
    
    // Create a function and apply the onlyOwner modifier on it
    function changeOwner(address _newOwner) public onlyOwner {
        // We will only reach this point if the modifier succeeds with its checks
        // So the caller of this transaction must be the current owner
        owner = _newOwner;
    }
}
```

## Events
Events allow contracts to perform logging on the Ethereum blockchain. Logs for a given contract can be parsed later to perform updates on the frontend interface, for example. They are commonly used to allow frontend interfaces to listen for specific events and update the user interface, or used as a cheap form of storage.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Events {
    // Declare an event which logs an address and a string
    event TestCalled(address sender, string message);
    
    function test() public {
        // Log an event 
        emit TestCalled(msg.sender, "Someone called test()!");
    }
}
```

## Constructors
A `constructor` is an optional function that is executed when the contract is first deployed. You can also pass arguments to constructors.

P.S. - If you remember, we actually used constructors in the Freshman track Cryptocurrency and NFT tutorials!

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract X {
    string public name;
    
    // You will need to provide a string argument when deploying the contract
    constructor(string memory _name) {
        // This will be set immediately when the contract is deployed
        name = _name;
    }
}
```

## Inheritance
Inheritance is the procedure by which one contract can inherit the attributes and methods of another contract. Solidity supports multiple inheritance. Contracts can inherit other contract by using the `is` keyword. 

Note: We actually also did Inheritance in the Freshman Track Cryptocurrency and NFT tutorials - where we inherited from the `ERC20` and `ERC721` contracts respectively.

A parent contract which has a function that can be overridden by a child contract must be declared as a `virtual` function.

A child contract that is going to override a parent function must use the `override` keyword.

The order of inheritance matters if parent contracts share methods or attributes by the same name.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/* Graph of inheritance
    A
   / \
  B   C
 /   /
D   E

*/

contract A {
    // Declare a virtual function foo() which can be overridden by children
    function foo() public pure virtual returns (string memory) {
        return "A";
    }
}

contract B is A {
    // Override A.foo();
    // But also allow this function to be overridden by further children
    // So we specify both keywords - virtual and override
    function foo() public pure virtual override returns (string memory) {
        return "B";
    }
}

contract C is A {
    // Similar to contract B above
    function foo() public pure virtual override returns (string memory) {
        return "C";
    }
}

// When inheriting from multiple contracts, if a function is defined multiple times, the right-most parent contract's function is used.
contract D is B, C {
    // D.foo() returns "C"
    // since C is the right-most parent with function foo();
    // override (B,C) means we want to override a method that exists in two parents
    function foo() public pure override (B, C) returns (string memory) {
        // super is a special keyword that is used to call functions
        // in the parent contract
        return super.foo();
    }
}

contract E is C, B {
    // E.foo() returns "B"
    // since B is the right-most parent with function foo();
    function foo() public pure override (C, B) returns (string memory) {
        return super.foo();
    }
}

```

## Transferring ETH
There are three ways to transfer ETH from a contract to some other address. However, two of them are no longer recommended methods by Solidity in latest versions, therefore we shall skip those.

Currently, the recommended way to transfer ETH from a contract is to use the `call` function. The `call` function returns a `bool` indicating success or failure of the transfer.

### How to receive Ether in a regular Ethereum account address
If transferring ETH to a regular account (like a Metamask address), you do not need to do anything special as all such accounts can automatically accept ETH transfers.

### How to receive Ether in a contract
However, if you are writing a contract that you want to be able to receive ETH transfers directly, you must have at least one of the functions below
- `receive() external payable`
- `fallback() external payable`

`receive()` is called if `msg.data` is an empty value, and `fallback()` is used otherwise.

> `msg.data` is a way to specify arbitrary data along with a transaction. You will usually not be using it manually.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract ReceiveEther {
    /*
    Which function is called, fallback() or receive()?

           send Ether
               |
         msg.data is empty?
              / \
            yes  no
            /     \
receive() exists?  fallback()
         /   \
        yes   no
        /      \
    receive()   fallback()
    */

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract SendEther {
    function sendEth(address payable _to) public payable {
        // Just forward the ETH received in this payable function
        // to the given address
        uint amountToSend = msg.value;
        // call returns a bool value specifying success or failure
        (bool success, bytes memory data) = _to.call{value: msg.value}("");
        require(success == true, "Failed to send ETH");
    }
}
```

## Calling External Contracts
Contracts can call other contracts by just calling functions on an instance of the other contract like `A.foo(x, y, z)`. To do so, you must have an interface for `A` which tells your contract which functions exist. Interfaces in Solidity behave like header files, and serve similar purposes to the ABI we have been using when calling contracts from the frontend. This allows a contract to know how to encode and decode function arguments and return values for calling external contracts.

Note: Interfaces you use do not need to be extensive. i.e. they do not need to necessarily contain all the functions that exist in the external contract - only those which you might be calling at some point. 

Assume there is an external `ERC20` contract, and we are interested in calling the `balanceOf` function to check the balance of a given address from our contract. 

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface MinimalERC20 {
    // Just include the functions we are interested in
    // in the interface
    function balanceOf(address account) external view returns (uint256);
}

contract MyContract {
    MinimalERC20 externalContract;
    
    constructor(address _externalContract) {
        // Initialize a MinimalERC20 contract instance
        externalContract = MinimalERC20(_externalContract);
    }
    
    function mustHaveSomeBalance() public {
        // Require that the caller of this transaction has a non-zero
        // balance of tokens in the external ERC20 contract
        uint balance = externalContract.balanceOf(msg.sender);
        require(balance > 0, "You don't own any tokens of external contract");
    }
}
```

## Import Statements
To maintain code readability, you can split your Solidity code over multiple files. Solidity allows importing both local and external files.

### Local Imports
Assume we have a folder structure like this:
```
├── Import.sol
└── Foo.sol
```

where `Foo.sol` is 
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Foo {
    string public name = "Foo";
}
```

We can import `Foo` and use it in `Import.sol` as such
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// import Foo.sol from current directory
import "./Foo.sol";

contract Import {
    // Initialize Foo.sol
    Foo public foo = new Foo();

    // Test Foo.sol by getting it's name.
    function getFooName() public view returns (string memory) {
        return foo.name();
    }
}
```

NOTE: When we use Hardhat, we can also install contracts as node modules through `npm`, and then import contracts from the `node_modules` folder. These also count as local imports, as technically when you install a package you are downloading the contracts to your local machine.

### External Imports
You can also import from Github by simply copying the URL. We did this in the Cryptocurrency and NFT tutorials in the Freshman track.

```solidity
// https://github.com/owner/repo/blob/branch/path/to/Contract.sol
import "https://github.com/owner/repo/blob/branch/path/to/Contract.sol";

// Example import ERC20.sol from openzeppelin-contract repo
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

```

## Solidity Libraries
Libraries are similar to contracts in Solidity, with a few limitations. Libraries cannot contain any state variables, and cannot transfer ETH.

Typically, libraries are used to add helper functions to your contracts. An extremely commonly used library in Solidity world is `SafeMath` - which ensures that mathematical operations do not cause an integer underflow or overflow.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

library SafeMath {
    function add(uint x, uint y) internal pure returns (uint) {
        uint z = x + y;
        // If z overflowed, throw an error
        require(z >= x, "uint overflow");
        return z;
    }
}

contract TestSafeMath {
    function testAdd(uint x, uint y) public pure returns (uint) {
        return SafeMath.add(x, y);
    }
}
```

-->

<!--


https://docs.soliditylang.org/en/v0.8.15/style-guide.html


Solidity est un langage de programmation orienté objet pour écrire des Smart Contract sur la plateforme EVM
Il gère des types statiques : bool, int256/uint256, fixed/ufixed, address, arrays, map https://solidity-fr.readthedocs.io/fr/latest/types.html
Il utilise des mots clés tels que : struct, inheritance, modifier, private, public https://solidity-fr.readthedocs.io/fr/latest/control-structures.html
Il implémente des primitives (crypto, time) et un mécanisme de logging (event) https://solidity-fr.readthedocs.io/fr/latest/units-and-global-variables.html

La librairie https://openzeppelin.com/contracts standardise les Smart Contrats pour réduire le nombre de vulnérabilités dans les DApp (d’autres outils existent pour valider la sécurité : https://consensys.net/diligence/ ; https://consensys.github.io/smart-contract-best-practices/)


## References

[Solidity by Example](https://solidity-by-example.org/)

---

## Resources for learning extra

- [Cryptozombies](https://cryptozombies.io/)
- [Solidity by Example](https://solidity-by-example.org/)
- [Solidity docs](https://docs.soliditylang.org/en/v0.8.10/)

-->
