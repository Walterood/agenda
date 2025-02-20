document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskAction);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Por favor, adicione uma tarefa.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.className = 'task-item';
        listItem.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete-button">Completar</button>
                <button class="delete-button">Apagar</button>
            </div>
        `;

        taskList.appendChild(listItem);
        taskInput.value = '';
    }

    function handleTaskAction(e) {
        if (e.target.classList.contains('complete-button')) {
            const taskItem = e.target.closest('.task-item');
            taskItem.classList.toggle('completed');
        } else if (e.target.classList.contains('delete-button')) {
            const taskItem = e.target.closest('.task-item');
            taskList.removeChild(taskItem);
        }
    }
});
