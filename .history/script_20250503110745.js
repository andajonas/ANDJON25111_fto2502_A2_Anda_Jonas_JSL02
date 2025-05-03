document.addEventListener("DOMContentLoaded", () => {
    // Keyboard shortcut to add task: Shift + A
    document.addEventListener("keydown", (e) => {
      if (e.shiftKey && e.key.toLowerCase() === "a") {
        addNewTask();
      }
    });
  
    function addNewTask() {
      const taskText = prompt("Enter the task:");
      if (!taskText || taskText.trim() === "") {
        alert("Task cannot be empty.");
        return;
      }
  
      let status = "";
      while (true) {
        const input = prompt("Which column? Type: todo, doing, or done");
        if (!input) {
          alert("Status is required.");
          return;
        }
  
        status = input.trim().toLowerCase();
        if (["todo", "doing", "done"].includes(status)) {
          break; // valid status
        } else {
          alert("❌ Invalid status. Please enter 'todo', 'doing', or 'done'.");
        }
      }
  
      const container = document.querySelector(
        `.column-div[data-status="${status}"] .tasks-container`
      );
      const newTask = document.createElement("div");
      newTask.className = "task-div";
      newTask.textContent = taskText;
      container.appendChild(newTask);
  
      updateHeaderCount(status);
  
      if (status === "done") {
        console.log(`✅ Task Completed: ${taskText}`);
      } else {
        console.log(" No tasks completed, let's get to work!");
      }
    }
  
    function updateHeaderCount(status) {
      const container = document.querySelector(
        `.column-div[data-status="${status}"] .tasks-container`
      );
      const count = container.children.length;
  
      const header = document.querySelector(`#${status}Text`);
      if (header) {
        const label = status.toUpperCase();
        header.textContent = `${label} (${count})`;
      }
    }
});
