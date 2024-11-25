# Introduction to JavaScript Arrays
By the end of this session, you should understand JavaScript array basics, common array methods, and how to manipulate arrays with practical examples.

## Basics of Arrays in JavaScript
### 1. What is an Array?
An array in JavaScript is a type of global object used to store data.
```javascript
let ages_arr = [49, 48, 26, 19, 16];
let fruits = ["Apple", "Banana", "Orange"];
```

Comparison to objects
```javascript
let ages_obj = { alice: 18, bob: 27 };
```

Note – arrays can contain different data types, including objects.
```javascript
const items = [
{ name: 'Apple', price: 1 },
{ name: 'Orange', price: 2 },
{ name: 'Mango', price: 3 },
];
```

  
### 2. Creating and Accessing Arrays
Declaring arrays: 
```javascript
const myArray = [];
```
Accessing elements by index: 
```javascript
myArray[0]
```

Modifying array elements by index: 
```javascript
myArray[0] = "new value";
```

**Quick Exercise**:  
Create an array of five of your favorite fruits.
Console.log the third fruit.
Change the last fruit in the array to a new fruit name.
Console.log all fruits


  
### 3. Basic Array Properties
```javascript
.length
//property to find the number of elements.
```
```javascript
Array.isArray()
//to check if a variable is an array.
```

**Quick Exercise**:  
Use .length to find out how many items are in your fruit array.

  
### 4. Basic Looping Through Arrays
_for_ loop to iterate over array elements.
_forEach_ loop as an alternative.

```javascript
const items = ["item1", "item2", "item3"];
// for loop
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

// forEach
items.forEach((item) => {
console.log(item);
});
```

**Quick Exercise**:  
Loop through the array of fruits and print each fruit to the console.

  
### 5. Essential Array Methods
**Adding and Removing Elements**  
.push() and .pop() for adding/removing elements at the end.  
.unshift() and .shift() for adding/removing elements at the beginning.  

**Practice Task**:
Start with an empty array, add three items with .push(), then remove the last item with .pop().   
Add two items to the beginning with .unshift(), then remove one from the start with .shift().  

**Finding and Checking Elements**  
.includes() to check if an element exists.
```javascript
const array1 = [1, 2, 3];
console.log(array1.includes(2));
```

.indexOf() and .lastIndexOf() for finding element positions.
```javascript
const beasts = ['ant', 'bison', 'camel', 'duck','bison'];
console.log(beasts.indexOf('bison'));
// Expected output: 1
```

**Practice Task**:
Check if "apple" exists in the fruit array, then find its position using .indexOf().

**Transforming Arrays**  
.map() for transforming arrays.
```javascript
const array1 = [1, 4, 9, 16];
// Pass a function to map
const double = array1.map((x) => {
    return x * 2
});
```

.filter() for filtering based on a condition.
```javascript
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
```

.reduce() for aggregating values.
```javascript
const items = [
{ name: 'Apple', price: 1 },
{ name: 'Orange', price: 2 },
{ name: 'Mango', price: 3 },
];

const totalPrice = items .reduce((runningTotal ,item) => {
    return runningTotal += item . price;
}, 0)
```

**Practice Task**:
Use .map() to transform an array of numbers by squaring each number.  
Use .filter() to remove any fruits that contain the letter “a.”  
Use .reduce() to calculate the total length of all fruit names combined.  


## Practical Tasks & Mini-Project
**Interactive Coding Task**  
**Task 1**: Create an array of numbers and find the sum of all numbers using .reduce().  
**Task 2**: Use .filter() to create a new array with only even numbers from the original array.  
**Task 3**: Use .map() to create an array of all fruits in uppercase from the fruit array.  

**Practical: Inventory System**  
**Scenario**: You’re building a simple inventory system for a store. You need to:  
**Step 1**: Create an array of objects, each object representing an item with properties: name, price, and quantity.  
**Step 2**: Write a function to add a new item to the inventory array.  
**Step 3**: Write a function to update the quantity of an item by name.  
**Step 4**: Calculate the total value of all items in the inventory (price * quantity).  

**Bonus Challenge**: Filter items with quantities less than a specific number to identify low-stock items.
