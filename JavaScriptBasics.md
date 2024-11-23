# JavaScript Basics
An introduction to the core concepts of JavaScript programming.
This tutorial will introduce you to the essential building blocks of JavaScript: variables, data types, operators, conditionals, and loops.

## JavaScript Fundamentals
### 1. Variables
Variables store data that we can use and manipulate in JavaScript. We'll focus on **let** and **const**:
• **let**: Use this when the variable's value may change.
• **const**: Use this for values that shouldn't change.

**Code Example**:
~~~
let age = 25; // Variable that can change
const name = "Alice"; // Constant that will stay the same
~~~
**Exercise**: Declare a variable called colour using let, set it to any colour, then log it to the console. Try changing colour and logging it again to see how it works with let.

### 2. Data Types
JavaScript has several data types:
• _String_: Text, e.g., "hello"
• _Number_: Numerical values, e.g., 42
• _Boolean_: true or false
• _Null_: Intentional empty value
• _Undefined_: Variable that has been declared but not assigned
• _Array_: A collection of variables
• _Object_: Complex structures for data

**Example**:
~~~
let message = "Hello World"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let empty = null; // Null
let unknown; // Undefined
let myArray = [7, "Hello", false];  //Array
let myObject = {name: "Mark", course: "Web Dev"};
~~~

**Exercise**: Create a variable of each type, log each to the console, and observe the results.

### 3. Operators
Operators help you perform actions on variables and values:
• Arithmetic Operators: +, -, *, /, % (remainder)
• Assignment Operators: =, +=, -=
• Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
• Logical Operators: && (and), || (or), ! (not)

**Example**:
~~~
let a = 10;
let b = 5;
let sum = a + b; // 15
console.log(sum);
console.log(a > b); // true
~~~

**Exercise**: Create a few variables and try different operators with them, then log the results.

### 4. Conditionals and Loops
if/else Statement: Executes code based on whether a condition is true or false.

**Example**:
~~~
let temperature = 30;
if (temperature > 25) {
    console.log("It's hot outside!");
} else {
    console.log("It's cool outside!");
}
~~~

**Switch Statement**: Useful when there are multiple specific values to check.

**Example**:
~~~
let fruit = "apple";
switch (fruit) {
    case "apple":
    console.log("It's an apple!");
break;
case "banana":
    console.log("It's a banana!");
break;
default:
    console.log("Unknown fruit");
}
~~~

**Exercise**: Create a temperature variable and use if/else to log a message based on different temperature ranges. 
Try a switch statement with different fruits.

### 5. Loops: for and while
**for** Loop: Useful when you know how many times you need to repeat a task.

**Example**:
~~~
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}
~~~

**while Loop**: Keeps looping as long as a condition is true. Use it when you’re unsure of the number of iterations.

**Example**:
~~~
let i = 1;
while (i <= 5) {
    console.log("Count:", i);
    i++;
}
~~~

**Exercise**: Write a for loop to print numbers from 1 to 10. Then, create a while loop to do the same.

## JavaScript Functions
### Introduction to Functions
• **Definition**: A function is a reusable block of code that performs a specific task. It
helps in organizing code and avoiding redundancy.
• **Basic Syntax**:
~~~
function functionName(parameters) {
// code to be executed
}
~~~

### Function Declarations
Learn to declare and call functions.

#### 1. Function Declaration Example:
~~~
// Basic example of a function that takes two numbers and returns their sum:
function add(a, b) {
return a + b;
}
console.log(add(5, 3)); // Outputs: 8
~~~

#### 2. Calling Functions:
Functions are "called" or "invoked" by using their name followed by parentheses with any necessary arguments inside.

**Example** - Function with Default Parameters:
~~~
//Default parameters allow setting a default value if no argument is provided.
function greet(name = "Student") {
    console.log("Hello, " + name + "!");
}
greet(); // Outputs: Hello, Student!
greet("Alice"); // Outputs: Hello, Alice!
~~~

Introduction to Arrow Functions
Understand ES6 arrow functions and when to use them.
1. Basic Syntax:
o Arrow functions provide a more concise syntax than traditional function
declarations.
const add = (a, b) => a + b;
console.log(add(4, 6)); // Outputs: 10
2. Single Parameter Example:
o Arrow functions without parentheses for single parameters:
const greet = name => console.log("Hi, " + name);
greet("Sam"); // Outputs: Hi, Sam
3. Arrow Function with No Parameters:
const greetWorld = () => console.log("Hello, World!");
greetWorld(); // Outputs: Hello, World!
Scope in JavaScript
Goal: Understand the differences between var, let, and const, and the concept of scope in
JavaScript.
1. Global Scope:
o Variables declared outside of a function are globally scoped and accessible
anywhere in the code.
let name = "Global";
function showName() {
console.log(name);
}
showName(); // Outputs: Global
2. Function Scope (using var):
o Variables declared with var inside a function are function-scoped and cannot
be accessed outside the function.
function testVar() {
var test = "Hello";
console.log(test); // Outputs: Hello
}
testVar();
console.log(test); // Error: test is not defined
3. Block Scope (let and const):
o Variables declared with let and const are block-scoped, meaning they are
limited to the block {} they’re defined in.
if (true) {
let blockVar = "I'm block-scoped";
const blockConst = "Me too!";
console.log(blockVar); // Outputs: I'm block-scoped
}
console.log(blockVar); // Error: blockVar is not defined
4. Practical Example of Scope:
function checkScope() {
var functionScoped = "Inside function";
if (true) {
let blockScoped = "Inside block";
console.log(blockScoped); // Outputs: Inside block
}
console.log(functionScoped); // Outputs: Inside function
}
Practice Challenge
Create a function that uses the different scopes and an arrow function.
1. Challenge:
o Create a function createCounter that uses a let variable inside a function
and returns an arrow function to increment it.
o Expected Output:
const counter = createCounter();
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
