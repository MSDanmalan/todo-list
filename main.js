/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTodo: () => (/* binding */ renderTodo)
/* harmony export */ });
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");

;



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
            let newTodo = (0,_todoItem__WEBPACK_IMPORTED_MODULE_0__.todoItem)(`${title.value}`, `${description.value}`, `${dueDate.value}`)
            _projects__WEBPACK_IMPORTED_MODULE_1__.createProjects.addToProject(_projects__WEBPACK_IMPORTED_MODULE_1__.createProjects.folderNameElement.textContent, newTodo)
            _projects__WEBPACK_IMPORTED_MODULE_1__.createProjects.displayNewTodos(_projects__WEBPACK_IMPORTED_MODULE_1__.createProjects.allProjects[_projects__WEBPACK_IMPORTED_MODULE_1__.createProjects.folderNameElement.textContent])
            _todoItem__WEBPACK_IMPORTED_MODULE_0__.createTodoitem.resetForm()
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
            _todoItem__WEBPACK_IMPORTED_MODULE_0__.createTodoitem.resetForm()
            hideForm()
        })
    }

    return {displayForm, displayTodo, cancelForm, title, description, dueDate}
})();

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjects: () => (/* binding */ createProjects)
/* harmony export */ });
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");




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
        Inbox: [(0,_todoItem__WEBPACK_IMPORTED_MODULE_0__.todoItem)('JavaScript in the Real World', '', '11/15/23')],
        Today: [(0,_todoItem__WEBPACK_IMPORTED_MODULE_0__.todoItem)('Linting', '', '11/16/23'),
                (0,_todoItem__WEBPACK_IMPORTED_MODULE_0__.todoItem)('Dynamic User Interface Interactions', '', '11/17/23',), 
                (0,_todoItem__WEBPACK_IMPORTED_MODULE_0__.todoItem)('Form Validation with Javascript', '', '11/18/23')],
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
        _todoItem__WEBPACK_IMPORTED_MODULE_0__.createTodoitem.createTask(folder[folder.length - 1]);
    };

    function createFolder() {
        contentTitleElement.appendChild(folderNameElement)
    }

    function resetContent() {
        while (_todoItem__WEBPACK_IMPORTED_MODULE_0__.createTodoitem.content.firstChild) {
            _todoItem__WEBPACK_IMPORTED_MODULE_0__.createTodoitem.content.removeChild(_todoItem__WEBPACK_IMPORTED_MODULE_0__.createTodoitem.content.firstChild);
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
            _todoItem__WEBPACK_IMPORTED_MODULE_0__.createTodoitem.createTask(item);
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



/***/ }),

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodoitem: () => (/* binding */ createTodoitem),
/* harmony export */   todoItem: () => (/* binding */ todoItem)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");

;

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
    editTodoButtonIcon.src = "../dist/icons/pencil-outline.svg"
    editTodoButtonIcon.alt = "edit button"
    editTodoButtonIcon.classList.add('editTodoButtonIcon')
    editTodoButtonElement.appendChild(editTodoButtonIcon)
    const deleteTodoButtonElement = document.createElement('button')
    const deleteTodoButtonIcon = document.createElement('img')
    deleteTodoButtonIcon.src = "../dist/icons/delete-outline.svg"
    deleteTodoButtonIcon.alt = "delete button"
    deleteTodoButtonIcon.classList.add('deleteTodoButtonIcon')
    deleteTodoButtonElement.appendChild(deleteTodoButtonIcon)
    thirdTodoDiv.append(editTodoButtonElement, deleteTodoButtonElement)
  
    task.append(firstTodoDiv, secondTodoDiv, thirdTodoDiv)
    let content = document.getElementById('content')
    content.appendChild(task)
  }

  function resetForm() {
    _DOM__WEBPACK_IMPORTED_MODULE_0__.renderTodo.title.value = ''
    _DOM__WEBPACK_IMPORTED_MODULE_0__.renderTodo.description.value = ''
    _DOM__WEBPACK_IMPORTED_MODULE_0__.renderTodo.dueDate.value = ''
}

  return {createTask, content, resetForm}

})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



//select DOM elements
const menuButton = document.querySelector('.menuButton')
const menu = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')

menuButton.addEventListener('click', () => {
  menu.classList.toggle('active')
  overlay.classList.toggle('active')
});


_projects__WEBPACK_IMPORTED_MODULE_1__.createProjects.displayDefault()
_projects__WEBPACK_IMPORTED_MODULE_1__.createProjects.displayProjectForm()
_projects__WEBPACK_IMPORTED_MODULE_1__.createProjects.cancelProjectForm()
_projects__WEBPACK_IMPORTED_MODULE_1__.createProjects.selectFolder()
_projects__WEBPACK_IMPORTED_MODULE_1__.createProjects.renderProjectFolder()
_DOM__WEBPACK_IMPORTED_MODULE_0__.renderTodo.displayForm()
_DOM__WEBPACK_IMPORTED_MODULE_0__.renderTodo.displayTodo()
_DOM__WEBPACK_IMPORTED_MODULE_0__.renderTodo.cancelForm()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDUzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0QscURBQWM7QUFDZCxxREFBYztBQUNkLHFEQUFjO0FBQ2QscURBQWM7QUFDZCxxREFBYztBQUNkLDRDQUFVO0FBQ1YsNENBQVU7QUFDViw0Q0FBVSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyByZW5kZXJUb2RvIH1cbmltcG9ydCB7IHRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kb0l0ZW1cIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG9pdGVtIH0gZnJvbSBcIi4vdG9kb0l0ZW1cIjtcblxuY29uc3QgcmVuZGVyVG9kbyA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhZGRCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEJ1dHRvbicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJylcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKVxuICAgIGNvbnN0IGZvcm1BZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUFkZEJ1dHRvbicpXG4gICAgY29uc3QgYWRkVG9kb0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVG9kb0l0ZW0nKVxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxCdXR0b24nKVxuIFxuICAgIGZ1bmN0aW9uIGRpc3BsYXlUb2RvKCkge1xuICAgICAgICBmb3JtQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld1RvZG8gPSB0b2RvSXRlbShgJHt0aXRsZS52YWx1ZX1gLCBgJHtkZXNjcmlwdGlvbi52YWx1ZX1gLCBgJHtkdWVEYXRlLnZhbHVlfWApXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0cy5hZGRUb1Byb2plY3QoY3JlYXRlUHJvamVjdHMuZm9sZGVyTmFtZUVsZW1lbnQudGV4dENvbnRlbnQsIG5ld1RvZG8pXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0cy5kaXNwbGF5TmV3VG9kb3MoY3JlYXRlUHJvamVjdHMuYWxsUHJvamVjdHNbY3JlYXRlUHJvamVjdHMuZm9sZGVyTmFtZUVsZW1lbnQudGV4dENvbnRlbnRdKVxuICAgICAgICAgICAgY3JlYXRlVG9kb2l0ZW0ucmVzZXRGb3JtKClcbiAgICAgICAgICAgIGhpZGVGb3JtKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5Rm9ybSgpIHtcbiAgICAgICAgYWRkQnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFkZFRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUZvcm0oKSB7XG4gICAgICAgIGFkZFRvZG9JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuY2VsRm9ybSgpIHtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3JlYXRlVG9kb2l0ZW0ucmVzZXRGb3JtKClcbiAgICAgICAgICAgIGhpZGVGb3JtKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge2Rpc3BsYXlGb3JtLCBkaXNwbGF5VG9kbywgY2FuY2VsRm9ybSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlfVxufSkoKTsiLCJleHBvcnQgeyBjcmVhdGVQcm9qZWN0cyB9O1xuaW1wb3J0IHsgY3JlYXRlVG9kb2l0ZW0gfSBmcm9tIFwiLi90b2RvSXRlbVwiO1xuaW1wb3J0IHsgdG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvSXRlbVwiO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0cyA9IChmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Jyk7XG4gICAgY29uc3QgYWRkUHJvamVjdEZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0Rm9sZGVyJyk7XG4gICAgY29uc3QgcHJvamVjdENhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q2FuY2VsQnV0dG9uJylcbiAgICBjb25zdCBjb250ZW50VGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGl0bGUnKVxuICAgIGNvbnN0IGZvbGRlck5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9sZGVyTmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9sZGVyTmFtZUVsZW1lbnQnKVxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJylcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJylcblxuICAgIGNvbnN0IGFsbFByb2plY3RzID0ge1xuICAgICAgICBJbmJveDogW3RvZG9JdGVtKCdKYXZhU2NyaXB0IGluIHRoZSBSZWFsIFdvcmxkJywgJycsICcxMS8xNS8yMycpXSxcbiAgICAgICAgVG9kYXk6IFt0b2RvSXRlbSgnTGludGluZycsICcnLCAnMTEvMTYvMjMnKSxcbiAgICAgICAgICAgICAgICB0b2RvSXRlbSgnRHluYW1pYyBVc2VyIEludGVyZmFjZSBJbnRlcmFjdGlvbnMnLCAnJywgJzExLzE3LzIzJywpLCBcbiAgICAgICAgICAgICAgICB0b2RvSXRlbSgnRm9ybSBWYWxpZGF0aW9uIHdpdGggSmF2YXNjcmlwdCcsICcnLCAnMTEvMTgvMjMnKV0sXG4gICAgICAgIFVwY29taW5nOiBbXVxuICAgIH07XG4gICAgZnVuY3Rpb24gbmV3UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBpZiAoYWxsUHJvamVjdHMuaGFzT3duUHJvcGVydHkocHJvamVjdE5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGFsbFByb2plY3RzW3Byb2plY3ROYW1lXSA9IFtdXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGFkZFRvUHJvamVjdChwcm9qZWN0QXJyLCBwcm9qZWN0KSB7XG4gICAgICAgIGFsbFByb2plY3RzW3Byb2plY3RBcnJdLnB1c2gocHJvamVjdClcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZGlzcGxheU5ld1RvZG9zKGZvbGRlcikge1xuICAgICAgICBjcmVhdGVUb2RvaXRlbS5jcmVhdGVUYXNrKGZvbGRlcltmb2xkZXIubGVuZ3RoIC0gMV0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGb2xkZXIoKSB7XG4gICAgICAgIGNvbnRlbnRUaXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9sZGVyTmFtZUVsZW1lbnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRDb250ZW50KCkge1xuICAgICAgICB3aGlsZSAoY3JlYXRlVG9kb2l0ZW0uY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjcmVhdGVUb2RvaXRlbS5jb250ZW50LnJlbW92ZUNoaWxkKGNyZWF0ZVRvZG9pdGVtLmNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZGlzcGxheVByb2plY3RGb3JtKCkge1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYWRkUHJvamVjdEZvbGRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVQcm9qZWN0Rm9ybSgpIHtcbiAgICAgICAgYWRkUHJvamVjdEZvbGRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbmNlbFByb2plY3RGb3JtKCkge1xuICAgICAgICBwcm9qZWN0Q2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYWRkUHJvamVjdEZvbGRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICAgICAgcmVzZXRQcm9qZWN0Rm9ybSgpXG4gICAgICAgICAgICBoaWRlUHJvamVjdEZvcm0oKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlEZWZhdWx0KCkge1xuICAgICAgICBjcmVhdGVGb2xkZXIoKVxuICAgICAgICBmb2xkZXJOYW1lRWxlbWVudC50ZXh0Q29udGVudCA9ICdUb2RheSdcbiAgICAgICAgbmV3UHJvamVjdChhbGxQcm9qZWN0c1snVG9kYXknXSlcbiAgICAgICAgY2hhbmdlRGlzcGxheShhbGxQcm9qZWN0c1snVG9kYXknXSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VEaXNwbGF5KHRvZG9BcnIpIHtcbiAgICAgICAgZm9yKGxldCBpdGVtIG9mIHRvZG9BcnIpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRvZG9pdGVtLmNyZWF0ZVRhc2soaXRlbSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGb2xkZXIoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RGb2xkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdEZvbGRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmV3T3B0aW9ucycpXG4gICAgICAgIGNvbnN0IHByb2plY3RGb2xkZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgcHJvamVjdEZvbGRlckljb24uc3JjID0gJy4uL2Rpc3QvaWNvbnMvY2lyY2xlLXNtYWxsLnN2ZydcbiAgICAgICAgcHJvamVjdEZvbGRlckljb24uYWx0ID0gJ2ZvbGRlciBpY29uJ1xuICAgICAgICBwcm9qZWN0Rm9sZGVySWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9sZGVySWNvbicpXG4gICAgICAgIGNvbnN0IHByb2plY3Rmb2xkZXJOYW1lRWxlbWVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgcHJvamVjdGZvbGRlck5hbWVFbGVtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Zm9sZGVyTmFtZUVsZW1lbnRFbGVtZW50JylcbiAgICAgICAgcHJvamVjdGZvbGRlck5hbWVFbGVtZW50RWxlbWVudC50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZS52YWx1ZVxuICAgICAgICBwcm9qZWN0Rm9sZGVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgcHJvamVjdFRpdGxlLnZhbHVlKVxuXG4gICAgICAgIHByb2plY3RGb2xkZXJFbGVtZW50LmFwcGVuZChwcm9qZWN0Rm9sZGVySWNvbiwgcHJvamVjdGZvbGRlck5hbWVFbGVtZW50RWxlbWVudClcbiAgICAgICAgcHJvamVjdHMuYXBwZW5kKHByb2plY3RGb2xkZXJFbGVtZW50KVxuICAgICAgICBuZXdQcm9qZWN0KHByb2plY3RUaXRsZS52YWx1ZSlcbiAgICAgICAgc2VsZWN0TmV3Rm9sZGVyKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0Rm9sZGVyKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybUFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybUFkZEJ1dHRvbicpXG4gICAgICAgIHByb2plY3RGb3JtQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEZvbGRlcigpXG4gICAgICAgICAgICByZXNldFByb2plY3RGb3JtKClcbiAgICAgICAgICAgIGhpZGVQcm9qZWN0Rm9ybSgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VsZWN0Rm9sZGVyKCl7XG4gICAgICAgIGNvbnN0IHByb2plY3RPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbnMnKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbnMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzZXRDb250ZW50KClcbiAgICAgICAgICAgICAgICBjcmVhdGVGb2xkZXIoKVxuICAgICAgICAgICAgICAgIGZvbGRlck5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdC5kYXRhc2V0LmtleSAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2hhbmdlRGlzcGxheShhbGxQcm9qZWN0c1twcm9qZWN0LmRhdGFzZXQua2V5XSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2VsZWN0TmV3Rm9sZGVyKCl7XG4gICAgICAgIGNvbnN0IE5ld3Byb2plY3RPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ld09wdGlvbnMnKTtcbiAgICAgICAgTmV3cHJvamVjdE9wdGlvbnMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzZXRDb250ZW50KClcbiAgICAgICAgICAgICAgICBjcmVhdGVGb2xkZXIoKVxuICAgICAgICAgICAgICAgIGZvbGRlck5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdC5kYXRhc2V0LmtleVxuICAgICAgICAgICAgICAgIGNoYW5nZURpc3BsYXkoYWxsUHJvamVjdHNbcHJvamVjdC5kYXRhc2V0LmtleV0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlc2V0UHJvamVjdEZvcm0oKSB7XG4gICAgICAgIHByb2plY3RUaXRsZS52YWx1ZSA9ICcnXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWxsUHJvamVjdHMsIG5ld1Byb2plY3QsIGFkZFRvUHJvamVjdCwgZGlzcGxheU5ld1RvZG9zLCBzZWxlY3RGb2xkZXIsIFxuICAgICAgICBkaXNwbGF5UHJvamVjdEZvcm0sIGNhbmNlbFByb2plY3RGb3JtLCBmb2xkZXJOYW1lRWxlbWVudCwgZGlzcGxheURlZmF1bHQsIGNoYW5nZURpc3BsYXksIFxuICAgICAgICByZW5kZXJQcm9qZWN0Rm9sZGVyXG4gICAgfVxufSkoKTtcblxuIiwiZXhwb3J0IHtjcmVhdGVUb2RvaXRlbSwgdG9kb0l0ZW19XG5pbXBvcnQgeyByZW5kZXJUb2RvIH0gZnJvbSBcIi4vRE9NXCI7XG5cbi8vVG9kbyBmYWN0b3J5XG5jb25zdCB0b2RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpID0+IHtcbiAgICBjb25zdCBwcmlvcml0eSA9ICgpID0+IHtjb25zb2xlLmxvZygncHJpb3JpdHkgaXMgaGlnaCcpfVxuICAgIGNvbnN0IGNoZWNrQm94ID0gKCkgPT4ge2NvbnNvbGUubG9nKCd0b2RvIGlzIGRvbmUnKX1cbiAgXG4gICAgcmV0dXJue3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrQm94fVxufTtcblxuLy8gVG9kbyBtb2R1bGVcbmNvbnN0IGNyZWF0ZVRvZG9pdGVtID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBjcmVhdGVUYXNrKHRvZG8pIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKVxuICBcbiAgICBjb25zdCBmaXJzdFRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZpcnN0VG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCdmaXJzdFRvZG9EaXYnKVxuXG4gICAgY29uc3QgY2lyY2xlQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNpcmNsZUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NpcmNsZUNoZWNrYm94JylcblxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpOyAvLyBVbmlxdWUgdGltZXN0YW1wXG4gICAgY29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XG4gICAgY29uc3QgY2hlY2tib3hJZCA9IGBjaGVja2JveF8ke3RpbWVzdGFtcH1fJHtyYW5kb21WYWx1ZX1gO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgY2hlY2tib3hJZCk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY2hlY2tib3hJZCk7XG5cbiAgICBjaXJjbGVDaGVja2JveC5hcHBlbmQoY2hlY2tib3gsIGxhYmVsKVxuICAgIGZpcnN0VG9kb0Rpdi5hcHBlbmRDaGlsZChjaXJjbGVDaGVja2JveClcbiAgXG4gICAgY29uc3Qgc2Vjb25kVG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2Vjb25kVG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCdzZWNvbmRUb2RvRGl2JylcbiAgICBjb25zdCB0b2RvVGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvVGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG9UaXRsZScpXG4gICAgdG9kb1RpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGVcbiAgICBjb25zdCB0b2RvRHVlRGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9EdWVEYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2RvRHVlRGF0ZScpXG4gICAgdG9kb0R1ZURhdGVFbGVtZW50LnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlXG4gICAgc2Vjb25kVG9kb0Rpdi5hcHBlbmQodG9kb1RpdGxlRWxlbWVudCwgdG9kb0R1ZURhdGVFbGVtZW50KVxuICBcbiAgICBjb25zdCB0aGlyZFRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXJkVG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0aGlyZFRvZG9EaXYnKVxuICAgIGNvbnN0IGVkaXRUb2RvQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29uc3QgZWRpdFRvZG9CdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBlZGl0VG9kb0J1dHRvbkljb24uc3JjID0gXCIuLi9kaXN0L2ljb25zL3BlbmNpbC1vdXRsaW5lLnN2Z1wiXG4gICAgZWRpdFRvZG9CdXR0b25JY29uLmFsdCA9IFwiZWRpdCBidXR0b25cIlxuICAgIGVkaXRUb2RvQnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0VG9kb0J1dHRvbkljb24nKVxuICAgIGVkaXRUb2RvQnV0dG9uRWxlbWVudC5hcHBlbmRDaGlsZChlZGl0VG9kb0J1dHRvbkljb24pXG4gICAgY29uc3QgZGVsZXRlVG9kb0J1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnN0IGRlbGV0ZVRvZG9CdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBkZWxldGVUb2RvQnV0dG9uSWNvbi5zcmMgPSBcIi4uL2Rpc3QvaWNvbnMvZGVsZXRlLW91dGxpbmUuc3ZnXCJcbiAgICBkZWxldGVUb2RvQnV0dG9uSWNvbi5hbHQgPSBcImRlbGV0ZSBidXR0b25cIlxuICAgIGRlbGV0ZVRvZG9CdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVRvZG9CdXR0b25JY29uJylcbiAgICBkZWxldGVUb2RvQnV0dG9uRWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVUb2RvQnV0dG9uSWNvbilcbiAgICB0aGlyZFRvZG9EaXYuYXBwZW5kKGVkaXRUb2RvQnV0dG9uRWxlbWVudCwgZGVsZXRlVG9kb0J1dHRvbkVsZW1lbnQpXG4gIFxuICAgIHRhc2suYXBwZW5kKGZpcnN0VG9kb0Rpdiwgc2Vjb25kVG9kb0RpdiwgdGhpcmRUb2RvRGl2KVxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFzaylcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICByZW5kZXJUb2RvLnRpdGxlLnZhbHVlID0gJydcbiAgICByZW5kZXJUb2RvLmRlc2NyaXB0aW9uLnZhbHVlID0gJydcbiAgICByZW5kZXJUb2RvLmR1ZURhdGUudmFsdWUgPSAnJ1xufVxuXG4gIHJldHVybiB7Y3JlYXRlVGFzaywgY29udGVudCwgcmVzZXRGb3JtfVxuXG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcmVuZGVyVG9kbyB9IGZyb20gXCIuL0RPTVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG4vL3NlbGVjdCBET00gZWxlbWVudHNcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUJ1dHRvbicpXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKVxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JylcblxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG59KTtcblxuXG5jcmVhdGVQcm9qZWN0cy5kaXNwbGF5RGVmYXVsdCgpXG5jcmVhdGVQcm9qZWN0cy5kaXNwbGF5UHJvamVjdEZvcm0oKVxuY3JlYXRlUHJvamVjdHMuY2FuY2VsUHJvamVjdEZvcm0oKVxuY3JlYXRlUHJvamVjdHMuc2VsZWN0Rm9sZGVyKClcbmNyZWF0ZVByb2plY3RzLnJlbmRlclByb2plY3RGb2xkZXIoKVxucmVuZGVyVG9kby5kaXNwbGF5Rm9ybSgpXG5yZW5kZXJUb2RvLmRpc3BsYXlUb2RvKClcbnJlbmRlclRvZG8uY2FuY2VsRm9ybSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9