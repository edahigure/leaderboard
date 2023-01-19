const toDoList = [
  {
    index: 0,
    completed: false,
    description: 'Activity 1',
  },
  {
    index: 1,
    completed: false,
    description: 'Activity 2',
  },
];

function printList(toDoList) {
  const list = document.querySelector('.list');
  
  for (let i = 0; i < toDoList.length; i += 1) {
    const newItem = document.createElement('div');

    newItem.id = `item-id-
    ${toDoList[i].index}`;

    newItem.innerHTML = `
    <li class="item" id="item-${toDoList[i].index}" >
    <input type="checkbox" id = "check-${toDoList[i].index}" >
     <label for="check-${toDoList[i].index}">${toDoList[i].description}</label>
    <div type ="button" id="edit-${toDoList[i].index}"> <i class="fa-solid fa-ellipsis-vertical"></i> </div>
    
     </li>     
    `;
    list.appendChild(newItem);
  }
}

export { printList, toDoList };