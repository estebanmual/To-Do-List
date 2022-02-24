import getTasks from './tasks.js';

export default function checkboxesFunc() {
  const checkboxes = document.querySelectorAll('.checkbox');
  const tasks = getTasks();

  tasks.forEach((element) => {
    if (element.completed === true) {
      const elementIndex = element.index;
      const taskToAddClass = document.getElementById(`${elementIndex}`);
      taskToAddClass.checked = true;
      taskToAddClass.nextElementSibling.classList.add('checked-box');
    }
  });

  checkboxes.forEach((checkboxes) => {
    checkboxes.addEventListener('change', (g) => {
      if (g.target.checked === true) {
        g.target.nextSibling.classList.add('checked-box');
        tasks.forEach((el) => {
          if (Number(g.target.id) === el.index) {
            el.completed = true;
            localStorage.clear();
            localStorage.setItem('localTasks', JSON.stringify(tasks));
          }
        });
      } else if (g.target.checked === false) {
        g.target.nextSibling.classList.remove('checked-box');
        tasks.forEach((el) => {
          if (Number(g.target.id) === el.index) {
            el.completed = false;
            localStorage.clear();
            localStorage.setItem('localTasks', JSON.stringify(tasks));
          }
        });
      }
    });
  });
}