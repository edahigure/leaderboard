let toDoList = [ 
    {
        index: 0,
        completed: false,
        description: 'Activity 1'
    },
    {
        index: 1,
        completed: false,
        description: 'Activity 2'
    },
    
]

function printList() {
  console.log(toDoList);
  const list = document.querySelector(".list");

  for(let i = 0; i<2; i++) {
    let newItem = document.createElement('div');
    
    newItem.id =  `item-id-
    ${toDoList[i].index}`;

    newItem.innerHTML = `
    <li class="item"><input type="checkbox" id = "check-${toDoList[i].index}" > <label for="check-${toDoList[i].index}">${toDoList[i].description}</label>
    <i class="fa-solid fa-ellipsis-vertical"></i>
     </li>     
    `;
    list.appendChild(newItem);

  }
  


}

export {printList as default}