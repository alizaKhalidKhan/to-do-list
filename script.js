// Selecting elements from the DOM
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.innerText = taskText;

    // Create a delete button for the task
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete");

    // Add event listener to delete button
    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    // Append delete button to the list item
    listItem.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
}

// Add event listener to the "Add" button
addButton.addEventListener("click", addTask);

// Add event listener to the input field for "Enter" key press
taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
