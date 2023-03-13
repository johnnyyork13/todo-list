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
        projectNameInput.maxLength = '25';
        projectDetailsInput.id = 'projectDetailsInput';
        projectDetailsInput.maxLength = '80';
        projectNameInput.placeholder = 'Enter Project Name (Max Length - 25 Characters)';
        projectDetailsInput.placeholder = 'Enter Project Details (Max Length - 80 Characters)';
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
        checkData(whatKind, formData, [taskNameInput, taskDetailsInput, taskDateInput, taskPriorityInput]);
        appendElements(true, [taskNameInput, taskDetailsInput, taskDateLabel, taskDateInput, taskPriorityLabel, taskPriorityInput], addTaskBtn, closeTaskBtn);
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
const {updateProjectList} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {updateProjectInStorage} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {viewProject} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {createExportForm} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {populateExportForm} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {exportDataAsExcel} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");
const {removeEverything} = __webpack_require__(/*! ./modules.js */ "./src/modules.js");

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

//export data
const exportBtn = document.getElementById('exportBtn');
exportBtn.addEventListener('click', function(){
    changeOverlay('dark');
    createExportForm();
    populateExportForm(projectList);
    const exportFormBtn = document.getElementById('exportFormBtn');
    exportFormBtn.addEventListener('click', function(){
        const exportValues = exportDataAsExcel(projectList);
        const objUrl = exportValues[0];
        const fileName = exportValues[1];
        exportFormBtn.setAttribute('href', objUrl);
        exportFormBtn.setAttribute('download', `${fileName}.xls`);
        removeEverything();
        changeOverlay('light');
    })
})

addProject.addEventListener('click', function(){
    createForm('project', '');
    const addProjectBtn = document.getElementById('addProjectBtn');
    addProjectBtn.addEventListener('click', function(){
        const validation = validateInputs('project');
        if (validation) {
            const newProject = new Project();
            takeValuesAndCreateProject(newProject);
            addProjectToStorage(newProject);
            addProjectToProjectList(projectList, newProject);
            viewProject(newProject);

            /*
            takeValuesAndCreateProject(newProject);
            addProjectToProjectList(projectList, newProject);
            removeMainBodyContent();
            showAddTaskToProjectPage(newProject);
            addTaskToProject(newProject);
            addProjectToStorage(newProject);
            */

            /*
            updateProjectInStorage(newProject, newProject);
            updateProjectList(newProject, newProject);
            */
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
    const addNewTaskBtn = document.createElement('div');
    header.textContent = newProject.name;
    projectDetails.textContent = newProject.details;
    mainSection.id = 'mainSection';
    mainHeader.id = 'mainHeader';
    mainBody.id = 'mainBody';
    editProjectBtn.textContent = 'Edit Project';
    editProjectBtn.id = 'editProjectBtn';
    closeWindowBtn.textContent = 'X';
    closeWindowBtn.id = 'closeWindowBtn';
    addNewTaskBtn.innerHTML = '<p class="addNewTaskP">Add Task</p><p class="addNewTaskPlus">+</p>';
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
            e.id = `${newProject.name}-project`;
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

function createExportForm() {
    removeEverything();
    const container = document.getElementById('container');
    const exportFormHeader = document.createElement('h2');
    const closeExportFormBtn = document.createElement('button');
    const exportFormDiv = document.createElement('div');
    const fileNameLabel = document.createElement('label');
    const fileNameInput = document.createElement('input');
    const projectDropLabel = document.createElement('label');
    const projectDrop = document.createElement('select');
    const allProjectsOption = document.createElement('option');
    const taskDropLabel = document.createElement('label');
    const taskDrop = document.createElement('select');
    const allTasksOption = document.createElement('option');
    const exportFormBtn = document.createElement('a');
    exportFormHeader.textContent = 'Export Data';
    closeExportFormBtn.id = 'closeExportFormBtn';
    closeExportFormBtn.textContent = 'X';
    exportFormDiv.id = 'exportFormDiv';
    fileNameLabel.classList.add('exportFormLabel');
    fileNameLabel.textContent = 'File Name';
    fileNameInput.classList.add('exportFormDrop');
    fileNameInput.id = 'fileNameInput';
    fileNameInput.placeholder = 'Enter File Name';
    projectDropLabel.classList.add('exportFormLabel');
    projectDropLabel.textContent = 'Select Project';
    projectDrop.id = 'projectDrop';
    projectDrop.classList.add('exportFormDrop');
    allProjectsOption.textContent = 'All Projects';
    taskDropLabel.classList.add('exportFormLabel');
    taskDropLabel.textContent = 'Select Task';
    taskDrop.id = 'taskDrop';
    taskDrop.classList.add('exportFormDrop');
    allTasksOption.text = 'All Tasks';
    exportFormBtn.id = 'exportFormBtn';
    exportFormBtn.textContent = 'Export Data';
    exportFormDiv.appendChild(exportFormHeader);
    exportFormDiv.appendChild(closeExportFormBtn);
    exportFormDiv.appendChild(fileNameLabel);
    exportFormDiv.appendChild(fileNameInput);
    exportFormDiv.appendChild(projectDropLabel);
    projectDrop.appendChild(allProjectsOption);
    exportFormDiv.appendChild(projectDrop);
    exportFormDiv.appendChild(taskDropLabel);
    taskDrop.appendChild(allTasksOption);
    exportFormDiv.appendChild(taskDrop);
    exportFormDiv.appendChild(exportFormBtn);
    container.appendChild(exportFormDiv);
    closeExportFormBtn.addEventListener('click', function(){
        changeOverlay('light');
        removeEverything();
    })

}

function populateExportForm(projectList){
    const projectDrop = document.getElementById('projectDrop');
    const taskDrop = document.getElementById('taskDrop');

    for (let i = 0; i < projectList.length; i++) {
        const project = projectList[i];
        const projectOption = document.createElement('option');
        projectOption.textContent = project.name;
        projectDrop.appendChild(projectOption);
        for (let x = 0; x < project.taskList.length; x++) {
            const task = project.taskList[x];
            const taskOption = document.createElement('option');
            taskOption.textContent = task.name;
            taskDrop.appendChild(taskOption);
        }
    }

    projectDrop.addEventListener('change', function() {
        updateTaskDropDownValues(projectDrop, taskDrop, projectList);
    })
}

function exportDataAsExcel(projectList){
    const fileNameInput = document.getElementById('fileNameInput');
    const projectDrop = document.getElementById('projectDrop');
    const taskDrop = document.getElementById('taskDrop');
    const excelArray = [['Project Name', 'Project Details', 'Task Name', 'Task Details', 'Task Due', 'Task Priority']];
    let newRow = [];
    if (projectDrop.value === 'All Projects' && taskDrop.value === 'All Tasks') {
        for (let i = 0; i < projectList.length; i++) {
            const project = projectList[i];
            for (let x = 0; x < project.taskList.length; x++) {
                const task = project.taskList[x];
                newRow = [project.name, project.details, task.name, task.details, task.date, task.priority];
                excelArray.push(newRow);
            }
        }
    } else {
        for (let i = 0; i < projectList.length; i++) {
            const project = projectList[i];
            if (project.name === projectDrop.value && taskDrop.value === 'All Tasks') {
                for (let x = 0; x < project.taskList.length; x++) {
                    const task = project.taskList[x];
                    newRow = [project.name, project.details, task.name, task.details, task.date, task.priority];
                    excelArray.push(newRow);
                }
            } else if (project.name === projectDrop.value && taskDrop.value !== 'All Tasks') {
                for (let x = 0; x < project.taskList.length; x++) {
                    const task = project.taskList[x];
                    if (task.name === taskDrop.value) {
                        newRow = [project.name, project.details, task.name, task.details, task.date, task.priority];
                        excelArray.push(newRow);
                    }
                }
            }
        }
    }


    let refinedArray = '';
    excelArray.forEach((e) => {
        refinedArray += e.join(',') + '\n';
    })

    const blob = new Blob([refinedArray], {type: 'text/csv;charset=utf-8,'});
    const objUrl = URL.createObjectURL(blob);

    return [objUrl, fileNameInput.value];
}

function updateTaskDropDownValues(projectDrop, taskDrop, projectList) {
    if (projectDrop.value === 'All Projects') {
        removeChildren(taskDrop);
        for (let i = 0; i < projectList.length; i++) {
            const project = projectList[i];
            for (let x = 0; x < project.taskList.length; x++) {
                const task = project.taskList[x];
                const taskOption = document.createElement('option');
                taskOption.textContent = task.name;
                taskDrop.appendChild(taskOption);
            }
        }
    } else {
        for (let i = 0; i < projectList.length; i++) {
            const project = projectList[i];
            if (project.name === projectDrop.value) {
                removeChildren(taskDrop); 
                for (let x = 0; x < project.taskList.length; x++) {
                    const task = project.taskList[x];
                    const taskOption = document.createElement('option');
                    taskOption.textContent = task.name;
                    taskDrop.appendChild(taskOption);
                }
            }
        }
    }
}

function removeChildren(e) {
    for (let i = e.children.length - 1; i >= 1; i--) {
        const element = e.children[i];
        //console.log(element);
        element.remove();
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
    validateInputs,
    updateProjectList,
    createExportForm,
    populateExportForm,
    exportDataAsExcel,
    removeEverything}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUNob0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQ0FBaUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjs7Ozs7O1VDdEJsQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcblxuZnVuY3Rpb24gcmVtb3ZlTWFpbkJvZHlDb250ZW50KCl7XG4gICAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkJvZHknKTtcbiAgICBmb3IgKGxldCBpID0gbWFpbkJvZHkuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgZSA9IG1haW5Cb2R5LmNoaWxkcmVuW2ldO1xuICAgICAgICBlLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlcnl0aGluZygpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICBmb3IgKGxldCBpID0gY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICAgICAgY29uc3QgZSA9IGNvbnRhaW5lci5jaGlsZHJlbltpXTtcbiAgICAgICAgZS5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm0od2hhdEtpbmQsIGZvcm1EYXRhKXtcbiAgICAvL3JlbW92ZSBvbGQgZm9ybVxuICAgIChmdW5jdGlvbigpe1xuICAgICAgICBpZihjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZSA9IGNvbnRhaW5lci5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBlLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkoKTtcbiAgICAvL2NyZWF0ZSBET00gZWxlbWVudHMgZm9yIG5ldyBmb3JtXG4gICAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5TZWN0aW9uLmlkID0gJ21haW5TZWN0aW9uJztcbiAgICBtYWluSGVhZGVyLmlkID0gJ21haW5IZWFkZXInO1xuICAgIGhlYWRlci5pZCA9ICdoZWFkZXInO1xuICAgIG1haW5Cb2R5LmlkID0gJ21haW5Cb2R5JztcblxuICAgIGlmICh3aGF0S2luZCA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjbG9zZVdpbmRvd0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LmlkID0gJ3Byb2plY3ROYW1lSW5wdXQnO1xuICAgICAgICBwcm9qZWN0TmFtZUlucHV0Lm1heExlbmd0aCA9ICcyNSc7XG4gICAgICAgIHByb2plY3REZXRhaWxzSW5wdXQuaWQgPSAncHJvamVjdERldGFpbHNJbnB1dCc7XG4gICAgICAgIHByb2plY3REZXRhaWxzSW5wdXQubWF4TGVuZ3RoID0gJzgwJztcbiAgICAgICAgcHJvamVjdE5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBQcm9qZWN0IE5hbWUgKE1heCBMZW5ndGggLSAyNSBDaGFyYWN0ZXJzKSc7XG4gICAgICAgIHByb2plY3REZXRhaWxzSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgUHJvamVjdCBEZXRhaWxzIChNYXggTGVuZ3RoIC0gODAgQ2hhcmFjdGVycyknO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLmlkID0gJ2FkZFByb2plY3RCdG4nO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBQcm9qZWN0JztcbiAgICAgICAgY2xvc2VXaW5kb3dCdG4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIGNsb3NlV2luZG93QnRuLmlkID0gJ2Nsb3NlV2luZG93QnRuJztcbiAgICAgICAgY2hlY2tEYXRhKHdoYXRLaW5kLCBmb3JtRGF0YSwgW3Byb2plY3ROYW1lSW5wdXQsIHByb2plY3REZXRhaWxzSW5wdXRdKTtcbiAgICAgICAgYXBwZW5kRWxlbWVudHMoZmFsc2UsIFtwcm9qZWN0TmFtZUlucHV0LCBwcm9qZWN0RGV0YWlsc0lucHV0XSwgYWRkUHJvamVjdEJ0biwgY2xvc2VXaW5kb3dCdG4pXG4gICAgfSBlbHNlIGlmICh3aGF0S2luZCA9PSAndGFzaycpIHtcbiAgICAgICAgY29uc3QgY2xvc2VUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0YXNrRGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdGFza0RhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNsb3NlVGFza0J0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgY2xvc2VUYXNrQnRuLmlkID0gJ2Nsb3NlVGFza0J0bic7XG4gICAgICAgIHRhc2tEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobG93KTtcbiAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobWVkaXVtKTtcbiAgICAgICAgdGFza1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQuaWQgPSAndGFza05hbWVJbnB1dCc7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgVGFzayBOYW1lJztcbiAgICAgICAgdGFza0RldGFpbHNJbnB1dC5pZCA9ICd0YXNrRGV0YWlsc0lucHV0JztcbiAgICAgICAgdGFza0RldGFpbHNJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBUYXNrIERldGFpbHMnO1xuICAgICAgICB0YXNrRGF0ZUlucHV0LmlkID0gJ3Rhc2tEYXRlSW5wdXQnO1xuICAgICAgICB0YXNrRGF0ZUlucHV0LnZhbHVlQXNEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGFza0RhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIER1ZSc7XG4gICAgICAgIHRhc2tQcmlvcml0eUlucHV0LmlkID0gJ3Rhc2tQcmlvcml0eUlucHV0JztcbiAgICAgICAgdGFza1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBQcmlvcml0eSc7XG4gICAgICAgIGxvdy50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgICBtZWRpdW0udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgaGlnaC50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgYWRkVGFza0J0bi5pZCA9ICdhZGRUYXNrQnRuJztcbiAgICAgICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgICAgIGNoZWNrRGF0YSh3aGF0S2luZCwgZm9ybURhdGEsIFt0YXNrTmFtZUlucHV0LCB0YXNrRGV0YWlsc0lucHV0LCB0YXNrRGF0ZUlucHV0LCB0YXNrUHJpb3JpdHlJbnB1dF0pO1xuICAgICAgICBhcHBlbmRFbGVtZW50cyh0cnVlLCBbdGFza05hbWVJbnB1dCwgdGFza0RldGFpbHNJbnB1dCwgdGFza0RhdGVMYWJlbCwgdGFza0RhdGVJbnB1dCwgdGFza1ByaW9yaXR5TGFiZWwsIHRhc2tQcmlvcml0eUlucHV0XSwgYWRkVGFza0J0biwgY2xvc2VUYXNrQnRuKTtcbiAgICB9XG4gICAgICAgIC8vY2hlY2sgaWYgdGhlcmUgaXMgYW55IGRhdGFcbiAgICBmdW5jdGlvbiBjaGVja0RhdGEod2hhdEtpbmQsIGZvcm1EYXRhLCBpbnB1dExpc3Qpe1xuICAgICAgICBpZiAoZm9ybURhdGEgIT09ICcnKSB7XG4gICAgICAgICAgICBpZiAod2hhdEtpbmQgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICAgICAgICAgIGlucHV0TGlzdFswXS52YWx1ZSA9IGZvcm1EYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgaW5wdXRMaXN0WzFdLnZhbHVlID0gZm9ybURhdGEuZGV0YWlscztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2hhdEtpbmQgPT09ICd0YXNrJykge1xuICAgICAgICAgICAgICAgIGlucHV0TGlzdFswXS52YWx1ZSA9IGZvcm1EYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgaW5wdXRMaXN0WzFdLnZhbHVlID0gZm9ybURhdGEuZGV0YWlscztcbiAgICAgICAgICAgICAgICBpbnB1dExpc3RbMl0udmFsdWUgPSBmb3JtRGF0YS5kYXRlO1xuICAgICAgICAgICAgICAgIGlucHV0TGlzdFszXS52YWx1ZSA9IGZvcm1EYXRhLnByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vYXBwZW5kIG5ldyBlbGVtZW50cyB0byBET01cbiAgICBmdW5jdGlvbiBhcHBlbmRFbGVtZW50cyhpc1Rhc2ssIGlucHV0TGlzdCwgYnRuLCBjbG9zZUJ0bil7XG4gICAgICAgIGlmICghaXNUYXNrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBpbnB1dExpc3RbaV07XG4gICAgICAgICAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5pZCA9ICd0YXNrRm9ybUNvbnRhaW5lcic7XG4gICAgICAgICAgICBjb25zdCB0YXNrRm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICB0YXNrRm9ybUhlYWRlci50ZXh0Q29udGVudCA9ICdUYXNrIEZvcm0nO1xuICAgICAgICAgICAgdGFza0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm1IZWFkZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gaW5wdXRMaXN0W2ldO1xuICAgICAgICAgICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFza0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKHRhc2tGb3JtQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuICAgICAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluQm9keSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG4gICAgfVxuXG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtjcmVhdGVGb3JtLFxuICAgIHJlbW92ZUV2ZXJ5dGhpbmcsXG4gICAgcmVtb3ZlTWFpbkJvZHlDb250ZW50fTsiLCJjb25zdCB7UHJvamVjdH0gPSByZXF1aXJlKCcuL3Byb2plY3QuanMnKTtcbmNvbnN0IHtUYXNrfSA9IHJlcXVpcmUoJy4vcHJvamVjdC5qcycpO1xuY29uc3Qge2NyZWF0ZUZvcm19ID0gcmVxdWlyZSgnLi9mb3Jtcy5qcycpO1xuY29uc3Qge3Rha2VWYWx1ZXNBbmRDcmVhdGVQcm9qZWN0fSA9IHJlcXVpcmUoJy4vbW9kdWxlcy5qcycpO1xuY29uc3Qge3JlbW92ZU1haW5Cb2R5Q29udGVudH0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHtzaG93QWRkVGFza1RvUHJvamVjdFBhZ2V9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7dGFrZVZhbHVlc0FuZENyZWF0ZVRhc2t9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7YWRkUHJvamVjdFRvUHJvamVjdExpc3R9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7Y2hhbmdlT3ZlcmxheX0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHt2aWV3VGFza3N9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7c2V0SGVhZGVyfSA9IHJlcXVpcmUoJy4vbW9kdWxlcy5qcycpO1xuY29uc3Qge2FkZFByb2plY3RUb1N0b3JhZ2V9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7dmFsaWRhdGVJbnB1dHN9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7dXBkYXRlUHJvamVjdExpc3R9ID0gcmVxdWlyZSgnLi9tb2R1bGVzLmpzJyk7XG5jb25zdCB7dXBkYXRlUHJvamVjdEluU3RvcmFnZX0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHt2aWV3UHJvamVjdH0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHtjcmVhdGVFeHBvcnRGb3JtfSA9IHJlcXVpcmUoJy4vbW9kdWxlcy5qcycpO1xuY29uc3Qge3BvcHVsYXRlRXhwb3J0Rm9ybX0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHtleHBvcnREYXRhQXNFeGNlbH0gPSByZXF1aXJlKCcuL21vZHVsZXMuanMnKTtcbmNvbnN0IHtyZW1vdmVFdmVyeXRoaW5nfSA9IHJlcXVpcmUoJy4vbW9kdWxlcy5qcycpO1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKTtcbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5cbigoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNJblN0b3JhZ2UgPSB7Li4ubG9jYWxTdG9yYWdlfTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvamVjdHNJblN0b3JhZ2UpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gICAgICAgIGFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3RMaXN0LCBwcm9qZWN0KTtcbiAgICB9XG59KSgpO1xuXG5cbmNvbnN0IG5leHRTZXZlbkRheXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dFNldmVuRGF5c0J0bicpO1xubmV4dFNldmVuRGF5c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgdmlld1Rhc2tzKHByb2plY3RMaXN0LCBcIk5leHQgNyBEYXknc1wiKVxufSlcblxuY29uc3QgYWxsVGFza3NCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsVGFza3NCdG4nKTtcbmFsbFRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgIHZpZXdUYXNrcyhwcm9qZWN0TGlzdCwgJ0FsbCcpO1xufSlcblxuY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlCdG4nKTtcbnRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICB2aWV3VGFza3MocHJvamVjdExpc3QsIFwiVG9kYXknc1wiKTtcbn0pXG5cbmNvbnN0IGltcG9ydGFudEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRhbnRCdG4nKTtcbmltcG9ydGFudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgdmlld1Rhc2tzKHByb2plY3RMaXN0LCAnSW1wb3J0YW50Jyk7XG59KVxuXG4vL2V4cG9ydCBkYXRhXG5jb25zdCBleHBvcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0QnRuJyk7XG5leHBvcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGNoYW5nZU92ZXJsYXkoJ2RhcmsnKTtcbiAgICBjcmVhdGVFeHBvcnRGb3JtKCk7XG4gICAgcG9wdWxhdGVFeHBvcnRGb3JtKHByb2plY3RMaXN0KTtcbiAgICBjb25zdCBleHBvcnRGb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydEZvcm1CdG4nKTtcbiAgICBleHBvcnRGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZXhwb3J0VmFsdWVzID0gZXhwb3J0RGF0YUFzRXhjZWwocHJvamVjdExpc3QpO1xuICAgICAgICBjb25zdCBvYmpVcmwgPSBleHBvcnRWYWx1ZXNbMF07XG4gICAgICAgIGNvbnN0IGZpbGVOYW1lID0gZXhwb3J0VmFsdWVzWzFdO1xuICAgICAgICBleHBvcnRGb3JtQnRuLnNldEF0dHJpYnV0ZSgnaHJlZicsIG9ialVybCk7XG4gICAgICAgIGV4cG9ydEZvcm1CdG4uc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGAke2ZpbGVOYW1lfS54bHNgKTtcbiAgICAgICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgICAgICBjaGFuZ2VPdmVybGF5KCdsaWdodCcpO1xuICAgIH0pXG59KVxuXG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBjcmVhdGVGb3JtKCdwcm9qZWN0JywgJycpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ0bicpO1xuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uID0gdmFsaWRhdGVJbnB1dHMoJ3Byb2plY3QnKTtcbiAgICAgICAgaWYgKHZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCgpO1xuICAgICAgICAgICAgdGFrZVZhbHVlc0FuZENyZWF0ZVByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0VG9TdG9yYWdlKG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgYWRkUHJvamVjdFRvUHJvamVjdExpc3QocHJvamVjdExpc3QsIG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgdmlld1Byb2plY3QobmV3UHJvamVjdCk7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICB0YWtlVmFsdWVzQW5kQ3JlYXRlUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIGFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3RMaXN0LCBuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIHJlbW92ZU1haW5Cb2R5Q29udGVudCgpO1xuICAgICAgICAgICAgc2hvd0FkZFRhc2tUb1Byb2plY3RQYWdlKG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgYWRkVGFza1RvUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIGFkZFByb2plY3RUb1N0b3JhZ2UobmV3UHJvamVjdCk7XG4gICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgdXBkYXRlUHJvamVjdEluU3RvcmFnZShuZXdQcm9qZWN0LCBuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3RMaXN0KG5ld1Byb2plY3QsIG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgKi9cbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3Qpe1xuICAgIGNvbnN0IGFkZE5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTmV3VGFza0J0bicpO1xuICAgIGFkZE5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjcmVhdGVGb3JtKCd0YXNrJywgJycpO1xuICAgICAgICBzZXRIZWFkZXIocHJvamVjdC5uYW1lKTtcbiAgICAgICAgY2hhbmdlT3ZlcmxheSgnZGFyaycpO1xuICAgICAgICBjb25zdCBjbG9zZVRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VUYXNrQnRuJyk7XG4gICAgICAgIGNsb3NlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZW1vdmVNYWluQm9keUNvbnRlbnQoKTtcbiAgICAgICAgICAgIHNob3dBZGRUYXNrVG9Qcm9qZWN0UGFnZShwcm9qZWN0KTtcbiAgICAgICAgICAgIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICBjaGFuZ2VPdmVybGF5KCdsaWdodCcpO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdG4nKTtcbiAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uID0gdmFsaWRhdGVJbnB1dHMoJ3Rhc2snKTtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKCk7XG4gICAgICAgICAgICAgICAgdGFrZVZhbHVlc0FuZENyZWF0ZVRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC50YXNrTGlzdC5wdXNoKG5ld1Rhc2spO1xuICAgICAgICAgICAgICAgIHJlbW92ZU1haW5Cb2R5Q29udGVudCgpO1xuICAgICAgICAgICAgICAgIHNob3dBZGRUYXNrVG9Qcm9qZWN0UGFnZShwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgICAgIGNoYW5nZU92ZXJsYXkoJ2xpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdFRvU3RvcmFnZShwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHthZGRUYXNrVG9Qcm9qZWN0fTtcblxuXG5cblxuXG5cblxuXG4iLCJjb25zdCB7Y3JlYXRlRm9ybX0gPSByZXF1aXJlKCcuL2Zvcm1zLmpzJyk7XG5jb25zdCB7cmVtb3ZlRXZlcnl0aGluZ30gPSByZXF1aXJlKCcuL2Zvcm1zLmpzJyk7XG5jb25zdCB7cmVtb3ZlTWFpbkJvZHlDb250ZW50fSA9IHJlcXVpcmUoJy4vZm9ybXMuanMnKTtcbmNvbnN0IHtUYXNrfSA9IHJlcXVpcmUoJy4vcHJvamVjdC5qcycpO1xuXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcbm92ZXJsYXkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb1N0b3JhZ2UocHJvamVjdCl7XG4gICAgY29uc3QgcHJvamVjdHNJblN0b3JhZ2UgPSB7Li4ubG9jYWxTdG9yYWdlfTtcbiAgICBsZXQgZm91bmRLZXkgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvamVjdHNJblN0b3JhZ2UpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gcHJvamVjdC5uYW1lKSB7XG4gICAgICAgICAgICBmb3VuZEtleSA9IHRydWU7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0Lm5hbWUpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdC5uYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmb3VuZEtleSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0Lm5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RJblN0b3JhZ2Uob2xkUHJvamVjdCwgbmV3UHJvamVjdCl7XG4gICAgY29uc3QgcHJvamVjdHNJblN0b3JhZ2UgPSB7Li4ubG9jYWxTdG9yYWdlfTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvamVjdHNJblN0b3JhZ2Upe1xuICAgICAgICBpZiAoa2V5ID09PSBvbGRQcm9qZWN0KSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3UHJvamVjdC5uYW1lLCBKU09OLnN0cmluZ2lmeShuZXdQcm9qZWN0KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRha2VWYWx1ZXNBbmRDcmVhdGVQcm9qZWN0KHByb2plY3Qpe1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGV0YWlsc0lucHV0JykudmFsdWU7XG4gICAgcHJvamVjdC5uYW1lID0gcHJvamVjdE5hbWU7XG4gICAgcHJvamVjdC5kZXRhaWxzID0gcHJvamVjdERldGFpbHM7XG59XG5cbmZ1bmN0aW9uIHNob3dBZGRUYXNrVG9Qcm9qZWN0UGFnZShwcm9qZWN0KXtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQm9keScpO1xuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkhlYWRlcicpO1xuICAgIGNvbnN0IGNsb3NlV2luZG93QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBjbG9zZVdpbmRvd0J0bi5pZCA9ICdjbG9zZVdpbmRvd0J0bic7XG4gICAgY2xvc2VXaW5kb3dCdG4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChjbG9zZVdpbmRvd0J0bik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tMaXN0W2ldO1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFza0RpdicpO1xuICAgICAgICB0YXNrRGl2LnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGROZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZmluaXNoZWRBZGRpbmdUYXNrc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZE5ld1Rhc2tCdG4uaWQgPSAnYWRkTmV3VGFza0J0bic7XG4gICAgYWRkTmV3VGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGROZXdUYXNrQnRuJyk7XG4gICAgYWRkTmV3VGFza0J0bi50ZXh0Q29udGVudCA9ICcrJ1xuICAgIGZpbmlzaGVkQWRkaW5nVGFza3NCdG4uaWQgPSAnZmluaXNoZWRBZGRpbmdUYXNrc0J0bic7XG4gICAgZmluaXNoZWRBZGRpbmdUYXNrc0J0bi5jbGFzc0xpc3QuYWRkKCdyZWd1bGFyQnRuJyk7XG4gICAgZmluaXNoZWRBZGRpbmdUYXNrc0J0bi50ZXh0Q29udGVudCA9ICdEb25lJztcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChhZGROZXdUYXNrQnRuKTtcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChmaW5pc2hlZEFkZGluZ1Rhc2tzQnRuKTtcbiAgICBmaW5pc2hlZEFkZGluZ1Rhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgICAgICBhZGRQcm9qZWN0VG9TdG9yYWdlKHByb2plY3QpO1xuICAgIH0pXG4gICAgY2xvc2VXaW5kb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICByZW1vdmVFdmVyeXRoaW5nKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdGFrZVZhbHVlc0FuZENyZWF0ZVRhc2sodGFzayl7XG4gICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTmFtZUlucHV0Jyk7XG4gICAgY29uc3QgdGFza0RldGFpbHNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGV0YWlsc0lucHV0Jyk7XG4gICAgY29uc3QgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGF0ZUlucHV0Jyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1ByaW9yaXR5SW5wdXQnKTtcbiAgICB0YXNrLm5hbWUgPSB0YXNrTmFtZUlucHV0LnZhbHVlO1xuICAgIHRhc2suZGV0YWlscyA9IHRhc2tEZXRhaWxzSW5wdXQudmFsdWU7XG4gICAgdGFzay5kYXRlID0gdGFza0RhdGVJbnB1dC52YWx1ZTtcbiAgICB0YXNrLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5SW5wdXQudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3RMaXN0LCBuZXdQcm9qZWN0KXtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgIGNvbnN0IHByb2plY3RVbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VWwnKTsgXG4gICAgY29uc3QgcHJvamVjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpbmsnKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBwcm9qZWN0RGl2LmlkID0gYCR7bmV3UHJvamVjdC5uYW1lfS1wcm9qZWN0YDtcbiAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gbmV3UHJvamVjdC5uYW1lO1xuICAgIHJlbW92ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgcmVtb3ZlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmVQcm9qZWN0QnRuJyk7XG4gICAgcHJvamVjdExpLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIHByb2plY3RMaS5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0QnRuKTtcbiAgICBwcm9qZWN0VWwuYXBwZW5kQ2hpbGQocHJvamVjdExpKTtcbiAgICBwcm9qZWN0VWwuaW5zZXJ0QmVmb3JlKHByb2plY3RMaSwgcHJvamVjdExpLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpO1xuICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICB2aWV3UHJvamVjdChuZXdQcm9qZWN0KX1cbiAgICAgICAgKTtcbiAgICByZW1vdmVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgcmVtb3ZlUHJvamVjdEZyb21TdG9yYWdlKG5ld1Byb2plY3QpO1xuICAgICAgICByZW1vdmVQcm9qZWN0RnJvbVByb2plY3RMaXN0KG5ld1Byb2plY3QpO1xuICAgICAgICByZW1vdmVFdmVyeXRoaW5nKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEZyb21Qcm9qZWN0TGlzdChwcm9qZWN0KXtcbiAgICBjb25zdCBwcm9qZWN0VWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFVsJyk7XG4gICAgZm9yIChsZXQgaSA9IHByb2plY3RVbC5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBlID0gcHJvamVjdFVsLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdO1xuICAgICAgICBpZiAoZS50ZXh0Q29udGVudCA9PT0gcHJvamVjdC5uYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IHByb2plY3RVbC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0RnJvbVN0b3JhZ2UocHJvamVjdCl7XG4gICAgY29uc3QgcHJvamVjdHNJblN0b3JhZ2UgPSB7Li4ubG9jYWxTdG9yYWdlfTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvamVjdHNJblN0b3JhZ2Upe1xuICAgICAgICBpZiAoa2V5ID09PSBwcm9qZWN0Lm5hbWUpe1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdmlld1Byb2plY3QobmV3UHJvamVjdCkge1xuICAgIHJlbW92ZUV2ZXJ5dGhpbmcoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBlZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNsb3NlV2luZG93QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYWRkTmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QubmFtZTtcbiAgICBwcm9qZWN0RGV0YWlscy50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QuZGV0YWlscztcbiAgICBtYWluU2VjdGlvbi5pZCA9ICdtYWluU2VjdGlvbic7XG4gICAgbWFpbkhlYWRlci5pZCA9ICdtYWluSGVhZGVyJztcbiAgICBtYWluQm9keS5pZCA9ICdtYWluQm9keSc7XG4gICAgZWRpdFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0JztcbiAgICBlZGl0UHJvamVjdEJ0bi5pZCA9ICdlZGl0UHJvamVjdEJ0bic7XG4gICAgY2xvc2VXaW5kb3dCdG4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgY2xvc2VXaW5kb3dCdG4uaWQgPSAnY2xvc2VXaW5kb3dCdG4nO1xuICAgIGFkZE5ld1Rhc2tCdG4uaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwiYWRkTmV3VGFza1BcIj5BZGQgVGFzazwvcD48cCBjbGFzcz1cImFkZE5ld1Rhc2tQbHVzXCI+KzwvcD4nO1xuICAgIGFkZE5ld1Rhc2tCdG4uaWQgPSAnYWRkTmV3VGFza0J0bic7XG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VXaW5kb3dCdG4pO1xuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKHByb2plY3REZXRhaWxzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1Byb2plY3QudGFza0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCB0YXNrID0gbmV3UHJvamVjdC50YXNrTGlzdFtpXTtcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0YXNrVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza1RvcC5jbGFzc0xpc3QuYWRkKCd0YXNrVG9wJyk7XG4gICAgICAgIHRhc2tCb3R0b20uY2xhc3NMaXN0LmFkZCgndGFza0JvdHRvbScpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEaXYnKTtcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBgJHt0YXNrLm5hbWV9YDtcbiAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSBgJHt0YXNrLmRldGFpbHN9YDtcbiAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrLmRhdGV9YDtcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFRhc2sgUHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX1gO1xuICAgICAgICB0YXNrQnRuRGl2LmlkID0gJ3Rhc2tCdG5EaXYnO1xuICAgICAgICBlZGl0VGFza0J0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgICAgZGVsZXRlVGFza0J0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICBlZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjcmVhdGVGb3JtKCd0YXNrJywgdGFzayk7XG4gICAgICAgICAgICBjbG9zZVRhc2tCdG4obmV3UHJvamVjdCk7XG4gICAgICAgICAgICBjaGFuZ2VPdmVybGF5KCdkYXJrJyk7XG4gICAgICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdG4nKTtcbiAgICAgICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB2YWxpZGF0ZUlucHV0cygndGFzaycpO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZU92ZXJsYXkoJ2xpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRha2VWYWx1ZXNBbmRDcmVhdGVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB2aWV3UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdEluU3RvcmFnZShuZXdQcm9qZWN0Lm5hbWUsIG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdQcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gbmV3UHJvamVjdC50YXNrTGlzdFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodC5uYW1lID09PSB0YXNrLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvamVjdC50YXNrTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVByb2plY3RJblN0b3JhZ2UobmV3UHJvamVjdC5uYW1lLCBuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2aWV3UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgdGFza1RvcC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2tCb3R0b20uYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICB0YXNrQm90dG9tLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgdGFza0JvdHRvbS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICB0YXNrQnRuRGl2LmFwcGVuZENoaWxkKGVkaXRUYXNrQnRuKTtcbiAgICAgICAgdGFza0J0bkRpdi5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcbiAgICAgICAgdGFza1RvcC5hcHBlbmRDaGlsZCh0YXNrQnRuRGl2KTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVG9wKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrQm90dG9tKTtcbiAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgIHRhc2tCb3R0b20uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICB0YXNrQm90dG9tLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGFza1RvcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tYmcpJztcbiAgICAgICAgdGFza1RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBleHBhbmRUYXNrKHRoaXMpO1xuICAgICAgICAgICAgY2hhbmdlVGFza1RvcENvbG9yKHRoaXMpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEJ0bik7XG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoYWRkTmV3VGFza0J0bik7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkJvZHkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG4gICAgY2xvc2VXaW5kb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICByZW1vdmVFdmVyeXRoaW5nKCk7XG4gICAgfSlcbiAgICBlZGl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNyZWF0ZUZvcm0oJ3Byb2plY3QnLCBuZXdQcm9qZWN0KTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnRuJyk7XG4gICAgICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IHZhbGlkYXRlSW5wdXRzKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFByb2plY3QgPSBuZXdQcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICAgICAgdGFrZVZhbHVlc0FuZENyZWF0ZVByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdExpc3QobmV3UHJvamVjdCwgb2xkUHJvamVjdCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdEluU3RvcmFnZShvbGRQcm9qZWN0LCBuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB2aWV3UHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGFkZE5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjcmVhdGVGb3JtKCd0YXNrJywgJycpO1xuICAgICAgICBzZXRIZWFkZXIobmV3UHJvamVjdC5uYW1lKTtcbiAgICAgICAgY2hhbmdlT3ZlcmxheSgnZGFyaycpO1xuICAgICAgICBjbG9zZVRhc2tCdG4obmV3UHJvamVjdCk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J0bicpO1xuICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB2YWxpZGF0ZUlucHV0cygndGFzaycpO1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soKTtcbiAgICAgICAgICAgICAgICB0YWtlVmFsdWVzQW5kQ3JlYXRlVGFzayhuZXdUYXNrKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LnRhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgdmlld1Byb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgY2hhbmdlT3ZlcmxheSgnbGlnaHQnKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVQcm9qZWN0SW5TdG9yYWdlKG5ld1Byb2plY3QubmFtZSwgbmV3UHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFza1RvcENvbG9yKGUpe1xuICAgIGlmIChlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3ZhcigtLWJnKScpIHtcbiAgICAgICAgZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICBpZiAoZS5jaGlsZHJlblsxXS5jaGlsZHJlblswXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICBlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAnd2hpdGUnKSB7XG4gICAgICAgIGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLWJnKSc7XG4gICAgICAgIGlmIChlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLWJnKSc7XG4gICAgICAgICAgICBlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1iZyknO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0TGlzdChuZXdQcm9qZWN0LCBvbGRQcm9qZWN0KXtcbiAgICBjb25zdCBwcm9qZWN0VWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFVsJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0VWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBlID0gcHJvamVjdFVsLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdO1xuICAgICAgICBpZiAoYCR7b2xkUHJvamVjdH0tcHJvamVjdGAgPT09IGUuaWQpIHtcbiAgICAgICAgICAgIGUudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICBlLmlkID0gYCR7bmV3UHJvamVjdC5uYW1lfS1wcm9qZWN0YDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VUYXNrQnRuKHByb2plY3Qpe1xuICAgIGNvbnN0IGNsb3NlVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZVRhc2tCdG4nKTtcbiAgICBjbG9zZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjaGFuZ2VPdmVybGF5KCdsaWdodCcpO1xuICAgICAgICB2aWV3UHJvamVjdChwcm9qZWN0KTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VPdmVybGF5KHR5cGUpe1xuICAgIGlmICh0eXBlID09PSAnbGlnaHQnKSB7XG4gICAgICAgIG92ZXJsYXkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIG92ZXJsYXkuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHZpZXdUYXNrcyhwcm9qZWN0TGlzdCwgdHlwZSl7XG4gICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGNsb3NlV2luZG93QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluU2VjdGlvbi5pZCA9ICdtYWluU2VjdGlvbic7XG4gICAgbWFpbkhlYWRlci5pZCA9ICdtYWluSGVhZGVyJztcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJHt0eXBlfSBUYXNrc2A7XG4gICAgY2xvc2VXaW5kb3dCdG4uaWQgPSAnY2xvc2VXaW5kb3dCdG4nO1xuICAgIGNsb3NlV2luZG93QnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIG1haW5Cb2R5LmlkID0gJ21haW5Cb2R5JztcbiAgICBjbG9zZVdpbmRvd0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHJlbW92ZUV2ZXJ5dGhpbmcoKTtcbiAgICB9KVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tEaXYodGFzaywgcHJvamVjdCl7XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza1RvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0YXNrQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFza0RpdicpO1xuICAgICAgICB0YXNrVG9wLmNsYXNzTGlzdC5hZGQoJ3Rhc2tUb3AnKTtcbiAgICAgICAgdGFza0JvdHRvbS5jbGFzc0xpc3QuYWRkKCd0YXNrQm90dG9tJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYFByb2plY3Q6ICR7cHJvamVjdC5uYW1lfWA7XG4gICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gYCR7dGFzay5uYW1lfWA7XG4gICAgICAgIHRhc2tEZXRhaWxzLnRleHRDb250ZW50ID0gYCR7dGFzay5kZXRhaWxzfWA7XG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gYCR7dGFzay5kYXRlfWA7XG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGBUYXNrIFByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9YDtcbiAgICAgICAgdGFza1RvcC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICAgIHRhc2tUb3AuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgICAgICB0YXNrQm90dG9tLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcbiAgICAgICAgdGFza0JvdHRvbS5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgICAgIHRhc2tCb3R0b20uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVG9wKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrQm90dG9tKTtcbiAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgIHRhc2tCb3R0b20uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICB0YXNrQm90dG9tLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGFza1RvcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tYmcpJztcbiAgICAgICAgdGFza1RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBleHBhbmRUYXNrKHRoaXMpO1xuICAgICAgICAgICAgY2hhbmdlVGFza1RvcENvbG9yKHRoaXMpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3RbaV07XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgcHJvamVjdC50YXNrTGlzdC5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza0xpc3RbeF07XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ0FsbCcpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVUYXNrRGl2KHRhc2ssIHByb2plY3QpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlRvZGF5J3NcIil7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcihkYXkpIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgZGF5ID0gYDAke2RheX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKG1vbnRoKSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vbnRoID0gYDAke21vbnRofWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIGxldCB0b2RheXNEYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5kYXRlID09PSB0b2RheXNEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2tEaXYodGFzaywgcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIk5leHQgNyBEYXknc1wiKSB7XG4gICAgICAgICAgICAgICAgLy9idWlsZCB0b2RheXMgZGF0ZSBpbiBVVENcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheXNEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheXNEYXkgPSB0b2RheXNEYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheXNNb250aCA9IHRvZGF5c0RhdGUuZ2V0TW9udGgoKSArMTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheXNZZWFyID0gdG9kYXlzRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpeGVkVG9kYXlzRGF0ZSA9IG5ldyBEYXRlKGAke3RvZGF5c1llYXJ9LyR7dG9kYXlzTW9udGh9LyR7dG9kYXlzRGF5fWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpeGVkVG9kYXlzRGF0ZVBsdXNTZXZlbkRheXMgPSBuZXcgRGF0ZShgJHt0b2RheXNZZWFyfS8ke3RvZGF5c01vbnRofS8ke3RvZGF5c0RheSArIDd9YCk7XG4gICAgICAgICAgICAgICAgLy9idWlsZCBpbnB1dCB2YWx1ZXMgZGF0ZSBpbiBVVENcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGVEYXkgPSB0YXNrRGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGVNb250aCA9IHRhc2tEYXRlLmdldFVUQ01vbnRoKCkgKzE7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGVZZWFyID0gdGFza0RhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXhlZFRhc2tEYXRlID0gbmV3IERhdGUoYCR7dGFza0RhdGVZZWFyfS8ke3Rhc2tEYXRlTW9udGh9LyR7dGFza0RhdGVEYXl9YCk7XG4gICAgICAgICAgICAgICAgaWYgKGZpeGVkVGFza0RhdGUgPj0gZml4ZWRUb2RheXNEYXRlICYmIGZpeGVkVGFza0RhdGUgPD0gZml4ZWRUb2RheXNEYXRlUGx1c1NldmVuRGF5cykge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUYXNrRGl2KHRhc2ssIHByb2plY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0ltcG9ydGFudCcpe1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnSGlnaCcpe1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUYXNrRGl2KHRhc2ssIHByb2plY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChjbG9zZVdpbmRvd0J0bik7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkJvZHkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFRhc2sodGFza1RvcCl7XG4gICAgY29uc3QgdGFza0JvdHRvbSA9IHRhc2tUb3AucGFyZW50Tm9kZS5jaGlsZHJlblsxXTtcbiAgICBpZiAodGFza0JvdHRvbS5zdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xuICAgICAgICB0YXNrQm90dG9tLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIHRhc2tCb3R0b20uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH0gZWxzZSBpZiAodGFza0JvdHRvbS5zdHlsZS52aXNpYmlsaXR5ID09PSAndmlzaWJsZScpIHtcbiAgICAgICAgdGFza0JvdHRvbS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHRhc2tCb3R0b20uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0SGVhZGVyKG5hbWUpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gbmFtZTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVJbnB1dHModHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWVJbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGV0YWlsc0lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXRMaXN0ID0gW3Byb2plY3ROYW1lSW5wdXQsIHByb2plY3REZXRhaWxzSW5wdXRdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0SW5wdXRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGUgPSBwcm9qZWN0SW5wdXRMaXN0W2ldO1xuICAgICAgICAgICAgICAgIGlmIChlLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBlLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgcmVkJztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCB2YXIoLS1zZWNvbmQpJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSAndGFzayc6XG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lSW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0RldGFpbHNJbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgdGFza0lucHV0TGlzdCA9IFt0YXNrTmFtZUlucHV0LCB0YXNrRGV0YWlsc0lucHV0XTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0lucHV0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSB0YXNrSW5wdXRMaXN0W2ldO1xuICAgICAgICAgICAgICAgIGlmICh0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICB0LnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgcmVkJztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHQuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCB2YXIoLS1zZWNvbmQpJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV4cG9ydEZvcm0oKSB7XG4gICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICBjb25zdCBleHBvcnRGb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBjbG9zZUV4cG9ydEZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBleHBvcnRGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZmlsZU5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgZmlsZU5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgcHJvamVjdERyb3BMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgcHJvamVjdERyb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBjb25zdCBhbGxQcm9qZWN0c09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGNvbnN0IHRhc2tEcm9wTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IHRhc2tEcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgY29uc3QgYWxsVGFza3NPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjb25zdCBleHBvcnRGb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGV4cG9ydEZvcm1IZWFkZXIudGV4dENvbnRlbnQgPSAnRXhwb3J0IERhdGEnO1xuICAgIGNsb3NlRXhwb3J0Rm9ybUJ0bi5pZCA9ICdjbG9zZUV4cG9ydEZvcm1CdG4nO1xuICAgIGNsb3NlRXhwb3J0Rm9ybUJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICBleHBvcnRGb3JtRGl2LmlkID0gJ2V4cG9ydEZvcm1EaXYnO1xuICAgIGZpbGVOYW1lTGFiZWwuY2xhc3NMaXN0LmFkZCgnZXhwb3J0Rm9ybUxhYmVsJyk7XG4gICAgZmlsZU5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdGaWxlIE5hbWUnO1xuICAgIGZpbGVOYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnZXhwb3J0Rm9ybURyb3AnKTtcbiAgICBmaWxlTmFtZUlucHV0LmlkID0gJ2ZpbGVOYW1lSW5wdXQnO1xuICAgIGZpbGVOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgRmlsZSBOYW1lJztcbiAgICBwcm9qZWN0RHJvcExhYmVsLmNsYXNzTGlzdC5hZGQoJ2V4cG9ydEZvcm1MYWJlbCcpO1xuICAgIHByb2plY3REcm9wTGFiZWwudGV4dENvbnRlbnQgPSAnU2VsZWN0IFByb2plY3QnO1xuICAgIHByb2plY3REcm9wLmlkID0gJ3Byb2plY3REcm9wJztcbiAgICBwcm9qZWN0RHJvcC5jbGFzc0xpc3QuYWRkKCdleHBvcnRGb3JtRHJvcCcpO1xuICAgIGFsbFByb2plY3RzT3B0aW9uLnRleHRDb250ZW50ID0gJ0FsbCBQcm9qZWN0cyc7XG4gICAgdGFza0Ryb3BMYWJlbC5jbGFzc0xpc3QuYWRkKCdleHBvcnRGb3JtTGFiZWwnKTtcbiAgICB0YXNrRHJvcExhYmVsLnRleHRDb250ZW50ID0gJ1NlbGVjdCBUYXNrJztcbiAgICB0YXNrRHJvcC5pZCA9ICd0YXNrRHJvcCc7XG4gICAgdGFza0Ryb3AuY2xhc3NMaXN0LmFkZCgnZXhwb3J0Rm9ybURyb3AnKTtcbiAgICBhbGxUYXNrc09wdGlvbi50ZXh0ID0gJ0FsbCBUYXNrcyc7XG4gICAgZXhwb3J0Rm9ybUJ0bi5pZCA9ICdleHBvcnRGb3JtQnRuJztcbiAgICBleHBvcnRGb3JtQnRuLnRleHRDb250ZW50ID0gJ0V4cG9ydCBEYXRhJztcbiAgICBleHBvcnRGb3JtRGl2LmFwcGVuZENoaWxkKGV4cG9ydEZvcm1IZWFkZXIpO1xuICAgIGV4cG9ydEZvcm1EaXYuYXBwZW5kQ2hpbGQoY2xvc2VFeHBvcnRGb3JtQnRuKTtcbiAgICBleHBvcnRGb3JtRGl2LmFwcGVuZENoaWxkKGZpbGVOYW1lTGFiZWwpO1xuICAgIGV4cG9ydEZvcm1EaXYuYXBwZW5kQ2hpbGQoZmlsZU5hbWVJbnB1dCk7XG4gICAgZXhwb3J0Rm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0RHJvcExhYmVsKTtcbiAgICBwcm9qZWN0RHJvcC5hcHBlbmRDaGlsZChhbGxQcm9qZWN0c09wdGlvbik7XG4gICAgZXhwb3J0Rm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0RHJvcCk7XG4gICAgZXhwb3J0Rm9ybURpdi5hcHBlbmRDaGlsZCh0YXNrRHJvcExhYmVsKTtcbiAgICB0YXNrRHJvcC5hcHBlbmRDaGlsZChhbGxUYXNrc09wdGlvbik7XG4gICAgZXhwb3J0Rm9ybURpdi5hcHBlbmRDaGlsZCh0YXNrRHJvcCk7XG4gICAgZXhwb3J0Rm9ybURpdi5hcHBlbmRDaGlsZChleHBvcnRGb3JtQnRuKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZXhwb3J0Rm9ybURpdik7XG4gICAgY2xvc2VFeHBvcnRGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY2hhbmdlT3ZlcmxheSgnbGlnaHQnKTtcbiAgICAgICAgcmVtb3ZlRXZlcnl0aGluZygpO1xuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVFeHBvcnRGb3JtKHByb2plY3RMaXN0KXtcbiAgICBjb25zdCBwcm9qZWN0RHJvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RHJvcCcpO1xuICAgIGNvbnN0IHRhc2tEcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEcm9wJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TGlzdFtpXTtcbiAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBwcm9qZWN0RHJvcC5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBwcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrTGlzdFt4XTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIHRhc2tPcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gICAgICAgICAgICB0YXNrRHJvcC5hcHBlbmRDaGlsZCh0YXNrT3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2plY3REcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICB1cGRhdGVUYXNrRHJvcERvd25WYWx1ZXMocHJvamVjdERyb3AsIHRhc2tEcm9wLCBwcm9qZWN0TGlzdCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZXhwb3J0RGF0YUFzRXhjZWwocHJvamVjdExpc3Qpe1xuICAgIGNvbnN0IGZpbGVOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZU5hbWVJbnB1dCcpO1xuICAgIGNvbnN0IHByb2plY3REcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3REcm9wJyk7XG4gICAgY29uc3QgdGFza0Ryb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Ryb3AnKTtcbiAgICBjb25zdCBleGNlbEFycmF5ID0gW1snUHJvamVjdCBOYW1lJywgJ1Byb2plY3QgRGV0YWlscycsICdUYXNrIE5hbWUnLCAnVGFzayBEZXRhaWxzJywgJ1Rhc2sgRHVlJywgJ1Rhc2sgUHJpb3JpdHknXV07XG4gICAgbGV0IG5ld1JvdyA9IFtdO1xuICAgIGlmIChwcm9qZWN0RHJvcC52YWx1ZSA9PT0gJ0FsbCBQcm9qZWN0cycgJiYgdGFza0Ryb3AudmFsdWUgPT09ICdBbGwgVGFza3MnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TGlzdFtpXTtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgcHJvamVjdC50YXNrTGlzdC5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tMaXN0W3hdO1xuICAgICAgICAgICAgICAgIG5ld1JvdyA9IFtwcm9qZWN0Lm5hbWUsIHByb2plY3QuZGV0YWlscywgdGFzay5uYW1lLCB0YXNrLmRldGFpbHMsIHRhc2suZGF0ZSwgdGFzay5wcmlvcml0eV07XG4gICAgICAgICAgICAgICAgZXhjZWxBcnJheS5wdXNoKG5ld1Jvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3RbaV07XG4gICAgICAgICAgICBpZiAocHJvamVjdC5uYW1lID09PSBwcm9qZWN0RHJvcC52YWx1ZSAmJiB0YXNrRHJvcC52YWx1ZSA9PT0gJ0FsbCBUYXNrcycpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHByb2plY3QudGFza0xpc3QubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza0xpc3RbeF07XG4gICAgICAgICAgICAgICAgICAgIG5ld1JvdyA9IFtwcm9qZWN0Lm5hbWUsIHByb2plY3QuZGV0YWlscywgdGFzay5uYW1lLCB0YXNrLmRldGFpbHMsIHRhc2suZGF0ZSwgdGFzay5wcmlvcml0eV07XG4gICAgICAgICAgICAgICAgICAgIGV4Y2VsQXJyYXkucHVzaChuZXdSb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvamVjdC5uYW1lID09PSBwcm9qZWN0RHJvcC52YWx1ZSAmJiB0YXNrRHJvcC52YWx1ZSAhPT0gJ0FsbCBUYXNrcycpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHByb2plY3QudGFza0xpc3QubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza0xpc3RbeF07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLm5hbWUgPT09IHRhc2tEcm9wLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb3cgPSBbcHJvamVjdC5uYW1lLCBwcm9qZWN0LmRldGFpbHMsIHRhc2submFtZSwgdGFzay5kZXRhaWxzLCB0YXNrLmRhdGUsIHRhc2sucHJpb3JpdHldO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhjZWxBcnJheS5wdXNoKG5ld1Jvdyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGxldCByZWZpbmVkQXJyYXkgPSAnJztcbiAgICBleGNlbEFycmF5LmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgcmVmaW5lZEFycmF5ICs9IGUuam9pbignLCcpICsgJ1xcbic7XG4gICAgfSlcblxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVmaW5lZEFycmF5XSwge3R5cGU6ICd0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04LCd9KTtcbiAgICBjb25zdCBvYmpVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG4gICAgcmV0dXJuIFtvYmpVcmwsIGZpbGVOYW1lSW5wdXQudmFsdWVdO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrRHJvcERvd25WYWx1ZXMocHJvamVjdERyb3AsIHRhc2tEcm9wLCBwcm9qZWN0TGlzdCkge1xuICAgIGlmIChwcm9qZWN0RHJvcC52YWx1ZSA9PT0gJ0FsbCBQcm9qZWN0cycpIHtcbiAgICAgICAgcmVtb3ZlQ2hpbGRyZW4odGFza0Ryb3ApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3RbaV07XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHByb2plY3QudGFza0xpc3QubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrTGlzdFt4XTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgdGFza09wdGlvbi50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgICAgICAgICAgICAgICB0YXNrRHJvcC5hcHBlbmRDaGlsZCh0YXNrT3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TGlzdFtpXTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IHByb2plY3REcm9wLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4odGFza0Ryb3ApOyBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHByb2plY3QudGFza0xpc3QubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IHByb2plY3QudGFza0xpc3RbeF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza09wdGlvbi50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0Ryb3AuYXBwZW5kQ2hpbGQodGFza09wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihlKSB7XG4gICAgZm9yIChsZXQgaSA9IGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAxOyBpLS0pIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGUuY2hpbGRyZW5baV07XG4gICAgICAgIC8vY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB0YWtlVmFsdWVzQW5kQ3JlYXRlUHJvamVjdCxcbiAgICByZW1vdmVNYWluQm9keUNvbnRlbnQsXG4gICAgcmVtb3ZlRXZlcnl0aGluZyxcbiAgICBzaG93QWRkVGFza1RvUHJvamVjdFBhZ2UsXG4gICAgdGFrZVZhbHVlc0FuZENyZWF0ZVRhc2ssXG4gICAgYWRkUHJvamVjdFRvUHJvamVjdExpc3QsXG4gICAgdmlld1Byb2plY3QsXG4gICAgY2hhbmdlT3ZlcmxheSxcbiAgICB2aWV3VGFza3MsXG4gICAgc2V0SGVhZGVyLFxuICAgIGFkZFByb2plY3RUb1N0b3JhZ2UsXG4gICAgdXBkYXRlUHJvamVjdEluU3RvcmFnZSxcbiAgICB2YWxpZGF0ZUlucHV0cyxcbiAgICB1cGRhdGVQcm9qZWN0TGlzdCxcbiAgICBjcmVhdGVFeHBvcnRGb3JtLFxuICAgIHBvcHVsYXRlRXhwb3J0Rm9ybSxcbiAgICBleHBvcnREYXRhQXNFeGNlbCxcbiAgICByZW1vdmVFdmVyeXRoaW5nfSIsImZ1bmN0aW9uIFByb2plY3QoKSB7XG4gICAgY29uc3QgdGhpc1Byb2plY3QgPSB0aGlzO1xuICAgIHRoaXMubmFtZSA9ICcnO1xuICAgIHRoaXMuZGV0YWlscyA9ICcnO1xuICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbiAgICB0aGlzLnJlbW92ZVRhc2sgPSBmdW5jdGlvbih0YXNrKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzUHJvamVjdC50YXNrTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpc1Byb2plY3QudGFza0xpc3RbaV07XG4gICAgICAgICAgICBpZiAodC5uYW1lID09PSB0YXNrLm5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gVGFzaygpIHtcbiAgICB0aGlzLm5hbWUgPSAnJztcbiAgICB0aGlzLmRldGFpbHMgPSAnJztcbiAgICB0aGlzLmRhdGUgPSAnJztcbiAgICB0aGlzLnByaW9yaXR5ID0gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1Byb2plY3QsIFRhc2t9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==