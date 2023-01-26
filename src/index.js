import './style.css';

import { ListTasks } from './taskList.js';

let retDataTemp = [];

if (localStorage.taksListStorage !== undefined) {
  retDataTemp = JSON.parse(localStorage.taksListStorage);
}

export const myTask = new ListTasks(retDataTemp);

myTask.inform();
