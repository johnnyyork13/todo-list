/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((module) => {

const container = document.getElementById('container');

function createForm(whatKind, formData){
    //remove old form
    (function(){
        if(container.children.length > 0){
            for (let i = container.children.length - 1; i >= 0; i--) {
                const e = container.children[i];
                e.remove();
            }
        }
    })();
    //create DOM elements for new form
    const mainSection = document.createElement('div');
    const mainHeader = document.createElement('div');
    const header = document.createElement('h2');
    const mainBody = document.createElement('div');
    mainSection.id = 'mainSection';
    mainHeader.id = 'mainHeader';
    header.id = 'header';
    header.textContent = 'New Project';
    mainBody.id = 'mainBody';

    if (whatKind === 'project') {
        const projectNameInput = document.createElement('input');
        const projectDetailsInput = document.createElement('input');
        const addProjectBtn = document.createElement('button');
        projectNameInput.id = 'projectNameInput';
        projectDetailsInput.id = 'projectDetailsInput';
        projectNameInput.placeholder = 'Enter Project Name';
        projectDetailsInput.placeholder = 'Enter Project Details';
        addProjectBtn.id = 'addProjectBtn';
        addProjectBtn.textContent = 'Create Project';
        checkData(whatKind, formData, [projectNameInput, projectDetailsInput]);
        appendElements([projectNameInput, projectDetailsInput], addProjectBtn)
    } else if (whatKind == 'task') {
        header.textContent = 'New Task';
        const taskInputForm = document.createElement('div');
        const taskNameInput = document.createElement('input');
        const taskDetailsInput = document.createElement('input');
        const taskDateLabel = document.createElement('label');
        const taskDateInput = document.createElement('input');
        const taskPriorityInput = document.createElement('select');
        const taskPriorityLabel = document.createElement('label');
        const low = document.createElement('option');
        const medium = document.createElement('option');
        const high = document.createElement('option');
        const addTaskBtn = document.createElement('button');
        taskDateInput.type = 'date';
        taskPriorityInput.appendChild(low);
        taskPriorityInput.appendChild(medium);
        taskPriorityInput.appendChild(high);
        taskInputForm.id = 'taskInputForm';
        taskNameInput.id = 'taskNameInput';
        taskNameInput.placeholder = 'Enter Task Name';
        taskDetailsInput.id = 'taskDetailsInput';
        taskDetailsInput.placeholder = 'Enter Task Details';
        taskDateInput.id = 'taskDateInput';
        taskDateLabel.textContent = 'Task Due';
        taskPriorityInput.id = 'taskPriorityInput';
        taskPriorityLabel.textContent = 'Task Priority';
        low.textContent = 'Low';
        medium.textContent = 'Medium';
        high.textContent = 'High';
        addTaskBtn.id = 'addTaskBtn';
        addTaskBtn.textContent = 'Add Task';
        checkData(whatKind, formData, [taskNameInput, taskDetailsInput, taskDateInput, taskPriorityInput])
        appendElements([taskNameInput, taskDetailsInput, taskDateLabel, taskDateInput, taskPriorityLabel, taskPriorityInput], addTaskBtn)
    }
    //check if there is any data
    function checkData(whatKind, formData, inputList){
        if (formData !== '') {
            if (whatKind === 'project') {
                inputList[0].value = formData.name;
                inputList[1].value = formData.details;
            } else if (whatKind === 'task') {
                inputList[0].value = formData.name;
                inputList[1].value = formData.details;
                inputList[2].value = formData.date;
                inputList[3].value = formData.priority;
            }
        }
    }
    //append new elements to DOM
    function appendElements(inputList, btn){
        for (let i = 0; i < inputList.length; i++) {
            const e = inputList[i];
            mainBody.appendChild(e);
        }
        mainBody.appendChild(btn);
        mainHeader.appendChild(header);
        mainSection.appendChild(mainHeader);
        mainSection.appendChild(mainBody);
        container.appendChild(mainSection);
    }
}

module.exports = {createForm};

/***/ }),

/***/ "./src/modules.js":
/*!************************!*\
  !*** ./src/modules.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {createForm} = __webpack_require__(/*! ./forms.js */ "./src/forms.js");

function takeValuesAndCreateProject(project){
    const projectName = document.getElementById('projectNameInput').value;
    const projectDetails = document.getElementById('projectDetailsInput').value;
    project.name = projectName;
    project.details = projectDetails;
}

function removeMainBodyContent(){
    const mainBody = document.getElementById('mainBody');
    for (let i = mainBody.children.length - 1; i >= 0; i--) {
        const e = mainBody.children[i];
        e.remove();
    }
}

function removeEverything(){
    const container = document.getElementById('container');
    for (let i = container.children.length - 1; i >= 0; i--){
        const e = container.children[i];
        e.remove();
    }
}

function showAddTaskToProjectPage(project){
    const mainBody = document.getElementById('mainBody');
    const header = document.getElementById('header');
    header.textContent = project.name;
    for (let i = 0; i < project.taskList.length; i++) {
        const task = project.taskList[i];
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('taskDiv');
        taskDiv.textContent = task.name;
        mainBody.appendChild(taskDiv);
    }

    const addNewTaskBtn = document.createElement('button');
    const finishedAddingTasksBtn = document.createElement('button');
    addNewTaskBtn.id = 'addNewTaskBtn';
    addNewTaskBtn.textContent = '+'
    finishedAddingTasksBtn.id = 'finishedAddingTasksBtn';
    finishedAddingTasksBtn.textContent = 'Done';
    mainBody.appendChild(addNewTaskBtn);
    mainBody.appendChild(finishedAddingTasksBtn);
    finishedAddingTasksBtn.addEventListener('click', function(){
        removeEverything();
    })

}

function takeValuesAndCreateTask(task){
    const taskNameInput = document.getElementById('taskNameInput');
    const taskDetailsInput = document.getElementById('taskDetailsInput');
    const taskDateInput = document.getElementById('taskDateInput');
    const taskPriorityInput = document.getElementById('taskPriorityInput');
    task.name = taskNameInput.value;
    task.details = taskDetailsInput.value;
    task.date = taskDateInput.value;
    task.priority = taskPriorityInput.value;
}

function addProjectToProjectList(projectList, newProject){
    projectList.push(newProject);
    const projectUl = document.getElementById('projectUl'); 
    const projectLi = document.createElement('li');
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('projectLink');
    projectDiv.classList.add('project');
    projectDiv.id = `${newProject.name}-project`;
    projectDiv.textContent = newProject.name;
    projectLi.appendChild(projectDiv);
    projectUl.appendChild(projectLi);
    projectUl.insertBefore(projectLi, projectLi.previousElementSibling);
    projectDiv.addEventListener('click', function(){
        viewProject(newProject)}
        );
}

function viewProject(newProject) {
    removeEverything();
    const container = document.getElementById('container');
    const mainSection = document.createElement('div');
    const mainHeader = document.createElement('div');
    const header = document.createElement('h2');
    const mainBody = document.createElement('div');
    const projectDetails = document.createElement('h3');
    const editProjectBtn = document.createElement('button');
    const closeProjectBtn = document.createElement('button');
    header.textContent = newProject.name;
    projectDetails.textContent = newProject.details;
    mainSection.id = 'mainSection';
    mainHeader.id = 'mainHeader';
    mainBody.id = 'mainBody';
    editProjectBtn.textContent = 'Edit Project';
    closeProjectBtn.textContent = 'Close';
    mainHeader.appendChild(header);
    mainHeader.appendChild(closeProjectBtn);
    mainBody.appendChild(projectDetails);
    for (let i = 0; i < newProject.taskList.length; i++){
        const task = newProject.taskList[i];
        const taskDiv = document.createElement('div');
        const taskName = document.createElement('p');
        const taskDetails = document.createElement('p');
        const taskDate = document.createElement('p');
        const taskPriority = document.createElement('p');
        const editTaskBtn = document.createElement('button');
        const deleteTaskBtn = document.createElement('button');
        taskName.textContent = task.name;
        taskDetails.textContent = task.details;
        taskDate.textContent = task.date;
        taskPriority.textContent = task.priority;
        editTaskBtn.textContent = 'Edit';
        deleteTaskBtn.textContent = 'Delete';
        editTaskBtn.addEventListener('click', function(){
            createForm('task', task);
            const addTaskBtn = document.getElementById('addTaskBtn');
            addTaskBtn.addEventListener('click', function(){
                takeValuesAndCreateTask(task);
                viewProject(newProject);
            })
        })
        deleteTaskBtn.addEventListener('click', function(){
            for (let i = 0; i < newProject.taskList.length; i++){
                const t = newProject.taskList[i];
                if (t.name === task.name) {
                    newProject.taskList.splice(i, 1);
                }
            }
            viewProject(newProject);
        })
        taskDiv.appendChild(taskName);
        taskDiv.appendChild(taskDetails);
        taskDiv.appendChild(taskDate);
        taskDiv.appendChild(taskPriority);
        taskDiv.appendChild(editTaskBtn);
        taskDiv.appendChild(deleteTaskBtn);
        mainBody.appendChild(taskDiv);
    }
    mainBody.appendChild(editProjectBtn);
    mainSection.appendChild(mainHeader);
    mainSection.appendChild(mainBody);
    container.appendChild(mainSection);
    closeProjectBtn.addEventListener('click', function(){
        removeEverything();
    })
    editProjectBtn.addEventListener('click', function(){
        createForm('project', newProject);
        const addProjectBtn = document.getElementById('addProjectBtn');
        addProjectBtn.addEventListener('click', function(){
            const oldProject = newProject.name;
            takeValuesAndCreateProject(newProject);
            updateProjectList(newProject, oldProject);
            viewProject(newProject);
        })
    })
}

function updateProjectList(newProject, oldProject){
    const projectUl = document.getElementById('projectUl');
    for (let i = 0; i < projectUl.children.length; i++){
        const e = projectUl.children[i].children[0];
        if (`${oldProject}-project` === e.id) {
            e.textContent = newProject.name;
        }
    }
}

module.exports = {
    takeValuesAndCreateProject,
    removeMainBodyContent,
    removeEverything,
    showAddTaskToProjectPage,
    takeValuesAndCreateTask,
    addProjectToProjectList,
    viewProject}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((module) => {

function Project() {
    const thisProject = this;
    this.name = '';
    this.details = '';
    this.taskList = [];
    this.removeTask = function(task){
        for (let i = 0; i < thisProject.taskList.length; i++){
            const t = thisProject.taskList[i];
            if (t.name === task.name) {
                this.taskList.splice(i, 1);
            }
        }
    }
}

function Task() {
    this.name = '';
    this.details = '';
    this.date = '';
    this.priority = '';
}

module.exports = {Project, Task};

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const {Project} = __webpack_require__(/*! ./project.js */ "./src/project.js");
const {Task} = __webpack_require__(/*! ./project.js */ "./src/project.js");
const {createForm} = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
const {takeValuesAndCreateProject} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {removeMainBodyContent} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {removeEverything} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {showAddTaskToProjectPage} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {takeValuesAndCreateTask} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {addProjectToProjectList} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {viewProject} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");

const addProject = document.getElementById('addProject');
const projectList = [];



//test code
const testTask = new Task();
testTask.name = 'Test Task';
testTask.details = 'Test Details';
testTask.date = '05/13/1991';
testTask.priority = 'High';

const testProject = new Project();
testProject.name = 'Test Project';
testProject.details = 'Test Details';
testProject.taskList.push(testTask);

addProjectToProjectList(projectList, testProject);

const allTasksBtn = document.getElementById('allTasksBtn');
allTasksBtn.addEventListener('click',function(){
    createForm('task', testTask);
})
//end test code



addProject.addEventListener('click', function(){
    createForm('project', '');
    const addProjectBtn = document.getElementById('addProjectBtn');
    addProjectBtn.addEventListener('click', function(){
        const newProject = new Project();
        takeValuesAndCreateProject(newProject);
        addProjectToProjectList(projectList, newProject);
        removeMainBodyContent();
        showAddTaskToProjectPage(newProject);
        addTaskToProject(newProject);
    })
})

function addTaskToProject(project){
    const addNewTaskBtn = document.getElementById('addNewTaskBtn');
    addNewTaskBtn.addEventListener('click', function(){
        createForm('task', '');
        const addTaskBtn = document.getElementById('addTaskBtn');
        addTaskBtn.addEventListener('click', function(){
            const newTask = new Task();
            takeValuesAndCreateTask(newTask);
            project.taskList.push(newTask);
            removeMainBodyContent();
            showAddTaskToProjectPage(project);
            addTaskToProject(project);
        })
    })
}










})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7QUN0QkEsT0FBTyxTQUFTLEVBQUUsbUJBQU8sQ0FBQyxzQ0FBYztBQUN4QyxPQUFPLE1BQU0sRUFBRSxtQkFBTyxDQUFDLHNDQUFjO0FBQ3JDLE9BQU8sWUFBWSxFQUFFLG1CQUFPLENBQUMsa0NBQVk7QUFDekMsT0FBTyw0QkFBNEIsRUFBRSxtQkFBTyxDQUFDLHNDQUFjO0FBQzNELE9BQU8sdUJBQXVCLEVBQUUsbUJBQU8sQ0FBQyxzQ0FBYztBQUN0RCxPQUFPLGtCQUFrQixFQUFFLG1CQUFPLENBQUMsc0NBQWM7QUFDakQsT0FBTywwQkFBMEIsRUFBRSxtQkFBTyxDQUFDLHNDQUFjO0FBQ3pELE9BQU8seUJBQXlCLEVBQUUsbUJBQU8sQ0FBQyxzQ0FBYztBQUN4RCxPQUFPLHlCQUF5QixFQUFFLG1CQUFPLENBQUMsc0NBQWM7QUFDeEQsT0FBTyxhQUFhLEVBQUUsbUJBQU8sQ0FBQyxzQ0FBYzs7QUFFNUM7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm0od2hhdEtpbmQsIGZvcm1EYXRhKXtcbiAgICAvL3JlbW92ZSBvbGQgZm9ybVxuICAgIChmdW5jdGlvbigpe1xuICAgICAgICBpZihjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZSA9IGNvbnRhaW5lci5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBlLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkoKTtcbiAgICAvL2NyZWF0ZSBET00gZWxlbWVudHMgZm9yIG5ldyBmb3JtXG4gICAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5TZWN0aW9uLmlkID0gJ21haW5TZWN0aW9uJztcbiAgICBtYWluSGVhZGVyLmlkID0gJ21haW5IZWFkZXInO1xuICAgIGhlYWRlci5pZCA9ICdoZWFkZXInO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG4gICAgbWFpbkJvZHkuaWQgPSAnbWFpbkJvZHknO1xuXG4gICAgaWYgKHdoYXRLaW5kID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQuaWQgPSAncHJvamVjdE5hbWVJbnB1dCc7XG4gICAgICAgIHByb2plY3REZXRhaWxzSW5wdXQuaWQgPSAncHJvamVjdERldGFpbHNJbnB1dCc7XG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgUHJvamVjdCBOYW1lJztcbiAgICAgICAgcHJvamVjdERldGFpbHNJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBQcm9qZWN0IERldGFpbHMnO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLmlkID0gJ2FkZFByb2plY3RCdG4nO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBQcm9qZWN0JztcbiAgICAgICAgY2hlY2tEYXRhKHdoYXRLaW5kLCBmb3JtRGF0YSwgW3Byb2plY3ROYW1lSW5wdXQsIHByb2plY3REZXRhaWxzSW5wdXRdKTtcbiAgICAgICAgYXBwZW5kRWxlbWVudHMoW3Byb2plY3ROYW1lSW5wdXQsIHByb2plY3REZXRhaWxzSW5wdXRdLCBhZGRQcm9qZWN0QnRuKVxuICAgIH0gZWxzZSBpZiAod2hhdEtpbmQgPT0gJ3Rhc2snKSB7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XG4gICAgICAgIGNvbnN0IHRhc2tJbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0YXNrRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza0RhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsb3cpO1xuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChtZWRpdW0pO1xuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChoaWdoKTtcbiAgICAgICAgdGFza0lucHV0Rm9ybS5pZCA9ICd0YXNrSW5wdXRGb3JtJztcbiAgICAgICAgdGFza05hbWVJbnB1dC5pZCA9ICd0YXNrTmFtZUlucHV0JztcbiAgICAgICAgdGFza05hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBUYXNrIE5hbWUnO1xuICAgICAgICB0YXNrRGV0YWlsc0lucHV0LmlkID0gJ3Rhc2tEZXRhaWxzSW5wdXQnO1xuICAgICAgICB0YXNrRGV0YWlsc0lucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIFRhc2sgRGV0YWlscyc7XG4gICAgICAgIHRhc2tEYXRlSW5wdXQuaWQgPSAndGFza0RhdGVJbnB1dCc7XG4gICAgICAgIHRhc2tEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBEdWUnO1xuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5pZCA9ICd0YXNrUHJpb3JpdHlJbnB1dCc7XG4gICAgICAgIHRhc2tQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgUHJpb3JpdHknO1xuICAgICAgICBsb3cudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgbWVkaXVtLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgIGhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICAgIGFkZFRhc2tCdG4uaWQgPSAnYWRkVGFza0J0bic7XG4gICAgICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgICAgICBjaGVja0RhdGEod2hhdEtpbmQsIGZvcm1EYXRhLCBbdGFza05hbWVJbnB1dCwgdGFza0RldGFpbHNJbnB1dCwgdGFza0RhdGVJbnB1dCwgdGFza1ByaW9yaXR5SW5wdXRdKVxuICAgICAgICBhcHBlbmRFbGVtZW50cyhbdGFza05hbWVJbnB1dCwgdGFza0RldGFpbHNJbnB1dCwgdGFza0RhdGVMYWJlbCwgdGFza0RhdGVJbnB1dCwgdGFza1ByaW9yaXR5TGFiZWwsIHRhc2tQcmlvcml0eUlucHV0XSwgYWRkVGFza0J0bilcbiAgICB9XG4gICAgLy9jaGVjayBpZiB0aGVyZSBpcyBhbnkgZGF0YVxuICAgIGZ1bmN0aW9uIGNoZWNrRGF0YSh3aGF0S2luZCwgZm9ybURhdGEsIGlucHV0TGlzdCl7XG4gICAgICAgIGlmIChmb3JtRGF0YSAhPT0gJycpIHtcbiAgICAgICAgICAgIGlmICh3aGF0S2luZCA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRMaXN0WzBdLnZhbHVlID0gZm9ybURhdGEubmFtZTtcbiAgICAgICAgICAgICAgICBpbnB1dExpc3RbMV0udmFsdWUgPSBmb3JtRGF0YS5kZXRhaWxzO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aGF0S2luZCA9PT0gJ3Rhc2snKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRMaXN0WzBdLnZhbHVlID0gZm9ybURhdGEubmFtZTtcbiAgICAgICAgICAgICAgICBpbnB1dExpc3RbMV0udmFsdWUgPSBmb3JtRGF0YS5kZXRhaWxzO1xuICAgICAgICAgICAgICAgIGlucHV0TGlzdFsyXS52YWx1ZSA9IGZvcm1EYXRhLmRhdGU7XG4gICAgICAgICAgICAgICAgaW5wdXRMaXN0WzNdLnZhbHVlID0gZm9ybURhdGEucHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9hcHBlbmQgbmV3IGVsZW1lbnRzIHRvIERPTVxuICAgIGZ1bmN0aW9uIGFwcGVuZEVsZW1lbnRzKGlucHV0TGlzdCwgYnRuKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBpbnB1dExpc3RbaV07XG4gICAgICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZChlKTtcbiAgICAgICAgfVxuICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuICAgICAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluQm9keSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtjcmVhdGVGb3JtfTsiLCJjb25zdCB7Y3JlYXRlRm9ybX0gPSByZXF1aXJlKCcuL2Zvcm1zLmpzJyk7XG5cbmZ1bmN0aW9uIHRha2VWYWx1ZXNBbmRDcmVhdGVQcm9qZWN0KHByb2plY3Qpe1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGV0YWlsc0lucHV0JykudmFsdWU7XG4gICAgcHJvamVjdC5uYW1lID0gcHJvamVjdE5hbWU7XG4gICAgcHJvamVjdC5kZXRhaWxzID0gcHJvamVjdERldGFpbHM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1haW5Cb2R5Q29udGVudCgpe1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Cb2R5Jyk7XG4gICAgZm9yIChsZXQgaSA9IG1haW5Cb2R5LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGUgPSBtYWluQm9keS5jaGlsZHJlbltpXTtcbiAgICAgICAgZS5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZXJ5dGhpbmcoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgZm9yIChsZXQgaSA9IGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgICAgIGNvbnN0IGUgPSBjb250YWluZXIuY2hpbGRyZW5baV07XG4gICAgICAgIGUucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93QWRkVGFza1RvUHJvamVjdFBhZ2UocHJvamVjdCl7XG4gICAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkJvZHknKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrTGlzdFtpXTtcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEaXYnKTtcbiAgICAgICAgdGFza0Rpdi50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkTmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGZpbmlzaGVkQWRkaW5nVGFza3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGROZXdUYXNrQnRuLmlkID0gJ2FkZE5ld1Rhc2tCdG4nO1xuICAgIGFkZE5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSAnKydcbiAgICBmaW5pc2hlZEFkZGluZ1Rhc2tzQnRuLmlkID0gJ2ZpbmlzaGVkQWRkaW5nVGFza3NCdG4nO1xuICAgIGZpbmlzaGVkQWRkaW5nVGFza3NCdG4udGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoYWRkTmV3VGFza0J0bik7XG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoZmluaXNoZWRBZGRpbmdUYXNrc0J0bik7XG4gICAgZmluaXNoZWRBZGRpbmdUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHJlbW92ZUV2ZXJ5dGhpbmcoKTtcbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIHRha2VWYWx1ZXNBbmRDcmVhdGVUYXNrKHRhc2spe1xuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWVJbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tEZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0RldGFpbHNJbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0RhdGVJbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQcmlvcml0eUlucHV0Jyk7XG4gICAgdGFzay5uYW1lID0gdGFza05hbWVJbnB1dC52YWx1ZTtcbiAgICB0YXNrLmRldGFpbHMgPSB0YXNrRGV0YWlsc0lucHV0LnZhbHVlO1xuICAgIHRhc2suZGF0ZSA9IHRhc2tEYXRlSW5wdXQudmFsdWU7XG4gICAgdGFzay5wcmlvcml0eSA9IHRhc2tQcmlvcml0eUlucHV0LnZhbHVlO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9Qcm9qZWN0TGlzdChwcm9qZWN0TGlzdCwgbmV3UHJvamVjdCl7XG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICBjb25zdCBwcm9qZWN0VWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFVsJyk7IFxuICAgIGNvbnN0IHByb2plY3RMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpbmsnKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBwcm9qZWN0RGl2LmlkID0gYCR7bmV3UHJvamVjdC5uYW1lfS1wcm9qZWN0YDtcbiAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gbmV3UHJvamVjdC5uYW1lO1xuICAgIHByb2plY3RMaS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICBwcm9qZWN0VWwuYXBwZW5kQ2hpbGQocHJvamVjdExpKTtcbiAgICBwcm9qZWN0VWwuaW5zZXJ0QmVmb3JlKHByb2plY3RMaSwgcHJvamVjdExpLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpO1xuICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICB2aWV3UHJvamVjdChuZXdQcm9qZWN0KX1cbiAgICAgICAgKTtcbn1cblxuZnVuY3Rpb24gdmlld1Byb2plY3QobmV3UHJvamVjdCkge1xuICAgIHJlbW92ZUV2ZXJ5dGhpbmcoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBlZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNsb3NlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QubmFtZTtcbiAgICBwcm9qZWN0RGV0YWlscy50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QuZGV0YWlscztcbiAgICBtYWluU2VjdGlvbi5pZCA9ICdtYWluU2VjdGlvbic7XG4gICAgbWFpbkhlYWRlci5pZCA9ICdtYWluSGVhZGVyJztcbiAgICBtYWluQm9keS5pZCA9ICdtYWluQm9keSc7XG4gICAgZWRpdFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0JztcbiAgICBjbG9zZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlUHJvamVjdEJ0bik7XG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdERldGFpbHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3UHJvamVjdC50YXNrTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXdQcm9qZWN0LnRhc2tMaXN0W2ldO1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSB0YXNrLmRldGFpbHM7XG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5kYXRlO1xuICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICBlZGl0VGFza0J0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgICAgZGVsZXRlVGFza0J0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICBlZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjcmVhdGVGb3JtKCd0YXNrJywgdGFzayk7XG4gICAgICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdG4nKTtcbiAgICAgICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHRha2VWYWx1ZXNBbmRDcmVhdGVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIHZpZXdQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1Byb2plY3QudGFza0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBuZXdQcm9qZWN0LnRhc2tMaXN0W2ldO1xuICAgICAgICAgICAgICAgIGlmICh0Lm5hbWUgPT09IHRhc2submFtZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LnRhc2tMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2aWV3UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGVkaXRUYXNrQnRuKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcbiAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgfVxuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0QnRuKTtcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluQm9keSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5TZWN0aW9uKTtcbiAgICBjbG9zZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICByZW1vdmVFdmVyeXRoaW5nKCk7XG4gICAgfSlcbiAgICBlZGl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNyZWF0ZUZvcm0oJ3Byb2plY3QnLCBuZXdQcm9qZWN0KTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnRuJyk7XG4gICAgICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3Qgb2xkUHJvamVjdCA9IG5ld1Byb2plY3QubmFtZTtcbiAgICAgICAgICAgIHRha2VWYWx1ZXNBbmRDcmVhdGVQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgdXBkYXRlUHJvamVjdExpc3QobmV3UHJvamVjdCwgb2xkUHJvamVjdCk7XG4gICAgICAgICAgICB2aWV3UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0TGlzdChuZXdQcm9qZWN0LCBvbGRQcm9qZWN0KXtcbiAgICBjb25zdCBwcm9qZWN0VWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFVsJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0VWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBlID0gcHJvamVjdFVsLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdO1xuICAgICAgICBpZiAoYCR7b2xkUHJvamVjdH0tcHJvamVjdGAgPT09IGUuaWQpIHtcbiAgICAgICAgICAgIGUudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0Lm5hbWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHRha2VWYWx1ZXNBbmRDcmVhdGVQcm9qZWN0LFxuICAgIHJlbW92ZU1haW5Cb2R5Q29udGVudCxcbiAgICByZW1vdmVFdmVyeXRoaW5nLFxuICAgIHNob3dBZGRUYXNrVG9Qcm9qZWN0UGFnZSxcbiAgICB0YWtlVmFsdWVzQW5kQ3JlYXRlVGFzayxcbiAgICBhZGRQcm9qZWN0VG9Qcm9qZWN0TGlzdCxcbiAgICB2aWV3UHJvamVjdH0iLCJmdW5jdGlvbiBQcm9qZWN0KCkge1xuICAgIGNvbnN0IHRoaXNQcm9qZWN0ID0gdGhpcztcbiAgICB0aGlzLm5hbWUgPSAnJztcbiAgICB0aGlzLmRldGFpbHMgPSAnJztcbiAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgdGhpcy5yZW1vdmVUYXNrID0gZnVuY3Rpb24odGFzayl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpc1Byb2plY3QudGFza0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXNQcm9qZWN0LnRhc2tMaXN0W2ldO1xuICAgICAgICAgICAgaWYgKHQubmFtZSA9PT0gdGFzay5uYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIFRhc2soKSB7XG4gICAgdGhpcy5uYW1lID0gJyc7XG4gICAgdGhpcy5kZXRhaWxzID0gJyc7XG4gICAgdGhpcy5kYXRlID0gJyc7XG4gICAgdGhpcy5wcmlvcml0eSA9ICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtQcm9qZWN0LCBUYXNrfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3Qge1Byb2plY3R9ID0gcmVxdWlyZSgnLi9wcm9qZWN0LmpzJyk7XG5jb25zdCB7VGFza30gPSByZXF1aXJlKCcuL3Byb2plY3QuanMnKTtcbmNvbnN0IHtjcmVhdGVGb3JtfSA9IHJlcXVpcmUoJy4vZm9ybXMuanMnKTtcbmNvbnN0IHt0YWtlVmFsdWVzQW5kQ3JlYXRlUHJvamVjdH0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHtyZW1vdmVNYWluQm9keUNvbnRlbnR9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7cmVtb3ZlRXZlcnl0aGluZ30gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHtzaG93QWRkVGFza1RvUHJvamVjdFBhZ2V9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7dGFrZVZhbHVlc0FuZENyZWF0ZVRhc2t9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7YWRkUHJvamVjdFRvUHJvamVjdExpc3R9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7dmlld1Byb2plY3R9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5cbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpO1xuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcblxuXG5cbi8vdGVzdCBjb2RlXG5jb25zdCB0ZXN0VGFzayA9IG5ldyBUYXNrKCk7XG50ZXN0VGFzay5uYW1lID0gJ1Rlc3QgVGFzayc7XG50ZXN0VGFzay5kZXRhaWxzID0gJ1Rlc3QgRGV0YWlscyc7XG50ZXN0VGFzay5kYXRlID0gJzA1LzEzLzE5OTEnO1xudGVzdFRhc2sucHJpb3JpdHkgPSAnSGlnaCc7XG5cbmNvbnN0IHRlc3RQcm9qZWN0ID0gbmV3IFByb2plY3QoKTtcbnRlc3RQcm9qZWN0Lm5hbWUgPSAnVGVzdCBQcm9qZWN0JztcbnRlc3RQcm9qZWN0LmRldGFpbHMgPSAnVGVzdCBEZXRhaWxzJztcbnRlc3RQcm9qZWN0LnRhc2tMaXN0LnB1c2godGVzdFRhc2spO1xuXG5hZGRQcm9qZWN0VG9Qcm9qZWN0TGlzdChwcm9qZWN0TGlzdCwgdGVzdFByb2plY3QpO1xuXG5jb25zdCBhbGxUYXNrc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxUYXNrc0J0bicpO1xuYWxsVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgY3JlYXRlRm9ybSgndGFzaycsIHRlc3RUYXNrKTtcbn0pXG4vL2VuZCB0ZXN0IGNvZGVcblxuXG5cbmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGNyZWF0ZUZvcm0oJ3Byb2plY3QnLCAnJyk7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnRuJyk7XG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCgpO1xuICAgICAgICB0YWtlVmFsdWVzQW5kQ3JlYXRlUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgYWRkUHJvamVjdFRvUHJvamVjdExpc3QocHJvamVjdExpc3QsIG5ld1Byb2plY3QpO1xuICAgICAgICByZW1vdmVNYWluQm9keUNvbnRlbnQoKTtcbiAgICAgICAgc2hvd0FkZFRhc2tUb1Byb2plY3RQYWdlKG5ld1Byb2plY3QpO1xuICAgICAgICBhZGRUYXNrVG9Qcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIH0pXG59KVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3Qpe1xuICAgIGNvbnN0IGFkZE5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTmV3VGFza0J0bicpO1xuICAgIGFkZE5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjcmVhdGVGb3JtKCd0YXNrJywgJycpO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdG4nKTtcbiAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soKTtcbiAgICAgICAgICAgIHRha2VWYWx1ZXNBbmRDcmVhdGVUYXNrKG5ld1Rhc2spO1xuICAgICAgICAgICAgcHJvamVjdC50YXNrTGlzdC5wdXNoKG5ld1Rhc2spO1xuICAgICAgICAgICAgcmVtb3ZlTWFpbkJvZHlDb250ZW50KCk7XG4gICAgICAgICAgICBzaG93QWRkVGFza1RvUHJvamVjdFBhZ2UocHJvamVjdCk7XG4gICAgICAgICAgICBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=