//função que adiciona tarefa
function addTask(){
    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle){
        //clona template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        console.log(newTask);

        //adiciona titulo
        newTask.querySelector(".task-title")

    }

}


//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function (e) {
    
    e.preventDefault();

    addTask();
});