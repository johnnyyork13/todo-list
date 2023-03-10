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
    const mainBody = document.createElement('div');
    mainSection.id = 'mainSection';
    mainHeader.id = 'mainHeader';
    header.textContent = 'All Tasks';
    mainBody.id = 'mainBody';

    for (let i = 0; i < projectList.length; i++) {
        const project = projectList[i];
        for (let x = 0; x < project.taskList.length; x++) {
            const task = project.taskList[x];
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
    }
    mainHeader.appendChild(header);
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