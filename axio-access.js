
async function renderTodoTable(todos) {
    const tableHeader   = `<tr>
                            <th>Task ID</th>  
                            <th>Task Name</th>
                            <th>Urgency</th>
                            <th>Calories</th>
                            <th>Summing</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            </tr>`
    const todoTable = document.querySelector('#todoTable');
    todoTable.innerHTML = ``
    todoTable.innerHTML += tableHeader
    let todo = [];
    let tr = ``;

    for (let i=0;i<todos.length;i++) {
        todo = todos[i]
        tr = ``
        tr= `<tr>`;
        tr += `<td> ${todo.id}</td>`;
        tr += `<td> ${todo.name}</td>`;
        tr += `<td> ${todo.urgency}</td>`;
        tr += `<td> ${todo.calories}</td>`;
        tr += `<td> ${todo.summing}</td>`;
        tr += `<td> <button class="btn edit-btn-table btn-success btn-sm">Edit Table Row
                    </button>
               </td>`;
        tr += `<td> <button class="btn delete-btn-table btn-danger btn-sm">Delete Table Row
                    </button>
               </td>`;
        
        console.log(tr)
        
        //todoTable.innerHTML += tr ;
        //todoTable.appendChild(tr)

        todoTable.innerHTML += tr + '</tr>';

        // todoTable.querySelector(".edit-btn-table").addEventListener('click', async function () {
        //     alert("Editing todo :" + todo.name)
        //     const newName       =          prompt("Enter the new task name:     ", todo.name);
        //     const newUrgency    = parseInt(prompt("Enter the new urgency:       ", todo.urgency));
        //     const newCalories   = parseInt(prompt("Enter the new calories       ", todo.calories))
        //     const newSumming    =          prompt("Enter the new Summing        ", todo.summing)
        //     modifyTask(todos, todo.id, newName, newUrgency, newCalories, newSumming);

        //     let responseAxioPut
        //     responseAxioPut = await axios.put(axioAddURL, todos)
        //     console.log("in .edit-btn-table addTodoAxio called & todos =", todos)
        //     console.log("in .edit-btn-table addTodoAxio called & responseAxioPut =", responseAxioPut)

        //     renderTodos(todos);
        // })  //  edit-btn

        // todoTable.querySelector(".delete-btn-table").addEventListener('click', async function () {
        //     const confirmation = confirm("Do you want to delete the task: " + todo.name + "?");
        //     if (confirmation) {

        //         deleteTask(todos, todo.id);

        //         let responseAxioPut
        //         responseAxioPut = await axios.put(axioAddURL, todos)
        //         console.log("in .delete-btn-table addTodoAxio called & todos =", todos)
        //         console.log("in .delete-btn-table addTodoAxio called & responseAxioPut =", responseAxioPut)

        //         renderTodos(todos);
        //     }
        // })  // delete button  
 
    }  // for loop

    todoTable.querySelector(".edit-btn-table").addEventListener('click', async function () {
        alert("Editing todo :" + todo.name)
        const newName       =          prompt("Enter the new task name:     ", todo.name);
        const newUrgency    = parseInt(prompt("Enter the new urgency:       ", todo.urgency));
        const newCalories   = parseInt(prompt("Enter the new calories       ", todo.calories))
        const newSumming    =          prompt("Enter the new Summing        ", todo.summing)
        modifyTask(todos, todo.id, newName, newUrgency, newCalories, newSumming);

        let responseAxioPut
        responseAxioPut = await axios.put(axioAddURL, todos)
        console.log("in .edit-btn-table addTodoAxio called & todos =", todos)
        console.log("in .edit-btn-table addTodoAxio called & responseAxioPut =", responseAxioPut)

        renderTodos(todos);
    })  //  edit-btn

    todoTable.querySelector(".delete-btn-table").addEventListener('click', async function () {
        const confirmation = confirm("Do you want to delete the task: " + todo.name + "?");
        if (confirmation) {

            deleteTask(todos, todo.id);

            let responseAxioPut
            responseAxioPut = await axios.put(axioAddURL, todos)
            console.log("in .delete-btn-table addTodoAxio called & todos =", todos)
            console.log("in .delete-btn-table addTodoAxio called & responseAxioPut =", responseAxioPut)

            renderTodos(todos);
        }
    })  // delete button

}  //  async function renderTodoTable(todos)

async function renderTodos(todos) {
    const todoList = document.querySelector("#todoList");
    todoList.innerHTML = '';

    for (let todo of todos) {
        console.log(todo)
        const li = document.createElement('li');

        //  li.className = 'list-group-item d-flex justify-content-between align-items-centre';

        li.className = 'list-group-item d-flex justify-content-between align-items-left';
        li.innerHTML = `
                    <span class="badge bg-primary">
                      ${todo.id}
                    </span>
                    <span class="badge bg-primary">
                      ${todo.name}
                    </span> 
                    <span class="badge bg-primary">
                      ${todo.urgency}
                    </span> 
                    <span class="badge bg-primary">    
                      ${todo.calories}
                    </span>
                    <span class="badge bg-primary">    
                      ${todo.summing}
                    </span>
                    <button class="btn edit-btn btn-success btn-sm">Edit</button>
                    <button class="btn delete-btn btn-danger btn-sm">Delete</button>                
                `;
        todoList.appendChild(li);

        li.querySelector(".edit-btn").addEventListener('click', async function () {
            alert("Editing todo :" + todo.name)
            const newName       =          prompt("Enter the new task name:     ", todo.name);
            const newUrgency    = parseInt(prompt("Enter the new urgency:       ", todo.urgency));
            const newCalories   = parseInt(prompt("Enter the new calories       ", todo.calories))
            const newSumming    =          prompt("Enter the new Summing        ", todo.summing)
            modifyTask(todos, todo.id, newName, newUrgency, newCalories, newSumming);

            let responseAxioPut
            responseAxioPut = await axios.put(axioAddURL, todos)
            console.log("in .edit-btn addTodoAxio called & todos =", todos)
            console.log("in .edit-btn addTodoAxio called & responseAxioPut =", responseAxioPut)

            renderTodos(todos);
        })  //  edit-btn

        li.querySelector(".delete-btn").addEventListener('click', async function () {
            const confirmation = confirm("Do you want to delete the task: " + todo.name + "?");
            if (confirmation) {

                deleteTask(todos, todo.id);

                let responseAxioPut
                responseAxioPut = await axios.put(axioAddURL, todos)
                console.log("in .delete-btn addTodoAxio called & todos =", todos)
                console.log("in .delete-btn addTodoAxio called & responseAxioPut =", responseAxioPut)

                renderTodos(todos);
            }
        })  // delete button
    }  // for loop
}  //  sync function renderTodos(todos)

//addTodoButton.addEventListener
//updates to local array
//update to the target file
const addTodoButton = document.querySelector("#addTodo");
addTodoButton.addEventListener('click', function () {
    console.log("Add Todo Button Pressed")
    const taskNameInput = document.querySelector("#taskName")
    const taskName = taskNameInput.value;

    const taskUrgencySelect = document.querySelector("#taskUrgency");
    const taskUrgency = taskUrgencySelect.value;

    const taskCaloriesInput = document.querySelector("#taskCalories")
    const taskCalories = taskCaloriesInput.value;

    const taskSummingSelect = document.querySelector("#taskSumming");
    const taskSumming = taskSummingSelect.value;
    if (taskName) {
        addTodo(todos, taskName, taskUrgency, taskCalories, taskSumming);
        console.log("Add Todo Button Pressed - calling addTodo")
        //Adding using AXIO
        addTodoAxio(todos, taskName, taskUrgency, taskCalories, taskSumming)
        console.log("Add Todo Button Pressed - calling addTodoAxio")
        renderTodos(todos);
        console.log("Rendering successful")
        taskNameInput.value = '';
    } // taskName
});  //addTotoButton.addEventListener

async function addTodoAxio (todos, name, urgency, calories, summing) {
    let id= Math.floor(Math.random() * 100 + 1)
    // await axios.post(axioAddURL,{
    //   taskId      : id.toString(),
    //   taskName    : name,
    //   taskUrgency : urgency
    // })
    let response
    responseAxioPut = await axios.put(axioAddURL,todos)
    console.log("addTodoAxio called & todos =", todos)
    console.log("addTodoAxio called & responseAxioPut =", responseAxioPut)

  }  // async function addTodoAxio

function calculateMinMaxSum(todos, MinMaxSumming) {
    console.log("Inside calculateMinMaxSum")
    let caloriesArray = []
    let caloriesSumming = []
    console.log(todos)
    let caloriesNumber
    let minimum = 0
    MinMaxSumming[0] = minimum
    let maximum = 9999
    MinMaxSumming[1] = maximum
    let summing = 0
    MinMaxSumming[2] = summing

    for (let i = 0; i < todos.length; i++) {

        console.log("todos[i]", todos[i])
        caloriesNumber = parseInt(todos[i].calories)
        console.log("caloriesNumber   ", caloriesNumber)
        caloriesArray.push(0)
        caloriesArray[i] = caloriesNumber
        console.log("caloriesArray[caloriesArray.length]   ", caloriesArray[caloriesArray.length], "i   ", i)

        if (MinMaxSumming[0] < parseInt(todos[i].calories)  ) {
            MinMaxSumming[0] = parseInt(todos[i].calories)
        }
        if (MinMaxSumming[1] > parseInt(todos[i].calories)) {
            MinMaxSumming[1] = parseInt(todos[i].calories)
        }
        if (todos[i].summing == "true") {
            caloriesSumming.push(0)
            //caloriesSum[i] = todos[i].calories
            MinMaxSumming[2] += todos[i].calories;
        }
        else {
            caloriesSumming.push(0)
        }
    }
    // console.log("caloriesArray     ", caloriesArray)
    // console.log("caloriesSumming   ", caloriesSumming)
    if (caloriesSumming.length > 0) {
        // minimum = caloriesArray.minimum
        // maximum = caloriesArray.maximum
        summing = 0
        for (let i = 0; i < caloriesSumming.length; i++) {
            summing += caloriesSumming[i]
            console.log("Summing up Calories Array    ", summing)
        }
    }
}  // function calculateMinMaxSum

const calculateMinMaxSumButton = document.querySelector("#calculateMinMaxSumming")
calculateMinMaxSumButton.addEventListener('click', async function () {
    console.log("Before calling calculateMinMaxSum")
    //        calculateMinMaxSum(todos, caloriesMinimum, caloriesMaximum, caloriesTotal);
    calculateMinMaxSum(todos, caloriesMinMaxSumming)
    caloriesMinimum = caloriesMinMaxSumming[0]
    caloriesMaximum = caloriesMinMaxSumming[1]
    caloriesTotal = caloriesMinMaxSumming[2]

    console.log("After calling calculateMinMaxSum")
    const showMinimumText = document.querySelector("#showMinimum");
    //showMinimumText.innerHTML = `Minimum of Calories is ${caloriesMaximum}`
    const showMaximumText = document.querySelector("#showMaximum");
    //showMaximumText.innerHTML = `Maximum of Calories is ${caloriesMinimum}`
    const showSummingText = document.querySelector("#showSumming");
    showSummingText.innerHTML = `Sum of Calories for selected Todos is ${caloriesTotal}`
})  //calculateMinMaxSumButton


//  2024-10-04
const deleteFileButton = document.querySelector("#deleteFileButton");
deleteFileButton.addEventListener('click', async function () {
    console.log("Delete File Button Pressed !!")
    todos = []  // force todos list empty
    // & call addTodoAxio 
    // & call renderTodos
    let response
    response = axios.delete(axioDeleteURL)

    console.log(response)
    // addTodoAxio(todos,taskName, taskUrgency)
    // console.log("Calling addTodoAxio with todos=[]") 
    renderTodos(todos);
    console.log("Rendering successful")

})
//  deleteFileButton
//  2024-10-04

function readTodoAxio(todos, taskName, taskUrgency, taskCalories, taskSumming) {
    let newTodo = {
        // *** *** for fun / testing --> change the id *** ***
        id: Math.floor(Math.random() * 100 + 1),
        name: taskName,
        urgency: taskUrgency,
        calories: taskCalories,
        summing: taskSumming
    };
    todos.push(newTodo);
}  // function readTodoAxio