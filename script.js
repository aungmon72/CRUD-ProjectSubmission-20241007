  // without Calories & Summing
  // let axioRetrieveURL = "https://api.jsonbin.io/v3/b/66ff8dd0acd3cb34a890e96b/latest"
  // let axioAddURL      = "https://api.jsonbin.io/v3/b/66ff8dd0acd3cb34a890e96b"

  //  with Calories & Summing

document.addEventListener('DOMContentLoaded', async function() {

  async function main() {

    // add three todos
    // addTodo(todos, "Walk the dog", 5);
    // addTodo(todos, "Clean the room", 3);
    // addTodo(todos, "Pay the bill", 2); 

    //  AXIOS READ starts
    let response = await axios.get(axioRetrieveURL)
    console.log("response", response)
    console.log("response.data", response.data)
    console.log("response.data.record", response.data.record)

    for (taskRecord of response.data.record) {
      readTodoAxio(todos, taskRecord.name, taskRecord.urgency, taskRecord.calories, taskRecord.summing)
      //todos.push(taskName)
      console.log("taskRecord", taskRecord)
      console.log("TaskRecord.TaskId, TaskRecord.TaskName & TaskRecord.TaskUrgency",
        taskRecord.id, taskRecord.name, taskRecord.urgency)
      console.log("")
    }  //for loop
    //AXIOS READ ends

    renderTodos(todos);
    renderTodoTable(todos)

  }


  main();
   
});


