import './style.css';

let data= {alfa: 1,beta: 2,gamma:3};

const printList = (data) => {
    const toDoList = data;
    const keys= Object.keys(data);
    const values= Object.values(data);

   
    const list = document.querySelector('.list');
    
    for (let i = 0; i < keys.length; i += 1) {
      const newItem = document.createElement('li');
      newItem.className='item';
       let str = `    
        <div > ${keys[i]} : </div>  <div> ${data[keys[i]]} </div>  
      `;
      console.log(str);
      newItem.innerHTML = str;
      list.appendChild(newItem);
    }
  }

  printList(data);