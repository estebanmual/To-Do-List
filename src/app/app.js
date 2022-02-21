import displayTasks from './utils/display-task.js';
import {
  addTaskToList, removeTaskOfList, updateTaskOfList,
} from './utils/crud.js';
import checkboxesFunc from './utils/update-completed.js';
import clearCompletedTasks from './utils/clear-all-completed.js';

displayTasks();
checkboxesFunc();
clearCompletedTasks();
removeTaskOfList();
addTaskToList();
updateTaskOfList();
