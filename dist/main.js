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
            const taskForm = document.createElement('div');
            const taskName = document.createElement('input');
            const taskDetails = document.createElement('input');
            const taskDate = document.createElement('input');
            const taskPriority = document.createElement('select');
            const taskPriorityLow = document.createElement('option');
            const taskPriorityMedium = document.createElement('option');
            const taskPriorityHigh = document.createElement('option');
            const addTaskBtn = document.createElement('button');
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
            taskForm.appendChild(taskName);
            taskForm.appendChild(taskDetails);
            taskForm.appendChild(taskDate);
            taskForm.appendChild(taskPriority);
            taskForm.appendChild(addTaskBtn);
            mainBody.appendChild(taskForm);
            break;
    }
}

function createHeader(){
    if (mainSection.children.length === 0) {
        const mainHeader = document.createElement('div');
        mainHeader.id = 'mainHeader';
        mainSection.appendChild(mainHeader);
    }
}

function updateHeader(bodyType){
    const mainHeader = document.getElementById('mainHeader');
    switch (bodyType) {
        case 'newProject':
            mainHeader.textContent = 'Add New Project';
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
        case 'newTask':
            const taskForm = document.getElementById('taskForm');
            taskForm.remove();
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

function updateProjectUl(projectName) {
    const li = document.createElement('li');
    const project = document.createElement('div');
    project.textContent = projectName;
    project.classList.add('projectLink');
    project.classList.add('project');
    li.appendChild(project);
    projectUl.appendChild(li);
    projectUl.insertBefore(li, li.previousElementSibling);
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

function submitProject(newProject){
    const addProjectBtn = document.getElementById('addProjectBtn');
    addProjectBtn.addEventListener('click', function(){
        getFormValues('newProject', newProject);
        updateProjectUl(newProject.name);
        projectList.push(newProject);
        deleteBody('newProject');
        createForms('newTask');
    })
}

addProject.addEventListener('click', function(){
    createHeader();
    updateHeader('newProject');
    createBody();
    createForms('newProject');
    const newProject = new Project();
    submitProject(newProject);
})


importantBtn.addEventListener('click', function(){
    deleteBody('newProject');
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7Ozs7Ozs7Ozs7QUNObEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGtCQUFrQjs7Ozs7O1VDVGxCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7OztBQ3RCQSxPQUFPLFNBQVMsRUFBRSxtQkFBTyxDQUFDLHNDQUFjO0FBQ3hDLE9BQU8sTUFBTSxFQUFFLG1CQUFPLENBQUMsZ0NBQVc7QUFDbEMsT0FBTyxjQUFjLEVBQUUsbUJBQU8sQ0FBQyxrQ0FBWTtBQUMzQyxPQUFPLGNBQWMsRUFBRSxtQkFBTyxDQUFDLGtDQUFZO0FBQzNDLE9BQU8sWUFBWSxFQUFFLG1CQUFPLENBQUMsa0NBQVk7QUFDekMsT0FBTyxhQUFhLEVBQUUsbUJBQU8sQ0FBQyxrQ0FBWTtBQUMxQyxPQUFPLFlBQVksRUFBRSxtQkFBTyxDQUFDLGtDQUFZOztBQUV6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVGb3Jtcyhib2R5VHlwZSkge1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Cb2R5Jyk7XG4gICAgLy9uZXcgcHJvamVjdCBib2R5XG4gICAgc3dpdGNoIChib2R5VHlwZSl7XG4gICAgICAgIGNhc2UgJ25ld1Byb2plY3QnOlxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLmlkID0gJ3Byb2plY3RGb3JtJztcbiAgICAgICAgICAgIHByb2plY3ROYW1lLmlkID0gJ3Byb2plY3ROYW1lJztcbiAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmlkID0gJ3Byb2plY3REZXRhaWxzJztcbiAgICAgICAgICAgIGFkZFByb2plY3RCdG4uaWQgPSAnYWRkUHJvamVjdEJ0bic7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IE5hbWUnO1xuICAgICAgICAgICAgcHJvamVjdERldGFpbHMucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBEZXRhaWxzJztcbiAgICAgICAgICAgIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdERldGFpbHMpO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG4gICAgICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbmV3VGFzayc6XG4gICAgICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgdGFza0Zvcm0uaWQgPSAndGFza0Zvcm0nO1xuICAgICAgICAgICAgdGFza05hbWUuaWQgPSAndGFza05hbWUnO1xuICAgICAgICAgICAgdGFza0RldGFpbHMuaWQgPSAndGFza0RldGFpbHMnO1xuICAgICAgICAgICAgdGFza0RhdGUuaWQgPSAndGFza0RhdGUnO1xuICAgICAgICAgICAgdGFza0RhdGUudHlwZSA9ICdkYXRlJztcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5pZCA9ICd0YXNrUHJpb3JpdHknO1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5TG93LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHlNZWRpdW0udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eUhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICAgICAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICAgICAgICAgIGFkZFRhc2tCdG4uaWQgPSAnYWRkVGFza0J0bic7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5TG93KTtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlNZWRpdW0pO1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUhpZ2gpO1xuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgICAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICBpZiAobWFpblNlY3Rpb24uY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbkhlYWRlci5pZCA9ICdtYWluSGVhZGVyJztcbiAgICAgICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXIoYm9keVR5cGUpe1xuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkhlYWRlcicpO1xuICAgIHN3aXRjaCAoYm9keVR5cGUpIHtcbiAgICAgICAgY2FzZSAnbmV3UHJvamVjdCc6XG4gICAgICAgICAgICBtYWluSGVhZGVyLnRleHRDb250ZW50ID0gJ0FkZCBOZXcgUHJvamVjdCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvZHkoKXtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Cb2R5LmlkID0gJ21haW5Cb2R5JztcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluQm9keSk7XG59XG5cblxuXG5mdW5jdGlvbiBkZWxldGVCb2R5KGJvZHlUeXBlKXtcbiAgICBzd2l0Y2ggKGJvZHlUeXBlKSB7XG4gICAgICAgIGNhc2UgJ25ld1Byb2plY3QnOlxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEZvcm0nKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLnJlbW92ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25ld1Rhc2snOlxuICAgICAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Zvcm0nKTtcbiAgICAgICAgICAgIHRhc2tGb3JtLnJlbW92ZSgpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY3JlYXRlSGVhZGVyLFxuICAgIHVwZGF0ZUhlYWRlcixcbiAgICBjcmVhdGVCb2R5LFxuICAgIGNyZWF0ZUZvcm1zLFxuICAgIGRlbGV0ZUJvZHl9IiwiZnVuY3Rpb24gUHJvamVjdCgpIHtcbiAgICB0aGlzLm5hbWUgPSAnJztcbiAgICB0aGlzLmRldGFpbHMgPSAnJztcbiAgICB0aGlzLnRhc2tMaXN0ID0gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1Byb2plY3R9OyIsImZ1bmN0aW9uIFRhc2soKSB7XG4gICAgdGhpcy5uYW1lID0gJyc7XG4gICAgdGhpcy5kZXRhaWxzID0gJyc7XG4gICAgdGhpcy5kYXRlID0gJyc7XG4gICAgdGhpcy5wcmlvcml0eSA9ICcnO1xuICAgIHRoaXMucHJvamVjdCA9ICcnO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1Rhc2t9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJjb25zdCB7UHJvamVjdH0gPSByZXF1aXJlKCcuL3Byb2plY3QuanMnKTtcbmNvbnN0IHtUYXNrfSA9IHJlcXVpcmUoJy4vdGFzay5qcycpO1xuY29uc3Qge2NyZWF0ZUhlYWRlcn0gPSByZXF1aXJlKCcuL2Zvcm1zLmpzJyk7XG5jb25zdCB7dXBkYXRlSGVhZGVyfSA9IHJlcXVpcmUoJy4vZm9ybXMuanMnKTtcbmNvbnN0IHtjcmVhdGVCb2R5fSA9IHJlcXVpcmUoJy4vZm9ybXMuanMnKTtcbmNvbnN0IHtjcmVhdGVGb3Jtc30gPSByZXF1aXJlKCcuL2Zvcm1zLmpzJyk7XG5jb25zdCB7ZGVsZXRlQm9keX0gPSByZXF1aXJlKCcuL2Zvcm1zLmpzJyk7XG5cbmNvbnN0IHByb2plY3RVbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VWwnKTtcbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpO1xuY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblNlY3Rpb24nKTtcbmNvbnN0IGltcG9ydGFudEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRhbnRCdG4nKTtcblxuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdFVsKHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGluaycpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIGxpLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIHByb2plY3RVbC5hcHBlbmRDaGlsZChsaSk7XG4gICAgcHJvamVjdFVsLmluc2VydEJlZm9yZShsaSwgbGkucHJldmlvdXNFbGVtZW50U2libGluZyk7XG59XG5cbmZ1bmN0aW9uIGdldEZvcm1WYWx1ZXMoYm9keVR5cGUsIG5ld1Byb2plY3Qpe1xuICAgIHN3aXRjaCAoYm9keVR5cGUpIHtcbiAgICAgICAgY2FzZSAnbmV3UHJvamVjdCc6XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZScpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdERldGFpbHMnKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3QubmFtZSA9IHByb2plY3ROYW1lLnZhbHVlO1xuICAgICAgICAgICAgbmV3UHJvamVjdC5kZXRhaWxzID0gcHJvamVjdERldGFpbHMudmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QobmV3UHJvamVjdCl7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnRuJyk7XG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGdldEZvcm1WYWx1ZXMoJ25ld1Byb2plY3QnLCBuZXdQcm9qZWN0KTtcbiAgICAgICAgdXBkYXRlUHJvamVjdFVsKG5ld1Byb2plY3QubmFtZSk7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGRlbGV0ZUJvZHkoJ25ld1Byb2plY3QnKTtcbiAgICAgICAgY3JlYXRlRm9ybXMoJ25ld1Rhc2snKTtcbiAgICB9KVxufVxuXG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICB1cGRhdGVIZWFkZXIoJ25ld1Byb2plY3QnKTtcbiAgICBjcmVhdGVCb2R5KCk7XG4gICAgY3JlYXRlRm9ybXMoJ25ld1Byb2plY3QnKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoKTtcbiAgICBzdWJtaXRQcm9qZWN0KG5ld1Byb2plY3QpO1xufSlcblxuXG5pbXBvcnRhbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGRlbGV0ZUJvZHkoJ25ld1Byb2plY3QnKTtcbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==