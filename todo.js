let tasks = [];

document.addEventListener("DOMContentLoaded", () => {
  const stored = JSON.parse(localStorage.getItem("tasks"));
  if (stored) tasks = stored;
  updateUI();
});

function saveTasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(){
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if(text){
    tasks.push({ text, completed:false });
    input.value = "";
    updateUI();
  }
}

function toggleTask(index){
  tasks[index].completed = !tasks[index].completed;
  updateUI();
}

function deleteTask(index){
  tasks.splice(index,1);
  updateUI();
}

function updateUI(){
  const list = document.getElementById("task-list");
  list.innerHTML = "";

  tasks.forEach((task,i)=>{
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="taskItem">
        <div class="task ${task.completed ? "completed":""}">
          <input type="checkbox" ${task.completed?"checked":""} 
          onclick="toggleTask(${i})"/>
          <p>${task.text}</p>
        </div>
        <div class="icons">
          <img src="delete.png" onclick="deleteTask(${i})"/>
        </div>
      </div>
    `;
    list.appendChild(li);
  });

  const completed = tasks.filter(s=>s.completed).length;
  const total = tasks.length;

  document.getElementById("numbers").innerText = `${completed} / ${total}`;
  document.getElementById("progress").style.width =
    total ? `${(completed/total)*100}%` : "0%";

  saveTasks();

  if(total && completed === total) blastConfetti();
}

document.getElementById("newTask").addEventListener("click",(e)=>{
  e.preventDefault();
  addTask();
});

function blastConfetti(){
  confetti({ particleCount: 150, spread: 70 });
}

