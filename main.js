/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((module) => {

const container = document.getElementById('container');

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
    mainBody.id = 'mainBody';

    if (whatKind === 'project') {
        header.textContent = 'New Project';
        const projectNameInput = document.createElement('input');
        const projectDetailsInput = document.createElement('input');
        const addProjectBtn = document.createElement('button');
        const closeWindowBtn = document.createElement('button');
        projectNameInput.id = 'projectNameInput';
        projectDetailsInput.id = 'projectDetailsInput';
        projectNameInput.placeholder = 'Enter Project Name';
        projectDetailsInput.placeholder = 'Enter Project Details';
        addProjectBtn.id = 'addProjectBtn';
        addProjectBtn.textContent = 'Create Project';
        closeWindowBtn.textContent = 'Close';
        closeWindowBtn.id = 'closeWindowBtn';
        checkData(whatKind, formData, [projectNameInput, projectDetailsInput]);
        appendElements(false, [projectNameInput, projectDetailsInput], addProjectBtn, closeWindowBtn)
    } else if (whatKind == 'task') {
        const closeTaskBtn = document.createElement('button');
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
        closeTaskBtn.textContent = 'Close';
        closeTaskBtn.id = 'closeTaskBtn';
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
        appendElements(true, [taskNameInput, taskDetailsInput, taskDateLabel, taskDateInput, taskPriorityLabel, taskPriorityInput], addTaskBtn, closeTaskBtn)
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
    function appendElements(isTask, inputList, btn, closeBtn){
        if (!isTask) {
            for (let i = 0; i < inputList.length; i++) {
                const e = inputList[i];
                mainBody.appendChild(e);
            }
            mainBody.appendChild(btn);
            mainHeader.appendChild(closeBtn);
            closeBtn.addEventListener('click', function(){
                removeEverything();
            })
        } else {
            const taskFormContainer = document.createElement('div');
            taskFormContainer.appendChild(closeBtn);
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

function setHeader(name) {
    const header = document.getElementById('header');
    header.textContent = name;
}

module.exports = {createForm,
    removeEverything,
    removeMainBodyContent};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {Project} = __webpack_require__(/*! ./project.js */ "./src/project.js");
const {Task} = __webpack_require__(/*! ./project.js */ "./src/project.js");
const {createForm} = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
const {takeValuesAndCreateProject} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {removeMainBodyContent} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {showAddTaskToProjectPage} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {takeValuesAndCreateTask} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {addProjectToProjectList} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {changeOverlay} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {viewTasks} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {setHeader} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {addProjectToStorage} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {updateProjectInStorage} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");

const addProject = document.getElementById('addProject');
const projectList = [];

(() => {
    const projectsInStorage = {...localStorage};
    for (let key in projectsInStorage) {
        const project = JSON.parse(localStorage.getItem(key));
        addProjectToProjectList(projectList, project);
    }
})();


const nextSevenDaysBtn = document.getElementById('nextSevenDaysBtn');
nextSevenDaysBtn.addEventListener('click', function(){
    viewTasks(projectList, "Next Seven Day's")
})

const allTasksBtn = document.getElementById('allTasksBtn');
allTasksBtn.addEventListener('click',function(){
    viewTasks(projectList, 'All');
})

const todayBtn = document.getElementById('todayBtn');
todayBtn.addEventListener('click', function(){
    viewTasks(projectList, "Today's");
})

const importantBtn = document.getElementById('importantBtn');
importantBtn.addEventListener('click', function(){
    viewTasks(projectList, 'Important');
})


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
        addProjectToStorage(newProject);
    })
})

function addTaskToProject(project){
    const addNewTaskBtn = document.getElementById('addNewTaskBtn');
    addNewTaskBtn.addEventListener('click', function(){
        createForm('task', '');
        setHeader(project.name);
        changeOverlay('dark');
        const closeTaskBtn = document.getElementById('closeTaskBtn');
        closeTaskBtn.addEventListener('click', function(){
            removeMainBodyContent();
            showAddTaskToProjectPage(project);
            addTaskToProject(project);
            changeOverlay('light');
        })
        const addTaskBtn = document.getElementById('addTaskBtn');
        addTaskBtn.addEventListener('click', function(){
            const newTask = new Task();
            takeValuesAndCreateTask(newTask);
            project.taskList.push(newTask);
            removeMainBodyContent();
            showAddTaskToProjectPage(project);
            addTaskToProject(project);
            changeOverlay('light');
            addProjectToStorage(project);
        })
    })
}

module.exports = {addTaskToProject};










/***/ }),

/***/ "./src/modules.js":
/*!************************!*\
  !*** ./src/modules.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {createForm} = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
const {removeEverything} = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
const {removeMainBodyContent} = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
const {Task} = __webpack_require__(/*! ./project.js */ "./src/project.js");

const overlay = document.getElementById('overlay');
overlay.style.visibility = 'hidden';


function addProjectToStorage(project){
    const projectsInStorage = {...localStorage};
    let foundKey = false;
    for (let key in projectsInStorage) {
        if (key === project.name) {
            foundKey = true;
            localStorage.removeItem(project.name);
            localStorage.setItem(project.name, JSON.stringify(project));
        }
    }
    if (!foundKey) {
        localStorage.setItem(project.name, JSON.stringify(project));
    }
}

function updateProjectInStorage(oldProject, newProject){
    const projectsInStorage = {...localStorage};
    for (let key in projectsInStorage){
        if (key === oldProject) {
            localStorage.removeItem(key);
            localStorage.setItem(newProject.name, JSON.stringify(newProject));
        }
    }
}

function takeValuesAndCreateProject(project){
    const projectName = document.getElementById('projectNameInput').value;
    const projectDetails = document.getElementById('projectDetailsInput').value;
    project.name = projectName;
    project.details = projectDetails;
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
    addNewTaskBtn.classList.add('addNewTaskBtn');
    addNewTaskBtn.textContent = '+'
    finishedAddingTasksBtn.id = 'finishedAddingTasksBtn';
    finishedAddingTasksBtn.classList.add('regularBtn');
    finishedAddingTasksBtn.textContent = 'Done';
    mainBody.appendChild(addNewTaskBtn);
    mainBody.appendChild(finishedAddingTasksBtn);
    finishedAddingTasksBtn.addEventListener('click', function(){
        removeEverything();
        addProjectToStorage(project);
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
    const removeProjectBtn = document.createElement('button');
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('projectLink');
    projectDiv.classList.add('project');
    projectDiv.id = `${newProject.name}-project`;
    projectDiv.textContent = newProject.name;
    removeProjectBtn.textContent = 'X';
    removeProjectBtn.classList.add('removeProjectBtn');
    projectLi.appendChild(projectDiv);
    projectLi.appendChild(removeProjectBtn);
    projectUl.appendChild(projectLi);
    projectUl.insertBefore(projectLi, projectLi.previousElementSibling);
    projectDiv.addEventListener('click', function(){
        viewProject(newProject)}
        );
    removeProjectBtn.addEventListener('click', function(){
        removeProjectFromStorage(newProject);
        removeProjectFromProjectList(newProject);
        removeEverything();
    })
}

function removeProjectFromProjectList(project){
    const projectUl = document.getElementById('projectUl');
    for (let i = projectUl.children.length - 1; i >= 0; i--) {
        const e = projectUl.children[i].children[0];
        if (e.textContent === project.name) {
            const li = projectUl.children[i];
            li.remove();
        }
    }
}

function removeProjectFromStorage(project){
    const projectsInStorage = {...localStorage};
    for (let key in projectsInStorage){
        if (key === project.name){
            localStorage.removeItem(key);
        }
    }
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
    const closeWindowBtn = document.createElement('button');
    const addNewTaskBtn = document.createElement('button');
    header.textContent = newProject.name;
    projectDetails.textContent = newProject.details;
    mainSection.id = 'mainSection';
    mainHeader.id = 'mainHeader';
    mainBody.id = 'mainBody';
    editProjectBtn.textContent = 'Edit Project';
    editProjectBtn.id = 'editProjectBtn';
    closeWindowBtn.textContent = 'Close';
    closeWindowBtn.id = 'closeWindowBtn';
    addNewTaskBtn.textContent = '+';
    addNewTaskBtn.id = 'addNewTaskBtn';
    mainHeader.appendChild(header);
    mainHeader.appendChild(closeWindowBtn);
    mainBody.appendChild(projectDetails);
    for (let i = 0; i < newProject.taskList.length; i++){
        const task = newProject.taskList[i];
        const taskDiv = document.createElement('div');
        const taskTop = document.createElement('div');
        const taskBottom = document.createElement('div');
        const taskName = document.createElement('p');
        const taskDetails = document.createElement('p');
        const taskDate = document.createElement('p');
        const taskPriority = document.createElement('p');
        const editTaskBtn = document.createElement('button');
        const deleteTaskBtn = document.createElement('button');
        taskTop.classList.add('taskTop');
        taskBottom.classList.add('taskBottom');
        taskDiv.classList.add('taskDiv');
        taskName.textContent = `Task name: ${task.name}`;
        taskDetails.textContent = `Task details: ${task.details}`;
        taskDate.textContent = `Task date: ${task.date}`;
        taskPriority.textContent = `Task Priority: ${task.priority}`;
        editTaskBtn.textContent = 'Edit';
        deleteTaskBtn.textContent = 'Delete';
        editTaskBtn.addEventListener('click', function(){
            createForm('task', task);
            closeTaskBtn(newProject);
            const addTaskBtn = document.getElementById('addTaskBtn');
            addTaskBtn.addEventListener('click', function(){
                takeValuesAndCreateTask(task);
                viewProject(newProject);
                updateProjectInStorage(newProject.name, newProject);
            })
        })
        deleteTaskBtn.addEventListener('click', function(){
            for (let i = 0; i < newProject.taskList.length; i++){
                const t = newProject.taskList[i];
                if (t.name === task.name) {
                    newProject.taskList.splice(i, 1);
                    console.log('clicked');
                    updateProjectInStorage(newProject.name, newProject);
                }
            }
            viewProject(newProject);
        })
        taskTop.appendChild(taskName);
        taskBottom.appendChild(taskDetails);
        taskBottom.appendChild(taskDate);
        taskBottom.appendChild(taskPriority);
        taskTop.appendChild(editTaskBtn);
        taskTop.appendChild(deleteTaskBtn);
        taskDiv.appendChild(taskTop);
        taskDiv.appendChild(taskBottom);
        mainBody.appendChild(taskDiv);
        taskBottom.style.visibility = 'hidden';
        taskBottom.style.position = 'absolute';
        taskTop.addEventListener('click', function(){
            expandTask(this);
        })
    }
    mainBody.appendChild(editProjectBtn);
    mainBody.appendChild(addNewTaskBtn);
    mainSection.appendChild(mainHeader);
    mainSection.appendChild(mainBody);
    container.appendChild(mainSection);
    closeWindowBtn.addEventListener('click', function(){
        removeEverything();
    })
    editProjectBtn.addEventListener('click', function(){
        createForm('project', newProject);
        const addProjectBtn = document.getElementById('addProjectBtn');
        addProjectBtn.addEventListener('click', function(){
            const oldProject = newProject.name;
            takeValuesAndCreateProject(newProject);
            updateProjectList(newProject, oldProject);
            updateProjectInStorage(oldProject, newProject);
            viewProject(newProject);
        })
    })
    addNewTaskBtn.addEventListener('click', function(){
        createForm('task', '');
        setHeader(newProject.name);
        changeOverlay('dark');
        closeTaskBtn(newProject);
        const addTaskBtn = document.getElementById('addTaskBtn');
        addTaskBtn.addEventListener('click', function(){
            const newTask = new Task();
            takeValuesAndCreateTask(newTask);
            newProject.taskList.push(newTask);
            viewProject(newProject);
            changeOverlay('light');
            updateProjectInStorage(newProject.name, newProject);
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

function closeTaskBtn(project){
    const closeTaskBtn = document.getElementById('closeTaskBtn');
    closeTaskBtn.addEventListener('click', function(){
        changeOverlay('light');
        viewProject(project);
    })
}

function changeOverlay(type){
    if (type === 'light') {
        overlay.style.visibility = 'hidden';
    } else if (type === 'dark') {
        overlay.style.visibility = 'visible';
    }
}

function viewTasks(projectList, type){
    removeEverything();
    const container = document.getElementById('container');
    const mainSection = document.createElement('div');
    const mainHeader = document.createElement('div');
    const header = document.createElement('h2');
    const closeWindowBtn = document.createElement('button');
    const mainBody = document.createElement('div');
    mainSection.id = 'mainSection';
    mainHeader.id = 'mainHeader';
    header.textContent = `${type} Tasks`;
    closeWindowBtn.id = 'closeWindowBtn';
    closeWindowBtn.textContent = 'Close';
    mainBody.id = 'mainBody';
    closeWindowBtn.addEventListener('click', function(){
        removeEverything();
    })
    function createTaskDiv(task, project){
        const taskDiv = document.createElement('div');
        const taskTop = document.createElement('div');
        const taskBottom = document.createElement('div');
        taskDiv.classList.add('taskDiv');
        taskTop.classList.add('taskTop');
        taskBottom.classList.add('taskBottom');
        const projectName = document.createElement('p');
        const taskName = document.createElement('p');
        const taskDetails = document.createElement('p');
        const taskDate = document.createElement('p');
        const taskPriority = document.createElement('p');
        projectName.textContent = `Project: ${project.name}`;
        taskName.textContent = `Task: ${task.name}`;
        taskDetails.textContent = `Task Details: ${task.details}`;
        taskDate.textContent = `Task Date: ${task.date}`;
        taskPriority.textContent = `Task Priority: ${task.priority}`;
        taskTop.appendChild(projectName);
        taskTop.appendChild(taskName);
        taskBottom.appendChild(taskDetails);
        taskBottom.appendChild(taskDate);
        taskBottom.appendChild(taskPriority);
        taskDiv.appendChild(taskTop);
        taskDiv.appendChild(taskBottom);
        mainBody.appendChild(taskDiv);
        taskBottom.style.visibility = 'hidden';
        taskBottom.style.position = 'absolute';
        taskTop.addEventListener('click', function(){
            expandTask(this);
        })
        
    }
    for (let i = 0; i < projectList.length; i++) {
        const project = projectList[i];
        for (let x = 0; x < project.taskList.length; x++) {
            const task = project.taskList[x];
            if (type === 'All') {
                createTaskDiv(task, project);
            } else if (type === "Today's"){
                const date = new Date();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (Number(day) < 10) {
                    day = `0${day}`;
                }
                if (Number(month) < 10) {
                    month = `0${month}`;
                }
                let year = date.getFullYear();
                let todaysDate = `${year}-${month}-${day}`;
                if (task.date === todaysDate) {
                    createTaskDiv(task, project);
                }
            } else if (type === "Next Seven Day's") {
                //build todays date in UTC
                const todaysDate = new Date();
                const todaysDay = todaysDate.getDate();
                const todaysMonth = todaysDate.getMonth() +1;
                const todaysYear = todaysDate.getFullYear();
                const fixedTodaysDate = new Date(`${todaysYear}/${todaysMonth}/${todaysDay}`);
                const fixedTodaysDatePlusSevenDays = new Date(`${todaysYear}/${todaysMonth}/${todaysDay + 7}`);
                //build input values date in UTC
                const taskDate = new Date(task.date);
                const taskDateDay = taskDate.getUTCDate();
                const taskDateMonth = taskDate.getUTCMonth() +1;
                const taskDateYear = taskDate.getUTCFullYear();
                const fixedTaskDate = new Date(`${taskDateYear}/${taskDateMonth}/${taskDateDay}`);
                if (fixedTaskDate >= fixedTodaysDate && fixedTaskDate <= fixedTodaysDatePlusSevenDays) {
                    createTaskDiv(task, project);
                }
            } else if (type === 'Important'){
                if (task.priority === 'High'){
                    createTaskDiv(task, project);
                }
            }
        }
    }
    mainHeader.appendChild(header);
    mainHeader.appendChild(closeWindowBtn);
    mainSection.appendChild(mainHeader);
    mainSection.appendChild(mainBody);
    container.appendChild(mainSection);
}

function expandTask(taskTop){
    const taskBottom = taskTop.parentNode.children[1];
    if (taskBottom.style.visibility === 'hidden') {
        taskBottom.style.visibility = 'visible';
        taskBottom.style.position = 'relative';
    } else if (taskBottom.style.visibility === 'visible') {
        taskBottom.style.visibility = 'hidden';
        taskBottom.style.position = 'absolute';
    }
}

function setHeader(name) {
    const header = document.getElementById('header');
    header.textContent = name;
}

module.exports = {
    takeValuesAndCreateProject,
    removeMainBodyContent,
    removeEverything,
    showAddTaskToProjectPage,
    takeValuesAndCreateTask,
    addProjectToProjectList,
    viewProject,
    changeOverlay,
    viewTasks,
    setHeader,
    addProjectToStorage,
    updateProjectInStorage}

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBLGtCQUFrQjs7Ozs7O1VDdEJsQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcblxuZnVuY3Rpb24gcmVtb3ZlTWFpbkJvZHlDb250ZW50KCl7XG4gICAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkJvZHknKTtcbiAgICBmb3IgKGxldCBpID0gbWFpbkJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgZSA9IG1haW5Cb2R5LmNoaWxkcmVuW2ldO1xuICAgICAgICBlLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlcnl0aGluZygpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICBmb3IgKGxldCBpID0gY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICAgICAgY29uc3QgZSA9IGNvbnRhaW5lci5jaGlsZHJlbltpXTtcbiAgICAgICAgZS5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm0od2hhdEtpbmQsIGZvcm1EYXRhKXtcbiAgICAvL3JlbW92ZSBvbGQgZm9ybVxuICAgIChmdW5jdGlvbigpe1xuICAgICAgICBpZihjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZSA9IGNvbnRhaW5lci5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBlLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkoKTtcbiAgICAvL2NyZWF0ZSBET00gZWxlbWVudHMgZm9yIG5ldyBmb3JtXG4gICAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5TZWN0aW9uLmlkID0gJ21haW5TZWN0aW9uJztcbiAgICBtYWluSGVhZGVyLmlkID0gJ21haW5IZWFkZXInO1xuICAgIGhlYWRlci5pZCA9ICdoZWFkZXInO1xuICAgIG1haW5Cb2R5LmlkID0gJ21haW5Cb2R5JztcblxuICAgIGlmICh3aGF0S2luZCA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjbG9zZVdpbmRvd0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LmlkID0gJ3Byb2plY3ROYW1lSW5wdXQnO1xuICAgICAgICBwcm9qZWN0RGV0YWlsc0lucHV0LmlkID0gJ3Byb2plY3REZXRhaWxzSW5wdXQnO1xuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIFByb2plY3QgTmFtZSc7XG4gICAgICAgIHByb2plY3REZXRhaWxzSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgUHJvamVjdCBEZXRhaWxzJztcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5pZCA9ICdhZGRQcm9qZWN0QnRuJztcbiAgICAgICAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUgUHJvamVjdCc7XG4gICAgICAgIGNsb3NlV2luZG93QnRuLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgICAgICAgY2xvc2VXaW5kb3dCdG4uaWQgPSAnY2xvc2VXaW5kb3dCdG4nO1xuICAgICAgICBjaGVja0RhdGEod2hhdEtpbmQsIGZvcm1EYXRhLCBbcHJvamVjdE5hbWVJbnB1dCwgcHJvamVjdERldGFpbHNJbnB1dF0pO1xuICAgICAgICBhcHBlbmRFbGVtZW50cyhmYWxzZSwgW3Byb2plY3ROYW1lSW5wdXQsIHByb2plY3REZXRhaWxzSW5wdXRdLCBhZGRQcm9qZWN0QnRuLCBjbG9zZVdpbmRvd0J0bilcbiAgICB9IGVsc2UgaWYgKHdoYXRLaW5kID09ICd0YXNrJykge1xuICAgICAgICBjb25zdCBjbG9zZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0YXNrRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2xvc2VUYXNrQnRuLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgICAgICAgY2xvc2VUYXNrQnRuLmlkID0gJ2Nsb3NlVGFza0J0bic7XG4gICAgICAgIHRhc2tEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobG93KTtcbiAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobWVkaXVtKTtcbiAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQuaWQgPSAndGFza05hbWVJbnB1dCc7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgVGFzayBOYW1lJztcbiAgICAgICAgdGFza0RldGFpbHNJbnB1dC5pZCA9ICd0YXNrRGV0YWlsc0lucHV0JztcbiAgICAgICAgdGFza0RldGFpbHNJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBUYXNrIERldGFpbHMnO1xuICAgICAgICB0YXNrRGF0ZUlucHV0LmlkID0gJ3Rhc2tEYXRlSW5wdXQnO1xuICAgICAgICB0YXNrRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgRHVlJztcbiAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQuaWQgPSAndGFza1ByaW9yaXR5SW5wdXQnO1xuICAgICAgICB0YXNrUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIFByaW9yaXR5JztcbiAgICAgICAgbG93LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgIG1lZGl1bS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgICAgICBoaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICBhZGRUYXNrQnRuLmlkID0gJ2FkZFRhc2tCdG4nO1xuICAgICAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICAgICAgY2hlY2tEYXRhKHdoYXRLaW5kLCBmb3JtRGF0YSwgW3Rhc2tOYW1lSW5wdXQsIHRhc2tEZXRhaWxzSW5wdXQsIHRhc2tEYXRlSW5wdXQsIHRhc2tQcmlvcml0eUlucHV0XSlcbiAgICAgICAgYXBwZW5kRWxlbWVudHModHJ1ZSwgW3Rhc2tOYW1lSW5wdXQsIHRhc2tEZXRhaWxzSW5wdXQsIHRhc2tEYXRlTGFiZWwsIHRhc2tEYXRlSW5wdXQsIHRhc2tQcmlvcml0eUxhYmVsLCB0YXNrUHJpb3JpdHlJbnB1dF0sIGFkZFRhc2tCdG4sIGNsb3NlVGFza0J0bilcbiAgICB9XG4gICAgLy9jaGVjayBpZiB0aGVyZSBpcyBhbnkgZGF0YVxuICAgIGZ1bmN0aW9uIGNoZWNrRGF0YSh3aGF0S2luZCwgZm9ybURhdGEsIGlucHV0TGlzdCl7XG4gICAgICAgIGlmIChmb3JtRGF0YSAhPT0gJycpIHtcbiAgICAgICAgICAgIGlmICh3aGF0S2luZCA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRMaXN0WzBdLnZhbHVlID0gZm9ybURhdGEubmFtZTtcbiAgICAgICAgICAgICAgICBpbnB1dExpc3RbMV0udmFsdWUgPSBmb3JtRGF0YS5kZXRhaWxzO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aGF0S2luZCA9PT0gJ3Rhc2snKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRMaXN0WzBdLnZhbHVlID0gZm9ybURhdGEubmFtZTtcbiAgICAgICAgICAgICAgICBpbnB1dExpc3RbMV0udmFsdWUgPSBmb3JtRGF0YS5kZXRhaWxzO1xuICAgICAgICAgICAgICAgIGlucHV0TGlzdFsyXS52YWx1ZSA9IGZvcm1EYXRhLmRhdGU7XG4gICAgICAgICAgICAgICAgaW5wdXRMaXN0WzNdLnZhbHVlID0gZm9ybURhdGEucHJpb3JpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9hcHBlbmQgbmV3IGVsZW1lbnRzIHRvIERPTVxuICAgIGZ1bmN0aW9uIGFwcGVuZEVsZW1lbnRzKGlzVGFzaywgaW5wdXRMaXN0LCBidG4sIGNsb3NlQnRuKXtcbiAgICAgICAgaWYgKCFpc1Rhc2spIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZSA9IGlucHV0TGlzdFtpXTtcbiAgICAgICAgICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgICAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICByZW1vdmVFdmVyeXRoaW5nKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgICAgICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmlkID0gJ3Rhc2tGb3JtQ29udGFpbmVyJztcbiAgICAgICAgICAgIGNvbnN0IHRhc2tGb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIHRhc2tGb3JtSGVhZGVyLnRleHRDb250ZW50ID0gJ1Rhc2sgRm9ybSc7XG4gICAgICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybUhlYWRlcik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBpbnB1dExpc3RbaV07XG4gICAgICAgICAgICAgICAgdGFza0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQodGFza0Zvcm1Db250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG4gICAgICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKG1haW5Cb2R5KTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5TZWN0aW9uKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldEhlYWRlcihuYW1lKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IG5hbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge2NyZWF0ZUZvcm0sXG4gICAgcmVtb3ZlRXZlcnl0aGluZyxcbiAgICByZW1vdmVNYWluQm9keUNvbnRlbnR9OyIsImNvbnN0IHtQcm9qZWN0fSA9IHJlcXVpcmUoJy4vcHJvamVjdC5qcycpO1xuY29uc3Qge1Rhc2t9ID0gcmVxdWlyZSgnLi9wcm9qZWN0LmpzJyk7XG5jb25zdCB7Y3JlYXRlRm9ybX0gPSByZXF1aXJlKCcuL2Zvcm1zLmpzJyk7XG5jb25zdCB7dGFrZVZhbHVlc0FuZENyZWF0ZVByb2plY3R9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7cmVtb3ZlTWFpbkJvZHlDb250ZW50fSA9IHJlcXVpcmUoJy4vbW9kdWxlcy5qcycpO1xuY29uc3Qge3Nob3dBZGRUYXNrVG9Qcm9qZWN0UGFnZX0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHt0YWtlVmFsdWVzQW5kQ3JlYXRlVGFza30gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHthZGRQcm9qZWN0VG9Qcm9qZWN0TGlzdH0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHtjaGFuZ2VPdmVybGF5fSA9IHJlcXVpcmUoJy4vbW9kdWxlcy5qcycpO1xuY29uc3Qge3ZpZXdUYXNrc30gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHtzZXRIZWFkZXJ9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7YWRkUHJvamVjdFRvU3RvcmFnZX0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHt1cGRhdGVQcm9qZWN0SW5TdG9yYWdlfSA9IHJlcXVpcmUoJy4vbW9kdWxlcy5qcycpO1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKTtcbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5cbigoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNJblN0b3JhZ2UgPSB7Li4ubG9jYWxTdG9yYWdlfTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvamVjdHNJblN0b3JhZ2UpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gICAgICAgIGFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3RMaXN0LCBwcm9qZWN0KTtcbiAgICB9XG59KSgpO1xuXG5cbmNvbnN0IG5leHRTZXZlbkRheXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dFNldmVuRGF5c0J0bicpO1xubmV4dFNldmVuRGF5c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgdmlld1Rhc2tzKHByb2plY3RMaXN0LCBcIk5leHQgU2V2ZW4gRGF5J3NcIilcbn0pXG5cbmNvbnN0IGFsbFRhc2tzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFRhc2tzQnRuJyk7XG5hbGxUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICB2aWV3VGFza3MocHJvamVjdExpc3QsICdBbGwnKTtcbn0pXG5cbmNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5QnRuJyk7XG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgdmlld1Rhc2tzKHByb2plY3RMaXN0LCBcIlRvZGF5J3NcIik7XG59KVxuXG5jb25zdCBpbXBvcnRhbnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0YW50QnRuJyk7XG5pbXBvcnRhbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIHZpZXdUYXNrcyhwcm9qZWN0TGlzdCwgJ0ltcG9ydGFudCcpO1xufSlcblxuXG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBjcmVhdGVGb3JtKCdwcm9qZWN0JywgJycpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ0bicpO1xuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoKTtcbiAgICAgICAgdGFrZVZhbHVlc0FuZENyZWF0ZVByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgIGFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3RMaXN0LCBuZXdQcm9qZWN0KTtcbiAgICAgICAgcmVtb3ZlTWFpbkJvZHlDb250ZW50KCk7XG4gICAgICAgIHNob3dBZGRUYXNrVG9Qcm9qZWN0UGFnZShuZXdQcm9qZWN0KTtcbiAgICAgICAgYWRkVGFza1RvUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgYWRkUHJvamVjdFRvU3RvcmFnZShuZXdQcm9qZWN0KTtcbiAgICB9KVxufSlcblxuZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdChwcm9qZWN0KXtcbiAgICBjb25zdCBhZGROZXdUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZE5ld1Rhc2tCdG4nKTtcbiAgICBhZGROZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY3JlYXRlRm9ybSgndGFzaycsICcnKTtcbiAgICAgICAgc2V0SGVhZGVyKHByb2plY3QubmFtZSk7XG4gICAgICAgIGNoYW5nZU92ZXJsYXkoJ2RhcmsnKTtcbiAgICAgICAgY29uc3QgY2xvc2VUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlVGFza0J0bicpO1xuICAgICAgICBjbG9zZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmVtb3ZlTWFpbkJvZHlDb250ZW50KCk7XG4gICAgICAgICAgICBzaG93QWRkVGFza1RvUHJvamVjdFBhZ2UocHJvamVjdCk7XG4gICAgICAgICAgICBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgY2hhbmdlT3ZlcmxheSgnbGlnaHQnKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKCk7XG4gICAgICAgICAgICB0YWtlVmFsdWVzQW5kQ3JlYXRlVGFzayhuZXdUYXNrKTtcbiAgICAgICAgICAgIHByb2plY3QudGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICAgICAgICAgIHJlbW92ZU1haW5Cb2R5Q29udGVudCgpO1xuICAgICAgICAgICAgc2hvd0FkZFRhc2tUb1Byb2plY3RQYWdlKHByb2plY3QpO1xuICAgICAgICAgICAgYWRkVGFza1RvUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIGNoYW5nZU92ZXJsYXkoJ2xpZ2h0Jyk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0VG9TdG9yYWdlKHByb2plY3QpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge2FkZFRhc2tUb1Byb2plY3R9O1xuXG5cblxuXG5cblxuXG5cbiIsImNvbnN0IHtjcmVhdGVGb3JtfSA9IHJlcXVpcmUoJy4vZm9ybXMuanMnKTtcbmNvbnN0IHtyZW1vdmVFdmVyeXRoaW5nfSA9IHJlcXVpcmUoJy4vZm9ybXMuanMnKTtcbmNvbnN0IHtyZW1vdmVNYWluQm9keUNvbnRlbnR9ID0gcmVxdWlyZSgnLi9mb3Jtcy5qcycpO1xuY29uc3Qge1Rhc2t9ID0gcmVxdWlyZSgnLi9wcm9qZWN0LmpzJyk7XG5cbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xub3ZlcmxheS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvU3RvcmFnZShwcm9qZWN0KXtcbiAgICBjb25zdCBwcm9qZWN0c0luU3RvcmFnZSA9IHsuLi5sb2NhbFN0b3JhZ2V9O1xuICAgIGxldCBmb3VuZEtleSA9IGZhbHNlO1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9qZWN0c0luU3RvcmFnZSkge1xuICAgICAgICBpZiAoa2V5ID09PSBwcm9qZWN0Lm5hbWUpIHtcbiAgICAgICAgICAgIGZvdW5kS2V5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3QubmFtZSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZvdW5kS2V5KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3QubmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdEluU3RvcmFnZShvbGRQcm9qZWN0LCBuZXdQcm9qZWN0KXtcbiAgICBjb25zdCBwcm9qZWN0c0luU3RvcmFnZSA9IHsuLi5sb2NhbFN0b3JhZ2V9O1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9qZWN0c0luU3RvcmFnZSl7XG4gICAgICAgIGlmIChrZXkgPT09IG9sZFByb2plY3QpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuZXdQcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3QpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdGFrZVZhbHVlc0FuZENyZWF0ZVByb2plY3QocHJvamVjdCl7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWVJbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3REZXRhaWxzSW5wdXQnKS52YWx1ZTtcbiAgICBwcm9qZWN0Lm5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICBwcm9qZWN0LmRldGFpbHMgPSBwcm9qZWN0RGV0YWlscztcbn1cblxuZnVuY3Rpb24gc2hvd0FkZFRhc2tUb1Byb2plY3RQYWdlKHByb2plY3Qpe1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Cb2R5Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza0xpc3RbaV07XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrRGl2Jyk7XG4gICAgICAgIHRhc2tEaXYudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gICAgICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld1Rhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBmaW5pc2hlZEFkZGluZ1Rhc2tzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkTmV3VGFza0J0bi5pZCA9ICdhZGROZXdUYXNrQnRuJztcbiAgICBhZGROZXdUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZE5ld1Rhc2tCdG4nKTtcbiAgICBhZGROZXdUYXNrQnRuLnRleHRDb250ZW50ID0gJysnXG4gICAgZmluaXNoZWRBZGRpbmdUYXNrc0J0bi5pZCA9ICdmaW5pc2hlZEFkZGluZ1Rhc2tzQnRuJztcbiAgICBmaW5pc2hlZEFkZGluZ1Rhc2tzQnRuLmNsYXNzTGlzdC5hZGQoJ3JlZ3VsYXJCdG4nKTtcbiAgICBmaW5pc2hlZEFkZGluZ1Rhc2tzQnRuLnRleHRDb250ZW50ID0gJ0RvbmUnO1xuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKGFkZE5ld1Rhc2tCdG4pO1xuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKGZpbmlzaGVkQWRkaW5nVGFza3NCdG4pO1xuICAgIGZpbmlzaGVkQWRkaW5nVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICByZW1vdmVFdmVyeXRoaW5nKCk7XG4gICAgICAgIGFkZFByb2plY3RUb1N0b3JhZ2UocHJvamVjdCk7XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiB0YWtlVmFsdWVzQW5kQ3JlYXRlVGFzayh0YXNrKXtcbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lSW5wdXQnKTtcbiAgICBjb25zdCB0YXNrRGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXRhaWxzSW5wdXQnKTtcbiAgICBjb25zdCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEYXRlSW5wdXQnKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUHJpb3JpdHlJbnB1dCcpO1xuICAgIHRhc2submFtZSA9IHRhc2tOYW1lSW5wdXQudmFsdWU7XG4gICAgdGFzay5kZXRhaWxzID0gdGFza0RldGFpbHNJbnB1dC52YWx1ZTtcbiAgICB0YXNrLmRhdGUgPSB0YXNrRGF0ZUlucHV0LnZhbHVlO1xuICAgIHRhc2sucHJpb3JpdHkgPSB0YXNrUHJpb3JpdHlJbnB1dC52YWx1ZTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvUHJvamVjdExpc3QocHJvamVjdExpc3QsIG5ld1Byb2plY3Qpe1xuICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgY29uc3QgcHJvamVjdFVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RVbCcpOyBcbiAgICBjb25zdCBwcm9qZWN0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHJlbW92ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGluaycpO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIHByb2plY3REaXYuaWQgPSBgJHtuZXdQcm9qZWN0Lm5hbWV9LXByb2plY3RgO1xuICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0Lm5hbWU7XG4gICAgcmVtb3ZlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICByZW1vdmVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZVByb2plY3RCdG4nKTtcbiAgICBwcm9qZWN0TGkuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgcHJvamVjdExpLmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3RCdG4pO1xuICAgIHByb2plY3RVbC5hcHBlbmRDaGlsZChwcm9qZWN0TGkpO1xuICAgIHByb2plY3RVbC5pbnNlcnRCZWZvcmUocHJvamVjdExpLCBwcm9qZWN0TGkucHJldmlvdXNFbGVtZW50U2libGluZyk7XG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZpZXdQcm9qZWN0KG5ld1Byb2plY3QpfVxuICAgICAgICApO1xuICAgIHJlbW92ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICByZW1vdmVQcm9qZWN0RnJvbVN0b3JhZ2UobmV3UHJvamVjdCk7XG4gICAgICAgIHJlbW92ZVByb2plY3RGcm9tUHJvamVjdExpc3QobmV3UHJvamVjdCk7XG4gICAgICAgIHJlbW92ZUV2ZXJ5dGhpbmcoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0RnJvbVByb2plY3RMaXN0KHByb2plY3Qpe1xuICAgIGNvbnN0IHByb2plY3RVbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VWwnKTtcbiAgICBmb3IgKGxldCBpID0gcHJvamVjdFVsLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGUgPSBwcm9qZWN0VWwuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF07XG4gICAgICAgIGlmIChlLnRleHRDb250ZW50ID09PSBwcm9qZWN0Lm5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gcHJvamVjdFVsLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGkucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RGcm9tU3RvcmFnZShwcm9qZWN0KXtcbiAgICBjb25zdCBwcm9qZWN0c0luU3RvcmFnZSA9IHsuLi5sb2NhbFN0b3JhZ2V9O1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9qZWN0c0luU3RvcmFnZSl7XG4gICAgICAgIGlmIChrZXkgPT09IHByb2plY3QubmFtZSl7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2aWV3UHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2xvc2VXaW5kb3dCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBhZGROZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gbmV3UHJvamVjdC5uYW1lO1xuICAgIHByb2plY3REZXRhaWxzLnRleHRDb250ZW50ID0gbmV3UHJvamVjdC5kZXRhaWxzO1xuICAgIG1haW5TZWN0aW9uLmlkID0gJ21haW5TZWN0aW9uJztcbiAgICBtYWluSGVhZGVyLmlkID0gJ21haW5IZWFkZXInO1xuICAgIG1haW5Cb2R5LmlkID0gJ21haW5Cb2R5JztcbiAgICBlZGl0UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0IFByb2plY3QnO1xuICAgIGVkaXRQcm9qZWN0QnRuLmlkID0gJ2VkaXRQcm9qZWN0QnRuJztcbiAgICBjbG9zZVdpbmRvd0J0bi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gICAgY2xvc2VXaW5kb3dCdG4uaWQgPSAnY2xvc2VXaW5kb3dCdG4nO1xuICAgIGFkZE5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgYWRkTmV3VGFza0J0bi5pZCA9ICdhZGROZXdUYXNrQnRuJztcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChjbG9zZVdpbmRvd0J0bik7XG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdERldGFpbHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3UHJvamVjdC50YXNrTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXdQcm9qZWN0LnRhc2tMaXN0W2ldO1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza0JvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza1RvcC5jbGFzc0xpc3QuYWRkKCd0YXNrVG9wJyk7XG4gICAgICAgIHRhc2tCb3R0b20uY2xhc3NMaXN0LmFkZCgndGFza0JvdHRvbScpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEaXYnKTtcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBgVGFzayBuYW1lOiAke3Rhc2submFtZX1gO1xuICAgICAgICB0YXNrRGV0YWlscy50ZXh0Q29udGVudCA9IGBUYXNrIGRldGFpbHM6ICR7dGFzay5kZXRhaWxzfWA7XG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gYFRhc2sgZGF0ZTogJHt0YXNrLmRhdGV9YDtcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFRhc2sgUHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX1gO1xuICAgICAgICBlZGl0VGFza0J0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgICAgZGVsZXRlVGFza0J0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICBlZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjcmVhdGVGb3JtKCd0YXNrJywgdGFzayk7XG4gICAgICAgICAgICBjbG9zZVRhc2tCdG4obmV3UHJvamVjdCk7XG4gICAgICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdG4nKTtcbiAgICAgICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHRha2VWYWx1ZXNBbmRDcmVhdGVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIHZpZXdQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2plY3RJblN0b3JhZ2UobmV3UHJvamVjdC5uYW1lLCBuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdQcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gbmV3UHJvamVjdC50YXNrTGlzdFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodC5uYW1lID09PSB0YXNrLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdC50YXNrTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVByb2plY3RJblN0b3JhZ2UobmV3UHJvamVjdC5uYW1lLCBuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2aWV3UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgdGFza1RvcC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2tCb3R0b20uYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICB0YXNrQm90dG9tLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgdGFza0JvdHRvbS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICB0YXNrVG9wLmFwcGVuZENoaWxkKGVkaXRUYXNrQnRuKTtcbiAgICAgICAgdGFza1RvcC5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVG9wKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrQm90dG9tKTtcbiAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgIHRhc2tCb3R0b20uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICB0YXNrQm90dG9tLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGFza1RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBleHBhbmRUYXNrKHRoaXMpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEJ0bik7XG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoYWRkTmV3VGFza0J0bik7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkJvZHkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG4gICAgY2xvc2VXaW5kb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICByZW1vdmVFdmVyeXRoaW5nKCk7XG4gICAgfSlcbiAgICBlZGl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNyZWF0ZUZvcm0oJ3Byb2plY3QnLCBuZXdQcm9qZWN0KTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnRuJyk7XG4gICAgICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3Qgb2xkUHJvamVjdCA9IG5ld1Byb2plY3QubmFtZTtcbiAgICAgICAgICAgIHRha2VWYWx1ZXNBbmRDcmVhdGVQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgdXBkYXRlUHJvamVjdExpc3QobmV3UHJvamVjdCwgb2xkUHJvamVjdCk7XG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0SW5TdG9yYWdlKG9sZFByb2plY3QsIG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgdmlld1Byb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBhZGROZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY3JlYXRlRm9ybSgndGFzaycsICcnKTtcbiAgICAgICAgc2V0SGVhZGVyKG5ld1Byb2plY3QubmFtZSk7XG4gICAgICAgIGNoYW5nZU92ZXJsYXkoJ2RhcmsnKTtcbiAgICAgICAgY2xvc2VUYXNrQnRuKG5ld1Byb2plY3QpO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdG4nKTtcbiAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soKTtcbiAgICAgICAgICAgIHRha2VWYWx1ZXNBbmRDcmVhdGVUYXNrKG5ld1Rhc2spO1xuICAgICAgICAgICAgbmV3UHJvamVjdC50YXNrTGlzdC5wdXNoKG5ld1Rhc2spO1xuICAgICAgICAgICAgdmlld1Byb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgICAgICBjaGFuZ2VPdmVybGF5KCdsaWdodCcpO1xuICAgICAgICAgICAgdXBkYXRlUHJvamVjdEluU3RvcmFnZShuZXdQcm9qZWN0Lm5hbWUsIG5ld1Byb2plY3QpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RMaXN0KG5ld1Byb2plY3QsIG9sZFByb2plY3Qpe1xuICAgIGNvbnN0IHByb2plY3RVbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VWwnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RVbC5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGUgPSBwcm9qZWN0VWwuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF07XG4gICAgICAgIGlmIChgJHtvbGRQcm9qZWN0fS1wcm9qZWN0YCA9PT0gZS5pZCkge1xuICAgICAgICAgICAgZS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QubmFtZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VUYXNrQnRuKHByb2plY3Qpe1xuICAgIGNvbnN0IGNsb3NlVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZVRhc2tCdG4nKTtcbiAgICBjbG9zZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjaGFuZ2VPdmVybGF5KCdsaWdodCcpO1xuICAgICAgICB2aWV3UHJvamVjdChwcm9qZWN0KTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VPdmVybGF5KHR5cGUpe1xuICAgIGlmICh0eXBlID09PSAnbGlnaHQnKSB7XG4gICAgICAgIG92ZXJsYXkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIG92ZXJsYXkuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHZpZXdUYXNrcyhwcm9qZWN0TGlzdCwgdHlwZSl7XG4gICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGNsb3NlV2luZG93QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluU2VjdGlvbi5pZCA9ICdtYWluU2VjdGlvbic7XG4gICAgbWFpbkhlYWRlci5pZCA9ICdtYWluSGVhZGVyJztcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJHt0eXBlfSBUYXNrc2A7XG4gICAgY2xvc2VXaW5kb3dCdG4uaWQgPSAnY2xvc2VXaW5kb3dCdG4nO1xuICAgIGNsb3NlV2luZG93QnRuLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgICBtYWluQm9keS5pZCA9ICdtYWluQm9keSc7XG4gICAgY2xvc2VXaW5kb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICByZW1vdmVFdmVyeXRoaW5nKCk7XG4gICAgfSlcbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRGl2KHRhc2ssIHByb2plY3Qpe1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza0JvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEaXYnKTtcbiAgICAgICAgdGFza1RvcC5jbGFzc0xpc3QuYWRkKCd0YXNrVG9wJyk7XG4gICAgICAgIHRhc2tCb3R0b20uY2xhc3NMaXN0LmFkZCgndGFza0JvdHRvbScpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGBQcm9qZWN0OiAke3Byb2plY3QubmFtZX1gO1xuICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IGBUYXNrOiAke3Rhc2submFtZX1gO1xuICAgICAgICB0YXNrRGV0YWlscy50ZXh0Q29udGVudCA9IGBUYXNrIERldGFpbHM6ICR7dGFzay5kZXRhaWxzfWA7XG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gYFRhc2sgRGF0ZTogJHt0YXNrLmRhdGV9YDtcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFRhc2sgUHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX1gO1xuICAgICAgICB0YXNrVG9wLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgdGFza1RvcC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2tCb3R0b20uYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICB0YXNrQm90dG9tLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgdGFza0JvdHRvbS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUb3ApO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tCb3R0b20pO1xuICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgICAgdGFza0JvdHRvbS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHRhc2tCb3R0b20uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0YXNrVG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGV4cGFuZFRhc2sodGhpcyk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TGlzdFtpXTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBwcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrTGlzdFt4XTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnQWxsJykge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2tEaXYodGFzaywgcHJvamVjdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVG9kYXknc1wiKXtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGRheSkgPCAxMCkge1xuICAgICAgICAgICAgICAgICAgICBkYXkgPSBgMCR7ZGF5fWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIobW9udGgpIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgbW9udGggPSBgMCR7bW9udGh9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgbGV0IHRvZGF5c0RhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmRhdGUgPT09IHRvZGF5c0RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGFza0Rpdih0YXNrLCBwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiTmV4dCBTZXZlbiBEYXknc1wiKSB7XG4gICAgICAgICAgICAgICAgLy9idWlsZCB0b2RheXMgZGF0ZSBpbiBVVENcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheXNEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheXNEYXkgPSB0b2RheXNEYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheXNNb250aCA9IHRvZGF5c0RhdGUuZ2V0TW9udGgoKSArMTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheXNZZWFyID0gdG9kYXlzRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpeGVkVG9kYXlzRGF0ZSA9IG5ldyBEYXRlKGAke3RvZGF5c1llYXJ9LyR7dG9kYXlzTW9udGh9LyR7dG9kYXlzRGF5fWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpeGVkVG9kYXlzRGF0ZVBsdXNTZXZlbkRheXMgPSBuZXcgRGF0ZShgJHt0b2RheXNZZWFyfS8ke3RvZGF5c01vbnRofS8ke3RvZGF5c0RheSArIDd9YCk7XG4gICAgICAgICAgICAgICAgLy9idWlsZCBpbnB1dCB2YWx1ZXMgZGF0ZSBpbiBVVENcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGVEYXkgPSB0YXNrRGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGVNb250aCA9IHRhc2tEYXRlLmdldFVUQ01vbnRoKCkgKzE7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGVZZWFyID0gdGFza0RhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXhlZFRhc2tEYXRlID0gbmV3IERhdGUoYCR7dGFza0RhdGVZZWFyfS8ke3Rhc2tEYXRlTW9udGh9LyR7dGFza0RhdGVEYXl9YCk7XG4gICAgICAgICAgICAgICAgaWYgKGZpeGVkVGFza0RhdGUgPj0gZml4ZWRUb2RheXNEYXRlICYmIGZpeGVkVGFza0RhdGUgPD0gZml4ZWRUb2RheXNEYXRlUGx1c1NldmVuRGF5cykge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUYXNrRGl2KHRhc2ssIHByb2plY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0ltcG9ydGFudCcpe1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnSGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUYXNrRGl2KHRhc2ssIHByb2plY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChjbG9zZVdpbmRvd0J0bik7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkJvZHkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFRhc2sodGFza1RvcCl7XG4gICAgY29uc3QgdGFza0JvdHRvbSA9IHRhc2tUb3AucGFyZW50Tm9kZS5jaGlsZHJlblsxXTtcbiAgICBpZiAodGFza0JvdHRvbS5zdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xuICAgICAgICB0YXNrQm90dG9tLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIHRhc2tCb3R0b20uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH0gZWxzZSBpZiAodGFza0JvdHRvbS5zdHlsZS52aXNpYmlsaXR5ID09PSAndmlzaWJsZScpIHtcbiAgICAgICAgdGFza0JvdHRvbS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHRhc2tCb3R0b20uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0SGVhZGVyKG5hbWUpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gbmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdGFrZVZhbHVlc0FuZENyZWF0ZVByb2plY3QsXG4gICAgcmVtb3ZlTWFpbkJvZHlDb250ZW50LFxuICAgIHJlbW92ZUV2ZXJ5dGhpbmcsXG4gICAgc2hvd0FkZFRhc2tUb1Byb2plY3RQYWdlLFxuICAgIHRha2VWYWx1ZXNBbmRDcmVhdGVUYXNrLFxuICAgIGFkZFByb2plY3RUb1Byb2plY3RMaXN0LFxuICAgIHZpZXdQcm9qZWN0LFxuICAgIGNoYW5nZU92ZXJsYXksXG4gICAgdmlld1Rhc2tzLFxuICAgIHNldEhlYWRlcixcbiAgICBhZGRQcm9qZWN0VG9TdG9yYWdlLFxuICAgIHVwZGF0ZVByb2plY3RJblN0b3JhZ2V9IiwiZnVuY3Rpb24gUHJvamVjdCgpIHtcbiAgICBjb25zdCB0aGlzUHJvamVjdCA9IHRoaXM7XG4gICAgdGhpcy5uYW1lID0gJyc7XG4gICAgdGhpcy5kZXRhaWxzID0gJyc7XG4gICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICAgIHRoaXMucmVtb3ZlVGFzayA9IGZ1bmN0aW9uKHRhc2spe1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXNQcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzUHJvamVjdC50YXNrTGlzdFtpXTtcbiAgICAgICAgICAgIGlmICh0Lm5hbWUgPT09IHRhc2submFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza0xpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBUYXNrKCkge1xuICAgIHRoaXMubmFtZSA9ICcnO1xuICAgIHRoaXMuZGV0YWlscyA9ICcnO1xuICAgIHRoaXMuZGF0ZSA9ICcnO1xuICAgIHRoaXMucHJpb3JpdHkgPSAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7UHJvamVjdCwgVGFza307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9