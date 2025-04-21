document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      const taskInput = document.getElementById("new-task-description");
      const taskText = taskInput.value;
  
      if (taskText.trim() === "") return; 
  
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
  
      taskList.appendChild(taskItem);
      form.reset(); 
    });
  });
   
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
  });

  taskItem.appendChild(deleteBtn);

  