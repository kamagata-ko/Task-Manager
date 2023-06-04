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

const revertButton_element = document.createElement("button");
revertButton_element.id = "revertIncompleteButton";
revertButton_element.textContent = "revert to incomplete";
revertButton_element.style.display = "none";
taskEditor.appendChild(revertButton_element);

body.append(taskEditor);

/**-------------------------------------------- */

const taskForm = document.createElement("div");
taskForm.id = "taskForm";
const taskFormHeadline = document.createElement("h2");
taskFormHeadline.innerHTML = "Add Task Form";
taskForm.appendChild(taskFormHeadline);

const taskTitleInput_element = document.createElement("input");
taskTitleInput_element.type = "text";
taskTitleInput_element.id = "taskTitleInput";
taskTitleInput_element.placeholder = "Title";
taskForm.appendChild(taskTitleInput_element);

const taskDescriptionInput_element = document.createElement("textarea");
taskDescriptionInput_element.id = "taskDescriptionInput";
taskDescriptionInput_element.placeholder = "Description";
taskForm.appendChild(taskDescriptionInput_element);

const addTaskButton_element = document.createElement("button");
addTaskButton_element.id = "addTaskButton";
addTaskButton_element.textContent = "Add";
taskForm.appendChild(addTaskButton_element);

body.append(taskForm);
