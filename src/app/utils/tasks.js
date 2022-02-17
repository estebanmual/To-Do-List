const tasks = [
  {
    index: 0,
    completed: false,
    description: 'Add your first task 0',
  },
  {
    index: 1,
    completed: false,
    description: 'This task is complete 1',
  },
  {
    index: 2,
    completed: false,
    description: 'Add your first task 2',
  },
  {
    index: 3,
    completed: false,
    description: 'This task is complete 3',
  },
  {
    index: 4,
    completed: false,
    description: 'Add your first task 4',
  },
  {
    index: 5,
    completed: false,
    description: 'This task is complete 5',
  },
  {
    index: 6,
    completed: false,
    description: 'Add your first task 6',
  },
  {
    index: 7,
    completed: false,
    description: 'This task is complete 7',
  },
];

const getTasks = function () {
  let localTasks;
  if (localStorage.getItem('localTasks') === null) {
    localTasks = localStorage.setItem('localTasks', JSON.stringify(tasks));
  } else {
    localTasks = JSON.parse(localStorage.getItem('localTasks'));
  }
  return localTasks;
};

export default getTasks;