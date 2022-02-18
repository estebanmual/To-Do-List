import displayTasks from './utils/display-task.js';
import CRUD from './utils/crud.js';

const inputAdd = document.querySelector('#add-input');

document.addEventListener('DOMContentLoaded', () => {
  displayTasks();
});

inputAdd.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (inputAdd.value === '') {
      return false;
    }
    e.preventDefault();
    CRUD.addTaskToList();
    inputAdd.value = '';
  }
  return true;
});
