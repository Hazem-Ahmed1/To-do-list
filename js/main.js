// Theme Var 
let toggle_btn = document.querySelector('#btn0');
let icon = document.querySelector('.theme i');
let info_1 = document.querySelector('.info-1');
let inp = document.querySelector('.inputs input');
const demoTask = document.querySelector('.task')
let themeD = document.querySelector('#btn0 span');

// To do list variables
let addButton = document.querySelector('#btn1');
let input = document.querySelector('#yourvalue');
let container = document.querySelector('.tasks-info');
let bigContainer = document.querySelector(".tasks");

// Variables of Demo 
let mainTask = document.querySelector('.task')
let mainDelete = document.querySelector("#del");
let mainPara = document.querySelector(".the_task")




// For Demo Functions //
mainDelete.onclick = function () {
    container.removeChild(container.firstChild)
}
mainTask.onclick = function () {
    mainPara.classList.toggle("finished")
}

// =====


// =======
addButton.onclick = function () {

    let info = input.value;
    if (!info) {
        alert('Please Enter Your Task');
        return 0;
    }

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    // 
    const taskContent = document.createElement("div");
    taskContent.classList.add("events");
    // 
    const txt = document.createElement("p");
    txt.classList.add('the_task');
    txt.innerText = info;
    //
    const items = document.createElement("div");
    items.classList.add("items");
    //
    const btn_del = document.createElement("button");
    btn_del.classList.add("remove");
    btn_del.innerText = ("Delete");

    //
    const delete_icon = document.createElement("i");
    delete_icon.classList.add("fa-solid");
    delete_icon.classList.add("fa-trash");
    delete_icon.style.marginLeft = "5px";


    // Organize //

    bigContainer.appendChild(container);
    container.appendChild(taskDiv);
    taskDiv.appendChild(taskContent);
    taskContent.appendChild(txt);
    taskDiv.appendChild(items);
    items.appendChild(btn_del);
    btn_del.appendChild(delete_icon);

    //Organize//


    btn_del.addEventListener('click', () => {
        container.removeChild(taskDiv)
    })

    taskDiv.addEventListener('click', () => {
        txt.classList.toggle("finished")
    })

    // if (document.body.classList.contains("dark-bg")) {
    //     taskDiv.classList.add("task-dark")
    // }
    // else {
    //     taskDiv.classList.remove("task-dark")
    // }


}


// =======================Theme=================================


// toggle_btn.addEventListener('click', () => {
//     if (document.body.classList.contains('dark-bg')) {
//         themeD.textContent = ("Light Theme");
//         icon.classList.replace('fa-moon', 'fa-sun');
//     }
//     else {
//         themeD.textContent = ("Dark Theme");
//         icon.classList.replace('fa-sun', 'fa-moon');
//     }

//     document.body.classList.toggle('dark-bg');
//     toggle_btn.classList.toggle('dark-btn');
//     info_1.classList.toggle('dark-info');
//     inp.classList.toggle('dark-input');
//     addButton.classList.toggle('add-dark-btn');
//     bigContainer.classList.toggle('tasks-dark');
//     demoTask.classList.toggle('task-dark');

// })




