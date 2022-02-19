import displayTasks from './utils/display-task.js';
import CRUD from './utils/crud.js';
import checkMark from '../assets/check-mark.svg';
import editIcon from '../assets/editIcon.svg';
import checkboxesFunc from './utils/update-completed.js';

document.addEventListener('DOMContentLoaded', () => {
  displayTasks();
  checkboxesFunc();
  const inputAdd = document.querySelector('#add-input');
  inputAdd.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (inputAdd.value === '') {
        return false;
      }
      e.preventDefault();
      CRUD.addTaskToList();
      inputAdd.value = '';
      window.location.reload();
    }
    return true;
  });
  const deleteIcon = document.querySelectorAll('.delete-icon');
  deleteIcon.forEach((deleteIcon) => {
    deleteIcon.addEventListener('click', (f) => {
      const tasksIndex = f.target.id;
      CRUD.removeTaskOfList(tasksIndex);
      window.location.reload();
    });
  });
  const taskDescriptionEdit = document.querySelectorAll('.edit-icon');
  taskDescriptionEdit.forEach((element) => {
    element.addEventListener('click', (e) => {
      const taskToEdit = e.target.parentElement.previousElementSibling.lastChild;
      CRUD.updateTaskOfList(taskToEdit);
      e.target.src = checkMark;
      e.target.className = 'saveEditTask';
      const taskEditSave = document.querySelectorAll('.saveEditTask');
      taskEditSave.forEach((element) => {
        element.addEventListener('click', (f) => {
          const taskToSave = f.target.parentElement.previousElementSibling.lastChild;
          const descriptionToSave = f.target.parentElement.previousElementSibling.textContent;
          const saveId = Number(f.target.id);
          CRUD.saveEditTask(saveId, descriptionToSave, taskToSave);
          f.target.src = editIcon;
          f.target.className = 'edit-icon';
          window.location.reload();
        });
      });
    });
  });
});
