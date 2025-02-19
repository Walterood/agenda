let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        tasks.push(task);
        renderTasks();
        taskInput.value = "";
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.setAttribute('data-id', task.id);

        if (task.completed) {
            li.classList.add('completed');
        }

        const actions = document.createElement('div');

        const completeButton = document.createElement('button');
        completeButton.textContent = task.completed ? "Desfazer" : "Concluir";
        completeButton.onclick = () => toggleTaskCompletion(task.id);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Excluir";
        deleteButton.onclick = () => deleteTask(task.id);

        actions.appendChild(completeButton);
        actions.appendChild(deleteButton);
        li.appendChild(actions);

        taskList.appendChild(li);
    });
}

function toggleTaskCompletion(taskId) {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    renderTasks();
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

renderTasks();
