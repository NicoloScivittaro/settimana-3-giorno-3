document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    addTaskBtn.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        createTask(taskText);
        taskInput.value = '';
      }
    });
  
    function createTask(text) {
      const li = document.createElement('li');
      li.className = 'task-item';
      li.textContent = text;
  
      li.addEventListener('click', function() {
        li.classList.toggle('completed');
      });
  
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
      });
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }
  });