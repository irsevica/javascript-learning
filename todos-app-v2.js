// function to display todos
var todos = ['item1', 'item2', 'item3']

function displayTodos() {
    console.log('My Todos:', todos);
}

displayTodos()

// function to add new todos
function addTodo(addItem) {
    todos.push(addItem);
    displayTodos();
}

addTodo('new todo')
displayTodos()

// function to change todos

function changeTodo(position, newVal) {
    todos[position] = newVal;
    displayTodos();
}

changeTodo(1, 'changed item 1')

// function to delete todos

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

deleteTodo(1)