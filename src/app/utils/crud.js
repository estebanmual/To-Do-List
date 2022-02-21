import getTasks from './tasks.js';
import displayTasks from './display-task.js';
import checkMark from '../../assets/check-mark.svg';
import editIcon from '../../assets/editIcon.svg';

class Task {
  constructor(index, completed, description) {
    this.index = index;
    this.completed = completed;
    this.description = description;
  }
}

function addTaskToList() {
  const inputAdd = document.getElementById('add-input');
  inputAdd.addEventListener('keypress', (e) => {
    const tasks = getTasks();
    const tasksLength = tasks.length;
    const indexNewTask = tasksLength;
    const completedNewTask = false;
    const task = new Task(indexNewTask, completedNewTask, inputAdd.value);
    if (e.key === 'Enter') {
      if (inputAdd.value !== '') {
        e.preventDefault();
        tasks.push(task);
        localStorage.clear();
        localStorage.setItem('localTasks', JSON.stringify(tasks));
        displayTasks();
        inputAdd.value = '';
      }
    }
  });
}

function removeTaskOfList() {
  const deleteIcon = document.querySelectorAll('.delete-icon');
  deleteIcon.forEach((element) => {
    element.addEventListener('click', (f) => {
      const tasks = getTasks();
      const tasksIndex = f.target.id;
      f.preventDefault();
      tasks.splice(tasksIndex, 1);
      tasks.forEach((el, i) => {
        el.index = i;
      });
      localStorage.clear();
      localStorage.setItem('localTasks', JSON.stringify(tasks));
      displayTasks();
    });
  });
}

function updateTaskOfList() {
  const taskDescriptionEdit = document.querySelectorAll('.edit-icon');
  taskDescriptionEdit.forEach((element) => {
    element.addEventListener('click', (e) => {
      const taskToEdit = e.target.parentElement.previousElementSibling.lastChild;
      taskToEdit.setAttribute('contenteditable', true);
      e.target.src = checkMark;
      e.target.className = 'saveEditTask';
      const taskEditSave = document.querySelectorAll('.saveEditTask');
      taskEditSave.forEach((ele) => {
        ele.addEventListener('click', (f) => {
          const taskToSave = f.target.parentElement.previousElementSibling.lastChild;
          const descriptionToSave = f.target.parentElement.previousElementSibling.textContent;
          const saveId = Number(f.target.id);
          const tasks = getTasks();
          tasks.forEach((el) => {
            if (saveId === el.index) {
              el.description = descriptionToSave;
              localStorage.clear();
              localStorage.setItem('localTasks', JSON.stringify(tasks));
              displayTasks();
              taskToSave.setAttribute('contenteditable', false);
            }
          });
          f.target.src = editIcon;
          f.target.className = 'edit-icon';
        });
      });
    });
  });
}

export {
  addTaskToList, removeTaskOfList, updateTaskOfList,
};