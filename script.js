let inputBox = document.querySelector(".input-box");
let button = document.querySelector("button");
let listContainer = document.querySelector(".list-container");
 

let addTask = () =>{
    if(inputBox.value === ''){
        alert("You must write something!")
    }else{
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}    
button.onclick = addTask;

let taskDone = (e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}
listContainer.onclick = taskDone;

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();

let addTaskkeyboard = (e) =>{
    //console.log(e.key );
    if(e.key ===  "Enter"){
        addTask();
    }
}
document.onkeydown = addTaskkeyboard;
