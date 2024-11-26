let myTasks = localStorage.getItem("myTasks") ? JSON.parse(localStorage.getItem("myTasks")) : {};
let count = Object.keys(myTasks).length;

let taskInput = document.getElementById("task");
let saveBt = document.getElementById("save");
let display = document.querySelector("div");

for (const [key, value] of Object.entries(myTasks)) {
    display.innerHTML += `<span><b>Task ${key}:</b> ${value}<button class="delete" id="${key}">Delete</button><br/></span>`;
}

saveBt.addEventListener("click", function(){
    myTasks[count] = taskInput.value;
    console.log(myTasks);
    localStorage.setItem("myTasks", JSON.stringify(myTasks));
    display.innerHTML += `<span><b>Task ${count}:</b> ${taskInput.value}<button class="delete" id="${count}">Delete</button><br/></span>`;
    count++;
    taskInput.value = "";
});

let deleteBtns = document.querySelectorAll(".delete");
deleteBtns.forEach(function(deleteBt){
    deleteBt.addEventListener("click", function(){
        deleteNode = document.getElementById(this.id).parentNode;
        delete(myTasks[this.id])
        deleteNode.parentNode.removeChild(deleteNode);
        localStorage.setItem("myTasks", JSON.stringify(myTasks));
    });
});
