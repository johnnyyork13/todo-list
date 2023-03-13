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
const {validateInputs} = require('./modules.js');
const {updateProjectList} = require('./modules.js');
const {updateProjectInStorage} = require('./modules.js');
const {viewProject} = require('./modules.js');
const {createExportForm} = require('./modules.js');
const {populateExportForm} = require('./modules.js');
const {exportDataAsExcel} = require('./modules.js');
const {removeEverything} = require('./modules.js');
const { validate } = require('schema-utils');

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
        const validation = validateInputs('export');
        if (validation) {
            const exportValues = exportDataAsExcel(projectList);
            const objUrl = exportValues[0];
            const fileName = exportValues[1];
            exportFormBtn.setAttribute('href', objUrl);
            exportFormBtn.setAttribute('download', `${fileName}.xls`);
            removeEverything();
            changeOverlay('light');
        }
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








