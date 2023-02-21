let inputText = document.querySelector("#todo-input");
let todoBtn = document.querySelector("#todo-button");
let todoDiv = document.querySelector(".box");
let todoList = document.querySelector("#todo-list");


todoBtn.addEventListener("click", e => {
    e.preventDefault();
    if(inputText.value != ""){
        // create <div></div>
        let newDiv = document.createElement("div");
        newDiv.className = "box"
        // create <li></li>
        let listItem = document.createElement("li");
        listItem.classList.add("todo-item");
        newDiv.innerText = inputText.value;
        
        inputText.value = "";
        
        listItem.appendChild(newDiv);
        todoList.appendChild(listItem);
        // check mark button
        const completeBtn = document.createElement("button");
        completeBtn.innerHTML = ' <i class="fas fa-check"></i>';
        completeBtn.classList.add("complete-btn");
        listItem.appendChild(completeBtn);
        // trash button
        const trashBtn = document.createElement("button");
        trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
        trashBtn.classList.add("trash-btn");
        listItem.appendChild(trashBtn);
    }
})

todoList.addEventListener("click", e => {
    let item = e.target;
    console.log(item.parentElement);
    // delete todo box
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", () =>{
            todo.remove();
        })
    }
    // check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
})