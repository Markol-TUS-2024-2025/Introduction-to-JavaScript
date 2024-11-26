//If there are tasks saved to local Storage then we will get them and display then
let myTasks = localStorage.getItem("allTasks") ? 
JSON.parse(localStorage.getItem("allTasks")) : {}; 
//UPDATED - instead of using count we will use a uniqueid
let uniqid = "id" + Math.random().toString(16).slice(2);

//variables referencing the HTML elements
let taskInput = document.getElementById("task");
let saveBt = document.getElementById("save");
let p = document.querySelector("p");

//UPDATED - displayTasks() is now a function to prevent duplicated code
//foreach task, display it in the p tag and include a delete button for each task
function displayTasks(){
    for (const [key, value] of Object.entries(myTasks)) {
        p.innerHTML += `<span>Task ${key}: ${value} <button class="delete" id="${key}">Delete</button><br/></span>`;
    }
}
//call displayTasks()
displayTasks();

//UPDATED - handleDeleteBtns() is now a function to prevent duplicated code
function handleDeleteBtns(){
    //get all of the buttons that have a delete class
    let deleteBtns = document.querySelectorAll(".delete");

    //loop through the nodelist of buttons to access each individual delete button
    deleteBtns.forEach(function(deleteBt){
        deleteBt.addEventListener("click", function(){
            //identify the parent span that we want to delete
            let deleteNode = document.getElementById(this.id).parentNode;
            //delete the child of the parent of the span
            deleteNode.parentNode.removeChild(deleteNode);
            delete(myTasks[this.id]);
            localStorage.setItem("allTasks", JSON.stringify(myTasks));
        })
    });
}

//call handleDeleteBtns
handleDeleteBtns();

//an event listener that runs when the user clicks the save button
saveBt.addEventListener("click", function(){
    let uniqid = "id" + Math.random().toString(16).slice(2);
   
    //set the key (count) and value (taskInput,value) of the object item
    myTasks[uniqid] = taskInput.value;  
    taskInput.value = ""; //clear the input
    taskInput.focus(); //set mouse focus to the input
    p.innerHTML = ""; //empty the paragraph tag 

    localStorage.setItem("allTasks", JSON.stringify(myTasks));
    

    displayTasks(); //call function
    handleDeleteBtns(); //call function
});  


