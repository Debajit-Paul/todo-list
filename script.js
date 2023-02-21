let inputText = document.querySelector("#todo-input");
let todoBtn = document.querySelector("#todo-button");
let todoDiv = document.querySelector(".box");
let todoList = document.querySelector("#todo-list");


todoBtn.addEventListener("click", e => {
    console.log(inputText.value);
    e.preventDefault();
    let listItem = document.createElement("li");
    let newDiv = document.createElement("div");
    newDiv.innerText = inputText.value;
    newDiv.className = "box"
    listItem.appendChild(newDiv);
    todoList.appendChild(listItem);
    inputText.value = "";
})