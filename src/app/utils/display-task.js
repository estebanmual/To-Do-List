import getTasks from './tasks.js';
import threeDots from '../../assets/three-dots.svg';
import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/editIcon.svg';

function addTaskToHTML(task) {
  const tasksList = document.querySelector('.tasks-list');
  const taskElement = document.createElement('li');

  taskElement.innerHTML = `
    <span><input type="checkbox" name="completed-checkbox"><p class="task-description" contenteditable="false">${task.description}</p></span> <span><img src="${editIcon}" class="edit-icon" id="${task.index}" alt="edit icon"><img src="${deleteIcon}" class="delete-icon" id="${task.index}" alt="delete icon"><img src="${threeDots}" alt="three dots"><span>
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