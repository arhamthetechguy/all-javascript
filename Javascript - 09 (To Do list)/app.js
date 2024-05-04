const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const allTasks = document.querySelector(".tasks");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!taskInput.value){
        alert("Please add a task first");
        return;
    }

    // creating task div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("content");
    taskDiv.style.marginBottom = "5px";
    taskDiv.style.borderRadius = "3px";
    allTasks.appendChild(taskDiv);

    // creating input field
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.value = taskInput.value;
    newInput.setAttribute("readonly", "readonly");
    taskDiv.appendChild(newInput);

    // creating actions div
    const actions = document.createElement("div");
    actions.classList.add("actions");

    // creating edit button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    actions.appendChild(editBtn);

    // creating delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    actions.appendChild(deleteBtn);

    taskDiv.appendChild(actions);


    editBtn.addEventListener("click", (e) => {
        if (editBtn.innerText.toLocaleLowerCase() === "edit"){
            newInput.removeAttribute("readonly");
            newInput.focus();
            editBtn.innerText = "Save";
        } else {
            editBtn.innerText = "Edit";
            newInput.setAttribute("readonly", "readonly");
        }
    });

    deleteBtn.addEventListener("click", (e) => {
        allTasks.removeChild(taskDiv);
    })

    taskInput.value = "";
});