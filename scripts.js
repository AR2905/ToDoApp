
const taskInput = document.getElementById("taskInput");
const pendingTasksList = document.getElementById("pendingTasks");
const completedTasksList = document.getElementById("completedTasks");

function addTask() {
    const taskText = taskInput.value.trim();
    console.log(taskText)
    if (taskText === "") {
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span class = 'top-item' >${taskText}</span>

        <button class='in-btn' style="--clr:#39FF14" onclick="completeTask(this)" ><span>Complete</span><i></i></button>

        <button class='in-btn' style="--clr:#FF44CC" onclick="editTask(this)"><span>. Edit .</span><i></i></button>

        <button class='in-btn' style="--clr:#0FF0FC" onclick="deleteTask(this)" ><span>Delete</span><i></i></button>
        
    `;

    pendingTasksList.appendChild(taskItem);
    taskInput.value = "";
}

function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.add("completed");
    button.parentElement.removeChild(button);
    completedTasksList.appendChild(taskItem);
}

function editTask(button) {
    const taskText = button.parentElement.querySelector("span");
    const newTaskText = prompt("Edit the task:", taskText.textContent);

    if (newTaskText !== null) {
        taskText.textContent = newTaskText;
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.parentElement.removeChild(taskItem);
}
