// ===============================
// Gerenciador de Tarefas Simples
// ===============================

    let tasks = [];
    function loadTasks() {
    const data = localStorage.getItem("tasks");
    if (data) {
        tasks = JSON.parse(data);
    }
    }

    function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
    function addTask(title) {
    const task = {
        id: Date.now(),
        title: title,
        completed: false
    };

    tasks.push(task);
    saveTasks();
    console.log("Tarefa adicionada:", task.title);
}
    function toggleTask(id) {
    for (let task of tasks) {
        if (task.id === id) {
        task.completed = !task.completed;
        console.log("Tarefa atualizada:", task.title);
        break;
        }
    }
    saveTasks();
}

function removeTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  console.log("Tarefa removida:", id);
}

function showTasks() {
  console.clear();
  for (let task of tasks) {
    console.log(
      `${task.completed ? "✔️" : "❌"} ${task.title}`
    );
  }
}

// ===============================
// Testando o código
// ===============================

    loadTasks();

    addTask("Estudar JavaScript");
    addTask("Fazer exercícios");
    showTasks();

    toggleTask(tasks[0].id);
    showTasks();

    removeTask(tasks[1].id);
    showTasks();
