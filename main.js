/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((module) => {


function createForms(bodyType, project, task) {
    const mainBody = document.getElementById('mainBody');
    //new project body
    switch (bodyType){
        case 'newProject':
            const projectForm = document.createElement('div');
            const projectName = document.createElement('input');
            const projectDetails = document.createElement('input');
            const addProjectBtn = document.createElement('button');
            projectForm.id = 'projectForm';
            projectName.id = 'projectName';
            projectDetails.id = 'projectDetails';
            addProjectBtn.id = 'addProjectBtn';
            if (project === '') {
                projectName.placeholder = 'Project Name';
                projectDetails.placeholder = 'Project Details';
            } else {
                projectName.value = project.name;
                projectDetails.value = project.value;
            }
            addProjectBtn.textContent = 'Add Project';
            projectForm.appendChild(projectName);
            projectForm.appendChild(projectDetails);
            projectForm.appendChild(addProjectBtn);
            mainBody.appendChild(projectForm);
            break;
        case 'newTask':
            const formTaskList = document.createElement('ul');
            const newTaskBtn = document.createElement('button');
            const finishProjectBtn = document.createElement('button');
            finishProjectBtn.addEventListener('click', function(){
                deleteBody('finishProject');
            })
            formTaskList.id = 'formTaskList';
            newTaskBtn.textContent = '+';
            newTaskBtn.id = 'newTaskBtn';
            finishProjectBtn.textContent = 'Done';
            finishProjectBtn.id = 'finishProjectBtn';
            mainBody.appendChild(formTaskList);
            mainBody.appendChild(newTaskBtn);
            mainBody.appendChild(finishProjectBtn);
            break;
        case 'addTask':
            const taskHeader = document.createElement('h3');
            const taskForm = document.createElement('div');
            const taskName = document.createElement('input');
            const taskDetails = document.createElement('input');
            const taskDateContainer = document.createElement('div');
            const taskDateLabel = document.createElement('label');
            const taskDate = document.createElement('input');
            const taskPriorityContainer = document.createElement('div');
            const taskPriorityLabel = document.createElement('label');
            const taskPriority = document.createElement('select');
            const taskPriorityLow = document.createElement('option');
            const taskPriorityMedium = document.createElement('option');
            const taskPriorityHigh = document.createElement('option');
            const addTaskBtn = document.createElement('button');
            taskHeader.id = 'taskHeader';
            taskDetails.id = 'taskDetails';
            taskForm.id = 'taskForm';
            taskName.id = 'taskName';
            taskPriority.id = 'taskPriority';
            taskPriorityLow.textContent = 'Low';
            taskPriorityMedium.textContent = 'Medium';
            taskPriorityHigh.textContent = 'High';
            taskDateContainer.id = 'taskDateContainer';
            taskDateLabel.textContent = 'Task Deadline';
            taskDate.id = 'taskDate';
            taskDate.type = 'date';
            taskPriorityContainer.id = 'taskPriorityContainer';
            taskPriorityLabel.textContent = 'Task Priority';
            addTaskBtn.textContent = 'Add Task';
            addTaskBtn.id = 'addTaskBtn';
            if (task === '') {
                taskHeader.textContent = 'New Task';
                taskName.placeholder = 'Enter Task Name';
                taskDetails.placeholder = 'Enter Task Details';
            } else {
                taskHeader.textContent = task.name;
                taskName.value = task.name;
                taskDetails.value = task.details;
                taskDate.value = task.date;
                taskPriority.value = task.priority;
            }
            taskPriority.appendChild(taskPriorityLow);
            taskPriority.appendChild(taskPriorityMedium);
            taskPriority.appendChild(taskPriorityHigh);
            taskPriorityContainer.appendChild(taskPriorityLabel);
            taskPriorityContainer.appendChild(taskPriority);
            taskDateContainer.appendChild(taskDateLabel);
            taskDateContainer.appendChild(taskDate);
            taskForm.appendChild(taskHeader);
            taskForm.appendChild(taskName);
            taskForm.appendChild(taskDetails);
            taskForm.appendChild(taskDateContainer);
            taskForm.appendChild(taskPriorityContainer);
            taskForm.appendChild(addTaskBtn);
            mainBody.appendChild(taskForm);
            break;
        case 'viewProject':
            const viewProjectName = document.createElement('h3');
            const viewProjectDetails = document.createElement('h4');
            const viewProjectTasks = document.createElement('ul');
            viewProjectName.id = 'viewProjectName';
            viewProjectDetails.id = 'viewProjectDetails';
            viewProjectTasks.id = 'viewProjectTasks';
            mainBody.appendChild(viewProjectName);
            mainBody.appendChild(viewProjectDetails);
            mainBody.appendChild(viewProjectTasks);
    }
}

function createHeader(){
    if (mainSection.children.length === 0) {
        const mainHeader = document.createElement('div');
        mainHeader.id = 'mainHeader';
        mainSection.appendChild(mainHeader);
    }
}

function updateHeader(bodyType, header){
    const mainHeader = document.getElementById('mainHeader');
    switch (bodyType) {
        case 'newProject':
            mainHeader.textContent = 'Add New Project';
            break;
        case 'nameProject':
            mainHeader.textContent = header;
            break;
    }
}

function createBody(){
    const mainBody = document.createElement('div');
    mainBody.id = 'mainBody';
    mainSection.appendChild(mainBody);
}

function deleteBody(bodyType){
    switch (bodyType) {
        case 'newProject':
            const projectForm = document.getElementById('projectForm');
            projectForm.remove();
            break;
        case 'addTask':
            const taskForm = document.getElementById('taskForm');
            taskForm.remove();
            break;
        case 'finishProject':
            const mainSection = document.getElementById('mainSection');
            for (let i = mainSection.children.length -1; i >= 0; i--){
                let e = mainSection.children[i];
                e.remove();
            }
            break;
    }
}

module.exports = {
    createHeader,
    updateHeader,
    createBody,
    createForms,
    deleteBody}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((module) => {

function Project() {
    this.name = '';
    this.details = '';
    this.taskList = [];
}

module.exports = {Project};

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((module) => {

function Task() {
    this.name = '';
    this.details = '';
    this.date = '';
    this.priority = '';
    this.project = '';
}


module.exports = {Task};

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
const {Task} = __webpack_require__(/*! ./task.js */ "./src/task.js");
const {createHeader} = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
const {updateHeader} = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
const {createBody} = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
const {createForms} = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
const {deleteBody} = __webpack_require__(/*! ./forms.js */ "./src/forms.js");

const projectUl = document.getElementById('projectUl');
const addProject = document.getElementById('addProject');
const mainSection = document.getElementById('mainSection');
const importantBtn = document.getElementById('importantBtn');

const projectList = [];

function updateProjectUl(project) {
    const li = document.createElement('li');
    const projectDiv = document.createElement('div');
    projectDiv.textContent = project.name;
    projectDiv.addEventListener('click', function(){
        viewProject(project);
    })
    projectDiv.classList.add('projectLink');
    projectDiv.classList.add('project');
    li.appendChild(projectDiv);
    projectUl.appendChild(li);
    projectUl.insertBefore(li, li.previousElementSibling);
}

function viewProject(project){
    createHeader();
    createBody();
    createForms('viewProject', '', '');
    updateHeader('nameProject', project.name);
    const viewProjectName = document.getElementById('viewProjectName');
    const viewProjectDetails = document.getElementById('viewProjectDetails');
    const viewProjectTasks = document.getElementById('viewProjectTasks');
    viewProjectName.textContent = `Project Title: ${project.name}`;
    viewProjectDetails.textContent = `Project Details: ${project.details}`;
    for (let i = 0; i < project.taskList.length; i++){
        const taskLi = document.createElement('li');
        const taskName = document.createElement('p');
        const taskLiContainer = document.createElement('div');
        const taskDetails = document.createElement('p');
        const taskDate = document.createElement('p');
        const taskPriority = document.createElement('p');
        taskLiContainer.classList.add('taskLiContainer');
        taskName.textContent = `${project.taskList[i].name} +`;
        taskDetails.textContent = `Task Details: ${project.taskList[i].details}`;
        taskDate.textContent = `Task Date: ${project.taskList[i].date}`;
        taskPriority.textContent = `Task Priority: ${project.taskList[i].priority}`;
        
        taskLiContainer.style.visibility = 'hidden';
        taskLi.addEventListener('click', function(){
            if (taskLiContainer.style.visibility === 'hidden'){
                taskLiContainer.style.visibility = 'visible';
                taskLiContainer.style.position = 'relative';
                taskName.textContent = `${project.taskList[i].name} -`;

            } else {
                taskLiContainer.style.visibility = 'hidden';
                taskLiContainer.style.position = 'absolute';
                taskName.textContent = `${project.taskList[i].name} +`;
            }
        })
        taskLi.appendChild(taskName);
        taskLiContainer.appendChild(taskDetails);
        taskLiContainer.appendChild(taskDate);
        taskLiContainer.appendChild(taskPriority);
        taskLi.appendChild(taskLiContainer);
        viewProjectTasks.appendChild(taskLi);
    }
}

function getFormValues(bodyType, newProject){
    switch (bodyType) {
        case 'newProject':
            const projectName = document.getElementById('projectName');
            const projectDetails = document.getElementById('projectDetails');
            newProject.name = projectName.value;
            newProject.details = projectDetails.value;
            break;
    }
}

//add project button in sidebar
addProject.addEventListener('click', function(){
    createHeader();
    createBody();
    createForms('newProject', '', '');
    updateHeader('newProject', '');
    const newProject = new Project();
    submitProject(newProject);
})
function submitProject(newProject){
    const addProjectBtn = document.getElementById('addProjectBtn');
    addProjectBtn.addEventListener('click', function(){
        getFormValues('newProject', newProject);
        updateProjectUl(newProject);
        updateHeader('nameProject', newProject.name);
        projectList.push(newProject);
        deleteBody('newProject');
        createForms('newTask', '', '');
        showAddTaskForm(newProject);
    })
}

//New Task Button in DOM
function showAddTaskForm(newProject){
    const newTaskBtn = document.getElementById('newTaskBtn');
    newTaskBtn.addEventListener('click', function(){
        createForms('addTask', '', '');
        addTaskToProject(newProject);
    })
}

function addTaskToFormTaskList(task, project){
    const formTaskList = document.getElementById('formTaskList');
    const newTaskLi = document.createElement('li');
    const taskLiName = document.createElement('p');
    const editTaskBtn = document.createElement('button');
    const removeTaskBtn = document.createElement('button');
    taskLiName.textContent = task.name;
    editTaskBtn.textContent = 'Edit Task';
    removeTaskBtn.textContent = 'Remove Task';
    removeTaskBtn.addEventListener('click', function(){
        newTaskLi.remove();
        for (let i = 0; i < project.taskList.length; i++) {
            if (task.name === project.taskList[i].name){
                project.taskList.splice(i, 1);
            }
        }
    })
    //don't forget to add edit task button listener
    editTaskBtn.addEventListener('click', function(){
        editTask(newTaskLi, task, project);
    })
    newTaskLi.appendChild(taskLiName);
    newTaskLi.appendChild(editTaskBtn);
    newTaskLi.appendChild(removeTaskBtn);
    formTaskList.appendChild(newTaskLi);
}

function editTask(li, task, project){
    changeBackground('dark');
    createForms('addTask', project, task);
    addTaskBtn.addEventListener('click', function(){
        const addTaskBtn = document.getElementById('addTaskBtn');
        const taskName = document.getElementById('taskName').value;
        const taskDetails = document.getElementById('taskDetails').value;
        const taskDate = document.getElementById('taskDate').value;
        const taskPriority = document.getElementById('taskPriority').value;
        console.log(project.taskList);
        for (let i = 0; i < project.taskList.length; i++){
            if (task.name === project.taskList[i].name){
                project.taskList[i].name = taskName;
                project.taskList[i].details = taskDetails;
                project.taskList[i].date = taskDate;
                project.taskList[i].priority = taskPriority;
                li.children[0].textContent = taskName;
                console.log(project.taskList[i].name)
            }
        }
        changeBackground('light');
        deleteBody('addTask');
    })
}

//ADD Task Button in DOM
function addTaskToProject(project){
    changeBackground('dark');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskName = document.getElementById('taskName');
    const taskDetails = document.getElementById('taskDetails');
    const taskDate = document.getElementById('taskDate');
    const taskPriority = document.getElementById('taskPriority');

    addTaskBtn.addEventListener('click', function(){
        const newTask = new Task();
        newTask.name = taskName.value;
        newTask.details = taskDetails.value;
        newTask.date = taskDate.value;
        newTask.priority = taskPriority.value;
        project.taskList.push(newTask);
        addTaskToFormTaskList(newTask, project);
        deleteBody('addTask');
        changeBackground('light');
    })
}

function changeBackground(type){
    const overlay = document.getElementById('overlay');
    if (type === 'dark'){
        overlay.style.visibility = 'visible';
    } else if (type === 'light') {
        overlay.style.visibility = 'hidden';
    }

}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsUUFBUTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCOzs7Ozs7Ozs7O0FDTmxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxrQkFBa0I7Ozs7OztVQ1RsQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7QUN0QkEsT0FBTyxTQUFTLEVBQUUsbUJBQU8sQ0FBQyxzQ0FBYztBQUN4QyxPQUFPLE1BQU0sRUFBRSxtQkFBTyxDQUFDLGdDQUFXO0FBQ2xDLE9BQU8sY0FBYyxFQUFFLG1CQUFPLENBQUMsa0NBQVk7QUFDM0MsT0FBTyxjQUFjLEVBQUUsbUJBQU8sQ0FBQyxrQ0FBWTtBQUMzQyxPQUFPLFlBQVksRUFBRSxtQkFBTyxDQUFDLGtDQUFZO0FBQ3pDLE9BQU8sYUFBYSxFQUFFLG1CQUFPLENBQUMsa0NBQVk7QUFDMUMsT0FBTyxZQUFZLEVBQUUsbUJBQU8sQ0FBQyxrQ0FBWTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGFBQWE7QUFDakUseURBQXlELGdCQUFnQjtBQUN6RSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDBCQUEwQjtBQUM1RCxtREFBbUQsNEJBQTRCO0FBQy9FLDZDQUE2Qyx5QkFBeUI7QUFDdEUscURBQXFELDZCQUE2QjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsMEJBQTBCOztBQUVwRSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLDBDQUEwQywwQkFBMEI7QUFDcEU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZCQUE2QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2QkFBNkI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIGNyZWF0ZUZvcm1zKGJvZHlUeXBlLCBwcm9qZWN0LCB0YXNrKSB7XG4gICAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkJvZHknKTtcbiAgICAvL25ldyBwcm9qZWN0IGJvZHlcbiAgICBzd2l0Y2ggKGJvZHlUeXBlKXtcbiAgICAgICAgY2FzZSAnbmV3UHJvamVjdCc6XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0uaWQgPSAncHJvamVjdEZvcm0nO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUuaWQgPSAncHJvamVjdE5hbWUnO1xuICAgICAgICAgICAgcHJvamVjdERldGFpbHMuaWQgPSAncHJvamVjdERldGFpbHMnO1xuICAgICAgICAgICAgYWRkUHJvamVjdEJ0bi5pZCA9ICdhZGRQcm9qZWN0QnRuJztcbiAgICAgICAgICAgIGlmIChwcm9qZWN0ID09PSAnJykge1xuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLnBsYWNlaG9sZGVyID0gJ1Byb2plY3QgTmFtZSc7XG4gICAgICAgICAgICAgICAgcHJvamVjdERldGFpbHMucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBEZXRhaWxzJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWUudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdERldGFpbHMudmFsdWUgPSBwcm9qZWN0LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0RGV0YWlscyk7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcbiAgICAgICAgICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICduZXdUYXNrJzpcbiAgICAgICAgICAgIGNvbnN0IGZvcm1UYXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zdCBmaW5pc2hQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBmaW5pc2hQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBkZWxldGVCb2R5KCdmaW5pc2hQcm9qZWN0Jyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZm9ybVRhc2tMaXN0LmlkID0gJ2Zvcm1UYXNrTGlzdCc7XG4gICAgICAgICAgICBuZXdUYXNrQnRuLnRleHRDb250ZW50ID0gJysnO1xuICAgICAgICAgICAgbmV3VGFza0J0bi5pZCA9ICduZXdUYXNrQnRuJztcbiAgICAgICAgICAgIGZpbmlzaFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgICAgICAgICBmaW5pc2hQcm9qZWN0QnRuLmlkID0gJ2ZpbmlzaFByb2plY3RCdG4nO1xuICAgICAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoZm9ybVRhc2tMaXN0KTtcbiAgICAgICAgICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKG5ld1Rhc2tCdG4pO1xuICAgICAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoZmluaXNoUHJvamVjdEJ0bik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYWRkVGFzayc6XG4gICAgICAgICAgICBjb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHRhc2tIZWFkZXIuaWQgPSAndGFza0hlYWRlcic7XG4gICAgICAgICAgICB0YXNrRGV0YWlscy5pZCA9ICd0YXNrRGV0YWlscyc7XG4gICAgICAgICAgICB0YXNrRm9ybS5pZCA9ICd0YXNrRm9ybSc7XG4gICAgICAgICAgICB0YXNrTmFtZS5pZCA9ICd0YXNrTmFtZSc7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuaWQgPSAndGFza1ByaW9yaXR5JztcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eUxvdy50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5TWVkaXVtLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHlIaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgdGFza0RhdGVDb250YWluZXIuaWQgPSAndGFza0RhdGVDb250YWluZXInO1xuICAgICAgICAgICAgdGFza0RhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIERlYWRsaW5lJztcbiAgICAgICAgICAgIHRhc2tEYXRlLmlkID0gJ3Rhc2tEYXRlJztcbiAgICAgICAgICAgIHRhc2tEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHlDb250YWluZXIuaWQgPSAndGFza1ByaW9yaXR5Q29udGFpbmVyJztcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgUHJpb3JpdHknO1xuICAgICAgICAgICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgICAgICAgICBhZGRUYXNrQnRuLmlkID0gJ2FkZFRhc2tCdG4nO1xuICAgICAgICAgICAgaWYgKHRhc2sgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGFza0hlYWRlci50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XG4gICAgICAgICAgICAgICAgdGFza05hbWUucGxhY2Vob2xkZXIgPSAnRW50ZXIgVGFzayBOYW1lJztcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5wbGFjZWhvbGRlciA9ICdFbnRlciBUYXNrIERldGFpbHMnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXNrSGVhZGVyLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgICAgICAgICAgICAgIHRhc2tOYW1lLnZhbHVlID0gdGFzay5uYW1lO1xuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLnZhbHVlID0gdGFzay5kZXRhaWxzO1xuICAgICAgICAgICAgICAgIHRhc2tEYXRlLnZhbHVlID0gdGFzay5kYXRlO1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5TG93KTtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlNZWRpdW0pO1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUhpZ2gpO1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUxhYmVsKTtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICAgICAgdGFza0RhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RhdGVMYWJlbCk7XG4gICAgICAgICAgICB0YXNrRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrSGVhZGVyKTtcbiAgICAgICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICAgICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcbiAgICAgICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEYXRlQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUNvbnRhaW5lcik7XG4gICAgICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgICAgICAgICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd2aWV3UHJvamVjdCc6XG4gICAgICAgICAgICBjb25zdCB2aWV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgY29uc3Qgdmlld1Byb2plY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdQcm9qZWN0VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgdmlld1Byb2plY3ROYW1lLmlkID0gJ3ZpZXdQcm9qZWN0TmFtZSc7XG4gICAgICAgICAgICB2aWV3UHJvamVjdERldGFpbHMuaWQgPSAndmlld1Byb2plY3REZXRhaWxzJztcbiAgICAgICAgICAgIHZpZXdQcm9qZWN0VGFza3MuaWQgPSAndmlld1Byb2plY3RUYXNrcyc7XG4gICAgICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZCh2aWV3UHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQodmlld1Byb2plY3REZXRhaWxzKTtcbiAgICAgICAgICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKHZpZXdQcm9qZWN0VGFza3MpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgaWYgKG1haW5TZWN0aW9uLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5IZWFkZXIuaWQgPSAnbWFpbkhlYWRlcic7XG4gICAgICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyKGJvZHlUeXBlLCBoZWFkZXIpe1xuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkhlYWRlcicpO1xuICAgIHN3aXRjaCAoYm9keVR5cGUpIHtcbiAgICAgICAgY2FzZSAnbmV3UHJvamVjdCc6XG4gICAgICAgICAgICBtYWluSGVhZGVyLnRleHRDb250ZW50ID0gJ0FkZCBOZXcgUHJvamVjdCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbmFtZVByb2plY3QnOlxuICAgICAgICAgICAgbWFpbkhlYWRlci50ZXh0Q29udGVudCA9IGhlYWRlcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9keSgpe1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkJvZHkuaWQgPSAnbWFpbkJvZHknO1xuICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKG1haW5Cb2R5KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlQm9keShib2R5VHlwZSl7XG4gICAgc3dpdGNoIChib2R5VHlwZSkge1xuICAgICAgICBjYXNlICduZXdQcm9qZWN0JzpcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RGb3JtJyk7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhZGRUYXNrJzpcbiAgICAgICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tGb3JtJyk7XG4gICAgICAgICAgICB0YXNrRm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmaW5pc2hQcm9qZWN0JzpcbiAgICAgICAgICAgIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5TZWN0aW9uJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbWFpblNlY3Rpb24uY2hpbGRyZW4ubGVuZ3RoIC0xOyBpID49IDA7IGktLSl7XG4gICAgICAgICAgICAgICAgbGV0IGUgPSBtYWluU2VjdGlvbi5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBlLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjcmVhdGVIZWFkZXIsXG4gICAgdXBkYXRlSGVhZGVyLFxuICAgIGNyZWF0ZUJvZHksXG4gICAgY3JlYXRlRm9ybXMsXG4gICAgZGVsZXRlQm9keX0iLCJmdW5jdGlvbiBQcm9qZWN0KCkge1xuICAgIHRoaXMubmFtZSA9ICcnO1xuICAgIHRoaXMuZGV0YWlscyA9ICcnO1xuICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7UHJvamVjdH07IiwiZnVuY3Rpb24gVGFzaygpIHtcbiAgICB0aGlzLm5hbWUgPSAnJztcbiAgICB0aGlzLmRldGFpbHMgPSAnJztcbiAgICB0aGlzLmRhdGUgPSAnJztcbiAgICB0aGlzLnByaW9yaXR5ID0gJyc7XG4gICAgdGhpcy5wcm9qZWN0ID0gJyc7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7VGFza307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImNvbnN0IHtQcm9qZWN0fSA9IHJlcXVpcmUoJy4vcHJvamVjdC5qcycpO1xuY29uc3Qge1Rhc2t9ID0gcmVxdWlyZSgnLi90YXNrLmpzJyk7XG5jb25zdCB7Y3JlYXRlSGVhZGVyfSA9IHJlcXVpcmUoJy4vZm9ybXMuanMnKTtcbmNvbnN0IHt1cGRhdGVIZWFkZXJ9ID0gcmVxdWlyZSgnLi9mb3Jtcy5qcycpO1xuY29uc3Qge2NyZWF0ZUJvZHl9ID0gcmVxdWlyZSgnLi9mb3Jtcy5qcycpO1xuY29uc3Qge2NyZWF0ZUZvcm1zfSA9IHJlcXVpcmUoJy4vZm9ybXMuanMnKTtcbmNvbnN0IHtkZWxldGVCb2R5fSA9IHJlcXVpcmUoJy4vZm9ybXMuanMnKTtcblxuY29uc3QgcHJvamVjdFVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RVbCcpO1xuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Jyk7XG5jb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluU2VjdGlvbicpO1xuY29uc3QgaW1wb3J0YW50QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydGFudEJ0bicpO1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0VWwocHJvamVjdCkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgdmlld1Byb2plY3QocHJvamVjdCk7XG4gICAgfSlcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaW5rJyk7XG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgbGkuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgcHJvamVjdFVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICBwcm9qZWN0VWwuaW5zZXJ0QmVmb3JlKGxpLCBsaS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKTtcbn1cblxuZnVuY3Rpb24gdmlld1Byb2plY3QocHJvamVjdCl7XG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgY3JlYXRlQm9keSgpO1xuICAgIGNyZWF0ZUZvcm1zKCd2aWV3UHJvamVjdCcsICcnLCAnJyk7XG4gICAgdXBkYXRlSGVhZGVyKCduYW1lUHJvamVjdCcsIHByb2plY3QubmFtZSk7XG4gICAgY29uc3Qgdmlld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdQcm9qZWN0TmFtZScpO1xuICAgIGNvbnN0IHZpZXdQcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3UHJvamVjdERldGFpbHMnKTtcbiAgICBjb25zdCB2aWV3UHJvamVjdFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdQcm9qZWN0VGFza3MnKTtcbiAgICB2aWV3UHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgUHJvamVjdCBUaXRsZTogJHtwcm9qZWN0Lm5hbWV9YDtcbiAgICB2aWV3UHJvamVjdERldGFpbHMudGV4dENvbnRlbnQgPSBgUHJvamVjdCBEZXRhaWxzOiAke3Byb2plY3QuZGV0YWlsc31gO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50YXNrTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHRhc2tMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrTGlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tMaUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrTGlDb250YWluZXInKTtcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRhc2tMaXN0W2ldLm5hbWV9ICtgO1xuICAgICAgICB0YXNrRGV0YWlscy50ZXh0Q29udGVudCA9IGBUYXNrIERldGFpbHM6ICR7cHJvamVjdC50YXNrTGlzdFtpXS5kZXRhaWxzfWA7XG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gYFRhc2sgRGF0ZTogJHtwcm9qZWN0LnRhc2tMaXN0W2ldLmRhdGV9YDtcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFRhc2sgUHJpb3JpdHk6ICR7cHJvamVjdC50YXNrTGlzdFtpXS5wcmlvcml0eX1gO1xuICAgICAgICBcbiAgICAgICAgdGFza0xpQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgdGFza0xpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmICh0YXNrTGlDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpe1xuICAgICAgICAgICAgICAgIHRhc2tMaUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgICAgIHRhc2tMaUNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRhc2tMaXN0W2ldLm5hbWV9IC1gO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhc2tMaUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgdGFza0xpQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGFza0xpc3RbaV0ubmFtZX0gK2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRhc2tMaS5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2tMaUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscyk7XG4gICAgICAgIHRhc2tMaUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgICAgIHRhc2tMaUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICB0YXNrTGkuYXBwZW5kQ2hpbGQodGFza0xpQ29udGFpbmVyKTtcbiAgICAgICAgdmlld1Byb2plY3RUYXNrcy5hcHBlbmRDaGlsZCh0YXNrTGkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybVZhbHVlcyhib2R5VHlwZSwgbmV3UHJvamVjdCl7XG4gICAgc3dpdGNoIChib2R5VHlwZSkge1xuICAgICAgICBjYXNlICduZXdQcm9qZWN0JzpcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGV0YWlscycpO1xuICAgICAgICAgICAgbmV3UHJvamVjdC5uYW1lID0gcHJvamVjdE5hbWUudmFsdWU7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LmRldGFpbHMgPSBwcm9qZWN0RGV0YWlscy52YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuLy9hZGQgcHJvamVjdCBidXR0b24gaW4gc2lkZWJhclxuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgY3JlYXRlQm9keSgpO1xuICAgIGNyZWF0ZUZvcm1zKCduZXdQcm9qZWN0JywgJycsICcnKTtcbiAgICB1cGRhdGVIZWFkZXIoJ25ld1Byb2plY3QnLCAnJyk7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCk7XG4gICAgc3VibWl0UHJvamVjdChuZXdQcm9qZWN0KTtcbn0pXG5mdW5jdGlvbiBzdWJtaXRQcm9qZWN0KG5ld1Byb2plY3Qpe1xuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ0bicpO1xuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBnZXRGb3JtVmFsdWVzKCduZXdQcm9qZWN0JywgbmV3UHJvamVjdCk7XG4gICAgICAgIHVwZGF0ZVByb2plY3RVbChuZXdQcm9qZWN0KTtcbiAgICAgICAgdXBkYXRlSGVhZGVyKCduYW1lUHJvamVjdCcsIG5ld1Byb2plY3QubmFtZSk7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGRlbGV0ZUJvZHkoJ25ld1Byb2plY3QnKTtcbiAgICAgICAgY3JlYXRlRm9ybXMoJ25ld1Rhc2snLCAnJywgJycpO1xuICAgICAgICBzaG93QWRkVGFza0Zvcm0obmV3UHJvamVjdCk7XG4gICAgfSlcbn1cblxuLy9OZXcgVGFzayBCdXR0b24gaW4gRE9NXG5mdW5jdGlvbiBzaG93QWRkVGFza0Zvcm0obmV3UHJvamVjdCl7XG4gICAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrQnRuJyk7XG4gICAgbmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNyZWF0ZUZvcm1zKCdhZGRUYXNrJywgJycsICcnKTtcbiAgICAgICAgYWRkVGFza1RvUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9Gb3JtVGFza0xpc3QodGFzaywgcHJvamVjdCl7XG4gICAgY29uc3QgZm9ybVRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UYXNrTGlzdCcpO1xuICAgIGNvbnN0IG5ld1Rhc2tMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgdGFza0xpTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHJlbW92ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrTGlOYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgIGVkaXRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0VkaXQgVGFzayc7XG4gICAgcmVtb3ZlVGFza0J0bi50ZXh0Q29udGVudCA9ICdSZW1vdmUgVGFzayc7XG4gICAgcmVtb3ZlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIG5ld1Rhc2tMaS5yZW1vdmUoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGFzay5uYW1lID09PSBwcm9qZWN0LnRhc2tMaXN0W2ldLm5hbWUpe1xuICAgICAgICAgICAgICAgIHByb2plY3QudGFza0xpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICAvL2Rvbid0IGZvcmdldCB0byBhZGQgZWRpdCB0YXNrIGJ1dHRvbiBsaXN0ZW5lclxuICAgIGVkaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgZWRpdFRhc2sobmV3VGFza0xpLCB0YXNrLCBwcm9qZWN0KTtcbiAgICB9KVxuICAgIG5ld1Rhc2tMaS5hcHBlbmRDaGlsZCh0YXNrTGlOYW1lKTtcbiAgICBuZXdUYXNrTGkuYXBwZW5kQ2hpbGQoZWRpdFRhc2tCdG4pO1xuICAgIG5ld1Rhc2tMaS5hcHBlbmRDaGlsZChyZW1vdmVUYXNrQnRuKTtcbiAgICBmb3JtVGFza0xpc3QuYXBwZW5kQ2hpbGQobmV3VGFza0xpKTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2sobGksIHRhc2ssIHByb2plY3Qpe1xuICAgIGNoYW5nZUJhY2tncm91bmQoJ2RhcmsnKTtcbiAgICBjcmVhdGVGb3JtcygnYWRkVGFzaycsIHByb2plY3QsIHRhc2spO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdG4nKTtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0RldGFpbHMnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0RhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQcmlvcml0eScpLnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRhc2tMaXN0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmICh0YXNrLm5hbWUgPT09IHByb2plY3QudGFza0xpc3RbaV0ubmFtZSl7XG4gICAgICAgICAgICAgICAgcHJvamVjdC50YXNrTGlzdFtpXS5uYW1lID0gdGFza05hbWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdC50YXNrTGlzdFtpXS5kZXRhaWxzID0gdGFza0RldGFpbHM7XG4gICAgICAgICAgICAgICAgcHJvamVjdC50YXNrTGlzdFtpXS5kYXRlID0gdGFza0RhdGU7XG4gICAgICAgICAgICAgICAgcHJvamVjdC50YXNrTGlzdFtpXS5wcmlvcml0eSA9IHRhc2tQcmlvcml0eTtcbiAgICAgICAgICAgICAgICBsaS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IHRhc2tOYW1lO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QudGFza0xpc3RbaV0ubmFtZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGFuZ2VCYWNrZ3JvdW5kKCdsaWdodCcpO1xuICAgICAgICBkZWxldGVCb2R5KCdhZGRUYXNrJyk7XG4gICAgfSlcbn1cblxuLy9BREQgVGFzayBCdXR0b24gaW4gRE9NXG5mdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3Qpe1xuICAgIGNoYW5nZUJhY2tncm91bmQoJ2RhcmsnKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdG4nKTtcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTmFtZScpO1xuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXRhaWxzJyk7XG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0RhdGUnKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1ByaW9yaXR5Jyk7XG5cbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKCk7XG4gICAgICAgIG5ld1Rhc2submFtZSA9IHRhc2tOYW1lLnZhbHVlO1xuICAgICAgICBuZXdUYXNrLmRldGFpbHMgPSB0YXNrRGV0YWlscy52YWx1ZTtcbiAgICAgICAgbmV3VGFzay5kYXRlID0gdGFza0RhdGUudmFsdWU7XG4gICAgICAgIG5ld1Rhc2sucHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkudmFsdWU7XG4gICAgICAgIHByb2plY3QudGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICAgICAgYWRkVGFza1RvRm9ybVRhc2tMaXN0KG5ld1Rhc2ssIHByb2plY3QpO1xuICAgICAgICBkZWxldGVCb2R5KCdhZGRUYXNrJyk7XG4gICAgICAgIGNoYW5nZUJhY2tncm91bmQoJ2xpZ2h0Jyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2hhbmdlQmFja2dyb3VuZCh0eXBlKXtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcbiAgICBpZiAodHlwZSA9PT0gJ2RhcmsnKXtcbiAgICAgICAgb3ZlcmxheS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xpZ2h0Jykge1xuICAgICAgICBvdmVybGF5LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9XG5cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==