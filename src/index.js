const {Project} = require('./project.js');
const {Task} = require('./project.js');
const {createForm} = require('./forms.js');
const {takeValuesAndCreateProject} = require('./modules.js');
const {removeMainBodyContent} = require('./modules.js');
const {showAddTaskToProjectPage} = require('./modules.js');
const {takeValuesAndCreateTask} = require('./modules.js');
const {addProjectToProjectList} = require('./modules.js');
const {changeOverlay} = require('./modules.js');
const {viewTasks} = require('./modules.js');
const {setHeader} = require('./modules.js');
const {addProjectToStorage} = require('./modules.js');
const {updateProjectInStorage} = require('./modules.js');

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
    
})

const allTasksBtn = document.getElementById('allTasksBtn');
allTasksBtn.addEventListener('click',function(){
    viewTasks(projectList, 'all');
})

const todayBtn = document.getElementById('todayBtn');
todayBtn.addEventListener('click', function(){
    
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








