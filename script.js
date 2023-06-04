const body = document.querySelector("body");

const headline = document.createElement("h1");
headline.innerHTML = "Task Manager App";

const incompleteTasksHeadline = document.createElement("h2");
incompleteTasksHeadline.innerHTML = "Incomplete Tasks";

const incompleteTasks = document.createElement("div");
incompleteTasks.id = "incompleteTasks";

const completedTasksHeadline = document.createElement("h2");
completedTasksHeadline.innerHTML = "Completed Tasks";

const completedTasks = document.createElement("div");
completedTasks.id = "completedTasks";

const div_element = document.createElement("div");
div_element.id = "taskList";

body.append(headline);
body.append(incompleteTasksHeadline);
body.append(incompleteTasks);
body.append(completedTasksHeadline);
body.append(completedTasks);
body.append(div_element);
