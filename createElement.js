const body = document.querySelector("body");

const container = document.createElement("div");
container.className = "container";
body.append(container);

/**-------------------------------------------- */

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

container.append(headline);
container.append(incompleteTasksHeadline);
container.append(incompleteTasks);
container.append(completedTasksHeadline);
container.append(completedTasks);
container.append(div_element);

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
saveButton.className = "btn btn-success mr-2";
saveButton.textContent = "Save";
taskEditor.appendChild(saveButton);

const cancelButton = document.createElement("button");
cancelButton.id = "cancelButton";
cancelButton.className = "btn btn-secondary mr-2";
cancelButton.textContent = "Cancel";
taskEditor.appendChild(cancelButton);

const revertButton_element = document.createElement("button");
revertButton_element.id = "revertIncompleteButton";
revertButton_element.className = "btn btn-info mr-2";
revertButton_element.textContent = "revert to incomplete";
revertButton_element.style.display = "none";
taskEditor.appendChild(revertButton_element);

container.append(taskEditor);

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
addTaskButton_element.className = "btn btn-primary mr-2";
addTaskButton_element.textContent = "Add";
taskForm.appendChild(addTaskButton_element);

container.append(taskForm);
