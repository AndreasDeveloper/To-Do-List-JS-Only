// FUNCTION WILL LOAD UP HTML5 FILE IN 0.5s
window.setTimeout(function() {

// Array that stores tasks
var todos = ["Amin"];

// Ask user for a input
var input = prompt("What would you like to do?");

// Start the loop
while(input != "quit") {
if(input === "list") {
    console.log(todos);

} else if(input === "new") {
        // Ask user to input new task
        var  newTask = prompt("Enter new task");
        // Add new task to todos/list array
        todos.push(newTask);
    }
    // Ask for a NEW input
    var input = prompt("What would you like to do?");
}
console.log("App Quit");

// PART OF THE window.setTiemout function
}, 500);