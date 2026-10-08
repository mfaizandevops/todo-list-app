const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener("click", function () {

    const task = taskInput.value;

    if (task === "") {
        alert("Please type a task.");
        return;

    }

    const li = document.createElement("li");

    li.textContent = task;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

});