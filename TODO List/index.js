let todoDataSection=document.getElementById("todo-data");
let saveButton=document.getElementById("save-todo");
let todoInputBar=document.getElementById("todo-input-bar");
let todos=[];

todoInputBar.addEventListener("keyup", function toggleSaveButton(){
    let todoText=todoInputBar.value;
    console.log(todoText);
    if(todoText.length==0){
        if(saveButton.classList.contains("disabled"))return;
        console.log("adding disabled");
        saveButton.classList.add("disabled");
    }
    else if(saveButton.classList.contains("disabled")){
        saveButton.classList.remove("disabled");
    }
});
saveButton.addEventListener("click", function getTextAndAddTodo(){
    let todoText=todoInputBar.value;
    if(todoText.length==0)return;
    todos.push(todoText);
    addTodo(todoText, todos.length);
    todoInputBar.value='';
})

function removeTodo(event){
    event.target.parentElement.parentElement.parentElement.remove();
    
}
function finishTodo(event){
    let finishedButtonPressed = event.target;
    let indexTobeFinished = Number(finishedButtonPressed.getAttribute("todo-idx"));

    // Toggling Functionality 
    if(todos[indexTobeFinished].status == "Completed"){
        todos[indexTobeFinished].status = "In Progress";
        todos[indexTobeFinished].finishedButtonText = "Finish";
    }else{
        todos[indexTobeFinished].status = "Completed";
        todos[indexTobeFinished].finishedButtonText = "Undo";
    }
   // todos[indexTobeFinished].status = "Finished";

    // finishedButton.textContent = "Undo"
    // Once finsh this we have to re render the todo list
    // todos[indexTobeFinished].finishedButtonText = 'Undo';

     todos.sort((a,b)=>{
        if(a.status == 'Completed'){
            return 1;
            // a comes after b
        }
        return -1;
        // b comes after a 
     })
    reRenderTodos();

}
function addTodo(todoData, todoCount){
    let rowDiv=document.createElement("div");
    let todoItem=document.createElement("div");
    let todoNumber=document.createElement("div");
    let todoDetail=document.createElement("div");
    let todoStatus=document.createElement("div");
    let todoActions=document.createElement("div");
    let deleteButton=document.createElement("button");
    let finishedButton=document.createElement("button");
    let hr=document.createElement("hr");

    //adding classes
    rowDiv.classList.add("row");
    todoItem.classList.add("todo-item", "d-flex", "flex-row", "justify-content-between" , "align-items-center");
    todoNumber.classList.add("todo-no");
    todoDetail.classList.add("todo-detail", "text-muted");
    todoStatus.classList.add("todo-status", "text-muted");
    todoActions.classList.add("todo-action", "d-flex", "justify-content-start", "gap-2");
    deleteButton.classList.add("btn", "btn-danger", "delete-todo");
    finishedButton.classList.add("btn", "btn-success", "finish-todo");
    

    deleteButton.onclick=removeTodo;

    todoNumber.textContent=`${todoCount}`;
    todoDetail.textContent=todoData; //sets the todo text sent from the input element
    todoStatus.textContent="In progress";
    deleteButton.textContent="Delete";
    finishedButton.textContent="Finished";

    todoActions.appendChild(deleteButton);
    todoActions.appendChild(finishedButton);

    todoItem.appendChild(todoNumber);
    todoItem.appendChild(todoDetail);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoActions);

    rowDiv.appendChild(todoItem);
    rowDiv.appendChild(hr);

    todoDataSection.appendChild(rowDiv);
}