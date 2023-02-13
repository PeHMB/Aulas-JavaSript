//função que adiciona tarefa
function addTask() {
    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if (taskTitle) {
        //clona template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        //adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;


        //remover classes desnecessarias    
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adiciona tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        //adicionar evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function () {
            removeTask(this);
        })
        //limpar texto
        document.querySelector("#task-title").value = "";
    }
}

//função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function (e) {

    e.preventDefault();

    addTask();
});

