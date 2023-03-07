/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((module) => {


function createForms(bodyType) {
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
            projectName.placeholder = 'Project Name';
            projectDetails.placeholder = 'Project Details';
            addProjectBtn.textContent = 'Add Project';
            projectForm.appendChild(projectName);
            projectForm.appendChild(projectDetails);
            projectForm.appendChild(addProjectBtn);
            mainBody.appendChild(projectForm);
            break;
        case 'newTask':
            const newTaskHeader = document.createElement('h3');
            const formTaskList = document.createElement('ul');
            const newTaskBtn = document.createElement('button');
            const finishProjectBtn = document.createElement('button');
            finishProjectBtn.addEventListener('click', function(){
                deleteBody('finishProject');
            })
            newTaskHeader.textContent = 'Current Tasks';
            formTaskList.id = 'formTaskList';
            newTaskBtn.textContent = 'New Task';
            newTaskBtn.id = 'newTaskBtn';
            finishProjectBtn.textContent = 'Done';
            mainBody.appendChild(newTaskHeader);
            mainBody.appendChild(formTaskList);
            mainBody.appendChild(newTaskBtn);
            mainBody.appendChild(finishProjectBtn);
            break;
        case 'addTask':
            const taskHeader = document.createElement('h3');
            const taskForm = document.createElement('div');
            const taskName = document.createElement('input');
            const taskDetails = document.createElement('input');
            const taskDate = document.createElement('input');
            const taskPriority = document.createElement('select');
            const taskPriorityLow = document.createElement('option');
            const taskPriorityMedium = document.createElement('option');
            const taskPriorityHigh = document.createElement('option');
            const addTaskBtn = document.createElement('button');
            taskHeader.id = 'taskHeader';
            taskHeader.textContent = 'Add Task';
            taskForm.id = 'taskForm';
            taskName.id = 'taskName';
            taskDetails.id = 'taskDetails';
            taskDate.id = 'taskDate';
            taskDate.type = 'date';
            taskPriority.id = 'taskPriority';
            taskPriorityLow.textContent = 'Low';
            taskPriorityMedium.textContent = 'Medium';
            taskPriorityHigh.textContent = 'High';
            addTaskBtn.textContent = 'Add Task';
            addTaskBtn.id = 'addTaskBtn';
            taskPriority.appendChild(taskPriorityLow);
            taskPriority.appendChild(taskPriorityMedium);
            taskPriority.appendChild(taskPriorityHigh);
            taskForm.appendChild(taskHeader);
            taskForm.appendChild(taskName);
            taskForm.appendChild(taskDetails);
            taskForm.appendChild(taskDate);
            taskForm.appendChild(taskPriority);
            taskForm.appendChild(addTaskBtn);
            mainBody.appendChild(taskForm);
            break;
        case 'viewProject':
            const viewProjectName = document.createElement('h3');
            const viewProjectDetails = document.createElement('h3');
            const viewProjectDate = document.createElement('h3');
            const viewProjectPriority = document.createElement('h3');
            const viewProjectTasks = document.createElement('ul');
            viewProjectName.id = 'viewProjectName';
            viewProjectDetails.id = 'viewProjectDetails';
            viewProjectDate.id = 'viewProjectDate';
            viewProjectPriority.id = 'viewProjectPriority';
            viewProjectTasks.id = 'viewProjectTasks';
            mainBody.appendChild(viewProjectName);
            mainBody.appendChild(viewProjectDetails);
            mainBody.appendChild(viewProjectDate);
            mainBody.appendChild(viewProjectPriority);
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
    createForms('viewProject');
    updateHeader('nameProject', project.name);
    const viewProjectName = document.getElementById('viewProjectName');
    const viewProjectDetails = document.getElementById('viewProjectDetails');
    const viewProjectTasks = document.getElementById('viewProjectTasks');
    viewProjectName.textContent = project.name;
    viewProjectDetails.textContent = project.details;
    for (let i = 0; i < project.taskList.length; i++){
        const taskLi = document.createElement('li');
        taskLi.textContent = project.taskList[i].name;
        viewProjectTasks.appendChild(taskLi);
        console.log(taskLi);
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
    createForms('newProject');
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
        createForms('newTask');
        showAddTaskForm(newProject);
    })
}

//New Task Button in DOM
function showAddTaskForm(newProject){
    const newTaskBtn = document.getElementById('newTaskBtn');
    newTaskBtn.addEventListener('click', function(){
        createForms('addTask');
        addTaskToProject(newProject);
    })
}

function addTaskToFormTaskList(task, project){
    const formTaskList = document.getElementById('formTaskList');
    const newTaskLi = document.createElement('li');
    const editTaskBtn = document.createElement('button');
    const removeTaskBtn = document.createElement('button');
    newTaskLi.textContent = task.name;
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
    newTaskLi.appendChild(editTaskBtn);
    newTaskLi.appendChild(removeTaskBtn);
    
    formTaskList.appendChild(newTaskLi);
}

//ADD Task Button in DOM
function addTaskToProject(project){
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
    })
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gY3JlYXRlRm9ybXMoYm9keVR5cGUpIHtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQm9keScpO1xuICAgIC8vbmV3IHByb2plY3QgYm9keVxuICAgIHN3aXRjaCAoYm9keVR5cGUpe1xuICAgICAgICBjYXNlICduZXdQcm9qZWN0JzpcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5pZCA9ICdwcm9qZWN0Rm9ybSc7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5pZCA9ICdwcm9qZWN0TmFtZSc7XG4gICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5pZCA9ICdwcm9qZWN0RGV0YWlscyc7XG4gICAgICAgICAgICBhZGRQcm9qZWN0QnRuLmlkID0gJ2FkZFByb2plY3RCdG4nO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBOYW1lJztcbiAgICAgICAgICAgIHByb2plY3REZXRhaWxzLnBsYWNlaG9sZGVyID0gJ1Byb2plY3QgRGV0YWlscyc7XG4gICAgICAgICAgICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgICAgICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3REZXRhaWxzKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuICAgICAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25ld1Rhc2snOlxuICAgICAgICAgICAgY29uc3QgbmV3VGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBjb25zdCBmb3JtVGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29uc3QgZmluaXNoUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZmluaXNoUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlQm9keSgnZmluaXNoUHJvamVjdCcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG5ld1Rhc2tIZWFkZXIudGV4dENvbnRlbnQgPSAnQ3VycmVudCBUYXNrcyc7XG4gICAgICAgICAgICBmb3JtVGFza0xpc3QuaWQgPSAnZm9ybVRhc2tMaXN0JztcbiAgICAgICAgICAgIG5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuICAgICAgICAgICAgbmV3VGFza0J0bi5pZCA9ICduZXdUYXNrQnRuJztcbiAgICAgICAgICAgIGZpbmlzaFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZChuZXdUYXNrSGVhZGVyKTtcbiAgICAgICAgICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKGZvcm1UYXNrTGlzdCk7XG4gICAgICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZChuZXdUYXNrQnRuKTtcbiAgICAgICAgICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKGZpbmlzaFByb2plY3RCdG4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FkZFRhc2snOlxuICAgICAgICAgICAgY29uc3QgdGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgdGFza0hlYWRlci5pZCA9ICd0YXNrSGVhZGVyJztcbiAgICAgICAgICAgIHRhc2tIZWFkZXIudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgICAgICAgICAgdGFza0Zvcm0uaWQgPSAndGFza0Zvcm0nO1xuICAgICAgICAgICAgdGFza05hbWUuaWQgPSAndGFza05hbWUnO1xuICAgICAgICAgICAgdGFza0RldGFpbHMuaWQgPSAndGFza0RldGFpbHMnO1xuICAgICAgICAgICAgdGFza0RhdGUuaWQgPSAndGFza0RhdGUnO1xuICAgICAgICAgICAgdGFza0RhdGUudHlwZSA9ICdkYXRlJztcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5pZCA9ICd0YXNrUHJpb3JpdHknO1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5TG93LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHlNZWRpdW0udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eUhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICAgICAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICAgICAgICAgIGFkZFRhc2tCdG4uaWQgPSAnYWRkVGFza0J0bic7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5TG93KTtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlNZWRpdW0pO1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUhpZ2gpO1xuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0hlYWRlcik7XG4gICAgICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscyk7XG4gICAgICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gICAgICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndmlld1Byb2plY3QnOlxuICAgICAgICAgICAgY29uc3Qgdmlld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdQcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBjb25zdCB2aWV3UHJvamVjdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgY29uc3Qgdmlld1Byb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBjb25zdCB2aWV3UHJvamVjdFRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgIHZpZXdQcm9qZWN0TmFtZS5pZCA9ICd2aWV3UHJvamVjdE5hbWUnO1xuICAgICAgICAgICAgdmlld1Byb2plY3REZXRhaWxzLmlkID0gJ3ZpZXdQcm9qZWN0RGV0YWlscyc7XG4gICAgICAgICAgICB2aWV3UHJvamVjdERhdGUuaWQgPSAndmlld1Byb2plY3REYXRlJztcbiAgICAgICAgICAgIHZpZXdQcm9qZWN0UHJpb3JpdHkuaWQgPSAndmlld1Byb2plY3RQcmlvcml0eSc7XG4gICAgICAgICAgICB2aWV3UHJvamVjdFRhc2tzLmlkID0gJ3ZpZXdQcm9qZWN0VGFza3MnO1xuICAgICAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQodmlld1Byb2plY3ROYW1lKTtcbiAgICAgICAgICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKHZpZXdQcm9qZWN0RGV0YWlscyk7XG4gICAgICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZCh2aWV3UHJvamVjdERhdGUpO1xuICAgICAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQodmlld1Byb2plY3RQcmlvcml0eSk7XG4gICAgICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZCh2aWV3UHJvamVjdFRhc2tzKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuICAgIGlmIChtYWluU2VjdGlvbi5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluSGVhZGVyLmlkID0gJ21haW5IZWFkZXInO1xuICAgICAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhlYWRlcihib2R5VHlwZSwgaGVhZGVyKXtcbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5IZWFkZXInKTtcbiAgICBzd2l0Y2ggKGJvZHlUeXBlKSB7XG4gICAgICAgIGNhc2UgJ25ld1Byb2plY3QnOlxuICAgICAgICAgICAgbWFpbkhlYWRlci50ZXh0Q29udGVudCA9ICdBZGQgTmV3IFByb2plY3QnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25hbWVQcm9qZWN0JzpcbiAgICAgICAgICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBoZWFkZXI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvZHkoKXtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Cb2R5LmlkID0gJ21haW5Cb2R5JztcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluQm9keSk7XG59XG5cblxuXG5mdW5jdGlvbiBkZWxldGVCb2R5KGJvZHlUeXBlKXtcbiAgICBzd2l0Y2ggKGJvZHlUeXBlKSB7XG4gICAgICAgIGNhc2UgJ25ld1Byb2plY3QnOlxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEZvcm0nKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLnJlbW92ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FkZFRhc2snOlxuICAgICAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Zvcm0nKTtcbiAgICAgICAgICAgIHRhc2tGb3JtLnJlbW92ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZpbmlzaFByb2plY3QnOlxuICAgICAgICAgICAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblNlY3Rpb24nKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBtYWluU2VjdGlvbi5jaGlsZHJlbi5sZW5ndGggLTE7IGkgPj0gMDsgaS0tKXtcbiAgICAgICAgICAgICAgICBsZXQgZSA9IG1haW5TZWN0aW9uLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGUucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNyZWF0ZUhlYWRlcixcbiAgICB1cGRhdGVIZWFkZXIsXG4gICAgY3JlYXRlQm9keSxcbiAgICBjcmVhdGVGb3JtcyxcbiAgICBkZWxldGVCb2R5fSIsImZ1bmN0aW9uIFByb2plY3QoKSB7XG4gICAgdGhpcy5uYW1lID0gJyc7XG4gICAgdGhpcy5kZXRhaWxzID0gJyc7XG4gICAgdGhpcy50YXNrTGlzdCA9IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtQcm9qZWN0fTsiLCJmdW5jdGlvbiBUYXNrKCkge1xuICAgIHRoaXMubmFtZSA9ICcnO1xuICAgIHRoaXMuZGV0YWlscyA9ICcnO1xuICAgIHRoaXMuZGF0ZSA9ICcnO1xuICAgIHRoaXMucHJpb3JpdHkgPSAnJztcbiAgICB0aGlzLnByb2plY3QgPSAnJztcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtUYXNrfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3Qge1Byb2plY3R9ID0gcmVxdWlyZSgnLi9wcm9qZWN0LmpzJyk7XG5jb25zdCB7VGFza30gPSByZXF1aXJlKCcuL3Rhc2suanMnKTtcbmNvbnN0IHtjcmVhdGVIZWFkZXJ9ID0gcmVxdWlyZSgnLi9mb3Jtcy5qcycpO1xuY29uc3Qge3VwZGF0ZUhlYWRlcn0gPSByZXF1aXJlKCcuL2Zvcm1zLmpzJyk7XG5jb25zdCB7Y3JlYXRlQm9keX0gPSByZXF1aXJlKCcuL2Zvcm1zLmpzJyk7XG5jb25zdCB7Y3JlYXRlRm9ybXN9ID0gcmVxdWlyZSgnLi9mb3Jtcy5qcycpO1xuY29uc3Qge2RlbGV0ZUJvZHl9ID0gcmVxdWlyZSgnLi9mb3Jtcy5qcycpO1xuXG5jb25zdCBwcm9qZWN0VWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFVsJyk7XG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKTtcbmNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5TZWN0aW9uJyk7XG5jb25zdCBpbXBvcnRhbnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0YW50QnRuJyk7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RVbChwcm9qZWN0KSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICB2aWV3UHJvamVjdChwcm9qZWN0KTtcbiAgICB9KVxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpbmsnKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBsaS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICBwcm9qZWN0VWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIHByb2plY3RVbC5pbnNlcnRCZWZvcmUobGksIGxpLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpO1xufVxuXG5mdW5jdGlvbiB2aWV3UHJvamVjdChwcm9qZWN0KXtcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVCb2R5KCk7XG4gICAgY3JlYXRlRm9ybXMoJ3ZpZXdQcm9qZWN0Jyk7XG4gICAgdXBkYXRlSGVhZGVyKCduYW1lUHJvamVjdCcsIHByb2plY3QubmFtZSk7XG4gICAgY29uc3Qgdmlld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdQcm9qZWN0TmFtZScpO1xuICAgIGNvbnN0IHZpZXdQcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3UHJvamVjdERldGFpbHMnKTtcbiAgICBjb25zdCB2aWV3UHJvamVjdFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdQcm9qZWN0VGFza3MnKTtcbiAgICB2aWV3UHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgdmlld1Byb2plY3REZXRhaWxzLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXRhaWxzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50YXNrTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHRhc2tMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHRhc2tMaS50ZXh0Q29udGVudCA9IHByb2plY3QudGFza0xpc3RbaV0ubmFtZTtcbiAgICAgICAgdmlld1Byb2plY3RUYXNrcy5hcHBlbmRDaGlsZCh0YXNrTGkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybVZhbHVlcyhib2R5VHlwZSwgbmV3UHJvamVjdCl7XG4gICAgc3dpdGNoIChib2R5VHlwZSkge1xuICAgICAgICBjYXNlICduZXdQcm9qZWN0JzpcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGV0YWlscycpO1xuICAgICAgICAgICAgbmV3UHJvamVjdC5uYW1lID0gcHJvamVjdE5hbWUudmFsdWU7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LmRldGFpbHMgPSBwcm9qZWN0RGV0YWlscy52YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuLy9hZGQgcHJvamVjdCBidXR0b24gaW4gc2lkZWJhclxuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgY3JlYXRlQm9keSgpO1xuICAgIGNyZWF0ZUZvcm1zKCduZXdQcm9qZWN0Jyk7XG4gICAgdXBkYXRlSGVhZGVyKCduZXdQcm9qZWN0JywgJycpO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCgpO1xuICAgIHN1Ym1pdFByb2plY3QobmV3UHJvamVjdCk7XG59KVxuZnVuY3Rpb24gc3VibWl0UHJvamVjdChuZXdQcm9qZWN0KXtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdG4nKTtcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgZ2V0Rm9ybVZhbHVlcygnbmV3UHJvamVjdCcsIG5ld1Byb2plY3QpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0VWwobmV3UHJvamVjdCk7XG4gICAgICAgIHVwZGF0ZUhlYWRlcignbmFtZVByb2plY3QnLCBuZXdQcm9qZWN0Lm5hbWUpO1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBkZWxldGVCb2R5KCduZXdQcm9qZWN0Jyk7XG4gICAgICAgIGNyZWF0ZUZvcm1zKCduZXdUYXNrJyk7XG4gICAgICAgIHNob3dBZGRUYXNrRm9ybShuZXdQcm9qZWN0KTtcbiAgICB9KVxufVxuXG4vL05ldyBUYXNrIEJ1dHRvbiBpbiBET01cbmZ1bmN0aW9uIHNob3dBZGRUYXNrRm9ybShuZXdQcm9qZWN0KXtcbiAgICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tCdG4nKTtcbiAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY3JlYXRlRm9ybXMoJ2FkZFRhc2snKTtcbiAgICAgICAgYWRkVGFza1RvUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9Gb3JtVGFza0xpc3QodGFzaywgcHJvamVjdCl7XG4gICAgY29uc3QgZm9ybVRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UYXNrTGlzdCcpO1xuICAgIGNvbnN0IG5ld1Rhc2tMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCByZW1vdmVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VGFza0xpLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgIGVkaXRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0VkaXQgVGFzayc7XG4gICAgcmVtb3ZlVGFza0J0bi50ZXh0Q29udGVudCA9ICdSZW1vdmUgVGFzayc7XG4gICAgcmVtb3ZlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIG5ld1Rhc2tMaS5yZW1vdmUoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGFzay5uYW1lID09PSBwcm9qZWN0LnRhc2tMaXN0W2ldLm5hbWUpe1xuICAgICAgICAgICAgICAgIHByb2plY3QudGFza0xpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICAvL2Rvbid0IGZvcmdldCB0byBhZGQgZWRpdCB0YXNrIGJ1dHRvbiBsaXN0ZW5lclxuICAgIG5ld1Rhc2tMaS5hcHBlbmRDaGlsZChlZGl0VGFza0J0bik7XG4gICAgbmV3VGFza0xpLmFwcGVuZENoaWxkKHJlbW92ZVRhc2tCdG4pO1xuICAgIFxuICAgIGZvcm1UYXNrTGlzdC5hcHBlbmRDaGlsZChuZXdUYXNrTGkpO1xufVxuXG4vL0FERCBUYXNrIEJ1dHRvbiBpbiBET01cbmZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdCl7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJyk7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWUnKTtcbiAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGV0YWlscycpO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEYXRlJyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQcmlvcml0eScpO1xuXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzaygpO1xuICAgICAgICBuZXdUYXNrLm5hbWUgPSB0YXNrTmFtZS52YWx1ZTtcbiAgICAgICAgbmV3VGFzay5kZXRhaWxzID0gdGFza0RldGFpbHMudmFsdWU7XG4gICAgICAgIG5ld1Rhc2suZGF0ZSA9IHRhc2tEYXRlLnZhbHVlO1xuICAgICAgICBuZXdUYXNrLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5LnZhbHVlO1xuICAgICAgICBwcm9qZWN0LnRhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgICAgIGFkZFRhc2tUb0Zvcm1UYXNrTGlzdChuZXdUYXNrLCBwcm9qZWN0KTtcbiAgICAgICAgZGVsZXRlQm9keSgnYWRkVGFzaycpO1xuICAgIH0pXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9