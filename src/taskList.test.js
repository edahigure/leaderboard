const taskList = require('./taskList');

console.log("Here Ok");

let retDataTemp = [];

if (localStorage.taksListStorage !== undefined) {
  retDataTemp = JSON.parse(localStorage.taksListStorage);
}

const myTaskList = new taskList(retDataTemp);


describe( 'Testing TaskList', () => {
    let retDataTemp = [];
    test( 'Add Item', ()=>{
        expect(myTaskList.id).toBe(0);
    });
 }
 
)