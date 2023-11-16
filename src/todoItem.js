export {createTodoitem, todoItem}
import { renderTodo } from "./DOM";

//Todo factory
const todoItem = (title, description, dueDate) => {
    const priority = () => {console.log('priority is high')}
    const checkBox = () => {console.log('todo is done')}
  
    return{title, description, dueDate, priority, checkBox}
};

// Todo module
const createTodoitem = (function() {
  function createTask(todo) {
    const task = document.createElement('div')
    task.classList.add('task')
  
    const firstTodoDiv = document.createElement('div')
    firstTodoDiv.classList.add('firstTodoDiv')

    const circleCheckbox = document.createElement('div')
    circleCheckbox.classList.add('circleCheckbox')

    const timestamp = new Date().getTime(); // Unique timestamp
    const randomValue = Math.random().toString(36).substring(7);
    const checkboxId = `checkbox_${timestamp}_${randomValue}`;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', checkboxId);
    const label = document.createElement('label');
    label.setAttribute('for', checkboxId);

    circleCheckbox.append(checkbox, label)
    firstTodoDiv.appendChild(circleCheckbox)
  
    const secondTodoDiv = document.createElement('div')
    secondTodoDiv.classList.add('secondTodoDiv')
    const todoTitleElement = document.createElement('div')
    todoTitleElement.classList.add('todoTitle')
    todoTitleElement.textContent = todo.title
    const todoDueDateElement = document.createElement('div')
    todoDueDateElement.classList.add('todoDueDate')
    todoDueDateElement.textContent = todo.dueDate
    secondTodoDiv.append(todoTitleElement, todoDueDateElement)
  
    const thirdTodoDiv = document.createElement('div')
    thirdTodoDiv.classList.add('thirdTodoDiv')
    const editTodoButtonElement = document.createElement('button')
    const editTodoButtonIcon = document.createElement('img')
    editTodoButtonIcon.src = "../icons/pencil-outline.svg"
    editTodoButtonIcon.alt = "edit button"
    editTodoButtonIcon.classList.add('editTodoButtonIcon')
    editTodoButtonElement.appendChild(editTodoButtonIcon)
    const deleteTodoButtonElement = document.createElement('button')
    const deleteTodoButtonIcon = document.createElement('img')
    deleteTodoButtonIcon.src = "../icons/delete-outline.svg"
    deleteTodoButtonIcon.alt = "delete button"
    deleteTodoButtonIcon.classList.add('deleteTodoButtonIcon')
    deleteTodoButtonElement.appendChild(deleteTodoButtonIcon)
    thirdTodoDiv.append(editTodoButtonElement, deleteTodoButtonElement)
  
    task.append(firstTodoDiv, secondTodoDiv, thirdTodoDiv)
    let content = document.getElementById('content')
    content.appendChild(task)
  }

  function resetForm() {
    renderTodo.title.value = ''
    renderTodo.description.value = ''
    renderTodo.dueDate.value = ''
}

  return {createTask, content, resetForm}

})();