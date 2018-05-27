// Need to store todos
var todos = ['item1', 'item2', 'item3']
// Need to show todos
console.log('My ToDos:', todos)
// Need to add todos
todos.push('item4')
console.log(todos)
// Need a way to change a todo
todos[1] = 'changed_item2'
console.log(todos)
// Need a way to delete a todo
// Deletes item1
todos.splice(0, 1)
console.log(todos)
// Deletes item 4
todos.splice(2, 1)
console.log(todos)
