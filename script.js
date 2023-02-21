let inputText = document.querySelector("#todo-input");
let todoBtn = document.querySelector("#todo-button");
let todoDiv = document.querySelector(".box");
let todoList = document.querySelector("#todo-list");

// window.addEventListener("mousemove", e =>{

// })

todoBtn.addEventListener("click", e => {
    console.log(inputText.value);
    e.preventDefault();
    let listItem = document.createElement("li");
    let newDiv = document.createElement("div");
    if(inputText.value != ""){
        newDiv.innerText = inputText.value;
        newDiv.className = "box"
        listItem.appendChild(newDiv);
        todoList.appendChild(listItem);
        inputText.value = "";
    }
})