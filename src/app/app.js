import displayTasks from './utils/display-task.js';
import CRUD from './utils/crud.js';

const inputAdd = document.querySelector('#add-input');

document.addEventListener('DOMContentLoaded', () => {
  displayTasks();
  const deleteIcon = document.querySelectorAll('.delete-icon');
  deleteIcon.forEach((deleteIcon) => {
    deleteIcon.addEventListener('click', (f) => {
      const tasksIndex = f.target.id;
      CRUD.removeTaskOfList(tasksIndex);
    });
  });
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
