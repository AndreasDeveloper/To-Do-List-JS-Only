// FUNCTION WILL LOAD UP HTML5 FILE IN 0.5s
window.setTimeout(function() {

// Array that stores tasks
var todos = ["sample"];

// Ask user for a input
var input = prompt("What would you like to do?");

// Start the loop
while(input != "quit") {
if(input === "list") {
       listTasks();
} else if(input === "new") {
       addTask();
} else if(input === "delete") {
       deleteTask();
    }
    // Ask for a NEW input
    var input = prompt("What would you like to do?");
}
console.log("App Quit");


// --- FUNCTIONS --- // 
function listTasks() {
    console.log("**********");
    todos.forEach(function(todo, index) {
    console.log(index + ": " + todo);
    });
    console.log("**********");
}

function addTask() {
     // Ask user to input new task
     var  newTask = prompt("Enter new task");
     // Add new task to todos/list array
     todos.push(newTask);
     console.log("Task added");
}

function deleteTask() {
     // Ask for a index of the task to be deleted
     var index = prompt("Enter the index of the task to delete");
        
     // Delete the task
     todos.splice(index, 1);
     console.log("Task deleted");
}

// PART OF THE window.setTiemout function
}, 500);