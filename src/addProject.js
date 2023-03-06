const projects = document.getElementById('projects');
const container = document.getElementById('container');


function Project(){
    const mainBody = document.getElementById('mainBody');

    this.name = '';
    this.details = '';
    this.date = '';
    this.taskList = [];
    const thisProject = this;

    //create DOM elements for sidebar
    const li = document.createElement('li');
    const projectLink = document.createElement('div');

    this.buildNewProjectWindow = () => {
        const nameBox = document.createElement('input');
        nameBox.placeholder = "Name of Project"
        nameBox.type = 'text';
        nameBox.id = 'name';
        const detailBox = document.createElement('input');
        detailBox.placeholder = "Details of Project";
        detailBox.type = 'text'; 
        detailBox.id = 'details';
        const dateBox = document.createElement('input');
        dateBox.type = 'date';
        dateBox.id = 'date';
        const createBtn = document.createElement('button');
        createBtn.textContent = 'Create Project';
        createBtn.id = 'createBtn';
        return [nameBox, detailBox, dateBox, createBtn];
    }

    this.createForm = () => {
        const inputList = thisProject.buildNewProjectWindow();
        for (let i = 0; i < inputList.length; i++) {
            let e = inputList[i];
            mainBody.appendChild(e);
        }
        thisProject.addProject(inputList);
    }

    this.addProject = (inputList) => {
        //give button a listener to fire creation of project
        //create project
        //button is always on the end of the inputList
        const btn = inputList[inputList.length - 1];
        btn.addEventListener('click', function(){
            thisProject.setValues(inputList);
            thisProject.updateProjects(thisProject.name);
            thisProject.cleanUpForm();
            thisProject.addEvent();
        })
    }

    //assign textbox values to project name and details
    this.setValues = function(list){
        for (let i = 0; i < list.length; i++) {
            switch (list[i].id) {
                case 'name':
                    this.name = list[i].value;
                    break;
                case 'details':
                    this.details = list[i].value;
                    break;
                case 'date':
                    this.date = list[i].value;
                    break;
            }
        }
    }

    this.cleanUpForm = () => {
        for (let i = mainBody.children.length - 1; i >= 0; i--) {
            let e = mainBody.children[i];
            e.remove();
        }
    }

    //updates sidebar project list
    this.updateProjects = (projectName) => {
        projectLink.textContent = projectName;
        projectLink.classList.add('projectLink');
        projectLink.id = projectName;
    
        li.appendChild(projectLink);
        projects.appendChild(li);
    
        //change order of projects in list
        projects.insertBefore(li, li.previousElementSibling);
    }
    
    //add event listener to sidebar link
    this.addEvent = () => {
        projectLink.addEventListener('click', function(){
            thisProject.viewProject();
        })
    }

    //view project data when called
    this.viewProject = () => {
        const nameLabel = document.createElement('h3');
        const detailLabel = document.createElement('h3');
        const dateLabel = document.createElement('h3');
    }
}


module.exports = {Project};