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
}

class Task {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

const taskManager = new TaskManager();

const task1 = new Task(1, "タスク１", "スーパーへ買い物に行く");
const task2 = new Task(2, "タスク２", "プログラミングを勉強する");
taskManager.addTask(task1);
taskManager.addTask(task2);

// taskManager.showTasks();

// taskManager.deleteTask(1);

// taskManager.showTasks();
