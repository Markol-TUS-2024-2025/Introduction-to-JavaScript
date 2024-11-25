# JavaScript Functions
## Introduction to Functions
**Definition**: A function is a reusable block of code that performs a specific task. It
helps in organizing code and avoiding redundancy.

**Basic Syntax**:
```javascript
function functionName(parameters) {
// code to be executed
}
```

## 1. Function Declaration
Learn to declare and call functions.

**Function Declaration Example**:
```javascript
// Basic example of a function that takes two numbers and returns their sum:
function add(a, b) {
return a + b;
}
console.log(add(5, 3)); // Outputs: 8
```

## 2. Calling Functions:
Functions are "called" or "invoked" by using their name followed by parentheses with any necessary arguments inside.

**Example** - Function with Default Parameters:
```javascript
//Default parameters allow setting a default value if no argument is provided.
function greet(name = "Student") {
    console.log("Hello, " + name + "!");
}
greet(); // Outputs: Hello, Student!
greet("Alice"); // Outputs: Hello, Alice!
```

## 3. Introduction to Arrow Functions
Understand ES6 arrow functions and when to use them.

**Basic Syntax**:
Arrow functions provide a more concise syntax than traditional function declarations.
```javascript
const add = (a, b) => {
        return a + b;
}
console.log(add(4, 6)); // Outputs: 10
```

**Single Parameter Example**:
```javascript
//Arrow functions without parentheses for single parameters:
const greet = name => console.log("Hi, " + name);

greet("Sam"); // Outputs: Hi, Sam
```

**Arrow Function with No Parameters**:
```javascript
const greetWorld = () => console.log("Hello, World!");

greetWorld(); // Outputs: Hello, World!
```

## 4. Scope in JavaScript
In this section we will learn the differences between var, let, and const, and the concept of scope in JavaScript.

**Global Scope**:
Variables declared outside of a function are globally scoped and accessible anywhere in the code.

```javascript
let name = "Global";
function showName() {
        console.log(name);
}

showName(); // Outputs: Global
```

**Function Scope (using var)**:
Variables declared with var inside a function are function-scoped and cannot be accessed outside the function.

```javascript
function testVar() {
        var test = "Hello";
        console.log(test); // Outputs: Hello
}

testVar();
console.log(test); // Error: test is not defined
```

**Block Scope (let and const)**:
Variables declared with let and const are block-scoped, meaning they are limited to the block {} they’re defined in.

```javascript
if (true) {
let blockVar = "I'm block-scoped";
const blockConst = "Me too!";
console.log(blockVar); // Outputs: I'm block-scoped
}
console.log(blockVar); // Error: blockVar is not defined
```

### Example of Scope:
```javascript
function checkScope() {
        var functionScoped = "Inside function";
        if (true) {
                let blockScoped = "Inside block";
                console.log(blockScoped); // Outputs: Inside block
        }
        console.log(functionScoped); // Outputs: Inside function
}
```

### Practical Task
Create a simple calculator. You will need to create 5 functions
1. controller() 
This is the function that is called initially. It should accept 3 parameters, 2 of which are numbers and one is an operand (+, -, *, /). 
This function should call one of the following functions based on the operand you send to it. For example, if it receives the parameters 5, 7 , "+" then it should call the addition() function and send 2 parameters to that function (5,7)
It will receive the value returned from addition(), for example and return the sum to the variable associated with the initial call.

2. addition() 
Receives 2 numbers as parameters, adds them and returns the value to the controller() function

3. subtraction() 
Receives 2 numbers as parameters, subtracts the second from the first and returns the value to the controller() function

2. multiplication() 
Receives 2 numbers as parameters, multiplies them and returns the value to the controller() function

2. addition() 
Receives 2 numbers as parameters, divides the first by the second and returns the value to the controller() function

**Example call to the controller function**:
```javascript
let result = controller(4, 8, "%");
```
