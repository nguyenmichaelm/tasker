//grabs element in html
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//function to handle when even is triggered
var createTaskHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  //create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  //create div to hold task info and add to list item 
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info"; 

  //addHTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
  listItemEl.appendChild(taskInfoEl);

  //add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

// add event handler to formEl and calls function
formEl.addEventListener("submit", createTaskHandler);