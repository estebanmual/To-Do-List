const tasks = [
  {
    index: 0,
    completed: false,
    description: 'Add your first task 0',
  },
  {
    index: 1,
    completed: true,
    description: 'This task is complete 1',
  },
];

const getTasks = () => {
  let localTasks;
  if (localStorage.getItem('localTasks') === null) {
    localTasks = localStorage.setItem('localTasks', JSON.stringify(tasks));
  } else {
    localTasks = JSON.parse(localStorage.getItem('localTasks'));
  }
  return localTasks;
};

export default getTasks;