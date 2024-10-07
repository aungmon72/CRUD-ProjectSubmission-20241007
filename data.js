
let todos = []; // store all the todos
let calories = [];
let caloriesSum = [];
let caloriesMinimum = 0;
let caloriesMaximum = 0;
let caloriesTotal   = 0;
let caloriesMinMaxSumming = [0,0,0]

let axioRetrieveURL   = "https://api.jsonbin.io/v3/b/66ffcd0bacd3cb34a8910735/latest"
let axioAddURL        = "https://api.jsonbin.io/v3/b/66ffcd0bacd3cb34a8910735"

let axioDeleteURL   = "https://api.jsonbin.io/v3/b/66ff7731e41b4d34e43cac05"
axioDeleteURL       =  "file-to-delete.json" 

function addTodo(todos, name, urgency, calories, summing) {
  let newTodo = {
    id: Math.floor(Math.random() * 100 + 1),
    name: name,
    urgency: urgency,
    calories: calories,
    summing: summing
  };
  todos.push(newTodo);
}

function modifyTask(todos, id,  newName, newUrgency, newCalories, newSumming) {
    // create the new task
    let modifiedTask = {
        "id"        : id,
        "name"      : newName,
        "urgency"   : newUrgency,
        "calories"  : newCalories,
        "summing"   : newSumming
    }

    // get the index of the task we want to replace
    const indexToReplace = todos.findIndex(function(t){
        return t.id == id;
    });

    // need to check if the index really exists
    // if the id doesn't exist, then findIndex will return -1
    if (indexToReplace > -1) {
        todos[indexToReplace] = modifiedTask;
    }
  
}

function deleteTask(todos, id) {
  let indexToDelete = null;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      indexToDelete = i;
      break;
    }
  }
  if (indexToDelete !== null) {
    todos.splice(indexToDelete, 1);
  } else {
    console.log("Task is not found");
  }
}

function displayLoop() {

  let x = 100;
while (x >0 ) {
   x = x / 2;
 console.log(x);
  if (x < 20) {
   break;
  }
}
}