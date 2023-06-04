class TaskManager {
  constructor() {
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
  showTasks() {
    this.tasks.forEach((task) => {
      console.log(`[${task.id}] ${task.title} - ${task.description}`);
    });
  }
  generateTaskId() {
    return this.tasks.length + 1;
  }
}

class Task {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = false;
  }
}

const taskManager = new TaskManager();

const task1 = new Task(1, "Task 1", "Go shopping at the supermarket!!");
const task2 = new Task(2, "Task 2", "Study programming!!");
taskManager.addTask(task1);
taskManager.addTask(task2);

const taskTitleInput = document.getElementById("taskTitleInput");
const taskDescriptionInput = document.getElementById("taskDescriptionInput");
const addTaskButton = document.getElementById("addTaskButton");

addTaskButton.addEventListener("click", () => {
  const title = taskTitleInput.value;
  const description = taskDescriptionInput.value;

  if (title && description) {
    const task = new Task(taskManager.generateTaskId(), title, description);
    taskManager.addTask(task);
    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
    showTasks();
  }
});

const showTasks = () => {
  const incompleteTaskListDiv = document.getElementById("incompleteTasks");
  const completedTasksDiv = document.getElementById("completedTasks");
  incompleteTaskListDiv.innerHTML = "";
  completedTasksDiv.innerHTML = "";

  taskManager.tasks.forEach((task) => {
    const taskElement = document.createElement("p");
    taskElement.textContent = `[${task.id}] ${task.title} - ${task.description}`;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      taskElement.classList.add("edit-mode");
      showTaskEditor(task, taskElement);
    });
    taskElement.appendChild(editButton);

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete!";
    completeButton.addEventListener("click", () => {
      task.completed = true;
      showTasks();
    });
    taskElement.appendChild(completeButton);

    if (task.completed) {
      completedTasksDiv.appendChild(taskElement);
    } else {
      incompleteTaskListDiv.appendChild(taskElement);
    }
  });
};

const showTaskEditor = (task, taskElement) => {
  const taskEditor = document.getElementById("taskEditor");
  const editTitle = document.getElementById("editTitle");
  const editDescription = document.getElementById("editDescription");
  const saveButton = document.getElementById("saveButton");
  const cancelButton = document.getElementById("cancelButton");

  editTitle.value = task.title;
  editDescription.value = task.description;

  taskEditor.style.display = "block";

  saveButton.addEventListener("click", () => {
    task.title = editTitle.value;
    task.description = editDescription.value;

    taskElement.classList.remove("edit-mode");
    taskEditor.style.display = "none";

    showTasks();
  });

  cancelButton.addEventListener("click", () => {
    taskElement.classList.remove("edit-mode");
    taskEditor.style.display = "none";
  });
};

showTasks();
