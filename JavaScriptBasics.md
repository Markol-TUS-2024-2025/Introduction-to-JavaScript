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

