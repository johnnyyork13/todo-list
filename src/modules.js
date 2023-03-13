const {createForm} = require('./forms.js');
const {removeEverything} = require('./forms.js');
const {removeMainBodyContent} = require('./forms.js');
const {Task} = require('./project.js');

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
        location.reload();
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
    const projectBtnContainer = document.createElement('div');
    const editProjectBtn = document.createElement('button');
    const doneBtn = document.createElement('button');
    const closeWindowBtn = document.createElement('button');
    const addNewTaskBtn = document.createElement('div');
    header.textContent = newProject.name;
    projectDetails.textContent = newProject.details;
    mainSection.id = 'mainSection';
    mainHeader.id = 'mainHeader';
    mainBody.id = 'mainBody';
    editProjectBtn.textContent = 'Edit Project';
    editProjectBtn.id = 'editProjectBtn';
    doneBtn.id = 'doneBtn';
    doneBtn.textContent = 'Done';
    projectBtnContainer.id = 'projectBtnContainer';
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
    projectBtnContainer.appendChild(editProjectBtn);
    projectBtnContainer.appendChild(doneBtn);
    mainBody.appendChild(projectBtnContainer);
    mainBody.appendChild(addNewTaskBtn);
    mainSection.appendChild(mainHeader);
    mainSection.appendChild(mainBody);
    container.appendChild(mainSection);
    closeWindowBtn.addEventListener('click', function(){
        removeEverything();
    })
    doneBtn.addEventListener('click', function(){
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
        case 'export':
            const fileNameInput = document.getElementById('fileNameInput');
            if (fileNameInput.value === '') {
                fileNameInput.style.border = '2px solid red';
                return false;
            } else {
                fileNameInput.style.border = '2px solid var(--second)';
                return true;
            }
    }
}

function createExportForm(type) {
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
    exportFormHeader.id = 'exportFormHeader';
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
    if (type === 'excel') {
        exportFormHeader.textContent = 'Export as Excel Spreadsheet';
    } else if (type === 'print') {
        exportFormHeader.textContent = 'Print Document';
    }
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

function exportData(projectList, type){
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
    } else if (projectDrop.value === 'All Projects' && taskDrop.value !== 'All Tasks') {
        for (let i = 0; i < projectList.length; i++) {
            const project = projectList[i];
            for (let x = 0; x < project.taskList.length; x++) {
                const task = project.taskList[x];
                if (task.name === taskDrop.value) {
                    newRow = [project.name, project.details, task.name, task.details, task.date, task.priority];
                    excelArray.push(newRow);
                }
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

    if (type === 'excel') {
        let refinedArray = '';
        excelArray.forEach((e) => {
            refinedArray += e.join(',') + '\n';
        })
    
        const blob = new Blob([refinedArray], {type: 'text/csv;charset=utf-8,'});
        const objUrl = URL.createObjectURL(blob);
    
        return [objUrl, fileNameInput.value];
    } else if (type === 'print') {
        const table = document.createElement('table');
        const caption = document.createElement('caption');
        const tHead = document.createElement('thead');
        const tBody = document.createElement('tbody');
 
        excelArray.forEach((array) => {
            const tr = document.createElement('tr');
            array.forEach((e) => {
                if (array[0] === 'Project Name') {
                    const td = document.createElement('td');
                    td.textContent = e;
                    tr.appendChild(td);
                } else {
                    const td = document.createElement('td');
                    td.textContent = e;
                    tr.appendChild(td);
                }
            })   
            if (array[0] === 'Project Name') {
                tHead.appendChild(tr);
            } else {
                tBody.appendChild(tr);
            } 
            
        })
        caption.textContent = fileNameInput.value;
        table.appendChild(caption);
        table.appendChild(tHead);
        table.appendChild(tBody);
        localStorage.setItem('tableData', table.innerHTML);
    }
    
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
    exportData,
    removeEverything}