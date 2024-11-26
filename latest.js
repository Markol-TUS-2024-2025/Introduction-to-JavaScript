let myTasks = localStorage.getItem("allTasks") ? 
JSON.parse(localStorage.getItem("allTasks")) : {}; //initial empty object for storing added tasks
let count = Object.keys(myTasks).length;  //the number of tasks initially

//variables referencing the HTML elements
let taskInput = document.getElementById("task");
let saveBt = document.getElementById("save");
let p = document.querySelector("p");

//foreach task, display it in the p tag and include a delete button for each task
function displayTasks(myTasks){
    console.log(myTasks);
    for (const [key, value] of Object.entries(myTasks)) {
        p.innerHTML += `<span>Task ${key}: ${value} <button class="delete" id="${key}">Delete</button><br/></span>`;
    }
}

displayTasks(myTasks);

//an event listener that runs when the user clicks the save button
saveBt.addEventListener("click", function(){
    let id = "id" + Math.random().toString(16).slice(2);
   
    //set the key (count) and value (taskInput,value) of the object item
    myTasks[Number(Object.keys(myTasks)[Object.keys(myTasks).length-1])+1] = taskInput.value;  
    count++;
    taskInput.value = ""; //clear the input
    taskInput.focus(); //set mouse focus to the input
    console.log(myTasks);

    localStorage.setItem("allTasks", JSON.stringify(myTasks));

    p.innerHTML = ""; //empty the paragraph tag 

    displayTasks(myTasks);
    //foreach task, display it in the p tag and include a delete button for each task
    // for (const [key, value] of Object.entries(myTasks)) {
    //     p.innerHTML += `<span>Task ${key}: ${value} <button class="delete" id="${key}">Delete</button><br/></span>`;
    // }

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

});  //close the saveBt eventListener


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

