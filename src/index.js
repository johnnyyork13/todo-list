const {Project} = require('./project.js');
const {Task} = require('./task.js');
const {createHeader} = require('./forms.js');
const {updateHeader} = require('./forms.js');
const {createBody} = require('./forms.js');
const {createForms} = require('./forms.js');
const {deleteBody} = require('./forms.js');

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