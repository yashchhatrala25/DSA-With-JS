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