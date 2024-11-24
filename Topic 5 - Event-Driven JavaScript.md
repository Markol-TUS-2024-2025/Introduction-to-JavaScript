Introduction to Event-Driven JavaScript 

Event-Driven Programming is a programming paradigm where the flow of execution is determined by events. In JavaScript, this typically means that the execution flow is controlled by user interactions such as clicks, key presses, mouse movements, etc. 

    Real-World Analogy: Consider a button in a UI. The user clicking the button triggers an event. The event may call a function (callback) to perform some actions, such as displaying an alert, changing content, or interacting with the server. 

JavaScript uses this model to build interactive websites by responding to user input or system-generated events. 

 

Core Concepts in Event-Driven Programming 

What is an Event? 

Events in JavaScript represent interactions or actions that happen on the webpage or DOM. Examples include: 

    Mouse events: click, mouseover, mousedown 

    Keyboard events: keydown, keyup 

    Form events: submit, focus 

Event Listeners 

    An Event Listener is a function that waits for an event to occur and then executes some code when that event happens. 

    Syntax: 

element.addEventListener('event-type', function); 

 

 

 

Adding a Click Event Listener 

<button id="myButton">Click Me!</button> 

  

<script> 

  const button = document.getElementById("myButton"); 

  button.addEventListener("click", function() { 

    alert("Button clicked!"); 

  }); 

</script> 

 

Add a paragraph tag in the HTML. 
Outside the event listener in JavaScript add  

let count = 0; 

 

Inside the event listener add 

count++; 

    document.querySelector("p").innerHTML = "The button was clicked " + count + " times;" 

 

 

Event Handlers/Callbacks 

A callback function is passed as an argument to another function (like addEventListener) and is executed when the event occurs. 

Event Propagation 

    Bubbling: The event starts from the innermost element and propagates outward to the document. 
    An event doesn't stop at the direct element that receives it. The event bubbles up to its ancestors, until it gets to the root element. 
     
    The "Event Bubbling" behavior makes it possible for you to handle an event in a parent element instead of the actual element that received the event. 

 

The process of handling an event on an ancestor element is called Event Delegation. 
 
To prevent event bubbling, you use the stopPropagation method of the event object. 
 
https://www.freecodecamp.org/news/event-bubbling-in-javascript 

    Capturing: The event starts at the document and moves inward to the target element. 

 

Event Delegation 

In event delegation, you attach the event listener to a parent element rather than individual child elements. This is useful for dynamically created elements. 

Example: 

<ul id="todoList"> 

  <li>Task 1</li> 

  <li>Task 2</li> 

</ul> 

<button id="addTask">Add Task</button> 

  

<script> 

  const todoList = document.getElementById("todoList"); 

  

  todoList.addEventListener("click", function(event) { 

    if (event.target.tagName === "LI") { 

      alert("You clicked on: " + event.target.textContent); 

    } 

  }); 

  

  document.getElementById("addTask").addEventListener("click", function() { 

    const newItem = document.createElement("li"); 

    newItem.textContent = "New Task"; 

    todoList.appendChild(newItem); 

  }); 

</script> 

 

 

Event Object 

The event object is automatically passed to the event handler. It contains useful information like: 

    event.target: The element that triggered the event. 

    event.type: The type of event. 

    event.currentTarget: The element to which the event listener is attached. 

 

Setting Up Basic Event Listeners 

Adding Event Listeners 

Let’s work through another basic example of adding event listeners: 

<html> 

<head> 

  <title>Event Example</title> 

</head> 

<body> 

  <button id="myBtn">Click me</button> 

  <p id="message"></p> 

  

  <script> 

    const button = document.getElementById("myBtn"); 

    const message = document.getElementById("message"); 

  

    button.addEventListener("click", function() { 

      message.textContent = "You clicked the button!"; 

    }); 

  </script> 

</body> 

</html> 

 

 

Removing Event Listeners 

If you want to stop listening for events, use removeEventListener(): 

button.removeEventListener("click", callbackFunction); 

 

Practical ask – Form Handling 

Create a simple form with a textarea and a save button. The user types in the textarea and clicks the save button. Upon clicking the save button the text they they have typed is displayed in a paragraph in the page. 
 
let ta = document.querySelector("textarea"); 
 
document.querySelector("p").innerHTML = ta.value; 

Try two advanced amendments 

    Update the paragraph text everytime the user presses/releases a key 
    addEventListener('keyup', function () { } 

    Update the paragraph text every time the textarea changes 
    addEventListener(‘input’, function {} 

 

 

Using this in Event Handlers 

In event handlers, this typically refers to the element that triggered the event. 

button.addEventListener("click", function() { 

  this.textContent = "Clicked!"; 

}); 

 

Local Storage 

 

localStorage.setItem('username', username); 

const savedUsername = localStorage.getItem('username'); 

 

If we are saving an object to localStorage we must save it as plain text. 

let myObj = {name: “Tom”,  age: 25 } 

localStorage.setItem(“person”, JSON.stringify(myObj)); 

The when we get it we convert it back to an object 
 
let personData = JSON.parse(localStorage.getItem(“person”)); 

 

Full localstorage example 

<textarea></textarea> 

        <button id="myButton">Save</button> 

        <div></div> 

 

 

const button = document.getElementById("myButton");  

 

let personData = JSON.parse(localStorage.getItem("person")); 

    document.querySelector("div").innerHTML = personData.name; 

 

  let myObj = {name: "Tom",  age: 25 }  

   

 

  button.addEventListener("click", function() {  

    let myName = document.querySelector("textarea").value; 

    myObj.name = myName; 

    localStorage.setItem("person", JSON.stringify(myObj));  

    document.querySelector("div").innerHTML = myName; 

  }); 

 

Putting It All Together - Hands-on Project  

Now that we’ve covered the basics, let’s build a small interactive project. We’ll create a to-do list that allows users to add and remove tasks dynamically using event listeners. 

Step 1: Create an HTML structure for the to-do list. 

Step 2: Use JavaScript to handle click events for adding and removing tasks. Tasks should be added to an array or object and identified with a key or id. 

Step 3: Add functionality to clear completed tasks. 

 

Advances – Save to local storage 

 

 