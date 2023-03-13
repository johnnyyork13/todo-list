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
        closeWindowBtn.textContent = 'X';
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
        closeTaskBtn.textContent = 'X';
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
        taskDateInput.valueAsDate = new Date();
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
const {validateInputs} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");

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
    viewTasks(projectList, "Next 7 Day's")
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
        const validation = validateInputs('project');
        if (validation) {
            const newProject = new Project();
            takeValuesAndCreateProject(newProject);
            addProjectToProjectList(projectList, newProject);
            removeMainBodyContent();
            showAddTaskToProjectPage(newProject);
            addTaskToProject(newProject);
            addProjectToStorage(newProject);
        }
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
            const validation = validateInputs('task');
            if (validation) {
                const newTask = new Task();
                takeValuesAndCreateTask(newTask);
                project.taskList.push(newTask);
                removeMainBodyContent();
                showAddTaskToProjectPage(project);
                addTaskToProject(project);
                changeOverlay('light');
                addProjectToStorage(project);
            }
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
    const mainHeader = document.getElementById('mainHeader');
    const closeWindowBtn = document.createElement('button');
    const header = document.getElementById('header');
    header.textContent = project.name;
    closeWindowBtn.id = 'closeWindowBtn';
    closeWindowBtn.textContent = 'X';
    mainHeader.appendChild(closeWindowBtn);
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
    closeWindowBtn.addEventListener('click', function(){
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
    closeWindowBtn.textContent = 'X';
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
            changeOverlay('dark');
            const addTaskBtn = document.getElementById('addTaskBtn');
            addTaskBtn.addEventListener('click', function(){
                const validation = validateInputs('task');
                if (validation) {
                    changeOverlay('light');
                    takeValuesAndCreateTask(task);
                    viewProject(newProject);
                    updateProjectInStorage(newProject.name, newProject);
                }
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
            const validation = validateInputs('project');
            if (validation) {
                const oldProject = newProject.name;
                takeValuesAndCreateProject(newProject);
                updateProjectList(newProject, oldProject);
                updateProjectInStorage(oldProject, newProject);
                viewProject(newProject);
            }
        })
    })
    addNewTaskBtn.addEventListener('click', function(){
        createForm('task', '');
        setHeader(newProject.name);
        changeOverlay('dark');
        closeTaskBtn(newProject);
        const addTaskBtn = document.getElementById('addTaskBtn');
        addTaskBtn.addEventListener('click', function(){
            const validation = validateInputs('task');
            if (validation) {
                console.log('validated');
                const newTask = new Task();
                takeValuesAndCreateTask(newTask);
                newProject.taskList.push(newTask);
                viewProject(newProject);
                changeOverlay('light');
                updateProjectInStorage(newProject.name, newProject);
            }
        })
    })
}

function changeTaskTopColor(e){
    if (e.style.backgroundColor === 'var(--bg)') {
        e.style.backgroundColor = 'white';
        if (e.children[1].children[0] !== undefined) {
            e.children[1].children[0].style.backgroundColor = 'white';
            e.children[1].children[1].style.backgroundColor = 'white';
        }
    } else if (e.style.backgroundColor === 'white') {
        e.style.backgroundColor = 'var(--bg)';
        if (e.children[1].children[0] !== undefined) {
            e.children[1].children[0].style.backgroundColor = 'var(--bg)';
            e.children[1].children[1].style.backgroundColor = 'var(--bg)';
        }
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
    closeWindowBtn.textContent = 'X';
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
            } else if (type === "Next 7 Day's") {
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

function validateInputs(type) {
    switch (type) {
        case 'project':
            const projectNameInput = document.getElementById('projectNameInput');
            const projectDetailsInput = document.getElementById('projectDetailsInput');
            const projectInputList = [projectNameInput, projectDetailsInput];
            for (let i = 0; i < projectInputList.length; i++) {
                let e = projectInputList[i];
                if (e.value === '') {
                    e.style.border = '2px solid red';
                    return false;
                } else {
                    e.style.border = '2px solid var(--second)';
                }
            }
            return true;
        case 'task':
            const taskNameInput = document.getElementById('taskNameInput');
            const taskDetailsInput = document.getElementById('taskDetailsInput');
            const taskInputList = [taskNameInput, taskDetailsInput];
            for (let i = 0; i < taskInputList.length; i++) {
                const t = taskInputList[i];
                if (t.value === '') {
                    t.style.border = '2px solid red';
                    return false;
                } else {
                    t.style.border = '2px solid var(--second)';
                }
            }
            return true;
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
    changeOverlay,
    viewTasks,
    setHeader,
    addProjectToStorage,
    updateProjectInStorage,
    validateInputs}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBCQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1ZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlDQUFpQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCOzs7Ozs7VUN0QmxCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiByZW1vdmVNYWluQm9keUNvbnRlbnQoKXtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQm9keScpO1xuICAgIGZvciAobGV0IGkgPSBtYWluQm9keS5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBlID0gbWFpbkJvZHkuY2hpbGRyZW5baV07XG4gICAgICAgIGUucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVyeXRoaW5nKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgIGZvciAobGV0IGkgPSBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgICAgICBjb25zdCBlID0gY29udGFpbmVyLmNoaWxkcmVuW2ldO1xuICAgICAgICBlLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9ybSh3aGF0S2luZCwgZm9ybURhdGEpe1xuICAgIC8vcmVtb3ZlIG9sZCBmb3JtXG4gICAgKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gY29udGFpbmVyLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGUucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSgpO1xuICAgIC8vY3JlYXRlIERPTSBlbGVtZW50cyBmb3IgbmV3IGZvcm1cbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpblNlY3Rpb24uaWQgPSAnbWFpblNlY3Rpb24nO1xuICAgIG1haW5IZWFkZXIuaWQgPSAnbWFpbkhlYWRlcic7XG4gICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XG4gICAgbWFpbkJvZHkuaWQgPSAnbWFpbkJvZHknO1xuXG4gICAgaWYgKHdoYXRLaW5kID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlV2luZG93QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQuaWQgPSAncHJvamVjdE5hbWVJbnB1dCc7XG4gICAgICAgIHByb2plY3REZXRhaWxzSW5wdXQuaWQgPSAncHJvamVjdERldGFpbHNJbnB1dCc7XG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgUHJvamVjdCBOYW1lJztcbiAgICAgICAgcHJvamVjdERldGFpbHNJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBQcm9qZWN0IERldGFpbHMnO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLmlkID0gJ2FkZFByb2plY3RCdG4nO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBQcm9qZWN0JztcbiAgICAgICAgY2xvc2VXaW5kb3dCdG4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIGNsb3NlV2luZG93QnRuLmlkID0gJ2Nsb3NlV2luZG93QnRuJztcbiAgICAgICAgY2hlY2tEYXRhKHdoYXRLaW5kLCBmb3JtRGF0YSwgW3Byb2plY3ROYW1lSW5wdXQsIHByb2plY3REZXRhaWxzSW5wdXRdKTtcbiAgICAgICAgYXBwZW5kRWxlbWVudHMoZmFsc2UsIFtwcm9qZWN0TmFtZUlucHV0LCBwcm9qZWN0RGV0YWlsc0lucHV0XSwgYWRkUHJvamVjdEJ0biwgY2xvc2VXaW5kb3dCdG4pXG4gICAgfSBlbHNlIGlmICh3aGF0S2luZCA9PSAndGFzaycpIHtcbiAgICAgICAgY29uc3QgY2xvc2VUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0YXNrRGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdGFza0RhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNsb3NlVGFza0J0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgY2xvc2VUYXNrQnRuLmlkID0gJ2Nsb3NlVGFza0J0bic7XG4gICAgICAgIHRhc2tEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobG93KTtcbiAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobWVkaXVtKTtcbiAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQuaWQgPSAndGFza05hbWVJbnB1dCc7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgVGFzayBOYW1lJztcbiAgICAgICAgdGFza0RldGFpbHNJbnB1dC5pZCA9ICd0YXNrRGV0YWlsc0lucHV0JztcbiAgICAgICAgdGFza0RldGFpbHNJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBUYXNrIERldGFpbHMnO1xuICAgICAgICB0YXNrRGF0ZUlucHV0LmlkID0gJ3Rhc2tEYXRlSW5wdXQnO1xuICAgICAgICB0YXNrRGF0ZUlucHV0LnZhbHVlQXNEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGFza0RhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIER1ZSc7XG4gICAgICAgIHRhc2tQcmlvcml0eUlucHV0LmlkID0gJ3Rhc2tQcmlvcml0eUlucHV0JztcbiAgICAgICAgdGFza1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBQcmlvcml0eSc7XG4gICAgICAgIGxvdy50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgICBtZWRpdW0udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgaGlnaC50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgYWRkVGFza0J0bi5pZCA9ICdhZGRUYXNrQnRuJztcbiAgICAgICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgICAgIGNoZWNrRGF0YSh3aGF0S2luZCwgZm9ybURhdGEsIFt0YXNrTmFtZUlucHV0LCB0YXNrRGV0YWlsc0lucHV0LCB0YXNrRGF0ZUlucHV0LCB0YXNrUHJpb3JpdHlJbnB1dF0pXG4gICAgICAgIGFwcGVuZEVsZW1lbnRzKHRydWUsIFt0YXNrTmFtZUlucHV0LCB0YXNrRGV0YWlsc0lucHV0LCB0YXNrRGF0ZUxhYmVsLCB0YXNrRGF0ZUlucHV0LCB0YXNrUHJpb3JpdHlMYWJlbCwgdGFza1ByaW9yaXR5SW5wdXRdLCBhZGRUYXNrQnRuLCBjbG9zZVRhc2tCdG4pXG4gICAgfVxuICAgIC8vY2hlY2sgaWYgdGhlcmUgaXMgYW55IGRhdGFcbiAgICBmdW5jdGlvbiBjaGVja0RhdGEod2hhdEtpbmQsIGZvcm1EYXRhLCBpbnB1dExpc3Qpe1xuICAgICAgICBpZiAoZm9ybURhdGEgIT09ICcnKSB7XG4gICAgICAgICAgICBpZiAod2hhdEtpbmQgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICAgICAgICAgIGlucHV0TGlzdFswXS52YWx1ZSA9IGZvcm1EYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgaW5wdXRMaXN0WzFdLnZhbHVlID0gZm9ybURhdGEuZGV0YWlscztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2hhdEtpbmQgPT09ICd0YXNrJykge1xuICAgICAgICAgICAgICAgIGlucHV0TGlzdFswXS52YWx1ZSA9IGZvcm1EYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgaW5wdXRMaXN0WzFdLnZhbHVlID0gZm9ybURhdGEuZGV0YWlscztcbiAgICAgICAgICAgICAgICBpbnB1dExpc3RbMl0udmFsdWUgPSBmb3JtRGF0YS5kYXRlO1xuICAgICAgICAgICAgICAgIGlucHV0TGlzdFszXS52YWx1ZSA9IGZvcm1EYXRhLnByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vYXBwZW5kIG5ldyBlbGVtZW50cyB0byBET01cbiAgICBmdW5jdGlvbiBhcHBlbmRFbGVtZW50cyhpc1Rhc2ssIGlucHV0TGlzdCwgYnRuLCBjbG9zZUJ0bil7XG4gICAgICAgIGlmICghaXNUYXNrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBpbnB1dExpc3RbaV07XG4gICAgICAgICAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5pZCA9ICd0YXNrRm9ybUNvbnRhaW5lcic7XG4gICAgICAgICAgICBjb25zdCB0YXNrRm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICB0YXNrRm9ybUhlYWRlci50ZXh0Q29udGVudCA9ICdUYXNrIEZvcm0nO1xuICAgICAgICAgICAgdGFza0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm1IZWFkZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gaW5wdXRMaXN0W2ldO1xuICAgICAgICAgICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFza0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKHRhc2tGb3JtQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuICAgICAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluQm9keSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG4gICAgfVxuXG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtjcmVhdGVGb3JtLFxuICAgIHJlbW92ZUV2ZXJ5dGhpbmcsXG4gICAgcmVtb3ZlTWFpbkJvZHlDb250ZW50fTsiLCJjb25zdCB7UHJvamVjdH0gPSByZXF1aXJlKCcuL3Byb2plY3QuanMnKTtcbmNvbnN0IHtUYXNrfSA9IHJlcXVpcmUoJy4vcHJvamVjdC5qcycpO1xuY29uc3Qge2NyZWF0ZUZvcm19ID0gcmVxdWlyZSgnLi9mb3Jtcy5qcycpO1xuY29uc3Qge3Rha2VWYWx1ZXNBbmRDcmVhdGVQcm9qZWN0fSA9IHJlcXVpcmUoJy4vbW9kdWxlcy5qcycpO1xuY29uc3Qge3JlbW92ZU1haW5Cb2R5Q29udGVudH0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHtzaG93QWRkVGFza1RvUHJvamVjdFBhZ2V9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7dGFrZVZhbHVlc0FuZENyZWF0ZVRhc2t9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7YWRkUHJvamVjdFRvUHJvamVjdExpc3R9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7Y2hhbmdlT3ZlcmxheX0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHt2aWV3VGFza3N9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7c2V0SGVhZGVyfSA9IHJlcXVpcmUoJy4vbW9kdWxlcy5qcycpO1xuY29uc3Qge2FkZFByb2plY3RUb1N0b3JhZ2V9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7dmFsaWRhdGVJbnB1dHN9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5cbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpO1xuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcblxuKCgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0luU3RvcmFnZSA9IHsuLi5sb2NhbFN0b3JhZ2V9O1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9qZWN0c0luU3RvcmFnZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgICAgICAgYWRkUHJvamVjdFRvUHJvamVjdExpc3QocHJvamVjdExpc3QsIHByb2plY3QpO1xuICAgIH1cbn0pKCk7XG5cblxuY29uc3QgbmV4dFNldmVuRGF5c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0U2V2ZW5EYXlzQnRuJyk7XG5uZXh0U2V2ZW5EYXlzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICB2aWV3VGFza3MocHJvamVjdExpc3QsIFwiTmV4dCA3IERheSdzXCIpXG59KVxuXG5jb25zdCBhbGxUYXNrc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxUYXNrc0J0bicpO1xuYWxsVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgdmlld1Rhc2tzKHByb2plY3RMaXN0LCAnQWxsJyk7XG59KVxuXG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheUJ0bicpO1xudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIHZpZXdUYXNrcyhwcm9qZWN0TGlzdCwgXCJUb2RheSdzXCIpO1xufSlcblxuY29uc3QgaW1wb3J0YW50QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydGFudEJ0bicpO1xuaW1wb3J0YW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICB2aWV3VGFza3MocHJvamVjdExpc3QsICdJbXBvcnRhbnQnKTtcbn0pXG5cbmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGNyZWF0ZUZvcm0oJ3Byb2plY3QnLCAnJyk7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnRuJyk7XG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB2YWxpZGF0ZUlucHV0cygncHJvamVjdCcpO1xuICAgICAgICBpZiAodmFsaWRhdGlvbikge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCk7XG4gICAgICAgICAgICB0YWtlVmFsdWVzQW5kQ3JlYXRlUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIGFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3RMaXN0LCBuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIHJlbW92ZU1haW5Cb2R5Q29udGVudCgpO1xuICAgICAgICAgICAgc2hvd0FkZFRhc2tUb1Byb2plY3RQYWdlKG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgYWRkVGFza1RvUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIGFkZFByb2plY3RUb1N0b3JhZ2UobmV3UHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9KVxufSlcblxuZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdChwcm9qZWN0KXtcbiAgICBjb25zdCBhZGROZXdUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZE5ld1Rhc2tCdG4nKTtcbiAgICBhZGROZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY3JlYXRlRm9ybSgndGFzaycsICcnKTtcbiAgICAgICAgc2V0SGVhZGVyKHByb2plY3QubmFtZSk7XG4gICAgICAgIGNoYW5nZU92ZXJsYXkoJ2RhcmsnKTtcbiAgICAgICAgY29uc3QgY2xvc2VUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlVGFza0J0bicpO1xuICAgICAgICBjbG9zZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmVtb3ZlTWFpbkJvZHlDb250ZW50KCk7XG4gICAgICAgICAgICBzaG93QWRkVGFza1RvUHJvamVjdFBhZ2UocHJvamVjdCk7XG4gICAgICAgICAgICBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgY2hhbmdlT3ZlcmxheSgnbGlnaHQnKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IHZhbGlkYXRlSW5wdXRzKCd0YXNrJyk7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzaygpO1xuICAgICAgICAgICAgICAgIHRha2VWYWx1ZXNBbmRDcmVhdGVUYXNrKG5ld1Rhc2spO1xuICAgICAgICAgICAgICAgIHByb2plY3QudGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICAgICAgICAgICAgICByZW1vdmVNYWluQm9keUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICBzaG93QWRkVGFza1RvUHJvamVjdFBhZ2UocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgYWRkVGFza1RvUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VPdmVybGF5KCdsaWdodCcpO1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RUb1N0b3JhZ2UocHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7YWRkVGFza1RvUHJvamVjdH07XG5cblxuXG5cblxuXG5cblxuIiwiY29uc3Qge2NyZWF0ZUZvcm19ID0gcmVxdWlyZSgnLi9mb3Jtcy5qcycpO1xuY29uc3Qge3JlbW92ZUV2ZXJ5dGhpbmd9ID0gcmVxdWlyZSgnLi9mb3Jtcy5qcycpO1xuY29uc3Qge3JlbW92ZU1haW5Cb2R5Q29udGVudH0gPSByZXF1aXJlKCcuL2Zvcm1zLmpzJyk7XG5jb25zdCB7VGFza30gPSByZXF1aXJlKCcuL3Byb2plY3QuanMnKTtcblxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG5vdmVybGF5LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9TdG9yYWdlKHByb2plY3Qpe1xuICAgIGNvbnN0IHByb2plY3RzSW5TdG9yYWdlID0gey4uLmxvY2FsU3RvcmFnZX07XG4gICAgbGV0IGZvdW5kS2V5ID0gZmFsc2U7XG4gICAgZm9yIChsZXQga2V5IGluIHByb2plY3RzSW5TdG9yYWdlKSB7XG4gICAgICAgIGlmIChrZXkgPT09IHByb2plY3QubmFtZSkge1xuICAgICAgICAgICAgZm91bmRLZXkgPSB0cnVlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdC5uYW1lKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3QubmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZm91bmRLZXkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdC5uYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0SW5TdG9yYWdlKG9sZFByb2plY3QsIG5ld1Byb2plY3Qpe1xuICAgIGNvbnN0IHByb2plY3RzSW5TdG9yYWdlID0gey4uLmxvY2FsU3RvcmFnZX07XG4gICAgZm9yIChsZXQga2V5IGluIHByb2plY3RzSW5TdG9yYWdlKXtcbiAgICAgICAgaWYgKGtleSA9PT0gb2xkUHJvamVjdCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld1Byb2plY3QubmFtZSwgSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0YWtlVmFsdWVzQW5kQ3JlYXRlUHJvamVjdChwcm9qZWN0KXtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZUlucHV0JykudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdERldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdERldGFpbHNJbnB1dCcpLnZhbHVlO1xuICAgIHByb2plY3QubmFtZSA9IHByb2plY3ROYW1lO1xuICAgIHByb2plY3QuZGV0YWlscyA9IHByb2plY3REZXRhaWxzO1xufVxuXG5mdW5jdGlvbiBzaG93QWRkVGFza1RvUHJvamVjdFBhZ2UocHJvamVjdCl7XG4gICAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkJvZHknKTtcbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5IZWFkZXInKTtcbiAgICBjb25zdCBjbG9zZVdpbmRvd0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgY2xvc2VXaW5kb3dCdG4uaWQgPSAnY2xvc2VXaW5kb3dCdG4nO1xuICAgIGNsb3NlV2luZG93QnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VXaW5kb3dCdG4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrTGlzdFtpXTtcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEaXYnKTtcbiAgICAgICAgdGFza0Rpdi50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkTmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGZpbmlzaGVkQWRkaW5nVGFza3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGROZXdUYXNrQnRuLmlkID0gJ2FkZE5ld1Rhc2tCdG4nO1xuICAgIGFkZE5ld1Rhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkTmV3VGFza0J0bicpO1xuICAgIGFkZE5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSAnKydcbiAgICBmaW5pc2hlZEFkZGluZ1Rhc2tzQnRuLmlkID0gJ2ZpbmlzaGVkQWRkaW5nVGFza3NCdG4nO1xuICAgIGZpbmlzaGVkQWRkaW5nVGFza3NCdG4uY2xhc3NMaXN0LmFkZCgncmVndWxhckJ0bicpO1xuICAgIGZpbmlzaGVkQWRkaW5nVGFza3NCdG4udGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoYWRkTmV3VGFza0J0bik7XG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoZmluaXNoZWRBZGRpbmdUYXNrc0J0bik7XG4gICAgZmluaXNoZWRBZGRpbmdUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHJlbW92ZUV2ZXJ5dGhpbmcoKTtcbiAgICAgICAgYWRkUHJvamVjdFRvU3RvcmFnZShwcm9qZWN0KTtcbiAgICB9KVxuICAgIGNsb3NlV2luZG93QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRha2VWYWx1ZXNBbmRDcmVhdGVUYXNrKHRhc2spe1xuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWVJbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tEZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0RldGFpbHNJbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0RhdGVJbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQcmlvcml0eUlucHV0Jyk7XG4gICAgdGFzay5uYW1lID0gdGFza05hbWVJbnB1dC52YWx1ZTtcbiAgICB0YXNrLmRldGFpbHMgPSB0YXNrRGV0YWlsc0lucHV0LnZhbHVlO1xuICAgIHRhc2suZGF0ZSA9IHRhc2tEYXRlSW5wdXQudmFsdWU7XG4gICAgdGFzay5wcmlvcml0eSA9IHRhc2tQcmlvcml0eUlucHV0LnZhbHVlO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9Qcm9qZWN0TGlzdChwcm9qZWN0TGlzdCwgbmV3UHJvamVjdCl7XG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICBjb25zdCBwcm9qZWN0VWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFVsJyk7IFxuICAgIGNvbnN0IHByb2plY3RMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaW5rJyk7XG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgcHJvamVjdERpdi5pZCA9IGAke25ld1Byb2plY3QubmFtZX0tcHJvamVjdGA7XG4gICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QubmFtZTtcbiAgICByZW1vdmVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIHJlbW92ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlUHJvamVjdEJ0bicpO1xuICAgIHByb2plY3RMaS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICBwcm9qZWN0TGkuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ0bik7XG4gICAgcHJvamVjdFVsLmFwcGVuZENoaWxkKHByb2plY3RMaSk7XG4gICAgcHJvamVjdFVsLmluc2VydEJlZm9yZShwcm9qZWN0TGksIHByb2plY3RMaS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKTtcbiAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgdmlld1Byb2plY3QobmV3UHJvamVjdCl9XG4gICAgICAgICk7XG4gICAgcmVtb3ZlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHJlbW92ZVByb2plY3RGcm9tU3RvcmFnZShuZXdQcm9qZWN0KTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdEZyb21Qcm9qZWN0TGlzdChuZXdQcm9qZWN0KTtcbiAgICAgICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RGcm9tUHJvamVjdExpc3QocHJvamVjdCl7XG4gICAgY29uc3QgcHJvamVjdFVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RVbCcpO1xuICAgIGZvciAobGV0IGkgPSBwcm9qZWN0VWwuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgZSA9IHByb2plY3RVbC5jaGlsZHJlbltpXS5jaGlsZHJlblswXTtcbiAgICAgICAgaWYgKGUudGV4dENvbnRlbnQgPT09IHByb2plY3QubmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBwcm9qZWN0VWwuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsaS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEZyb21TdG9yYWdlKHByb2plY3Qpe1xuICAgIGNvbnN0IHByb2plY3RzSW5TdG9yYWdlID0gey4uLmxvY2FsU3RvcmFnZX07XG4gICAgZm9yIChsZXQga2V5IGluIHByb2plY3RzSW5TdG9yYWdlKXtcbiAgICAgICAgaWYgKGtleSA9PT0gcHJvamVjdC5uYW1lKXtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHZpZXdQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICByZW1vdmVFdmVyeXRoaW5nKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgZWRpdFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjbG9zZVdpbmRvd0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGFkZE5ld1Rhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0Lm5hbWU7XG4gICAgcHJvamVjdERldGFpbHMudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0LmRldGFpbHM7XG4gICAgbWFpblNlY3Rpb24uaWQgPSAnbWFpblNlY3Rpb24nO1xuICAgIG1haW5IZWFkZXIuaWQgPSAnbWFpbkhlYWRlcic7XG4gICAgbWFpbkJvZHkuaWQgPSAnbWFpbkJvZHknO1xuICAgIGVkaXRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgZWRpdFByb2plY3RCdG4uaWQgPSAnZWRpdFByb2plY3RCdG4nO1xuICAgIGNsb3NlV2luZG93QnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGNsb3NlV2luZG93QnRuLmlkID0gJ2Nsb3NlV2luZG93QnRuJztcbiAgICBhZGROZXdUYXNrQnRuLnRleHRDb250ZW50ID0gJysnO1xuICAgIGFkZE5ld1Rhc2tCdG4uaWQgPSAnYWRkTmV3VGFza0J0bic7XG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VXaW5kb3dCdG4pO1xuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKHByb2plY3REZXRhaWxzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1Byb2plY3QudGFza0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCB0YXNrID0gbmV3UHJvamVjdC50YXNrTGlzdFtpXTtcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0YXNrVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza1RvcC5jbGFzc0xpc3QuYWRkKCd0YXNrVG9wJyk7XG4gICAgICAgIHRhc2tCb3R0b20uY2xhc3NMaXN0LmFkZCgndGFza0JvdHRvbScpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEaXYnKTtcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBgJHt0YXNrLm5hbWV9YDtcbiAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSBgJHt0YXNrLmRldGFpbHN9YDtcbiAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrLmRhdGV9YDtcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFRhc2sgUHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX1gO1xuICAgICAgICB0YXNrQnRuRGl2LmlkID0gJ3Rhc2tCdG5EaXYnO1xuICAgICAgICBlZGl0VGFza0J0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgICAgZGVsZXRlVGFza0J0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICBlZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjcmVhdGVGb3JtKCd0YXNrJywgdGFzayk7XG4gICAgICAgICAgICBjbG9zZVRhc2tCdG4obmV3UHJvamVjdCk7XG4gICAgICAgICAgICBjaGFuZ2VPdmVybGF5KCdkYXJrJyk7XG4gICAgICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdG4nKTtcbiAgICAgICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB2YWxpZGF0ZUlucHV0cygndGFzaycpO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZU92ZXJsYXkoJ2xpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRha2VWYWx1ZXNBbmRDcmVhdGVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB2aWV3UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdEluU3RvcmFnZShuZXdQcm9qZWN0Lm5hbWUsIG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdQcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gbmV3UHJvamVjdC50YXNrTGlzdFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodC5uYW1lID09PSB0YXNrLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdC50YXNrTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVByb2plY3RJblN0b3JhZ2UobmV3UHJvamVjdC5uYW1lLCBuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2aWV3UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgdGFza1RvcC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2tCb3R0b20uYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICB0YXNrQm90dG9tLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgdGFza0JvdHRvbS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICB0YXNrQnRuRGl2LmFwcGVuZENoaWxkKGVkaXRUYXNrQnRuKTtcbiAgICAgICAgdGFza0J0bkRpdi5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcbiAgICAgICAgdGFza1RvcC5hcHBlbmRDaGlsZCh0YXNrQnRuRGl2KTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVG9wKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrQm90dG9tKTtcbiAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgIHRhc2tCb3R0b20uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICB0YXNrQm90dG9tLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGFza1RvcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tYmcpJztcbiAgICAgICAgdGFza1RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBleHBhbmRUYXNrKHRoaXMpO1xuICAgICAgICAgICAgY2hhbmdlVGFza1RvcENvbG9yKHRoaXMpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEJ0bik7XG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoYWRkTmV3VGFza0J0bik7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkJvZHkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG4gICAgY2xvc2VXaW5kb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICByZW1vdmVFdmVyeXRoaW5nKCk7XG4gICAgfSlcbiAgICBlZGl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNyZWF0ZUZvcm0oJ3Byb2plY3QnLCBuZXdQcm9qZWN0KTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnRuJyk7XG4gICAgICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IHZhbGlkYXRlSW5wdXRzKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFByb2plY3QgPSBuZXdQcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICAgICAgdGFrZVZhbHVlc0FuZENyZWF0ZVByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdExpc3QobmV3UHJvamVjdCwgb2xkUHJvamVjdCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdEluU3RvcmFnZShvbGRQcm9qZWN0LCBuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB2aWV3UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGFkZE5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjcmVhdGVGb3JtKCd0YXNrJywgJycpO1xuICAgICAgICBzZXRIZWFkZXIobmV3UHJvamVjdC5uYW1lKTtcbiAgICAgICAgY2hhbmdlT3ZlcmxheSgnZGFyaycpO1xuICAgICAgICBjbG9zZVRhc2tCdG4obmV3UHJvamVjdCk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J0bicpO1xuICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB2YWxpZGF0ZUlucHV0cygndGFzaycpO1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdGVkJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKCk7XG4gICAgICAgICAgICAgICAgdGFrZVZhbHVlc0FuZENyZWF0ZVRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdC50YXNrTGlzdC5wdXNoKG5ld1Rhc2spO1xuICAgICAgICAgICAgICAgIHZpZXdQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgICAgIGNoYW5nZU92ZXJsYXkoJ2xpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdEluU3RvcmFnZShuZXdQcm9qZWN0Lm5hbWUsIG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRhc2tUb3BDb2xvcihlKXtcbiAgICBpZiAoZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd2YXIoLS1iZyknKSB7XG4gICAgICAgIGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgaWYgKGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgZS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3doaXRlJykge1xuICAgICAgICBlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1iZyknO1xuICAgICAgICBpZiAoZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1iZyknO1xuICAgICAgICAgICAgZS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tYmcpJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdExpc3QobmV3UHJvamVjdCwgb2xkUHJvamVjdCl7XG4gICAgY29uc3QgcHJvamVjdFVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RVbCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdFVsLmNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgZSA9IHByb2plY3RVbC5jaGlsZHJlbltpXS5jaGlsZHJlblswXTtcbiAgICAgICAgaWYgKGAke29sZFByb2plY3R9LXByb2plY3RgID09PSBlLmlkKSB7XG4gICAgICAgICAgICBlLnRleHRDb250ZW50ID0gbmV3UHJvamVjdC5uYW1lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZVRhc2tCdG4ocHJvamVjdCl7XG4gICAgY29uc3QgY2xvc2VUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlVGFza0J0bicpO1xuICAgIGNsb3NlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNoYW5nZU92ZXJsYXkoJ2xpZ2h0Jyk7XG4gICAgICAgIHZpZXdQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNoYW5nZU92ZXJsYXkodHlwZSl7XG4gICAgaWYgKHR5cGUgPT09ICdsaWdodCcpIHtcbiAgICAgICAgb3ZlcmxheS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGFyaycpIHtcbiAgICAgICAgb3ZlcmxheS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdmlld1Rhc2tzKHByb2plY3RMaXN0LCB0eXBlKXtcbiAgICByZW1vdmVFdmVyeXRoaW5nKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgY2xvc2VXaW5kb3dCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5TZWN0aW9uLmlkID0gJ21haW5TZWN0aW9uJztcbiAgICBtYWluSGVhZGVyLmlkID0gJ21haW5IZWFkZXInO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGAke3R5cGV9IFRhc2tzYDtcbiAgICBjbG9zZVdpbmRvd0J0bi5pZCA9ICdjbG9zZVdpbmRvd0J0bic7XG4gICAgY2xvc2VXaW5kb3dCdG4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgbWFpbkJvZHkuaWQgPSAnbWFpbkJvZHknO1xuICAgIGNsb3NlV2luZG93QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgIH0pXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0Rpdih0YXNrLCBwcm9qZWN0KXtcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0YXNrVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrRGl2Jyk7XG4gICAgICAgIHRhc2tUb3AuY2xhc3NMaXN0LmFkZCgndGFza1RvcCcpO1xuICAgICAgICB0YXNrQm90dG9tLmNsYXNzTGlzdC5hZGQoJ3Rhc2tCb3R0b20nKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgUHJvamVjdDogJHtwcm9qZWN0Lm5hbWV9YDtcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBgJHt0YXNrLm5hbWV9YDtcbiAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSBgJHt0YXNrLmRldGFpbHN9YDtcbiAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrLmRhdGV9YDtcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFRhc2sgUHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX1gO1xuICAgICAgICB0YXNrVG9wLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgdGFza1RvcC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2tCb3R0b20uYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICB0YXNrQm90dG9tLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgdGFza0JvdHRvbS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUb3ApO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tCb3R0b20pO1xuICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgICAgdGFza0JvdHRvbS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHRhc2tCb3R0b20uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0YXNrVG9wLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1iZyknO1xuICAgICAgICB0YXNrVG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGV4cGFuZFRhc2sodGhpcyk7XG4gICAgICAgICAgICBjaGFuZ2VUYXNrVG9wQ29sb3IodGhpcyk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TGlzdFtpXTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBwcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrTGlzdFt4XTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnQWxsJykge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2tEaXYodGFzaywgcHJvamVjdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVG9kYXknc1wiKXtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGRheSkgPCAxMCkge1xuICAgICAgICAgICAgICAgICAgICBkYXkgPSBgMCR7ZGF5fWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIobW9udGgpIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgbW9udGggPSBgMCR7bW9udGh9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgbGV0IHRvZGF5c0RhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmRhdGUgPT09IHRvZGF5c0RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGFza0Rpdih0YXNrLCBwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiTmV4dCA3IERheSdzXCIpIHtcbiAgICAgICAgICAgICAgICAvL2J1aWxkIHRvZGF5cyBkYXRlIGluIFVUQ1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5c0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5c0RheSA9IHRvZGF5c0RhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5c01vbnRoID0gdG9kYXlzRGF0ZS5nZXRNb250aCgpICsxO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5c1llYXIgPSB0b2RheXNEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZml4ZWRUb2RheXNEYXRlID0gbmV3IERhdGUoYCR7dG9kYXlzWWVhcn0vJHt0b2RheXNNb250aH0vJHt0b2RheXNEYXl9YCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZml4ZWRUb2RheXNEYXRlUGx1c1NldmVuRGF5cyA9IG5ldyBEYXRlKGAke3RvZGF5c1llYXJ9LyR7dG9kYXlzTW9udGh9LyR7dG9kYXlzRGF5ICsgN31gKTtcbiAgICAgICAgICAgICAgICAvL2J1aWxkIGlucHV0IHZhbHVlcyBkYXRlIGluIFVUQ1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kYXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF0ZURheSA9IHRhc2tEYXRlLmdldFVUQ0RhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF0ZU1vbnRoID0gdGFza0RhdGUuZ2V0VVRDTW9udGgoKSArMTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF0ZVllYXIgPSB0YXNrRGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpeGVkVGFza0RhdGUgPSBuZXcgRGF0ZShgJHt0YXNrRGF0ZVllYXJ9LyR7dGFza0RhdGVNb250aH0vJHt0YXNrRGF0ZURheX1gKTtcbiAgICAgICAgICAgICAgICBpZiAoZml4ZWRUYXNrRGF0ZSA+PSBmaXhlZFRvZGF5c0RhdGUgJiYgZml4ZWRUYXNrRGF0ZSA8PSBmaXhlZFRvZGF5c0RhdGVQbHVzU2V2ZW5EYXlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2tEaXYodGFzaywgcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnSW1wb3J0YW50Jyl7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdIaWdoJyl7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2tEaXYodGFzaywgcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlV2luZG93QnRuKTtcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluQm9keSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5TZWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kVGFzayh0YXNrVG9wKXtcbiAgICBjb25zdCB0YXNrQm90dG9tID0gdGFza1RvcC5wYXJlbnROb2RlLmNoaWxkcmVuWzFdO1xuICAgIGlmICh0YXNrQm90dG9tLnN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgICAgIHRhc2tCb3R0b20uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgdGFza0JvdHRvbS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgfSBlbHNlIGlmICh0YXNrQm90dG9tLnN0eWxlLnZpc2liaWxpdHkgPT09ICd2aXNpYmxlJykge1xuICAgICAgICB0YXNrQm90dG9tLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgdGFza0JvdHRvbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRIZWFkZXIobmFtZSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBuYW1lO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0cyh0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZUlucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3REZXRhaWxzSW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbnB1dExpc3QgPSBbcHJvamVjdE5hbWVJbnB1dCwgcHJvamVjdERldGFpbHNJbnB1dF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RJbnB1dExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZSA9IHByb2plY3RJbnB1dExpc3RbaV07XG4gICAgICAgICAgICAgICAgaWYgKGUudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCByZWQnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkIHZhcigtLXNlY29uZCknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlICd0YXNrJzpcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWVJbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgdGFza0RldGFpbHNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGV0YWlsc0lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrSW5wdXRMaXN0ID0gW3Rhc2tOYW1lSW5wdXQsIHRhc2tEZXRhaWxzSW5wdXRdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrSW5wdXRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHRhc2tJbnB1dExpc3RbaV07XG4gICAgICAgICAgICAgICAgaWYgKHQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCByZWQnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdC5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkIHZhcigtLXNlY29uZCknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB0YWtlVmFsdWVzQW5kQ3JlYXRlUHJvamVjdCxcbiAgICByZW1vdmVNYWluQm9keUNvbnRlbnQsXG4gICAgcmVtb3ZlRXZlcnl0aGluZyxcbiAgICBzaG93QWRkVGFza1RvUHJvamVjdFBhZ2UsXG4gICAgdGFrZVZhbHVlc0FuZENyZWF0ZVRhc2ssXG4gICAgYWRkUHJvamVjdFRvUHJvamVjdExpc3QsXG4gICAgdmlld1Byb2plY3QsXG4gICAgY2hhbmdlT3ZlcmxheSxcbiAgICB2aWV3VGFza3MsXG4gICAgc2V0SGVhZGVyLFxuICAgIGFkZFByb2plY3RUb1N0b3JhZ2UsXG4gICAgdXBkYXRlUHJvamVjdEluU3RvcmFnZSxcbiAgICB2YWxpZGF0ZUlucHV0c30iLCJmdW5jdGlvbiBQcm9qZWN0KCkge1xuICAgIGNvbnN0IHRoaXNQcm9qZWN0ID0gdGhpcztcbiAgICB0aGlzLm5hbWUgPSAnJztcbiAgICB0aGlzLmRldGFpbHMgPSAnJztcbiAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgdGhpcy5yZW1vdmVUYXNrID0gZnVuY3Rpb24odGFzayl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpc1Byb2plY3QudGFza0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXNQcm9qZWN0LnRhc2tMaXN0W2ldO1xuICAgICAgICAgICAgaWYgKHQubmFtZSA9PT0gdGFzay5uYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIFRhc2soKSB7XG4gICAgdGhpcy5uYW1lID0gJyc7XG4gICAgdGhpcy5kZXRhaWxzID0gJyc7XG4gICAgdGhpcy5kYXRlID0gJyc7XG4gICAgdGhpcy5wcmlvcml0eSA9ICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtQcm9qZWN0LCBUYXNrfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=