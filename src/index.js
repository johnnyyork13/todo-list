//import modules
const {Project} = require('./addProject.js');

//get elements from DOM
const addProject = document.getElementById('addProject');
const container = document.getElementById('container');
const projectLink = document.getElementsByClassName('projectLink');

//hold projects in list
const projectList = [];

//sidebar
//add project button 
addProject.addEventListener('click', function(){
    if (container.children.length === 0) {
        buildWindow('Add New Project');
        const newProject = new Project();
        //add project to list
        projectList.push(newProject);
        //set up the new form in the container
        newProject.createForm();
    }
    
})

function buildWindow(text){
    const mainSection = document.createElement('div');
    const mainHeader = document.createElement('div');
    const header = document.createElement('h2');
    const mainBody = document.createElement('div');

    mainSection.id = 'mainSection';
    mainHeader.id = 'mainHeader';
    header.id = 'header';
    mainBody.id = 'mainBody';

    header.textContent = text;

    mainHeader.appendChild(header);
    mainSection.appendChild(mainHeader);
    mainSection.appendChild(mainBody);

    container.appendChild(mainSection);
}

