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
        const taskBtnDiv = document.createElement('div');
        const editTaskBtn = document.createElement('button');
        const deleteTaskBtn = document.createElement('button');
        taskTop.classList.add('taskTop');
        taskBottom.classList.add('taskBottom');
        taskDiv.classList.add('taskDiv');
        taskName.textContent = `${task.name}`;
        taskDetails.textContent = `${task.details}`;
        taskDate.textContent = `${task.date}`;
        taskPriority.textContent = `Task Priority: ${task.priority}`;
        taskBtnDiv.id = 'taskBtnDiv';
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
        taskBtnDiv.appendChild(editTaskBtn);
        taskBtnDiv.appendChild(deleteTaskBtn);
        taskTop.appendChild(taskBtnDiv);
        taskDiv.appendChild(taskTop);
        taskDiv.appendChild(taskBottom);
        mainBody.appendChild(taskDiv);
        taskBottom.style.visibility = 'hidden';
        taskBottom.style.position = 'absolute';
        taskTop.style.backgroundColor = 'var(--bg)';
        taskTop.addEventListener('click', function(){
            expandTask(this);
            changeTaskTopColor(this);
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

function changeTaskTopColor(e){
    if (e.style.backgroundColor === 'var(--bg)') {
        e.style.backgroundColor = 'white';
        e.children[1].children[0].style.backgroundColor = 'white';
        e.children[1].children[1].style.backgroundColor = 'white';
    } else if (e.style.backgroundColor === 'white') {
        e.style.backgroundColor = 'var(--bg)';
        e.children[1].children[0].style.backgroundColor = 'var(--bg)';
        e.children[1].children[1].style.backgroundColor = 'var(--bg)';
    }
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
        taskName.textContent = `${task.name}`;
        taskDetails.textContent = `${task.details}`;
        taskDate.textContent = `${task.date}`;
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
        taskTop.style.backgroundColor = 'var(--bg)';
        taskTop.addEventListener('click', function(){
            expandTask(this);
            changeTaskTopColor(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXdCLGlDQUFpQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCOzs7Ozs7VUN0QmxCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiByZW1vdmVNYWluQm9keUNvbnRlbnQoKXtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQm9keScpO1xuICAgIGZvciAobGV0IGkgPSBtYWluQm9keS5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBlID0gbWFpbkJvZHkuY2hpbGRyZW5baV07XG4gICAgICAgIGUucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVyeXRoaW5nKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgIGZvciAobGV0IGkgPSBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgICAgICBjb25zdCBlID0gY29udGFpbmVyLmNoaWxkcmVuW2ldO1xuICAgICAgICBlLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9ybSh3aGF0S2luZCwgZm9ybURhdGEpe1xuICAgIC8vcmVtb3ZlIG9sZCBmb3JtXG4gICAgKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gY29udGFpbmVyLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGUucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSgpO1xuICAgIC8vY3JlYXRlIERPTSBlbGVtZW50cyBmb3IgbmV3IGZvcm1cbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpblNlY3Rpb24uaWQgPSAnbWFpblNlY3Rpb24nO1xuICAgIG1haW5IZWFkZXIuaWQgPSAnbWFpbkhlYWRlcic7XG4gICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XG4gICAgbWFpbkJvZHkuaWQgPSAnbWFpbkJvZHknO1xuXG4gICAgaWYgKHdoYXRLaW5kID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlV2luZG93QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQuaWQgPSAncHJvamVjdE5hbWVJbnB1dCc7XG4gICAgICAgIHByb2plY3REZXRhaWxzSW5wdXQuaWQgPSAncHJvamVjdERldGFpbHNJbnB1dCc7XG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgUHJvamVjdCBOYW1lJztcbiAgICAgICAgcHJvamVjdERldGFpbHNJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBQcm9qZWN0IERldGFpbHMnO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLmlkID0gJ2FkZFByb2plY3RCdG4nO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBQcm9qZWN0JztcbiAgICAgICAgY2xvc2VXaW5kb3dCdG4udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuICAgICAgICBjbG9zZVdpbmRvd0J0bi5pZCA9ICdjbG9zZVdpbmRvd0J0bic7XG4gICAgICAgIGNoZWNrRGF0YSh3aGF0S2luZCwgZm9ybURhdGEsIFtwcm9qZWN0TmFtZUlucHV0LCBwcm9qZWN0RGV0YWlsc0lucHV0XSk7XG4gICAgICAgIGFwcGVuZEVsZW1lbnRzKGZhbHNlLCBbcHJvamVjdE5hbWVJbnB1dCwgcHJvamVjdERldGFpbHNJbnB1dF0sIGFkZFByb2plY3RCdG4sIGNsb3NlV2luZG93QnRuKVxuICAgIH0gZWxzZSBpZiAod2hhdEtpbmQgPT0gJ3Rhc2snKSB7XG4gICAgICAgIGNvbnN0IGNsb3NlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdGFza0RldGFpbHNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjb25zdCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29uc3QgbWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjbG9zZVRhc2tCdG4udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuICAgICAgICBjbG9zZVRhc2tCdG4uaWQgPSAnY2xvc2VUYXNrQnRuJztcbiAgICAgICAgdGFza0RhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsb3cpO1xuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChtZWRpdW0pO1xuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChoaWdoKTtcbiAgICAgICAgdGFza05hbWVJbnB1dC5pZCA9ICd0YXNrTmFtZUlucHV0JztcbiAgICAgICAgdGFza05hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBUYXNrIE5hbWUnO1xuICAgICAgICB0YXNrRGV0YWlsc0lucHV0LmlkID0gJ3Rhc2tEZXRhaWxzSW5wdXQnO1xuICAgICAgICB0YXNrRGV0YWlsc0lucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIFRhc2sgRGV0YWlscyc7XG4gICAgICAgIHRhc2tEYXRlSW5wdXQuaWQgPSAndGFza0RhdGVJbnB1dCc7XG4gICAgICAgIHRhc2tEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBEdWUnO1xuICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC5pZCA9ICd0YXNrUHJpb3JpdHlJbnB1dCc7XG4gICAgICAgIHRhc2tQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgUHJpb3JpdHknO1xuICAgICAgICBsb3cudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgbWVkaXVtLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgIGhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICAgIGFkZFRhc2tCdG4uaWQgPSAnYWRkVGFza0J0bic7XG4gICAgICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgICAgICBjaGVja0RhdGEod2hhdEtpbmQsIGZvcm1EYXRhLCBbdGFza05hbWVJbnB1dCwgdGFza0RldGFpbHNJbnB1dCwgdGFza0RhdGVJbnB1dCwgdGFza1ByaW9yaXR5SW5wdXRdKVxuICAgICAgICBhcHBlbmRFbGVtZW50cyh0cnVlLCBbdGFza05hbWVJbnB1dCwgdGFza0RldGFpbHNJbnB1dCwgdGFza0RhdGVMYWJlbCwgdGFza0RhdGVJbnB1dCwgdGFza1ByaW9yaXR5TGFiZWwsIHRhc2tQcmlvcml0eUlucHV0XSwgYWRkVGFza0J0biwgY2xvc2VUYXNrQnRuKVxuICAgIH1cbiAgICAvL2NoZWNrIGlmIHRoZXJlIGlzIGFueSBkYXRhXG4gICAgZnVuY3Rpb24gY2hlY2tEYXRhKHdoYXRLaW5kLCBmb3JtRGF0YSwgaW5wdXRMaXN0KXtcbiAgICAgICAgaWYgKGZvcm1EYXRhICE9PSAnJykge1xuICAgICAgICAgICAgaWYgKHdoYXRLaW5kID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpbnB1dExpc3RbMF0udmFsdWUgPSBmb3JtRGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgIGlucHV0TGlzdFsxXS52YWx1ZSA9IGZvcm1EYXRhLmRldGFpbHM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdoYXRLaW5kID09PSAndGFzaycpIHtcbiAgICAgICAgICAgICAgICBpbnB1dExpc3RbMF0udmFsdWUgPSBmb3JtRGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgIGlucHV0TGlzdFsxXS52YWx1ZSA9IGZvcm1EYXRhLmRldGFpbHM7XG4gICAgICAgICAgICAgICAgaW5wdXRMaXN0WzJdLnZhbHVlID0gZm9ybURhdGEuZGF0ZTtcbiAgICAgICAgICAgICAgICBpbnB1dExpc3RbM10udmFsdWUgPSBmb3JtRGF0YS5wcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2FwcGVuZCBuZXcgZWxlbWVudHMgdG8gRE9NXG4gICAgZnVuY3Rpb24gYXBwZW5kRWxlbWVudHMoaXNUYXNrLCBpbnB1dExpc3QsIGJ0biwgY2xvc2VCdG4pe1xuICAgICAgICBpZiAoIWlzVGFzaykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gaW5wdXRMaXN0W2ldO1xuICAgICAgICAgICAgICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHJlbW92ZUV2ZXJ5dGhpbmcoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgICAgICAgICAgdGFza0Zvcm1Db250YWluZXIuaWQgPSAndGFza0Zvcm1Db250YWluZXInO1xuICAgICAgICAgICAgY29uc3QgdGFza0Zvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgdGFza0Zvcm1IZWFkZXIudGV4dENvbnRlbnQgPSAnVGFzayBGb3JtJztcbiAgICAgICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtSGVhZGVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZSA9IGlucHV0TGlzdFtpXTtcbiAgICAgICAgICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZCh0YXNrRm9ybUNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcbiAgICAgICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkJvZHkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblNlY3Rpb24pO1xuICAgIH1cbn1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0ge2NyZWF0ZUZvcm0sXG4gICAgcmVtb3ZlRXZlcnl0aGluZyxcbiAgICByZW1vdmVNYWluQm9keUNvbnRlbnR9OyIsImNvbnN0IHtQcm9qZWN0fSA9IHJlcXVpcmUoJy4vcHJvamVjdC5qcycpO1xuY29uc3Qge1Rhc2t9ID0gcmVxdWlyZSgnLi9wcm9qZWN0LmpzJyk7XG5jb25zdCB7Y3JlYXRlRm9ybX0gPSByZXF1aXJlKCcuL2Zvcm1zLmpzJyk7XG5jb25zdCB7dGFrZVZhbHVlc0FuZENyZWF0ZVByb2plY3R9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7cmVtb3ZlTWFpbkJvZHlDb250ZW50fSA9IHJlcXVpcmUoJy4vbW9kdWxlcy5qcycpO1xuY29uc3Qge3Nob3dBZGRUYXNrVG9Qcm9qZWN0UGFnZX0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHt0YWtlVmFsdWVzQW5kQ3JlYXRlVGFza30gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHthZGRQcm9qZWN0VG9Qcm9qZWN0TGlzdH0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHtjaGFuZ2VPdmVybGF5fSA9IHJlcXVpcmUoJy4vbW9kdWxlcy5qcycpO1xuY29uc3Qge3ZpZXdUYXNrc30gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHtzZXRIZWFkZXJ9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7YWRkUHJvamVjdFRvU3RvcmFnZX0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHt1cGRhdGVQcm9qZWN0SW5TdG9yYWdlfSA9IHJlcXVpcmUoJy4vbW9kdWxlcy5qcycpO1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKTtcbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5cbigoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNJblN0b3JhZ2UgPSB7Li4ubG9jYWxTdG9yYWdlfTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvamVjdHNJblN0b3JhZ2UpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gICAgICAgIGFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3RMaXN0LCBwcm9qZWN0KTtcbiAgICB9XG59KSgpO1xuXG5cbmNvbnN0IG5leHRTZXZlbkRheXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dFNldmVuRGF5c0J0bicpO1xubmV4dFNldmVuRGF5c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgdmlld1Rhc2tzKHByb2plY3RMaXN0LCBcIk5leHQgU2V2ZW4gRGF5J3NcIilcbn0pXG5cbmNvbnN0IGFsbFRhc2tzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFRhc2tzQnRuJyk7XG5hbGxUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICB2aWV3VGFza3MocHJvamVjdExpc3QsICdBbGwnKTtcbn0pXG5cbmNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5QnRuJyk7XG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgdmlld1Rhc2tzKHByb2plY3RMaXN0LCBcIlRvZGF5J3NcIik7XG59KVxuXG5jb25zdCBpbXBvcnRhbnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0YW50QnRuJyk7XG5pbXBvcnRhbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIHZpZXdUYXNrcyhwcm9qZWN0TGlzdCwgJ0ltcG9ydGFudCcpO1xufSlcblxuXG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBjcmVhdGVGb3JtKCdwcm9qZWN0JywgJycpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ0bicpO1xuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoKTtcbiAgICAgICAgdGFrZVZhbHVlc0FuZENyZWF0ZVByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgIGFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3RMaXN0LCBuZXdQcm9qZWN0KTtcbiAgICAgICAgcmVtb3ZlTWFpbkJvZHlDb250ZW50KCk7XG4gICAgICAgIHNob3dBZGRUYXNrVG9Qcm9qZWN0UGFnZShuZXdQcm9qZWN0KTtcbiAgICAgICAgYWRkVGFza1RvUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgYWRkUHJvamVjdFRvU3RvcmFnZShuZXdQcm9qZWN0KTtcbiAgICB9KVxufSlcblxuZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdChwcm9qZWN0KXtcbiAgICBjb25zdCBhZGROZXdUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZE5ld1Rhc2tCdG4nKTtcbiAgICBhZGROZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY3JlYXRlRm9ybSgndGFzaycsICcnKTtcbiAgICAgICAgc2V0SGVhZGVyKHByb2plY3QubmFtZSk7XG4gICAgICAgIGNoYW5nZU92ZXJsYXkoJ2RhcmsnKTtcbiAgICAgICAgY29uc3QgY2xvc2VUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlVGFza0J0bicpO1xuICAgICAgICBjbG9zZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmVtb3ZlTWFpbkJvZHlDb250ZW50KCk7XG4gICAgICAgICAgICBzaG93QWRkVGFza1RvUHJvamVjdFBhZ2UocHJvamVjdCk7XG4gICAgICAgICAgICBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgY2hhbmdlT3ZlcmxheSgnbGlnaHQnKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKCk7XG4gICAgICAgICAgICB0YWtlVmFsdWVzQW5kQ3JlYXRlVGFzayhuZXdUYXNrKTtcbiAgICAgICAgICAgIHByb2plY3QudGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICAgICAgICAgIHJlbW92ZU1haW5Cb2R5Q29udGVudCgpO1xuICAgICAgICAgICAgc2hvd0FkZFRhc2tUb1Byb2plY3RQYWdlKHByb2plY3QpO1xuICAgICAgICAgICAgYWRkVGFza1RvUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIGNoYW5nZU92ZXJsYXkoJ2xpZ2h0Jyk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0VG9TdG9yYWdlKHByb2plY3QpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge2FkZFRhc2tUb1Byb2plY3R9O1xuXG5cblxuXG5cblxuXG5cbiIsImNvbnN0IHtjcmVhdGVGb3JtfSA9IHJlcXVpcmUoJy4vZm9ybXMuanMnKTtcbmNvbnN0IHtyZW1vdmVFdmVyeXRoaW5nfSA9IHJlcXVpcmUoJy4vZm9ybXMuanMnKTtcbmNvbnN0IHtyZW1vdmVNYWluQm9keUNvbnRlbnR9ID0gcmVxdWlyZSgnLi9mb3Jtcy5qcycpO1xuY29uc3Qge1Rhc2t9ID0gcmVxdWlyZSgnLi9wcm9qZWN0LmpzJyk7XG5cbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xub3ZlcmxheS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvU3RvcmFnZShwcm9qZWN0KXtcbiAgICBjb25zdCBwcm9qZWN0c0luU3RvcmFnZSA9IHsuLi5sb2NhbFN0b3JhZ2V9O1xuICAgIGxldCBmb3VuZEtleSA9IGZhbHNlO1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9qZWN0c0luU3RvcmFnZSkge1xuICAgICAgICBpZiAoa2V5ID09PSBwcm9qZWN0Lm5hbWUpIHtcbiAgICAgICAgICAgIGZvdW5kS2V5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3QubmFtZSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZvdW5kS2V5KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3QubmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdEluU3RvcmFnZShvbGRQcm9qZWN0LCBuZXdQcm9qZWN0KXtcbiAgICBjb25zdCBwcm9qZWN0c0luU3RvcmFnZSA9IHsuLi5sb2NhbFN0b3JhZ2V9O1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9qZWN0c0luU3RvcmFnZSl7XG4gICAgICAgIGlmIChrZXkgPT09IG9sZFByb2plY3QpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuZXdQcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3QpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdGFrZVZhbHVlc0FuZENyZWF0ZVByb2plY3QocHJvamVjdCl7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWVJbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3REZXRhaWxzSW5wdXQnKS52YWx1ZTtcbiAgICBwcm9qZWN0Lm5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICBwcm9qZWN0LmRldGFpbHMgPSBwcm9qZWN0RGV0YWlscztcbn1cblxuZnVuY3Rpb24gc2hvd0FkZFRhc2tUb1Byb2plY3RQYWdlKHByb2plY3Qpe1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Cb2R5Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza0xpc3RbaV07XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrRGl2Jyk7XG4gICAgICAgIHRhc2tEaXYudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gICAgICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld1Rhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBmaW5pc2hlZEFkZGluZ1Rhc2tzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkTmV3VGFza0J0bi5pZCA9ICdhZGROZXdUYXNrQnRuJztcbiAgICBhZGROZXdUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZE5ld1Rhc2tCdG4nKTtcbiAgICBhZGROZXdUYXNrQnRuLnRleHRDb250ZW50ID0gJysnXG4gICAgZmluaXNoZWRBZGRpbmdUYXNrc0J0bi5pZCA9ICdmaW5pc2hlZEFkZGluZ1Rhc2tzQnRuJztcbiAgICBmaW5pc2hlZEFkZGluZ1Rhc2tzQnRuLmNsYXNzTGlzdC5hZGQoJ3JlZ3VsYXJCdG4nKTtcbiAgICBmaW5pc2hlZEFkZGluZ1Rhc2tzQnRuLnRleHRDb250ZW50ID0gJ0RvbmUnO1xuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKGFkZE5ld1Rhc2tCdG4pO1xuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKGZpbmlzaGVkQWRkaW5nVGFza3NCdG4pO1xuICAgIGZpbmlzaGVkQWRkaW5nVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICByZW1vdmVFdmVyeXRoaW5nKCk7XG4gICAgICAgIGFkZFByb2plY3RUb1N0b3JhZ2UocHJvamVjdCk7XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiB0YWtlVmFsdWVzQW5kQ3JlYXRlVGFzayh0YXNrKXtcbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lSW5wdXQnKTtcbiAgICBjb25zdCB0YXNrRGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXRhaWxzSW5wdXQnKTtcbiAgICBjb25zdCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEYXRlSW5wdXQnKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUHJpb3JpdHlJbnB1dCcpO1xuICAgIHRhc2submFtZSA9IHRhc2tOYW1lSW5wdXQudmFsdWU7XG4gICAgdGFzay5kZXRhaWxzID0gdGFza0RldGFpbHNJbnB1dC52YWx1ZTtcbiAgICB0YXNrLmRhdGUgPSB0YXNrRGF0ZUlucHV0LnZhbHVlO1xuICAgIHRhc2sucHJpb3JpdHkgPSB0YXNrUHJpb3JpdHlJbnB1dC52YWx1ZTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvUHJvamVjdExpc3QocHJvamVjdExpc3QsIG5ld1Byb2plY3Qpe1xuICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgY29uc3QgcHJvamVjdFVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RVbCcpOyBcbiAgICBjb25zdCBwcm9qZWN0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHJlbW92ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGluaycpO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIHByb2plY3REaXYuaWQgPSBgJHtuZXdQcm9qZWN0Lm5hbWV9LXByb2plY3RgO1xuICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0Lm5hbWU7XG4gICAgcmVtb3ZlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICByZW1vdmVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZVByb2plY3RCdG4nKTtcbiAgICBwcm9qZWN0TGkuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgcHJvamVjdExpLmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3RCdG4pO1xuICAgIHByb2plY3RVbC5hcHBlbmRDaGlsZChwcm9qZWN0TGkpO1xuICAgIHByb2plY3RVbC5pbnNlcnRCZWZvcmUocHJvamVjdExpLCBwcm9qZWN0TGkucHJldmlvdXNFbGVtZW50U2libGluZyk7XG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZpZXdQcm9qZWN0KG5ld1Byb2plY3QpfVxuICAgICAgICApO1xuICAgIHJlbW92ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICByZW1vdmVQcm9qZWN0RnJvbVN0b3JhZ2UobmV3UHJvamVjdCk7XG4gICAgICAgIHJlbW92ZVByb2plY3RGcm9tUHJvamVjdExpc3QobmV3UHJvamVjdCk7XG4gICAgICAgIHJlbW92ZUV2ZXJ5dGhpbmcoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0RnJvbVByb2plY3RMaXN0KHByb2plY3Qpe1xuICAgIGNvbnN0IHByb2plY3RVbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VWwnKTtcbiAgICBmb3IgKGxldCBpID0gcHJvamVjdFVsLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGUgPSBwcm9qZWN0VWwuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF07XG4gICAgICAgIGlmIChlLnRleHRDb250ZW50ID09PSBwcm9qZWN0Lm5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gcHJvamVjdFVsLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGkucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RGcm9tU3RvcmFnZShwcm9qZWN0KXtcbiAgICBjb25zdCBwcm9qZWN0c0luU3RvcmFnZSA9IHsuLi5sb2NhbFN0b3JhZ2V9O1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9qZWN0c0luU3RvcmFnZSl7XG4gICAgICAgIGlmIChrZXkgPT09IHByb2plY3QubmFtZSl7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2aWV3UHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2xvc2VXaW5kb3dCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBhZGROZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gbmV3UHJvamVjdC5uYW1lO1xuICAgIHByb2plY3REZXRhaWxzLnRleHRDb250ZW50ID0gbmV3UHJvamVjdC5kZXRhaWxzO1xuICAgIG1haW5TZWN0aW9uLmlkID0gJ21haW5TZWN0aW9uJztcbiAgICBtYWluSGVhZGVyLmlkID0gJ21haW5IZWFkZXInO1xuICAgIG1haW5Cb2R5LmlkID0gJ21haW5Cb2R5JztcbiAgICBlZGl0UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0IFByb2plY3QnO1xuICAgIGVkaXRQcm9qZWN0QnRuLmlkID0gJ2VkaXRQcm9qZWN0QnRuJztcbiAgICBjbG9zZVdpbmRvd0J0bi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gICAgY2xvc2VXaW5kb3dCdG4uaWQgPSAnY2xvc2VXaW5kb3dCdG4nO1xuICAgIGFkZE5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgYWRkTmV3VGFza0J0bi5pZCA9ICdhZGROZXdUYXNrQnRuJztcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChjbG9zZVdpbmRvd0J0bik7XG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdERldGFpbHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3UHJvamVjdC50YXNrTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXdQcm9qZWN0LnRhc2tMaXN0W2ldO1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza0JvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRhc2tCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YXNrVG9wLmNsYXNzTGlzdC5hZGQoJ3Rhc2tUb3AnKTtcbiAgICAgICAgdGFza0JvdHRvbS5jbGFzc0xpc3QuYWRkKCd0YXNrQm90dG9tJyk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFza0RpdicpO1xuICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IGAke3Rhc2submFtZX1gO1xuICAgICAgICB0YXNrRGV0YWlscy50ZXh0Q29udGVudCA9IGAke3Rhc2suZGV0YWlsc31gO1xuICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IGAke3Rhc2suZGF0ZX1gO1xuICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgVGFzayBQcmlvcml0eTogJHt0YXNrLnByaW9yaXR5fWA7XG4gICAgICAgIHRhc2tCdG5EaXYuaWQgPSAndGFza0J0bkRpdic7XG4gICAgICAgIGVkaXRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgICAgICBkZWxldGVUYXNrQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgICAgIGVkaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNyZWF0ZUZvcm0oJ3Rhc2snLCB0YXNrKTtcbiAgICAgICAgICAgIGNsb3NlVGFza0J0bihuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J0bicpO1xuICAgICAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdGFrZVZhbHVlc0FuZENyZWF0ZVRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgdmlld1Byb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdEluU3RvcmFnZShuZXdQcm9qZWN0Lm5hbWUsIG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1Byb2plY3QudGFza0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBuZXdQcm9qZWN0LnRhc2tMaXN0W2ldO1xuICAgICAgICAgICAgICAgIGlmICh0Lm5hbWUgPT09IHRhc2submFtZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LnRhc2tMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdEluU3RvcmFnZShuZXdQcm9qZWN0Lm5hbWUsIG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZpZXdQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICB9KVxuICAgICAgICB0YXNrVG9wLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICAgICAgdGFza0JvdHRvbS5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscyk7XG4gICAgICAgIHRhc2tCb3R0b20uYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgICAgICB0YXNrQm90dG9tLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gICAgICAgIHRhc2tCdG5EaXYuYXBwZW5kQ2hpbGQoZWRpdFRhc2tCdG4pO1xuICAgICAgICB0YXNrQnRuRGl2LmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdG4pO1xuICAgICAgICB0YXNrVG9wLmFwcGVuZENoaWxkKHRhc2tCdG5EaXYpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUb3ApO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tCb3R0b20pO1xuICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgICAgdGFza0JvdHRvbS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHRhc2tCb3R0b20uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0YXNrVG9wLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1iZyknO1xuICAgICAgICB0YXNrVG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGV4cGFuZFRhc2sodGhpcyk7XG4gICAgICAgICAgICBjaGFuZ2VUYXNrVG9wQ29sb3IodGhpcyk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0QnRuKTtcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChhZGROZXdUYXNrQnRuKTtcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluQm9keSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5TZWN0aW9uKTtcbiAgICBjbG9zZVdpbmRvd0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHJlbW92ZUV2ZXJ5dGhpbmcoKTtcbiAgICB9KVxuICAgIGVkaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY3JlYXRlRm9ybSgncHJvamVjdCcsIG5ld1Byb2plY3QpO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdG4nKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBvbGRQcm9qZWN0ID0gbmV3UHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgdGFrZVZhbHVlc0FuZENyZWF0ZVByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdChuZXdQcm9qZWN0LCBvbGRQcm9qZWN0KTtcbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3RJblN0b3JhZ2Uob2xkUHJvamVjdCwgbmV3UHJvamVjdCk7XG4gICAgICAgICAgICB2aWV3UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGFkZE5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjcmVhdGVGb3JtKCd0YXNrJywgJycpO1xuICAgICAgICBzZXRIZWFkZXIobmV3UHJvamVjdC5uYW1lKTtcbiAgICAgICAgY2hhbmdlT3ZlcmxheSgnZGFyaycpO1xuICAgICAgICBjbG9zZVRhc2tCdG4obmV3UHJvamVjdCk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J0bicpO1xuICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzaygpO1xuICAgICAgICAgICAgdGFrZVZhbHVlc0FuZENyZWF0ZVRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LnRhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICB2aWV3UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIGNoYW5nZU92ZXJsYXkoJ2xpZ2h0Jyk7XG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0SW5TdG9yYWdlKG5ld1Byb2plY3QubmFtZSwgbmV3UHJvamVjdCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFza1RvcENvbG9yKGUpe1xuICAgIGlmIChlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3ZhcigtLWJnKScpIHtcbiAgICAgICAgZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICBlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgIGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICB9IGVsc2UgaWYgKGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAnd2hpdGUnKSB7XG4gICAgICAgIGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLWJnKSc7XG4gICAgICAgIGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLWJnKSc7XG4gICAgICAgIGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLWJnKSc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0TGlzdChuZXdQcm9qZWN0LCBvbGRQcm9qZWN0KXtcbiAgICBjb25zdCBwcm9qZWN0VWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFVsJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0VWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBlID0gcHJvamVjdFVsLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdO1xuICAgICAgICBpZiAoYCR7b2xkUHJvamVjdH0tcHJvamVjdGAgPT09IGUuaWQpIHtcbiAgICAgICAgICAgIGUudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0Lm5hbWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0J0bihwcm9qZWN0KXtcbiAgICBjb25zdCBjbG9zZVRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VUYXNrQnRuJyk7XG4gICAgY2xvc2VUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY2hhbmdlT3ZlcmxheSgnbGlnaHQnKTtcbiAgICAgICAgdmlld1Byb2plY3QocHJvamVjdCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2hhbmdlT3ZlcmxheSh0eXBlKXtcbiAgICBpZiAodHlwZSA9PT0gJ2xpZ2h0Jykge1xuICAgICAgICBvdmVybGF5LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkYXJrJykge1xuICAgICAgICBvdmVybGF5LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2aWV3VGFza3MocHJvamVjdExpc3QsIHR5cGUpe1xuICAgIHJlbW92ZUV2ZXJ5dGhpbmcoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBjbG9zZVdpbmRvd0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpblNlY3Rpb24uaWQgPSAnbWFpblNlY3Rpb24nO1xuICAgIG1haW5IZWFkZXIuaWQgPSAnbWFpbkhlYWRlcic7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7dHlwZX0gVGFza3NgO1xuICAgIGNsb3NlV2luZG93QnRuLmlkID0gJ2Nsb3NlV2luZG93QnRuJztcbiAgICBjbG9zZVdpbmRvd0J0bi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gICAgbWFpbkJvZHkuaWQgPSAnbWFpbkJvZHknO1xuICAgIGNsb3NlV2luZG93QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgIH0pXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0Rpdih0YXNrLCBwcm9qZWN0KXtcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0YXNrVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrRGl2Jyk7XG4gICAgICAgIHRhc2tUb3AuY2xhc3NMaXN0LmFkZCgndGFza1RvcCcpO1xuICAgICAgICB0YXNrQm90dG9tLmNsYXNzTGlzdC5hZGQoJ3Rhc2tCb3R0b20nKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgUHJvamVjdDogJHtwcm9qZWN0Lm5hbWV9YDtcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBgJHt0YXNrLm5hbWV9YDtcbiAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSBgJHt0YXNrLmRldGFpbHN9YDtcbiAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrLmRhdGV9YDtcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFRhc2sgUHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX1gO1xuICAgICAgICB0YXNrVG9wLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgdGFza1RvcC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2tCb3R0b20uYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICB0YXNrQm90dG9tLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgdGFza0JvdHRvbS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUb3ApO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tCb3R0b20pO1xuICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgICAgdGFza0JvdHRvbS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHRhc2tCb3R0b20uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0YXNrVG9wLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1iZyknO1xuICAgICAgICB0YXNrVG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGV4cGFuZFRhc2sodGhpcyk7XG4gICAgICAgICAgICBjaGFuZ2VUYXNrVG9wQ29sb3IodGhpcyk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TGlzdFtpXTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBwcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrTGlzdFt4XTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnQWxsJykge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2tEaXYodGFzaywgcHJvamVjdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVG9kYXknc1wiKXtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGRheSkgPCAxMCkge1xuICAgICAgICAgICAgICAgICAgICBkYXkgPSBgMCR7ZGF5fWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIobW9udGgpIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgbW9udGggPSBgMCR7bW9udGh9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgbGV0IHRvZGF5c0RhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmRhdGUgPT09IHRvZGF5c0RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGFza0Rpdih0YXNrLCBwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiTmV4dCBTZXZlbiBEYXknc1wiKSB7XG4gICAgICAgICAgICAgICAgLy9idWlsZCB0b2RheXMgZGF0ZSBpbiBVVENcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheXNEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheXNEYXkgPSB0b2RheXNEYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheXNNb250aCA9IHRvZGF5c0RhdGUuZ2V0TW9udGgoKSArMTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheXNZZWFyID0gdG9kYXlzRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpeGVkVG9kYXlzRGF0ZSA9IG5ldyBEYXRlKGAke3RvZGF5c1llYXJ9LyR7dG9kYXlzTW9udGh9LyR7dG9kYXlzRGF5fWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpeGVkVG9kYXlzRGF0ZVBsdXNTZXZlbkRheXMgPSBuZXcgRGF0ZShgJHt0b2RheXNZZWFyfS8ke3RvZGF5c01vbnRofS8ke3RvZGF5c0RheSArIDd9YCk7XG4gICAgICAgICAgICAgICAgLy9idWlsZCBpbnB1dCB2YWx1ZXMgZGF0ZSBpbiBVVENcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGVEYXkgPSB0YXNrRGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGVNb250aCA9IHRhc2tEYXRlLmdldFVUQ01vbnRoKCkgKzE7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGVZZWFyID0gdGFza0RhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXhlZFRhc2tEYXRlID0gbmV3IERhdGUoYCR7dGFza0RhdGVZZWFyfS8ke3Rhc2tEYXRlTW9udGh9LyR7dGFza0RhdGVEYXl9YCk7XG4gICAgICAgICAgICAgICAgaWYgKGZpeGVkVGFza0RhdGUgPj0gZml4ZWRUb2RheXNEYXRlICYmIGZpeGVkVGFza0RhdGUgPD0gZml4ZWRUb2RheXNEYXRlUGx1c1NldmVuRGF5cykge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUYXNrRGl2KHRhc2ssIHByb2plY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0ltcG9ydGFudCcpe1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnSGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUYXNrRGl2KHRhc2ssIHByb2plY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChjbG9zZVdpbmRvd0J0bik7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkJvZHkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFRhc2sodGFza1RvcCl7XG4gICAgY29uc3QgdGFza0JvdHRvbSA9IHRhc2tUb3AucGFyZW50Tm9kZS5jaGlsZHJlblsxXTtcbiAgICBpZiAodGFza0JvdHRvbS5zdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xuICAgICAgICB0YXNrQm90dG9tLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIHRhc2tCb3R0b20uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH0gZWxzZSBpZiAodGFza0JvdHRvbS5zdHlsZS52aXNpYmlsaXR5ID09PSAndmlzaWJsZScpIHtcbiAgICAgICAgdGFza0JvdHRvbS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHRhc2tCb3R0b20uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0SGVhZGVyKG5hbWUpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gbmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdGFrZVZhbHVlc0FuZENyZWF0ZVByb2plY3QsXG4gICAgcmVtb3ZlTWFpbkJvZHlDb250ZW50LFxuICAgIHJlbW92ZUV2ZXJ5dGhpbmcsXG4gICAgc2hvd0FkZFRhc2tUb1Byb2plY3RQYWdlLFxuICAgIHRha2VWYWx1ZXNBbmRDcmVhdGVUYXNrLFxuICAgIGFkZFByb2plY3RUb1Byb2plY3RMaXN0LFxuICAgIHZpZXdQcm9qZWN0LFxuICAgIGNoYW5nZU92ZXJsYXksXG4gICAgdmlld1Rhc2tzLFxuICAgIHNldEhlYWRlcixcbiAgICBhZGRQcm9qZWN0VG9TdG9yYWdlLFxuICAgIHVwZGF0ZVByb2plY3RJblN0b3JhZ2V9IiwiZnVuY3Rpb24gUHJvamVjdCgpIHtcbiAgICBjb25zdCB0aGlzUHJvamVjdCA9IHRoaXM7XG4gICAgdGhpcy5uYW1lID0gJyc7XG4gICAgdGhpcy5kZXRhaWxzID0gJyc7XG4gICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICAgIHRoaXMucmVtb3ZlVGFzayA9IGZ1bmN0aW9uKHRhc2spe1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXNQcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzUHJvamVjdC50YXNrTGlzdFtpXTtcbiAgICAgICAgICAgIGlmICh0Lm5hbWUgPT09IHRhc2submFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza0xpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBUYXNrKCkge1xuICAgIHRoaXMubmFtZSA9ICcnO1xuICAgIHRoaXMuZGV0YWlscyA9ICcnO1xuICAgIHRoaXMuZGF0ZSA9ICcnO1xuICAgIHRoaXMucHJpb3JpdHkgPSAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7UHJvamVjdCwgVGFza307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9