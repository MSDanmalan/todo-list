export { renderTodo }
import { todoItem } from "./todoItem";
import { createProjects } from "./projects";
import { createTodoitem } from "./todoItem";

const renderTodo = (function() {
    const addButtonElement = document.querySelector('.addButton')
    const title = document.getElementById('title')
    const description = document.getElementById('description')
    const dueDate = document.getElementById('dueDate')
    const formAddButton = document.querySelector('.formAddButton')
    const addTodoItem = document.querySelector('.addTodoItem')
    const cancelButton = document.querySelector('.cancelButton')
 
    function displayTodo() {
        formAddButton.addEventListener('click', () => {
            let newTodo = todoItem(`${title.value}`, `${description.value}`, `${dueDate.value}`)
            createProjects.addToProject(createProjects.folderNameElement.textContent, newTodo)
            createProjects.displayNewTodos(createProjects.allProjects[createProjects.folderNameElement.textContent])
            createTodoitem.resetForm()
            hideForm()
        })
    }

    function displayForm() {
        addButtonElement.addEventListener('click', () => {
            addTodoItem.classList.add('active')
        })
    }

    function hideForm() {
        addTodoItem.classList.remove('active')
    }

    function cancelForm() {
        cancelButton.addEventListener('click', () => {
            createTodoitem.resetForm()
            hideForm()
        })
    }

    return {displayForm, displayTodo, cancelForm, title, description, dueDate}
})();