/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {changeOverlay} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");

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
        appendElements(false, [projectNameInput, projectDetailsInput], addProjectBtn)
    } else if (whatKind == 'task') {
        header.textContent = 'New Task';
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
        appendElements(true, [taskNameInput, taskDetailsInput, taskDateLabel, taskDateInput, taskPriorityLabel, taskPriorityInput], addTaskBtn)
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
    function appendElements(isTask, inputList, btn){
        if (!isTask) {
            for (let i = 0; i < inputList.length; i++) {
                const e = inputList[i];
                mainBody.appendChild(e);
            }
            mainBody.appendChild(btn);
        } else {
            changeOverlay('dark');
            const taskFormContainer = document.createElement('div');
            taskFormContainer.id = 'taskFormContainer';
            const taskFormHeader = document.createElement('h3');
            taskFormHeader.textContent = 'Task Form';
            taskFormContainer.appendChild(taskFormHeader);
            for (let i = 0; i < inputList.length; i++) {
                const e = inputList[i];
                taskFormContainer.appendChild(e);
            }
            taskFormContainer.appendChild(btn);
            mainBody.appendChild(taskFormContainer);
        }
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
const {Task} = __webpack_require__(/*! ./project.js */ "./src/project.js");

const overlay = document.getElementById('overlay');
overlay.style.visibility = 'hidden';

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

function showAddTaskToProjetPage(project){
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
    addNewTaskBtn.classList.add('addNewTaskBtn');
    addNewTaskBtn.textContent = '+'
    finishedAddingTasksBtn.id = 'finishedAddingTasksBtn';
    finishedAddingTasksBtn.classList.add('regularBtn');
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
    const addNewTaskBtn = document.createElement('button');
    header.textContent = newProject.name;
    projectDetails.textContent = newProject.details;
    mainSection.id = 'mainSection';
    mainHeader.id = 'mainHeader';
    mainBody.id = 'mainBody';
    editProjectBtn.textContent = 'Edit Project';
    closeProjectBtn.textContent = 'Close';
    addNewTaskBtn.textContent = '+';
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
        taskDiv.id = 'taskDiv';
        taskName.textContent = `Task name: ${task.name}`;
        taskDetails.textContent = `Task details: ${task.details}`;
        taskDate.textContent = `Task date: ${task.date}`;
        taskPriority.textContent = `Task Priority: ${task.priority}`;
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
    mainBody.appendChild(addNewTaskBtn);
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
    addNewTaskBtn.addEventListener('click', function(){
        createForm('task', '');
        const addTaskBtn = document.getElementById('addTaskBtn');
        addTaskBtn.addEventListener('click', function(){
            const newTask = new Task();
            takeValuesAndCreateTask(newTask);
            newProject.taskList.push(newTask);
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

function changeOverlay(type){
    if (type === 'light') {
        overlay.style.visibility = 'hidden';
    } else if (type === 'dark') {
        overlay.style.visibility = 'visible';
    }
}

module.exports = {
    takeValuesAndCreateProject,
    removeMainBodyContent,
    removeEverything,
    showAddTaskToProjectPage,
    takeValuesAndCreateTask,
    addProjectToProjectList,
    viewProject,
    changeOverlay}

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
const {changeOverlay} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");

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
        changeOverlay('dark');
        const addTaskBtn = document.getElementById('addTaskBtn');
        addTaskBtn.addEventListener('click', function(){
            const newTask = new Task();
            takeValuesAndCreateTask(newTask);
            project.taskList.push(newTask);
            removeMainBodyContent();
            showAddTaskToProjectPage(project);
            addTaskToProject(project);
            changeOverlay('light');
        })
    })
}










})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2hhbmdlT3ZlcmxheX0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBjcmVhdGVGb3JtKHdoYXRLaW5kLCBmb3JtRGF0YSl7XG4gICAgLy9yZW1vdmUgb2xkIGZvcm1cbiAgICAoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBjb250YWluZXIuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pKCk7XG4gICAgLy9jcmVhdGUgRE9NIGVsZW1lbnRzIGZvciBuZXcgZm9ybVxuICAgIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluU2VjdGlvbi5pZCA9ICdtYWluU2VjdGlvbic7XG4gICAgbWFpbkhlYWRlci5pZCA9ICdtYWluSGVhZGVyJztcbiAgICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuICAgIG1haW5Cb2R5LmlkID0gJ21haW5Cb2R5JztcblxuICAgIGlmICh3aGF0S2luZCA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LmlkID0gJ3Byb2plY3ROYW1lSW5wdXQnO1xuICAgICAgICBwcm9qZWN0RGV0YWlsc0lucHV0LmlkID0gJ3Byb2plY3REZXRhaWxzSW5wdXQnO1xuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIFByb2plY3QgTmFtZSc7XG4gICAgICAgIHByb2plY3REZXRhaWxzSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgUHJvamVjdCBEZXRhaWxzJztcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5pZCA9ICdhZGRQcm9qZWN0QnRuJztcbiAgICAgICAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUgUHJvamVjdCc7XG4gICAgICAgIGNoZWNrRGF0YSh3aGF0S2luZCwgZm9ybURhdGEsIFtwcm9qZWN0TmFtZUlucHV0LCBwcm9qZWN0RGV0YWlsc0lucHV0XSk7XG4gICAgICAgIGFwcGVuZEVsZW1lbnRzKGZhbHNlLCBbcHJvamVjdE5hbWVJbnB1dCwgcHJvamVjdERldGFpbHNJbnB1dF0sIGFkZFByb2plY3RCdG4pXG4gICAgfSBlbHNlIGlmICh3aGF0S2luZCA9PSAndGFzaycpIHtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICAgICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0YXNrRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza0RhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsb3cpO1xuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChtZWRpdW0pO1xuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChoaWdoKTtcbiAgICAgICAgdGFza05hbWVJbnB1dC5pZCA9ICd0YXNrTmFtZUlucHV0JztcbiAgICAgICAgdGFza05hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBUYXNrIE5hbWUnO1xuICAgICAgICB0YXNrRGV0YWlsc0lucHV0LmlkID0gJ3Rhc2tEZXRhaWxzSW5wdXQnO1xuICAgICAgICB0YXNrRGV0YWlsc0lucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIFRhc2sgRGV0YWlscyc7XG4gICAgICAgIHRhc2tEYXRlSW5wdXQuaWQgPSAndGFza0RhdGVJbnB1dCc7XG4gICAgICAgIHRhc2tEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBEdWUnO1xuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5pZCA9ICd0YXNrUHJpb3JpdHlJbnB1dCc7XG4gICAgICAgIHRhc2tQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgUHJpb3JpdHknO1xuICAgICAgICBsb3cudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgbWVkaXVtLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgIGhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICAgIGFkZFRhc2tCdG4uaWQgPSAnYWRkVGFza0J0bic7XG4gICAgICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgICAgICBjaGVja0RhdGEod2hhdEtpbmQsIGZvcm1EYXRhLCBbdGFza05hbWVJbnB1dCwgdGFza0RldGFpbHNJbnB1dCwgdGFza0RhdGVJbnB1dCwgdGFza1ByaW9yaXR5SW5wdXRdKVxuICAgICAgICBhcHBlbmRFbGVtZW50cyh0cnVlLCBbdGFza05hbWVJbnB1dCwgdGFza0RldGFpbHNJbnB1dCwgdGFza0RhdGVMYWJlbCwgdGFza0RhdGVJbnB1dCwgdGFza1ByaW9yaXR5TGFiZWwsIHRhc2tQcmlvcml0eUlucHV0XSwgYWRkVGFza0J0bilcbiAgICB9XG4gICAgLy9jaGVjayBpZiB0aGVyZSBpcyBhbnkgZGF0YVxuICAgIGZ1bmN0aW9uIGNoZWNrRGF0YSh3aGF0S2luZCwgZm9ybURhdGEsIGlucHV0TGlzdCl7XG4gICAgICAgIGlmIChmb3JtRGF0YSAhPT0gJycpIHtcbiAgICAgICAgICAgIGlmICh3aGF0S2luZCA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRMaXN0WzBdLnZhbHVlID0gZm9ybURhdGEubmFtZTtcbiAgICAgICAgICAgICAgICBpbnB1dExpc3RbMV0udmFsdWUgPSBmb3JtRGF0YS5kZXRhaWxzO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aGF0S2luZCA9PT0gJ3Rhc2snKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRMaXN0WzBdLnZhbHVlID0gZm9ybURhdGEubmFtZTtcbiAgICAgICAgICAgICAgICBpbnB1dExpc3RbMV0udmFsdWUgPSBmb3JtRGF0YS5kZXRhaWxzO1xuICAgICAgICAgICAgICAgIGlucHV0TGlzdFsyXS52YWx1ZSA9IGZvcm1EYXRhLmRhdGU7XG4gICAgICAgICAgICAgICAgaW5wdXRMaXN0WzNdLnZhbHVlID0gZm9ybURhdGEucHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9hcHBlbmQgbmV3IGVsZW1lbnRzIHRvIERPTVxuICAgIGZ1bmN0aW9uIGFwcGVuZEVsZW1lbnRzKGlzVGFzaywgaW5wdXRMaXN0LCBidG4pe1xuICAgICAgICBpZiAoIWlzVGFzaykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gaW5wdXRMaXN0W2ldO1xuICAgICAgICAgICAgICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoYW5nZU92ZXJsYXkoJ2RhcmsnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5pZCA9ICd0YXNrRm9ybUNvbnRhaW5lcic7XG4gICAgICAgICAgICBjb25zdCB0YXNrRm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICB0YXNrRm9ybUhlYWRlci50ZXh0Q29udGVudCA9ICdUYXNrIEZvcm0nO1xuICAgICAgICAgICAgdGFza0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm1IZWFkZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gaW5wdXRMaXN0W2ldO1xuICAgICAgICAgICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFza0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKHRhc2tGb3JtQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuICAgICAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluQm9keSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG4gICAgICAgIFxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7Y3JlYXRlRm9ybX07IiwiY29uc3Qge2NyZWF0ZUZvcm19ID0gcmVxdWlyZSgnLi9mb3Jtcy5qcycpO1xuY29uc3Qge1Rhc2t9ID0gcmVxdWlyZSgnLi9wcm9qZWN0LmpzJyk7XG5cbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xub3ZlcmxheS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbmZ1bmN0aW9uIHRha2VWYWx1ZXNBbmRDcmVhdGVQcm9qZWN0KHByb2plY3Qpe1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGV0YWlsc0lucHV0JykudmFsdWU7XG4gICAgcHJvamVjdC5uYW1lID0gcHJvamVjdE5hbWU7XG4gICAgcHJvamVjdC5kZXRhaWxzID0gcHJvamVjdERldGFpbHM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1haW5Cb2R5Q29udGVudCgpe1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Cb2R5Jyk7XG4gICAgZm9yIChsZXQgaSA9IG1haW5Cb2R5LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGUgPSBtYWluQm9keS5jaGlsZHJlbltpXTtcbiAgICAgICAgZS5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZXJ5dGhpbmcoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgZm9yIChsZXQgaSA9IGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgICAgIGNvbnN0IGUgPSBjb250YWluZXIuY2hpbGRyZW5baV07XG4gICAgICAgIGUucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93QWRkVGFza1RvUHJvamV0UGFnZShwcm9qZWN0KXtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQm9keScpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tMaXN0W2ldO1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFza0RpdicpO1xuICAgICAgICB0YXNrRGl2LnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGROZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZmluaXNoZWRBZGRpbmdUYXNrc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZE5ld1Rhc2tCdG4uaWQgPSAnYWRkTmV3VGFza0J0bic7XG4gICAgYWRkTmV3VGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGROZXdUYXNrQnRuJyk7XG4gICAgYWRkTmV3VGFza0J0bi50ZXh0Q29udGVudCA9ICcrJ1xuICAgIGZpbmlzaGVkQWRkaW5nVGFza3NCdG4uaWQgPSAnZmluaXNoZWRBZGRpbmdUYXNrc0J0bic7XG4gICAgZmluaXNoZWRBZGRpbmdUYXNrc0J0bi5jbGFzc0xpc3QuYWRkKCdyZWd1bGFyQnRuJyk7XG4gICAgZmluaXNoZWRBZGRpbmdUYXNrc0J0bi50ZXh0Q29udGVudCA9ICdEb25lJztcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChhZGROZXdUYXNrQnRuKTtcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChmaW5pc2hlZEFkZGluZ1Rhc2tzQnRuKTtcbiAgICBmaW5pc2hlZEFkZGluZ1Rhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gdGFrZVZhbHVlc0FuZENyZWF0ZVRhc2sodGFzayl7XG4gICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTmFtZUlucHV0Jyk7XG4gICAgY29uc3QgdGFza0RldGFpbHNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGV0YWlsc0lucHV0Jyk7XG4gICAgY29uc3QgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGF0ZUlucHV0Jyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1ByaW9yaXR5SW5wdXQnKTtcbiAgICB0YXNrLm5hbWUgPSB0YXNrTmFtZUlucHV0LnZhbHVlO1xuICAgIHRhc2suZGV0YWlscyA9IHRhc2tEZXRhaWxzSW5wdXQudmFsdWU7XG4gICAgdGFzay5kYXRlID0gdGFza0RhdGVJbnB1dC52YWx1ZTtcbiAgICB0YXNrLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5SW5wdXQudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3RMaXN0LCBuZXdQcm9qZWN0KXtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgIGNvbnN0IHByb2plY3RVbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VWwnKTsgXG4gICAgY29uc3QgcHJvamVjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGluaycpO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIHByb2plY3REaXYuaWQgPSBgJHtuZXdQcm9qZWN0Lm5hbWV9LXByb2plY3RgO1xuICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0Lm5hbWU7XG4gICAgcHJvamVjdExpLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIHByb2plY3RVbC5hcHBlbmRDaGlsZChwcm9qZWN0TGkpO1xuICAgIHByb2plY3RVbC5pbnNlcnRCZWZvcmUocHJvamVjdExpLCBwcm9qZWN0TGkucHJldmlvdXNFbGVtZW50U2libGluZyk7XG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZpZXdQcm9qZWN0KG5ld1Byb2plY3QpfVxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiB2aWV3UHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2xvc2VQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYWRkTmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QubmFtZTtcbiAgICBwcm9qZWN0RGV0YWlscy50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QuZGV0YWlscztcbiAgICBtYWluU2VjdGlvbi5pZCA9ICdtYWluU2VjdGlvbic7XG4gICAgbWFpbkhlYWRlci5pZCA9ICdtYWluSGVhZGVyJztcbiAgICBtYWluQm9keS5pZCA9ICdtYWluQm9keSc7XG4gICAgZWRpdFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0JztcbiAgICBjbG9zZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuICAgIGFkZE5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VQcm9qZWN0QnRuKTtcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChwcm9qZWN0RGV0YWlscyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdQcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgdGFzayA9IG5ld1Byb2plY3QudGFza0xpc3RbaV07XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tEaXYuaWQgPSAndGFza0Rpdic7XG4gICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gYFRhc2sgbmFtZTogJHt0YXNrLm5hbWV9YDtcbiAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSBgVGFzayBkZXRhaWxzOiAke3Rhc2suZGV0YWlsc31gO1xuICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IGBUYXNrIGRhdGU6ICR7dGFzay5kYXRlfWA7XG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGBUYXNrIFByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9YDtcbiAgICAgICAgZWRpdFRhc2tCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICAgIGRlbGV0ZVRhc2tCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgZWRpdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY3JlYXRlRm9ybSgndGFzaycsIHRhc2spO1xuICAgICAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJyk7XG4gICAgICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB0YWtlVmFsdWVzQW5kQ3JlYXRlVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICB2aWV3UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdQcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gbmV3UHJvamVjdC50YXNrTGlzdFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodC5uYW1lID09PSB0YXNrLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdC50YXNrTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmlld1Byb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0VGFza0J0bik7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J0bik7XG4gICAgICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgIH1cbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEJ0bik7XG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoYWRkTmV3VGFza0J0bik7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkJvZHkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG4gICAgY2xvc2VQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgIH0pXG4gICAgZWRpdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjcmVhdGVGb3JtKCdwcm9qZWN0JywgbmV3UHJvamVjdCk7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ0bicpO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IG9sZFByb2plY3QgPSBuZXdQcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICB0YWtlVmFsdWVzQW5kQ3JlYXRlUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3RMaXN0KG5ld1Byb2plY3QsIG9sZFByb2plY3QpO1xuICAgICAgICAgICAgdmlld1Byb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBhZGROZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY3JlYXRlRm9ybSgndGFzaycsICcnKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKCk7XG4gICAgICAgICAgICB0YWtlVmFsdWVzQW5kQ3JlYXRlVGFzayhuZXdUYXNrKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3QudGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICAgICAgICAgIHZpZXdQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RMaXN0KG5ld1Byb2plY3QsIG9sZFByb2plY3Qpe1xuICAgIGNvbnN0IHByb2plY3RVbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VWwnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RVbC5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGUgPSBwcm9qZWN0VWwuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF07XG4gICAgICAgIGlmIChgJHtvbGRQcm9qZWN0fS1wcm9qZWN0YCA9PT0gZS5pZCkge1xuICAgICAgICAgICAgZS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QubmFtZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlT3ZlcmxheSh0eXBlKXtcbiAgICBpZiAodHlwZSA9PT0gJ2xpZ2h0Jykge1xuICAgICAgICBvdmVybGF5LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkYXJrJykge1xuICAgICAgICBvdmVybGF5LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB0YWtlVmFsdWVzQW5kQ3JlYXRlUHJvamVjdCxcbiAgICByZW1vdmVNYWluQm9keUNvbnRlbnQsXG4gICAgcmVtb3ZlRXZlcnl0aGluZyxcbiAgICBzaG93QWRkVGFza1RvUHJvamVjdFBhZ2UsXG4gICAgdGFrZVZhbHVlc0FuZENyZWF0ZVRhc2ssXG4gICAgYWRkUHJvamVjdFRvUHJvamVjdExpc3QsXG4gICAgdmlld1Byb2plY3QsXG4gICAgY2hhbmdlT3ZlcmxheX0iLCJmdW5jdGlvbiBQcm9qZWN0KCkge1xuICAgIGNvbnN0IHRoaXNQcm9qZWN0ID0gdGhpcztcbiAgICB0aGlzLm5hbWUgPSAnJztcbiAgICB0aGlzLmRldGFpbHMgPSAnJztcbiAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgdGhpcy5yZW1vdmVUYXNrID0gZnVuY3Rpb24odGFzayl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpc1Byb2plY3QudGFza0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXNQcm9qZWN0LnRhc2tMaXN0W2ldO1xuICAgICAgICAgICAgaWYgKHQubmFtZSA9PT0gdGFzay5uYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIFRhc2soKSB7XG4gICAgdGhpcy5uYW1lID0gJyc7XG4gICAgdGhpcy5kZXRhaWxzID0gJyc7XG4gICAgdGhpcy5kYXRlID0gJyc7XG4gICAgdGhpcy5wcmlvcml0eSA9ICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtQcm9qZWN0LCBUYXNrfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3Qge1Byb2plY3R9ID0gcmVxdWlyZSgnLi9wcm9qZWN0LmpzJyk7XG5jb25zdCB7VGFza30gPSByZXF1aXJlKCcuL3Byb2plY3QuanMnKTtcbmNvbnN0IHtjcmVhdGVGb3JtfSA9IHJlcXVpcmUoJy4vZm9ybXMuanMnKTtcbmNvbnN0IHt0YWtlVmFsdWVzQW5kQ3JlYXRlUHJvamVjdH0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHtyZW1vdmVNYWluQm9keUNvbnRlbnR9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7cmVtb3ZlRXZlcnl0aGluZ30gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHtzaG93QWRkVGFza1RvUHJvamVjdFBhZ2V9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7dGFrZVZhbHVlc0FuZENyZWF0ZVRhc2t9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7YWRkUHJvamVjdFRvUHJvamVjdExpc3R9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7dmlld1Byb2plY3R9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7Y2hhbmdlT3ZlcmxheX0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcblxuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Jyk7XG5jb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5cblxuLy90ZXN0IGNvZGVcbmNvbnN0IHRlc3RUYXNrID0gbmV3IFRhc2soKTtcbnRlc3RUYXNrLm5hbWUgPSAnVGVzdCBUYXNrJztcbnRlc3RUYXNrLmRldGFpbHMgPSAnVGVzdCBEZXRhaWxzJztcbnRlc3RUYXNrLmRhdGUgPSAnMDUvMTMvMTk5MSc7XG50ZXN0VGFzay5wcmlvcml0eSA9ICdIaWdoJztcblxuY29uc3QgdGVzdFByb2plY3QgPSBuZXcgUHJvamVjdCgpO1xudGVzdFByb2plY3QubmFtZSA9ICdUZXN0IFByb2plY3QnO1xudGVzdFByb2plY3QuZGV0YWlscyA9ICdUZXN0IERldGFpbHMnO1xudGVzdFByb2plY3QudGFza0xpc3QucHVzaCh0ZXN0VGFzayk7XG5cbmFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3RMaXN0LCB0ZXN0UHJvamVjdCk7XG5cbmNvbnN0IGFsbFRhc2tzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFRhc2tzQnRuJyk7XG5hbGxUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICBjcmVhdGVGb3JtKCd0YXNrJywgdGVzdFRhc2spO1xufSlcbi8vZW5kIHRlc3QgY29kZVxuXG5cblxuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgY3JlYXRlRm9ybSgncHJvamVjdCcsICcnKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdG4nKTtcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCk7XG4gICAgICAgIHRha2VWYWx1ZXNBbmRDcmVhdGVQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICBhZGRQcm9qZWN0VG9Qcm9qZWN0TGlzdChwcm9qZWN0TGlzdCwgbmV3UHJvamVjdCk7XG4gICAgICAgIHJlbW92ZU1haW5Cb2R5Q29udGVudCgpO1xuICAgICAgICBzaG93QWRkVGFza1RvUHJvamVjdFBhZ2UobmV3UHJvamVjdCk7XG4gICAgICAgIGFkZFRhc2tUb1Byb2plY3QobmV3UHJvamVjdCk7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdCl7XG4gICAgY29uc3QgYWRkTmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGROZXdUYXNrQnRuJyk7XG4gICAgYWRkTmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNyZWF0ZUZvcm0oJ3Rhc2snLCAnJyk7XG4gICAgICAgIGNoYW5nZU92ZXJsYXkoJ2RhcmsnKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKCk7XG4gICAgICAgICAgICB0YWtlVmFsdWVzQW5kQ3JlYXRlVGFzayhuZXdUYXNrKTtcbiAgICAgICAgICAgIHByb2plY3QudGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICAgICAgICAgIHJlbW92ZU1haW5Cb2R5Q29udGVudCgpO1xuICAgICAgICAgICAgc2hvd0FkZFRhc2tUb1Byb2plY3RQYWdlKHByb2plY3QpO1xuICAgICAgICAgICAgYWRkVGFza1RvUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIGNoYW5nZU92ZXJsYXkoJ2xpZ2h0Jyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==