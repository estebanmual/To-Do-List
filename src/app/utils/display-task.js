import getTasks from './tasks.js';
import threeDots from '../../assets/three-dots.svg';

function addTaskToHTML(task) {
  const tasksList = document.querySelector('.tasks-list');
  const taskElement = document.createElement('li');

  taskElement.innerHTML = `
    <span><input type="checkbox" name="completed-checkbox">${task.description}</span> <img src="${threeDots}" alt="three dots">
    `;

  tasksList.appendChild(taskElement);
}

export default function displayTasks() {
  const tasks = getTasks();
  const tasksList = document.querySelector('.tasks-list');
  tasksList.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    addTaskToHTML(tasks[i]);
  }
}
