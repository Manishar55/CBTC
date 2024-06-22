//Event: any specific interaction or action that happens in the system is called an event
//when an event happens the system will fire a signal that some event just occured

//once you recieve a signal you can react to that signal by doing a particular task
console.log("welcome to my todo app");
let getTodoButton=document.getElementById('get-todo');

getTodoButton.addEventListener("click", ()=>{
    console.log("clicked");
});
getTodoButton.addEventListener("mouseover", ()=>{
    console.log("mousehover");
});
getTodoButton.addEventListener("mouseout", ()=>{
    console.log("mouseout");
});
getTodoButton.onclick=()=>{
    console.log("onclick");
}
function clickbtn(){
    console.log("save clicked");
}
// getTodoButton.addEventListener("click", handler)
// function handler(){
//     console.log("clicked");
// }



























































