let newTask = document.getElementById("task-value");
let form = document.querySelector("form");
let incompleteTask = document.querySelector(".incomplete-task ul");
let completeTask = document.querySelector(".complete-task ul");

// function
let createTask = function (task) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");

  label.innerText = task;
  checkBox.type = "checkbox";

  li.appendChild(checkBox);
  li.appendChild(label);

  return listItem;
};

let addTask = function (event) {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  incompleteTask.appendChild(listItem);
  newTask.value = "";
};
