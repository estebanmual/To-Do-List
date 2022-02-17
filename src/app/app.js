import displayTasks from './utils/display-task.js';
import CRUD from './utils/crud.js';

const inputAdd = document.querySelector('#add-input');

displayTasks();

inputAdd.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    CRUD.addTaskToList();
    window.location.reload();
  }
});
