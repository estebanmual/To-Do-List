import getTasks from './tasks.js';

export default function checkboxesFunc() {
  const checkboxes = document.querySelectorAll('.checkbox');
  const tasks = getTasks();

  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].completed === true) {
      const elementIndex = tasks[i].index;
      const taskToAddClass = document.getElementById(`${elementIndex}`);
      taskToAddClass.checked = true;
      taskToAddClass.nextElementSibling.classList.add('checked-box');
    }
  }
  checkboxes.forEach((checkboxes) => {
    checkboxes.addEventListener('change', (g) => {
      if (g.target.checked === true) {
        g.target.nextSibling.classList.add('checked-box');
        for (let i = 0; i < tasks.length; i += 1) {
          if (Number(g.target.id) === tasks[i].index) {
            tasks[i].completed = true;
            localStorage.setItem('localTasks', JSON.stringify(tasks));
          }
        }
      } else if (g.target.checked === false) {
        g.target.nextSibling.classList.remove('checked-box');
        for (let i = 0; i < tasks.length; i += 1) {
          if (Number(g.target.id) === tasks[i].index) {
            tasks[i].completed = false;
            localStorage.setItem('localTasks', JSON.stringify(tasks));
          }
        }
      }
    });
  });
}