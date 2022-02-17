import tasks from './tasks.js';
import threeDots from '../../assets/three-dots.svg';

const taskOrd = tasks.sort(((a, b) => a.index - b.index));

function addTaskToList(task) {
  const tasksList = document.querySelector('.tasks-list');
  const taskElement = document.createElement('li');

  taskElement.innerHTML = `
    <span><input type="checkbox" name="completed-checkbox">${task.description}</span> <img src="${threeDots}" alt="three dots">
    `;

  tasksList.appendChild(taskElement);
}

export default function displayTasks() {
  for (let i = 0; i < taskOrd.length; i += 1) {
    addTaskToList(taskOrd[i]);
  }
}
