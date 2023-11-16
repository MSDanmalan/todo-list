/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/icons/circle-small.svg":
/*!*************************************!*\
  !*** ./dist/icons/circle-small.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDEwQTIsMiAwIDAsMCAxMCwxMkMxMCwxMy4xMSAxMC45LDE0IDEyLDE0QzEzLjExLDE0IDE0LDEzLjExIDE0LDEyQTIsMiAwIDAsMCAxMiwxMFoiIC8+PC9zdmc+");

/***/ }),

/***/ "./dist/icons/delete-outline.svg":
/*!***************************************!*\
  !*** ./dist/icons/delete-outline.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOU04LDlIMTZWMTlIOFY5TTE1LjUsNEwxNC41LDNIOS41TDguNSw0SDVWNkgxOVY0SDE1LjVaIiAvPjwvc3ZnPg==");

/***/ }),

/***/ "./dist/icons/pencil-outline.svg":
/*!***************************************!*\
  !*** ./dist/icons/pencil-outline.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE0LjA2LDlMMTUsOS45NEw1LjkyLDE5SDVWMTguMDhMMTQuMDYsOU0xNy42NiwzQzE3LjQxLDMgMTcuMTUsMy4xIDE2Ljk2LDMuMjlMMTUuMTMsNS4xMkwxOC44OCw4Ljg3TDIwLjcxLDcuMDRDMjEuMSw2LjY1IDIxLjEsNiAyMC43MSw1LjYzTDE4LjM3LDMuMjlDMTguMTcsMy4wOSAxNy45MiwzIDE3LjY2LDNNMTQuMDYsNi4xOUwzLDE3LjI1VjIxSDYuNzVMMTcuODEsOS45NEwxNC4wNiw2LjE5WiIgLz48L3N2Zz4=");

/***/ }),

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
/* harmony import */ var _dist_icons_circle_small_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/icons/circle-small.svg */ "./dist/icons/circle-small.svg");





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
        projectFolderIcon.src = _dist_icons_circle_small_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
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
/* harmony import */ var _dist_icons_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/icons/pencil-outline.svg */ "./dist/icons/pencil-outline.svg");
/* harmony import */ var _dist_icons_delete_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/icons/delete-outline.svg */ "./dist/icons/delete-outline.svg");

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
    editTodoButtonIcon.src = _dist_icons_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
    editTodoButtonIcon.alt = "edit button"
    editTodoButtonIcon.classList.add('editTodoButtonIcon')
    editTodoButtonElement.appendChild(editTodoButtonIcon)
    const deleteTodoButtonElement = document.createElement('button')
    const deleteTodoButtonIcon = document.createElement('img')
    deleteTodoButtonIcon.src = _dist_icons_delete_outline_svg__WEBPACK_IMPORTED_MODULE_2__["default"] 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVO0FBQ2Q7O0FBRUEsVUFBVTs7QUFFVixDQUFDOzs7Ozs7VUM1RUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDUzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0QscURBQWM7QUFDZCxxREFBYztBQUNkLHFEQUFjO0FBQ2QscURBQWM7QUFDZCxxREFBYztBQUNkLDRDQUFVO0FBQ1YsNENBQVU7QUFDViw0Q0FBVSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vZGlzdC9pY29ucy9jaXJjbGUtc21hbGwuc3ZnIiwid2VicGFjazovL3RvZG8tbGlzdC8uL2Rpc3QvaWNvbnMvZGVsZXRlLW91dGxpbmUuc3ZnIiwid2VicGFjazovL3RvZG8tbGlzdC8uL2Rpc3QvaWNvbnMvcGVuY2lsLW91dGxpbmUuc3ZnIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2daRDBpVFRFeUxERXdRVElzTWlBd0lEQXNNQ0F4TUN3eE1rTXhNQ3d4TXk0eE1TQXhNQzQ1TERFMElERXlMREUwUXpFekxqRXhMREUwSURFMExERXpMakV4SURFMExERXlRVElzTWlBd0lEQXNNQ0F4TWl3eE1Gb2lJQzgrUEM5emRtYytcIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJK1BIQmhkR2dnWkQwaVRUWXNNVGxCTWl3eUlEQWdNQ3d3SURnc01qRklNVFpCTWl3eUlEQWdNQ3d3SURFNExERTVWamRJTmxZeE9VMDRMRGxJTVRaV01UbElPRlk1VFRFMUxqVXNORXd4TkM0MUxETklPUzQxVERndU5TdzBTRFZXTmtneE9WWTBTREUxTGpWYUlpQXZQand2YzNablBnPT1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJK1BIQmhkR2dnWkQwaVRURTBMakEyTERsTU1UVXNPUzQ1TkV3MUxqa3lMREU1U0RWV01UZ3VNRGhNTVRRdU1EWXNPVTB4Tnk0Mk5pd3pRekUzTGpReExETWdNVGN1TVRVc015NHhJREUyTGprMkxETXVNamxNTVRVdU1UTXNOUzR4TWt3eE9DNDRPQ3c0TGpnM1RESXdMamN4TERjdU1EUkRNakV1TVN3MkxqWTFJREl4TGpFc05pQXlNQzQzTVN3MUxqWXpUREU0TGpNM0xETXVNamxETVRndU1UY3NNeTR3T1NBeE55NDVNaXd6SURFM0xqWTJMRE5OTVRRdU1EWXNOaTR4T1V3ekxERTNMakkxVmpJeFNEWXVOelZNTVRjdU9ERXNPUzQ1TkV3eE5DNHdOaXcyTGpFNVdpSWdMejQ4TDNOMlp6ND1cIiIsImV4cG9ydCB7IHJlbmRlclRvZG8gfVxuaW1wb3J0IHsgdG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvSXRlbVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgY3JlYXRlVG9kb2l0ZW0gfSBmcm9tIFwiLi90b2RvSXRlbVwiO1xuXG5jb25zdCByZW5kZXJUb2RvID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFkZEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnV0dG9uJylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKVxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpXG4gICAgY29uc3QgZm9ybUFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQWRkQnV0dG9uJylcbiAgICBjb25zdCBhZGRUb2RvSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUb2RvSXRlbScpXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbEJ1dHRvbicpXG4gXG4gICAgZnVuY3Rpb24gZGlzcGxheVRvZG8oKSB7XG4gICAgICAgIGZvcm1BZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3VG9kbyA9IHRvZG9JdGVtKGAke3RpdGxlLnZhbHVlfWAsIGAke2Rlc2NyaXB0aW9uLnZhbHVlfWAsIGAke2R1ZURhdGUudmFsdWV9YClcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RzLmFkZFRvUHJvamVjdChjcmVhdGVQcm9qZWN0cy5mb2xkZXJOYW1lRWxlbWVudC50ZXh0Q29udGVudCwgbmV3VG9kbylcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RzLmRpc3BsYXlOZXdUb2RvcyhjcmVhdGVQcm9qZWN0cy5hbGxQcm9qZWN0c1tjcmVhdGVQcm9qZWN0cy5mb2xkZXJOYW1lRWxlbWVudC50ZXh0Q29udGVudF0pXG4gICAgICAgICAgICBjcmVhdGVUb2RvaXRlbS5yZXNldEZvcm0oKVxuICAgICAgICAgICAgaGlkZUZvcm0oKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlGb3JtKCkge1xuICAgICAgICBhZGRCdXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYWRkVG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlRm9ybSgpIHtcbiAgICAgICAgYWRkVG9kb0l0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWxGb3JtKCkge1xuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVUb2RvaXRlbS5yZXNldEZvcm0oKVxuICAgICAgICAgICAgaGlkZUZvcm0oKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7ZGlzcGxheUZvcm0sIGRpc3BsYXlUb2RvLCBjYW5jZWxGb3JtLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGV9XG59KSgpOyIsImV4cG9ydCB7IGNyZWF0ZVByb2plY3RzIH07XG5pbXBvcnQgeyBjcmVhdGVUb2RvaXRlbSB9IGZyb20gXCIuL3RvZG9JdGVtXCI7XG5pbXBvcnQgeyB0b2RvSXRlbSB9IGZyb20gXCIuL3RvZG9JdGVtXCI7XG5pbXBvcnQgRm9sZGVySWNvbiBmcm9tICcuLi9kaXN0L2ljb25zL2NpcmNsZS1zbWFsbC5zdmcnXG5cbmNvbnN0IGNyZWF0ZVByb2plY3RzID0gKGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RGb2xkZXInKTtcbiAgICBjb25zdCBwcm9qZWN0Q2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDYW5jZWxCdXR0b24nKVxuICAgIGNvbnN0IGNvbnRlbnRUaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10aXRsZScpXG4gICAgY29uc3QgZm9sZGVyTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb2xkZXJOYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb2xkZXJOYW1lRWxlbWVudCcpXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKVxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKVxuXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSB7XG4gICAgICAgIEluYm94OiBbdG9kb0l0ZW0oJ0phdmFTY3JpcHQgaW4gdGhlIFJlYWwgV29ybGQnLCAnJywgJzExLzE1LzIzJyldLFxuICAgICAgICBUb2RheTogW3RvZG9JdGVtKCdMaW50aW5nJywgJycsICcxMS8xNi8yMycpLFxuICAgICAgICAgICAgICAgIHRvZG9JdGVtKCdEeW5hbWljIFVzZXIgSW50ZXJmYWNlIEludGVyYWN0aW9ucycsICcnLCAnMTEvMTcvMjMnLCksIFxuICAgICAgICAgICAgICAgIHRvZG9JdGVtKCdGb3JtIFZhbGlkYXRpb24gd2l0aCBKYXZhc2NyaXB0JywgJycsICcxMS8xOC8yMycpXSxcbiAgICAgICAgVXBjb21pbmc6IFtdXG4gICAgfTtcbiAgICBmdW5jdGlvbiBuZXdQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGlmIChhbGxQcm9qZWN0cy5oYXNPd25Qcm9wZXJ0eShwcm9qZWN0TmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgYWxsUHJvamVjdHNbcHJvamVjdE5hbWVdID0gW11cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gYWRkVG9Qcm9qZWN0KHByb2plY3RBcnIsIHByb2plY3QpIHtcbiAgICAgICAgYWxsUHJvamVjdHNbcHJvamVjdEFycl0ucHVzaChwcm9qZWN0KVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5TmV3VG9kb3MoZm9sZGVyKSB7XG4gICAgICAgIGNyZWF0ZVRvZG9pdGVtLmNyZWF0ZVRhc2soZm9sZGVyW2ZvbGRlci5sZW5ndGggLSAxXSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvbGRlcigpIHtcbiAgICAgICAgY29udGVudFRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZChmb2xkZXJOYW1lRWxlbWVudClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldENvbnRlbnQoKSB7XG4gICAgICAgIHdoaWxlIChjcmVhdGVUb2RvaXRlbS5jb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRvZG9pdGVtLmNvbnRlbnQucmVtb3ZlQ2hpbGQoY3JlYXRlVG9kb2l0ZW0uY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdEZvcm0oKSB7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBhZGRQcm9qZWN0Rm9sZGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZVByb2plY3RGb3JtKCkge1xuICAgICAgICBhZGRQcm9qZWN0Rm9sZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuY2VsUHJvamVjdEZvcm0oKSB7XG4gICAgICAgIHByb2plY3RDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBhZGRQcm9qZWN0Rm9sZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICByZXNldFByb2plY3RGb3JtKClcbiAgICAgICAgICAgIGhpZGVQcm9qZWN0Rm9ybSgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheURlZmF1bHQoKSB7XG4gICAgICAgIGNyZWF0ZUZvbGRlcigpXG4gICAgICAgIGZvbGRlck5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gJ1RvZGF5J1xuICAgICAgICBuZXdQcm9qZWN0KGFsbFByb2plY3RzWydUb2RheSddKVxuICAgICAgICBjaGFuZ2VEaXNwbGF5KGFsbFByb2plY3RzWydUb2RheSddKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZURpc3BsYXkodG9kb0Fycikge1xuICAgICAgICBmb3IobGV0IGl0ZW0gb2YgdG9kb0Fycikge1xuICAgICAgICAgICAgY3JlYXRlVG9kb2l0ZW0uY3JlYXRlVGFzayhpdGVtKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvbGRlcigpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEZvbGRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0Rm9sZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCduZXdPcHRpb25zJylcbiAgICAgICAgY29uc3QgcHJvamVjdEZvbGRlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBwcm9qZWN0Rm9sZGVySWNvbi5zcmMgPSBGb2xkZXJJY29uXG4gICAgICAgIHByb2plY3RGb2xkZXJJY29uLmFsdCA9ICdmb2xkZXIgaWNvbidcbiAgICAgICAgcHJvamVjdEZvbGRlckljb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvbGRlckljb24nKVxuICAgICAgICBjb25zdCBwcm9qZWN0Zm9sZGVyTmFtZUVsZW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHByb2plY3Rmb2xkZXJOYW1lRWxlbWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdGZvbGRlck5hbWVFbGVtZW50RWxlbWVudCcpXG4gICAgICAgIHByb2plY3Rmb2xkZXJOYW1lRWxlbWVudEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGUudmFsdWVcbiAgICAgICAgcHJvamVjdEZvbGRlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIHByb2plY3RUaXRsZS52YWx1ZSlcblxuICAgICAgICBwcm9qZWN0Rm9sZGVyRWxlbWVudC5hcHBlbmQocHJvamVjdEZvbGRlckljb24sIHByb2plY3Rmb2xkZXJOYW1lRWxlbWVudEVsZW1lbnQpXG4gICAgICAgIHByb2plY3RzLmFwcGVuZChwcm9qZWN0Rm9sZGVyRWxlbWVudClcbiAgICAgICAgbmV3UHJvamVjdChwcm9qZWN0VGl0bGUudmFsdWUpXG4gICAgICAgIHNlbGVjdE5ld0ZvbGRlcigpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdEZvbGRlcigpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm1BZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEZvcm1BZGRCdXR0b24nKVxuICAgICAgICBwcm9qZWN0Rm9ybUFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RGb2xkZXIoKVxuICAgICAgICAgICAgcmVzZXRQcm9qZWN0Rm9ybSgpXG4gICAgICAgICAgICBoaWRlUHJvamVjdEZvcm0oKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdEZvbGRlcigpe1xuICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb25zJyk7XG4gICAgICAgIHByb2plY3RPcHRpb25zLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2V0Q29udGVudCgpXG4gICAgICAgICAgICAgICAgY3JlYXRlRm9sZGVyKClcbiAgICAgICAgICAgICAgICBmb2xkZXJOYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHByb2plY3QuZGF0YXNldC5rZXkgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNoYW5nZURpc3BsYXkoYWxsUHJvamVjdHNbcHJvamVjdC5kYXRhc2V0LmtleV0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNlbGVjdE5ld0ZvbGRlcigpe1xuICAgICAgICBjb25zdCBOZXdwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXdPcHRpb25zJyk7XG4gICAgICAgIE5ld3Byb2plY3RPcHRpb25zLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2V0Q29udGVudCgpXG4gICAgICAgICAgICAgICAgY3JlYXRlRm9sZGVyKClcbiAgICAgICAgICAgICAgICBmb2xkZXJOYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHByb2plY3QuZGF0YXNldC5rZXlcbiAgICAgICAgICAgICAgICBjaGFuZ2VEaXNwbGF5KGFsbFByb2plY3RzW3Byb2plY3QuZGF0YXNldC5rZXldKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNldFByb2plY3RGb3JtKCkge1xuICAgICAgICBwcm9qZWN0VGl0bGUudmFsdWUgPSAnJ1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFsbFByb2plY3RzLCBuZXdQcm9qZWN0LCBhZGRUb1Byb2plY3QsIGRpc3BsYXlOZXdUb2Rvcywgc2VsZWN0Rm9sZGVyLCBcbiAgICAgICAgZGlzcGxheVByb2plY3RGb3JtLCBjYW5jZWxQcm9qZWN0Rm9ybSwgZm9sZGVyTmFtZUVsZW1lbnQsIGRpc3BsYXlEZWZhdWx0LCBjaGFuZ2VEaXNwbGF5LCBcbiAgICAgICAgcmVuZGVyUHJvamVjdEZvbGRlclxuICAgIH1cbn0pKCk7XG5cbiIsImV4cG9ydCB7Y3JlYXRlVG9kb2l0ZW0sIHRvZG9JdGVtfVxuaW1wb3J0IHsgcmVuZGVyVG9kbyB9IGZyb20gXCIuL0RPTVwiO1xuaW1wb3J0IGVkaXRUb2RvSWNvbiBmcm9tICcuLi9kaXN0L2ljb25zL3BlbmNpbC1vdXRsaW5lLnN2ZydcbmltcG9ydCBkZWxldGVUb2RvSWNvbiBmcm9tICcuLi9kaXN0L2ljb25zL2RlbGV0ZS1vdXRsaW5lLnN2ZydcblxuLy9Ub2RvIGZhY3RvcnlcbmNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkgPT4ge1xuICAgIGNvbnN0IHByaW9yaXR5ID0gKCkgPT4ge2NvbnNvbGUubG9nKCdwcmlvcml0eSBpcyBoaWdoJyl9XG4gICAgY29uc3QgY2hlY2tCb3ggPSAoKSA9PiB7Y29uc29sZS5sb2coJ3RvZG8gaXMgZG9uZScpfVxuICBcbiAgICByZXR1cm57dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tCb3h9XG59O1xuXG4vLyBUb2RvIG1vZHVsZVxuY29uc3QgY3JlYXRlVG9kb2l0ZW0gPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZVRhc2sodG9kbykge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpXG4gIFxuICAgIGNvbnN0IGZpcnN0VG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZmlyc3RUb2RvRGl2LmNsYXNzTGlzdC5hZGQoJ2ZpcnN0VG9kb0RpdicpXG5cbiAgICBjb25zdCBjaXJjbGVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2lyY2xlQ2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2lyY2xlQ2hlY2tib3gnKVxuXG4gICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7IC8vIFVuaXF1ZSB0aW1lc3RhbXBcbiAgICBjb25zdCByYW5kb21WYWx1ZSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcbiAgICBjb25zdCBjaGVja2JveElkID0gYGNoZWNrYm94XyR7dGltZXN0YW1wfV8ke3JhbmRvbVZhbHVlfWA7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjaGVja2JveElkKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjaGVja2JveElkKTtcblxuICAgIGNpcmNsZUNoZWNrYm94LmFwcGVuZChjaGVja2JveCwgbGFiZWwpXG4gICAgZmlyc3RUb2RvRGl2LmFwcGVuZENoaWxkKGNpcmNsZUNoZWNrYm94KVxuICBcbiAgICBjb25zdCBzZWNvbmRUb2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzZWNvbmRUb2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3NlY29uZFRvZG9EaXYnKVxuICAgIGNvbnN0IHRvZG9UaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9UaXRsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kb1RpdGxlJylcbiAgICB0b2RvVGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdG9kby50aXRsZVxuICAgIGNvbnN0IHRvZG9EdWVEYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kb0R1ZURhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG9EdWVEYXRlJylcbiAgICB0b2RvRHVlRGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGVcbiAgICBzZWNvbmRUb2RvRGl2LmFwcGVuZCh0b2RvVGl0bGVFbGVtZW50LCB0b2RvRHVlRGF0ZUVsZW1lbnQpXG4gIFxuICAgIGNvbnN0IHRoaXJkVG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcmRUb2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RoaXJkVG9kb0RpdicpXG4gICAgY29uc3QgZWRpdFRvZG9CdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb25zdCBlZGl0VG9kb0J1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGVkaXRUb2RvQnV0dG9uSWNvbi5zcmMgPSBlZGl0VG9kb0ljb25cbiAgICBlZGl0VG9kb0J1dHRvbkljb24uYWx0ID0gXCJlZGl0IGJ1dHRvblwiXG4gICAgZWRpdFRvZG9CdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ2VkaXRUb2RvQnV0dG9uSWNvbicpXG4gICAgZWRpdFRvZG9CdXR0b25FbGVtZW50LmFwcGVuZENoaWxkKGVkaXRUb2RvQnV0dG9uSWNvbilcbiAgICBjb25zdCBkZWxldGVUb2RvQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29uc3QgZGVsZXRlVG9kb0J1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGRlbGV0ZVRvZG9CdXR0b25JY29uLnNyYyA9IGRlbGV0ZVRvZG9JY29uIFxuICAgIGRlbGV0ZVRvZG9CdXR0b25JY29uLmFsdCA9IFwiZGVsZXRlIGJ1dHRvblwiXG4gICAgZGVsZXRlVG9kb0J1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlVG9kb0J1dHRvbkljb24nKVxuICAgIGRlbGV0ZVRvZG9CdXR0b25FbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZVRvZG9CdXR0b25JY29uKVxuICAgIHRoaXJkVG9kb0Rpdi5hcHBlbmQoZWRpdFRvZG9CdXR0b25FbGVtZW50LCBkZWxldGVUb2RvQnV0dG9uRWxlbWVudClcbiAgXG4gICAgdGFzay5hcHBlbmQoZmlyc3RUb2RvRGl2LCBzZWNvbmRUb2RvRGl2LCB0aGlyZFRvZG9EaXYpXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgIHJlbmRlclRvZG8udGl0bGUudmFsdWUgPSAnJ1xuICAgIHJlbmRlclRvZG8uZGVzY3JpcHRpb24udmFsdWUgPSAnJ1xuICAgIHJlbmRlclRvZG8uZHVlRGF0ZS52YWx1ZSA9ICcnXG59XG5cbiAgcmV0dXJuIHtjcmVhdGVUYXNrLCBjb250ZW50LCByZXNldEZvcm19XG5cbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyByZW5kZXJUb2RvIH0gZnJvbSBcIi4vRE9NXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbi8vc2VsZWN0IERPTSBlbGVtZW50c1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51QnV0dG9uJylcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKVxuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbn0pO1xuXG5cbmNyZWF0ZVByb2plY3RzLmRpc3BsYXlEZWZhdWx0KClcbmNyZWF0ZVByb2plY3RzLmRpc3BsYXlQcm9qZWN0Rm9ybSgpXG5jcmVhdGVQcm9qZWN0cy5jYW5jZWxQcm9qZWN0Rm9ybSgpXG5jcmVhdGVQcm9qZWN0cy5zZWxlY3RGb2xkZXIoKVxuY3JlYXRlUHJvamVjdHMucmVuZGVyUHJvamVjdEZvbGRlcigpXG5yZW5kZXJUb2RvLmRpc3BsYXlGb3JtKClcbnJlbmRlclRvZG8uZGlzcGxheVRvZG8oKVxucmVuZGVyVG9kby5jYW5jZWxGb3JtKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=