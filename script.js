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
