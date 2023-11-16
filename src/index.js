import { renderTodo } from "./DOM";
import { createProjects } from "./projects";

//select DOM elements
const menuButton = document.querySelector('.menuButton')
const menu = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')

menuButton.addEventListener('click', () => {
  menu.classList.toggle('active')
  overlay.classList.toggle('active')
});


createProjects.displayDefault()
createProjects.displayProjectForm()
createProjects.cancelProjectForm()
createProjects.selectFolder()
createProjects.renderProjectFolder()
renderTodo.displayForm()
renderTodo.displayTodo()
renderTodo.cancelForm()