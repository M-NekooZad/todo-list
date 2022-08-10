let $ = document;
let themeBtn = $.querySelector(".theme_icon");
let changeThemeTtext = $.querySelector(".change_theme_text");
let addBtn = $.querySelector(".input_btn");
let inputTitle = $.querySelector(".input_title");
let inputElem = $.querySelector(".input_text");
let todo_ul = $.querySelector(".todo_ul");
let form = $.querySelector(".form");

let dayFlag = true;

function addTodo(newTodoValue) {
  let newLi = $.createElement("li");
  newLi.className = "todo_li";

  let newSpan = $.createElement("span");
  newSpan.className = "todo_span";
  newSpan.innerHTML = newTodoValue;
  console.log(newSpan);

  let newBeforIcon = $.createElement("i");
  newBeforIcon.className = "check_icon fas fa-paperclip";

  let newTrashIcon = $.createElement("i");
  newTrashIcon.className = "icon far fa-trash-alt";

  newTrashIcon.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });

  newLi.append(newBeforIcon, newSpan, newTrashIcon);
  todo_ul.append(newLi);
  console.log(newLi);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

themeBtn.addEventListener("click", function () {
  if (dayFlag) {
    $.body.style.backgroundImage = "url(./night.jpg)" ;
    $.body.style.backgroundSize = "cover";
    dayFlag = false;
    changeThemeTtext.innerHTML = "light mode";
    changeThemeTtext.style.color = "yellow";
    themeBtn.setAttribute("class", "sun_icon fas fa-sun");
    inputTitle.style.color = "#ff8300";
    addBtn.style.color = "#fff"
  } else {
    themeBtn.setAttribute("class", "theme_icon fas fa-moon");
    inputTitle.style.color = "black";
    changeThemeTtext.style.color = "black";
    dayFlag = true;
    $.body.style.backgroundImage = "url(./day.jpg)";
    addBtn.style.color = "black"
  }
});

inputElem.addEventListener("keydown", function (event) {
  let newTodoValue = event.target.value.trim();

  if (event.keyCode === 13) {
    if (newTodoValue) {
      inputElem.value = "";
      addTodo(newTodoValue);
    }
  }
});

addBtn.addEventListener("click", function () {
  let newTodoValue = inputElem.value.trim();
  if (newTodoValue) {
    inputElem.value = "";
    addTodo(newTodoValue);
  }
});
