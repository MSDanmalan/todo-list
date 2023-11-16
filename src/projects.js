export { createProjects };
import { createTodoitem } from "./todoItem";
import { todoItem } from "./todoItem";

const createProjects = (function(){

    const addProjectButton = document.getElementById('addProject');
    const addProjectFolder = document.querySelector('.addProjectFolder');
    const projectCancelButton = document.querySelector('.projectCancelButton')
    const contentTitleElement = document.querySelector('.content-title')
    const folderNameElement = document.createElement('div');
    folderNameElement.classList.add('folderNameElement')
    const projects = document.querySelector('.projects')
    const projectTitle = document.getElementById('projectTitle')

    const allProjects = {
        Inbox: [todoItem('JavaScript in the Real World', '', '11/15/23')],
        Today: [todoItem('Linting', '', '11/16/23'),
                todoItem('Dynamic User Interface Interactions', '', '11/17/23',), 
                todoItem('Form Validation with Javascript', '', '11/18/23')],
        Upcoming: []
    };
    function newProject(projectName) {
        if (allProjects.hasOwnProperty(projectName)) {
            return;
        };
        allProjects[projectName] = []
    };

    function addToProject(projectArr, project) {
        allProjects[projectArr].push(project)
    };

    function displayNewTodos(folder) {
        createTodoitem.createTask(folder[folder.length - 1]);
    };

    function createFolder() {
        contentTitleElement.appendChild(folderNameElement)
    }

    function resetContent() {
        while (createTodoitem.content.firstChild) {
            createTodoitem.content.removeChild(createTodoitem.content.firstChild);
        }
    };

    function displayProjectForm() {
        addProjectButton.addEventListener('click', () => {
            addProjectFolder.classList.add('active')
        })
    }

    function hideProjectForm() {
        addProjectFolder.classList.remove('active')
    }

    function cancelProjectForm() {
        projectCancelButton.addEventListener('click', () => {
            addProjectFolder.classList.remove('active')
            resetProjectForm()
            hideProjectForm()
        })
    }

    function displayDefault() {
        createFolder()
        folderNameElement.textContent = 'Today'
        newProject(allProjects['Today'])
        changeDisplay(allProjects['Today'])
    }

    function changeDisplay(todoArr) {
        for(let item of todoArr) {
            createTodoitem.createTask(item);
        };
    };

    function createProjectFolder() {
        const projectFolderElement = document.createElement('div')
        projectFolderElement.classList.add('newOptions')
        const projectFolderIcon = document.createElement('img')
        projectFolderIcon.src = '../dist/icons/circle-small.svg'
        projectFolderIcon.alt = 'folder icon'
        projectFolderIcon.classList.add('projectFolderIcon')
        const projectfolderNameElementElement = document.createElement('p')
        projectfolderNameElementElement.classList.add('projectfolderNameElementElement')
        projectfolderNameElementElement.textContent = projectTitle.value
        projectFolderElement.setAttribute('data-key', projectTitle.value)

        projectFolderElement.append(projectFolderIcon, projectfolderNameElementElement)
        projects.append(projectFolderElement)
        newProject(projectTitle.value)
        selectNewFolder()
    }

    function renderProjectFolder() {
        const projectFormAddButton = document.querySelector('.projectFormAddButton')
        projectFormAddButton.addEventListener('click', () => {
            createProjectFolder()
            resetProjectForm()
            hideProjectForm()
        })
    }

    function selectFolder(){
        const projectOptions = document.querySelectorAll('.options');
        projectOptions.forEach(project => {
            project.addEventListener('click', () => {
                resetContent()
                createFolder()
                folderNameElement.textContent = project.dataset.key              
                changeDisplay(allProjects[project.dataset.key])
            });
        });
    };

    function selectNewFolder(){
        const NewprojectOptions = document.querySelectorAll('.newOptions');
        NewprojectOptions.forEach(project => {
            project.addEventListener('click', () => {
                resetContent()
                createFolder()
                folderNameElement.textContent = project.dataset.key
                changeDisplay(allProjects[project.dataset.key])
            });
        });
    };

    function resetProjectForm() {
        projectTitle.value = ''
    }

    return {
        allProjects, newProject, addToProject, displayNewTodos, selectFolder, 
        displayProjectForm, cancelProjectForm, folderNameElement, displayDefault, changeDisplay, 
        renderProjectFolder
    }
})();

