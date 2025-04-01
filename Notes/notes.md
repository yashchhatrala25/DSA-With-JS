# Data structure
- A data structure is a specific way of organizing, storing, and accessing data.

# Algorithm
- A set of instructions that tells a computer how to do something, or you can also say step-by-step solution of the problem is called algorithm.

# Problem 1
- Create an array with 5 students names, after that create a function which takes 2 parameters (allStuents & studentName) iterate over all students and find that specific user "studentName".

```
// Data Structure
const studentDatabase = ["rahul", "rohan", "yash", "jay", "abhishek"];

// Algorithm for finding a specific user
const findStudent = (allStudents, studentName) => {
    for(let i=0; i<allStudents.length; i++) {
        if (allStudents[i] === studentName) {
            console.log(`Found ${studentName}`)
        }
    }
}

findStudent(studentDatabase, "jay")
```

Why?
SHOULD I CARE

- Efficient Problem Solving
- Algorithmic Awareness 
- Stronger Coding Skills
- Interview Success
- Coding Confidence
- Efficiency Expert
- Improved Logical Skills
- Future-Proof Your Skills
- Innovation Inspiration
- Lifelong Learning
- Critical Thinking Champion

BECOME A GREAT
PROBLEM SOLVER

How can we tell if the code we just wrote is `Good code`?

# Big O
- Big O notation helps is understand `how long` an algorithm will take to run `how much` memory it will need as the amount of data it handles grows.

Imagine you have a gient mess to clean. Big O notation is like saying how the cleaning time grows as the mess gets bigger.

# O(n)
- Signifies that the execution time of the algorithm grows `linearly` in proportion to the size of the `input date` (n).


As the number of items in the input data increases, the time it takes for the algorithm to run increases correspondingly.

# Example
- Imagine you have a list groceries. To find a specific item (like milk), you might need to `scan` through the `entire` list. If the list has 5 items, it'll take a relatively `short` time. But if the list has 500 items, it'll take considerably `longer`. This is the essence of linear time complexity.

```
const groceries = ['milk', 'bread', 'eggs', 'flour', 'cheese', 'sugar']

const searchForItems = (item) => {

    // O(n)
    for(let i=0; i<groceries.length; i++) {
        if (groceries[i] === item) {
            console.log(`Found: ${item}`)
        }
    }

    for(let j=0; j<groceries.length; i++) {
        if (groceries[j] === item) {
            console.log(`Found: ${item} 2`)
        }
    }

    // n + n = 2n -> O(n)
    // Drop the constant so it becomes O(n)
}

searchForItems('eggs')
```

# O(1)
- O(1) aka `constant` time, signifies that the execution time of an algorithm remains `constant` regardless of the input size.

# Example
- Imagine you have a box filld with items, and you know exactly where each items is located. To get a specific item, you go directly to its location, talking the same amount of time irresprctive of how many items are in the box.

```
const numbers = [1, 2, 3, 4, 5];

// O(1)
const getElement = (arr, index) => arr[index];
console.log(getElement(numbers, 0));
```

# O(n^2)
- Indicates that the algorithm's execution time grows quadratically with the size of the input data(represented by n).

```
function findPairs(arr) {
  // O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]}, ${arr[j]}`);
    }
  }

  // O(n)
  for (let q = 0; q < arr.length; q++) {
    console.log("---------------->", q)
  }


  // If we combine all the "O" operations it becomes O(n^2 + n)
  // O(n^2) is a Dominant term. 
  // "n" is a Non-Domainant term. 
  // So we remove the "non-dominant" term and we're only left with O(n^2).
  // This way, we simplify over bigO.
}

const numbers = [1, 2, 3, 4, 5];
findPairs(numbers);
```

# O(log n)
- O(log n) time complixity refers to an algorithm's runtime that grows logarithmically with the size of the input (represented by n). In similar terms, as the input size increases, the time it takes for the algorithms to run increases slowly.

log2 8 = ?
2 to the what power equal 8? 

log2 8 = 3

O(log n)


# Introduction
# Custom Array (with challenges)
# Challenges
- Reverse String
- Palindroms
- Integer Reversal
- FizzBuzz
- MaxProfit
- Array Chunk
- Two Sum

# Array DS
- Data Structure array is ordered collection of elements that can be accessed using a numerical index.

```
const mixed = ["a", 1, true, "b", 2, false]
```

```
const stringArr = ['a', 'b', 'c', 'd', 'e'];
const numArr = [1, 2, 3, 4, 5];
const boolArr = [true, false];
const mixArr = ['a', 2, true, undefined, null, {a: 'a'}, ['b']];
console.log(mixArr);
```


```
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    get(index) {
        return this.data[index];
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shift() {
        const firstItem = this.data[0];

        // re-indexing
        for(let i=0; i<this.length; i++) {
            this.data[i] = this.data[i];
        }

        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    delete(index) {
        const item = this.data[index]
        for(let i=index; i<this.length-1; i++) {
            this.data[i] = this.data[i+1]; 
        }

        delete this.data[this.length - 1];
        this.length--;
        return item;
    }
}

const myNewArray = new MyArray();
myNewArray.push('apple')
myNewArray.push('orange')
myNewArray.push('mango')
```


# Reverse String (problem2.js)
- Hello -> olleH
- Apple -> elppA

```
// My solution
let string = "Hello";
function reverseMyString(string) {
    for (let i = string.length; i >= 0 ; i--) {
        console.log(string[i])
    }
}
reverseMyString(string)


// 1. Convert string to array (split method)
// 2. Reverse the array (reverse method)
// 3. Convert array back to string (join method)
// Tutorial solution
const reverseTutString = str => str.split("").reverse().join("");
console.log(reverseTutString("Hello"))
```

# Palindromes String (problem3.js)
- If the reverse string is equal to the original one then that word is a palindrom.
- cddc -> cddc
- abba -> abba

```
// 1. Convert string to array
// 2. Reverse the array
// 3. Convert array back to string 
// 4. Compare strings 
const palindrom = str => str.split("").reverse().join("") === str;
console.log(palindrom("hello"));
```


# Int Reversal (problem4.js)
- 1234 -> 4321
- 5678 -> 8765

```
// 1. Convert number to String (toString method)
// 2. Convert string to array (split method)
// 3. Reverse the string (reverse method)
// 4. Convert array back to string (join method)
// 5. Convert string to number (parseInt method)
// 6. Reverse the number 

const reverseNum = num => {
    const reverse = num.toString().split("").reverse().join("")
    return parseInt(reverse) * Math.sign(num);
} 
console.log(reverseNum(1234))
```

# Sentence Capitalization (problem5.js)
- hello world -> Hello World
- huxn webdev -> HuXn WebDev

```

```