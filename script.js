function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please Enter A Valid Task");
        return;
    }
    
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.onclick = () => span.classList.toggle("Completed");
    
    const delBtn = document.createElement("Button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}