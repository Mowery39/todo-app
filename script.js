

const getUserInput = document.getElementById("typingTasks");
const getBtn1 = document.getElementById("addTask");
const getList = document.getElementById("tasks");

function mainCode() {
    console.log("clicked");
    const taskText = getUserInput.value;
    console.log(taskText);
    if (taskText.trim() === "")  return;

    const newTask = document.createElement("li");
    newTask.classList.add("task-item");
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", function() {
        newTask.remove();
    })

    newTask.textContent = taskText;
    deleteBtn.textContent = "Delete";
    newTask.appendChild(deleteBtn);
    getList.appendChild(newTask);
    getUserInput.value = "";   
}

getBtn1.addEventListener("click", function() {
    mainCode();
})

getUserInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.key === "Space") {
        mainCode();
    }
})