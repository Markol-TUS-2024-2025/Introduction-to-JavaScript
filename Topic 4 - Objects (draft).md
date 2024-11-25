# JavaScript Objects Overview  

## 1. Introduction to JavaScript Objects  

**What is an Object?**  
An object in JavaScript is a collection of key-value pairs that can store data and functions, used to model real-world data and organize related information. 
```javascript
{ name: 'Alice', age: 25 } 
```
 
**Importance of Objects**  
JavaScript objects are essential because they allow developers to organize and structure data logically, mirroring real-world entities. Objects store related information in key-value pairs, making it easy to access, manipulate, and manage complex data sets. 
      
Objects facilitate interaction with APIs and the Document Object Model (DOM), which are central to dynamic web applications. 

JSON (JavaScript Object Notation) is a lightweight data format inspired by JavaScript objects, commonly used to transfer data between servers and web applications. JSON represents data in key-value pairs, making it easy to read and write. 


<br><br>
## 2. Creating and Accessing Objects  
**Object Creation**  
```javascript
//Object literal syntax: 
const person = { name: 'Alice', age: 25 }; 

//Object constructor syntax:
const obj = new Object(); 
```

**Accessing Object Properties**   
```javascript
//Dot notation:
person.name

//Bracket notation:
person['name'] 
```

### Dynamic property access 
**Code Examples**  
```javascript
const car = { 
    make: 'Toyota', 
    model: 'Camry', 
    year: 2020, 
    owner: { name: 'Alex', age: 30 } 
};

console.log(car.make);       // Dot notation 
console.log(car['model']);   // Bracket notation 
```
  
<br><br>
## 3. Adding, Updating, and Deleting Properties  
**Adding and Updating Properties**  

Using dot and bracket notation as seen in previous examples 

**Deleting Properties**  
```javascript
car.color = 'blue';          // Adding a new property 
car.owner.age = 31;          // Updating a nested property 
delete car.year;             // Deleting a property 
```
  
**Nested objects**   
```javascript
const student = { 
  name: "John Doe", 
  age: 21, 
  contact: { 
      email: "johndoe@example.com", 
      phone: { 
           home: "123-456-7890", 
           mobile: "098-765-4321" 
      }
  }, 

  courses: { 
     math: { 
       score: 95, 
       teacher: "Ms. Smith" 
     }, 
     science: { 
       score: 89, 
       teacher: "Mr. Johnson" 
     } 
  } 
}; 

// Accessing a nested property 
console.log(student.contact.phone.mobile); // "098-765-4321" 
console.log(student.courses.math.teacher); // "Ms. Smith" 
```
  
<br><br>
## 4. Object Methods  
**The this Keyword**  
Refers to the object in which the method is defined 

```javascript    
const person = { 
    name: 'Alice', 
    age: 25, 
    greet: function() { 
        console.log(`Hello, my name is ${this.name}`); 
    } 
}; 

person.greet();  // "Hello, my name is Alice" 
```

In JavaScript, the this keyword refers to the current object context, often within an object method. Here’s a simple example: 

```javascript
const person = {  
    name: "Alice",  
    age: 30,  
    greet() {  
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);  
    } 
};  

person.greet(); // Output: "Hello, my name is Alice and I am 30 years old." 
```

<br><br>
## 5. Common Object Operations

### Looping through Objects
```javascript
//for...in loop 

const car = {  
  make: "Toyota", 
  model: "Camry",  
  year: 2021  
};  
 
for (let key in car) {  
console.log(`${key}: ${car[key]}`);  
}
```

**Object.keys()**  
In a JavaScript object items are grouped in key-value pairs with the key being the identifier and the value being the value of the data. 
```javascript
const book = {  
    title: "1984",  
    author: "George Orwell",  
    published: 1949  
};  

const keys = Object.keys(book);  
console.log(keys); // Output: ["title", "author", "published"]  

// Iterating through keys to log each key-value pair  
keys.forEach(key => {  
console.log(`${key}: ${book[key]}`);  
}); 
```
    
**Object.values()**   
Object.values works similarly as above. 
Object.values extracts all the values from the object and returns them in an array. 
```javascript
const car = {  
    make: "Toyota",  
    model: "Camry",  
    year: 2021
};  

const values = Object.values(car);  
console.log(values);  // ["Toyota", "Camry", 2021] 
```

**Object.entries()** 
Try it yourself

### Merging and Cloning Objects 
- Object.assign() 
- Spread syntax { ...object } 

**Code Examples**  
```javascript
const personDetails = { ...person, location: 'NYC' }; 
console.log(Object.keys(person));   // ['name', 'age', 'greet'] 
```

 
<br><br>
## Practical Exercises  

### (i) Basic Object Creation and Manipulation 
Create an object book with properties title, author, and year.  
Add a new property genre and update the year.   
Delete the genre property.   

### (ii) Object Methods and this Keyword 
Create a user object with properties username, email, and a method login that prints "username has logged in".    
Test the method by calling it from the user object.     

### (iii) Looping through Object Properties  
Create an object movie with properties like title, director, releaseYear, and rating.     
Use for...in to log each key and value.   
Print all values using Object.values().   

### (iv) Destructuring and Merging 
Given two objects, address and contact, merge them into a new object profile.   
Use destructuring to extract street from address and email from contact.   
