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

