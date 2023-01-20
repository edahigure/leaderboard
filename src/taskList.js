export class ListTasks {
  taskListArr;

  id;

  constructor(taskListArr) {
    this.taskListArr = taskListArr; // initial array from the local storage

    this.id = 0;

    this.printList(taskListArr);

    this.id = taskListArr.length - 1;

    const addEvent = document.querySelector('#add-event');
    addEvent.addEventListener('click', () => this.addTask());

    const enterAddEvent = document.querySelector('#new-item');
    enterAddEvent.addEventListener('keypress', (e) => this.enterAddTask(e));

    this.initEvents();
  }

  enterAddTask(event) {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }

  addTask = () => {
    const list = document.querySelector('.list');
    const newItem = document.querySelector('#new-item');

    this.id += 1;
    this.taskListArr.push({ index: this.id, completed: false, description: newItem.value });
    const newTask = document.createElement('div');
    const i = this.id;

    newTask.id = `item-id-${i}`;

    newTask.innerHTML = `
    <li class="item" id="item-${i}">
        <input type="checkbox" id = "check-${i}" >

        <label for="check-${i}">
            <input type="text" id="label-${i}" value="${this.taskListArr[i].description}">    
        </label>

        <div type ="button" id="edit-${i}""> 
            <i class="fa-solid fa-ellipsis-vertical" ></i> 
        </div>

        <div type ="button" id="trash-${i}">      
            <i class="fa-solid fa-trash"></i>
        </div>

     </li>     
    `;

    list.appendChild(newTask);

    const editLabel = document.querySelector(`#label-${i}`);
    editLabel.addEventListener('change', () => this.edit(editLabel.id));

    const edit = document.querySelector(`#edit-${i}`);
    edit.addEventListener('click', () => {
      edit.style.display = 'none';
      document.querySelector(`#trash-${i}`).style.display = 'block';
      const editItem = document.querySelector(`#item-${i}`);
      editItem.style.backgroundColor = 'lightyellow';
    });

    const trashItem = document.querySelector(`#trash-${i}`);
    trashItem.addEventListener('click', () => this.trash(trashItem.id));


    const str = JSON.stringify(this.taskListArr);
    localStorage.setItem('taksListStorage', str);

    newItem.value = '';
  }

  edit = (itemId) => {
    const id = itemId.split('-')[1];

    const editLabel = document.querySelector(`#label-${id}`);

    this.taskListArr[id].description = editLabel.value;
    const str = JSON.stringify(this.taskListArr);
    localStorage.setItem('taksListStorage', str);

    document.querySelector(`#trash-${id}`).style.display = 'none';
    document.querySelector(`#edit-${id}`).style.display = 'block';

    const editItem = document.querySelector(`#item-${id}`);
    editItem.style.backgroundColor = 'white';
  }

  trash = (itemId) => {
    const id = itemId.split('-')[1];

    const result = this.taskListArr.filter((item) => item.index !== Number(id));
    this.taskListArr = result;

    for (let i = 0; i < result.length; i += 1) {
      result[i].index = i;
    }

    const str = JSON.stringify(result);
    localStorage.setItem('taksListStorage', str);

    document.querySelector('.list').innerHTML = '';

    this.id = result.length - 1;
    this.printList(result);
    this.initEvents();
  }

  printList = () => {
    const toDoList = this.taskListArr;
    const list = document.querySelector('.list');

    for (let i = 0; i < toDoList.length; i += 1) {
      const newItem = document.createElement('div');

      newItem.id = `item-id-${i}`;

      newItem.innerHTML = `
      <li class="item" id="item-${i}" >
      <input type="checkbox" id = "check-${i}" >
          <label for="check-${i}">     
          <input type="text" id="label-${i}" value="${toDoList[i].description}">
          </label>
          <div type ="button" id="edit-${i}">      
              <i class="fa-solid fa-ellipsis-vertical" ></i>    
          </div>
  
          <div type ="button" id="trash-${i}">      
              <i class="fa-solid fa-trash"></i>
          </div>
      
      
       </li>     
      `;
      list.appendChild(newItem);
    }
  }

  initEvents = () => {
    for (let i = 0; i < this.taskListArr.length; i += 1) {
      const editLabel = document.querySelector(`#label-${i}`);
      editLabel.addEventListener('change', () => this.edit(editLabel.id));

      const edit = document.querySelector(`#edit-${i}`);
      edit.addEventListener('click', () => {
        edit.style.display = 'none';
        document.querySelector(`#trash-${i}`).style.display = 'block';
        const editItem = document.querySelector(`#item-${i}`);
        editItem.style.backgroundColor = 'lightyellow';
      });

      const trashItem = document.querySelector(`#trash-${i}`);
      trashItem.addEventListener('click', () => this.trash(trashItem.id));
    }
  }

  inform = () => 0
}

let retDataTemp = [];

if (localStorage.taksListStorage !== undefined) {
  retDataTemp = JSON.parse(localStorage.taksListStorage);
}

export const retData = retDataTemp;

export const myTask = new ListTasks(retData);
