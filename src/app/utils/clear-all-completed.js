import getTasks from './tasks.js';
import displayTasks from './display-task.js';

export default function clearCompletedTasks() {
  const clearButton = document.querySelector('.clear-button');
  clearButton.addEventListener('click', () => {
    const tasks = getTasks();
    const completedTasks = tasks.filter((tasksCompleted) => tasksCompleted.completed === true);
    completedTasks.forEach((element) => {
      tasks.splice(element.index);
      tasks.forEach((el, i) => {
        el.index = i;
      });
      localStorage.clear();
      localStorage.setItem('localTasks', JSON.stringify(tasks));
      displayTasks();
    });
  });
}