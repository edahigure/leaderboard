import './style.css';

import { ListTasks, retData } from './taskList.js';

const myTask = new ListTasks(retData);

myTask.inform();
