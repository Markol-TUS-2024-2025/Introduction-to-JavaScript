Introduction to JavaScript Arrays
By the end of this session, students should understand JavaScript array basics, common array
methods, and how to manipulate arrays with practical examples.
Basics of Arrays in JavaScript
1. What is an Array?
o An array in JavaScript is a type of global object used to store data.
let ages_arr = [49, 48, 26, 19, 16];
let fruits = ["Apple", "Banana", "Orange"];
o Comparison to objects
let ages_obj = { alice: 18, bob: 27 };
o Note – arrays can contain different data types, including objects.
const items = [
{ name: 'Apple', price: 1 },
{ name: 'Orange', price: 2 },
{ name: 'Mango', price: 3 },
];
2. Creating and Accessing Arrays
o Declaring arrays: const myArray = [];
o Accessing elements by index: myArray[0]
o Modifying array elements by index: myArray[0] = "new value";
Quick Exercise:
o Create an array of five of your favorite fruits.
o Console.log the third fruit.
o Change the last fruit in the array to a new fruit name.
o Console.log all fruits
3. Basic Array Properties
o .length property to find the number of elements.
o Array.isArray() to check if a variable is an array.
Quick Exercise:
o Use .length to find out how many items are in your fruit array.
4. Basic Looping Through Arrays (20 mins)
o for loop to iterate over array elements.
o forEach loop as an alternative.
const items = ["item1", "item2", "item3"];
// for loop
for (let i = 0; i < items.length; i++) {
console.log(items[i]);
}
// forEach
items.forEach((item) => {
console.log(item);
});
Quick Exercise:
Loop through the array of fruits and print each fruit to the console.
Essential Array Methods
1. Adding and Removing Elements
o .push() and .pop() for adding/removing elements at the end.
o .unshift() and .shift() for adding/removing elements at the beginning.
Practice Task:
o Start with an empty array, add three items with .push(), then remove the last
item with .pop().
o Add two items to the beginning with .unshift(), then remove one from the
start with .shift().
2. Finding and Checking Elements
.includes() to check if an element exists.
const array1 = [1, 2, 3];
console.log(array1.includes(2));
o .indexOf() and .lastIndexOf() for finding element positions.
const beasts = ['ant', 'bison', 'camel', 'duck',
'bison'];
console.log(beasts.indexOf('bison'));
// Expected output: 1
Practice Task:
o Check if "apple" exists in the fruit array, then find its position using
.indexOf().
3. Transforming Arrays
o .map() for transforming arrays.
const array1 = [1, 4, 9, 16];
// Pass a function to map
const double = array1.map((x) => {
return x * 2
});
o .filter() for filtering based on a condition.
const words = ['spray', 'elite', 'exuberant',
'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
o .reduce() for aggregating values.
const items = [
{ name: 'Apple', price: 1 },
{ name: 'Orange', price: 2 },
{ name: 'Mango', price: 3 },
];
const totalPrice = items .reduce((runningTotal ,item) => {
return runningTotal += item . price;
}, 0)
Practice Task:
o Use .map() to transform an array of numbers by squaring each number.
o Use .filter() to remove any fruits that contain the letter “a.”
o Use .reduce() to calculate the total length of all fruit names combined.
JavaScript Array Methods:
Practical Tasks & Mini-Project
1. Interactive Coding Task
o Task 1: Create an array of numbers and find the sum of all numbers using
.reduce().
o Task 2: Use .filter() to create a new array with only even numbers from
the original array.
o Task 3: Use .map() to create an array of all fruits in uppercase from the fruit
array.
2. Practical: Inventory System
o Scenario: You’re building a simple inventory system for a store. You need to:
 Step 1: Create an array of objects, each object representing an item
with properties: name, price, and quantity.
 Step 2: Write a function to add a new item to the inventory array.
 Step 3: Write a function to update the quantity of an item by name.
 Step 4: Calculate the total value of all items in the inventory (price *
quantity).
o Bonus Challenge: Filter items with quantities less than a specific number to
identify low-stock items.
