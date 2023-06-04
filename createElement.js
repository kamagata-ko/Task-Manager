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

/**-------------------------------------------- */

const taskEditor = document.createElement("div");
taskEditor.id = "taskEditor";

const taskEditorHeadline = document.createElement("h2");
taskEditorHeadline.innerHTML = "Task editor";
taskEditor.appendChild(taskEditorHeadline);

const editTitle = document.createElement("input");
editTitle.type = "text";
editTitle.id = "editTitle";
editTitle.placeholder = "Title";
taskEditor.appendChild(editTitle);

const editDescription = document.createElement("textarea");
editDescription.id = "editDescription";
editDescription.placeholder = "Description";
taskEditor.appendChild(editDescription);

const saveButton = document.createElement("button");
saveButton.id = "saveButton";
saveButton.textContent = "Save";
taskEditor.appendChild(saveButton);

const cancelButton = document.createElement("button");
cancelButton.id = "cancelButton";
cancelButton.textContent = "Cancel";
taskEditor.appendChild(cancelButton);

body.append(taskEditor);
