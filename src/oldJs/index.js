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
