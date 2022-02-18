import getTasks from './tasks.js';
import displayTasks from './display-task.js';

function Task(index, completed, description) {
  this.index = index;
  this.completed = completed;
  this.description = description;
}

export default class CRUD {
  static addTaskToList() {
    const tasks = getTasks();
    const tasksLength = tasks.length;
    const descriptionNewTask = document.querySelector('.add-input').value;
    const indexNewTask = tasksLength;
    const completedNewTask = false;
    const task = new Task(indexNewTask, completedNewTask, descriptionNewTask);
    tasks.push(task);
    localStorage.clear();
    localStorage.setItem('localTasks', JSON.stringify(tasks));
    displayTasks();
  }

  static removeTaskOfList(indexRemove) {
    const tasks = getTasks();
    tasks.splice(indexRemove, 1);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i;
    }
    localStorage.setItem('localTasks', JSON.stringify(tasks));
    displayTasks();
  }
}