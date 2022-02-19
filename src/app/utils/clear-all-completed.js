import getTasks from './tasks.js';
import CRUD from './crud.js';

export default function clearCompletedTasks() {
  const clearButton = document.querySelector('.clear-button');
  const tasks = getTasks();
  clearButton.addEventListener('click', () => {
    const completedTasks = tasks.filter((tasksCompleted) => tasksCompleted.completed === true);
    for (let i = 0; i < completedTasks.length; i += 1) {
      const indexOfCompletedTask = completedTasks[i].index;
      CRUD.removeTaskOfList(indexOfCompletedTask);
    }
    window.location.reload();
  });
}