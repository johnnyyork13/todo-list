const {Project} = require('./project.js');
const {Task} = require('./project.js');
const {createForm} = require('./forms.js');
const {takeValuesAndCreateProject} = require('./modules.js');
const {removeMainBodyContent} = require('./modules.js');
const {removeEverything} = require('./modules.js');
const {showAddTaskToProjectPage} = require('./modules.js');
const {takeValuesAndCreateTask} = require('./modules.js');
const {addProjectToProjectList} = require('./modules.js');
const {viewObject} = require('./modules.js');

const addProject = document.getElementById('addProject');
const projectList = [];



//test code
const testTask = new Task();
testTask.name = 'Test Task';
testTask.details = 'Test Details';
testTask.date = '05/13/1991';
testTask.priority = 'High';

const testProject = new Project();
testProject.name = 'Test Project';
testProject.details = 'Test Details';
testProject.taskList.push(testTask);

addProjectToProjectList(projectList, testProject);

const allTasksBtn = document.getElementById('allTasksBtn');
allTasksBtn.addEventListener('click',function(){
    createForm('task', testTask);
})
//end test code



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
    })
})

function addTaskToProject(project){
    const addNewTaskBtn = document.getElementById('addNewTaskBtn');
    addNewTaskBtn.addEventListener('click', function(){
        createForm('task', '');
        const addTaskBtn = document.getElementById('addTaskBtn');
        addTaskBtn.addEventListener('click', function(){
            const newTask = new Task();
            takeValuesAndCreateTask(newTask);
            project.taskList.push(newTask);
            removeMainBodyContent();
            showAddTaskToProjectPage(project);
            addTaskToProject(project);
        })
    })
}









