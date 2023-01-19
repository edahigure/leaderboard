import { printList } from './create_list.js';

export class ListTasks {
  taskListArr;
  id;

  constructor(taskListArr) {
    this.taskListArr = taskListArr; // initial array from the local storage
    if (taskListArr.length - 1 > 0) {
      this.id = taskListArr.length - 1;
    } else {
      this.id = 0;
    }
    
    
    printList(taskListArr);    

    const addEvent = document.querySelector('#add-event');
    addEvent.addEventListener('click', () => this.addTask());

    const enterAddEvent = document.querySelector('#new-item');
    enterAddEvent.addEventListener('keypress', (e) => this.enterAddTask(e));

    for(let i=0;i<taskListArr.length;i++){
        let editNew = document.querySelector(`#edit-${this.taskListArr[i].index}`);
        console.log(editNew);
        editNew.addEventListener('click',() => this.edit(editNew.id) );
    }

  }

  enterAddTask(event) {
    if (event.key === "Enter") {        
        this.addTask();
      }
  }
  addTask() {
    const list = document.querySelector('.list');
    const newItem = document.querySelector('#new-item');
    this.id += 1;
    this.taskListArr.push({ index: this.id, completed: false, description: newItem.value });        

    const newTask = document.createElement('div');
    let i = this.id;
    newTask.id = `item-id-
    ${this.taskListArr[i].index}`;

    newTask.innerHTML = `
    <li class="item" id="item-${i}">
    <input type="checkbox" id = "check-${this.taskListArr[i].index}" >
    <label for="check-${this.taskListArr[i].index}">${this.taskListArr[i].description}</label>
    <div type ="button" id="edit-${this.taskListArr[i].index}"> 
    <i class="fa-solid fa-ellipsis-vertical" ></i> 
        </div>
     </li>     
    `;
    list.appendChild(newTask);

    
    const editNew = document.querySelector(`#edit-${this.taskListArr[i].index}`);
    console.log(editNew);
    editNew.addEventListener('click',() => this.edit(editNew.id) );
    
    const str = JSON.stringify(this.taskListArr);
    localStorage.setItem('taksListStorage', str);    
  }

  edit = (itemId) =>  {
    const id = itemId.split('-')[1];
    console.log(id);    
    const editItem = document.querySelector(`#item-${id}`);
    editItem.style.backgroundColor = "lightyellow"
    
  }
}

let retDataTemp = [];

if (localStorage.taksListStorage !== undefined) {
  retDataTemp = JSON.parse(localStorage.taksListStorage);
}

export const retData = retDataTemp;
