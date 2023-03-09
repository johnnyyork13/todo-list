const {Task} = require('./task.js');

const projects = document.getElementById('projects');
const container = document.getElementById('container');


function Project(){
    const mainBody = document.getElementById('mainBody');

    this.name = '';
    this.details = '';
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
        const createBtn = document.createElement('button');
        createBtn.textContent = 'Create Project';
        createBtn.id = 'createBtn';
        return [nameBox, detailBox, createBtn];
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
            thisProject.cleanUpForm('body');
            thisProject.addEvent();
            thisProject.setHeader(thisProject.name);
            thisProject.addTasks();
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
            }
        }
    }

    this.cleanUpForm = (whichElements) => {
        if (whichElements === "body") {
            for (let i = mainBody.children.length - 1; i >= 0; i--) {
                let e = mainBody.children[i];
                e.remove();
            }
        } else if (whichElements === "all") {
            for (let i = mainBody.children.length - 1; i >= 0; i--) {
                let e = mainBody.children[i];
                e.remove();
            } 
            for (let i = container.children.length - 1; i >= 0; i--){
                let e = container.children[i];
                e.remove();
            }
        }
        
    }

    this.setHeader = (name) => {
        const header = document.getElementById('header');
        header.textContent = name;
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

    this.buildProjectDetails = () => {
        const nameLabel = document.createElement('h3');
        const detailLabel = document.createElement('h3');
        const taskList = document.createElement('ul');

        nameLabel.textContent = `Project Name: ${thisProject.name}`;
        detailLabel.textContent = `Project Details: ${thisProject.details}`;
        taskList.id = `${thisProject.name}list`

        if (mainBody.children.length === 0) {
            mainBody.appendChild(nameLabel);
            mainBody.appendChild(detailLabel);
            mainBody.appendChild(taskList);
        }

        return taskList;
    }

    this.taskForm = () => {
        const taskForm = document.createElement('div');
        const taskName = document.createElement('input');
        const taskDate = document.createElement('input');
        const taskDetails = document.createElement('input');
        const taskPriority = document.createElement('select');
        const priorityLow = document.createElement('option');
        const priorityMedium = document.createElement('option');
        const priorityHigh = document.createElement('option');
        const addTaskBtn = document.createElement('button');
        
        taskForm.id = 'taskList';
        taskName.type = 'text';
        taskDate.type = 'date';
        taskDetails.type = 'text';
        priorityLow.textContent = 'Low';
        priorityMedium.textContent = 'Medium';
        priorityHigh.textContent = 'High';
        addTaskBtn.textContent = 'Add Task';

        taskPriority.appendChild(priorityLow);
        taskPriority.appendChild(priorityMedium);
        taskPriority.appendChild(priorityHigh);

        taskForm.appendChild(taskName);
        taskForm.appendChild(taskDetails);
        taskForm.appendChild(taskDate);
        taskForm.appendChild(taskPriority);
        taskForm.appendChild(addTaskBtn);

        mainBody.appendChild(taskForm);

        return [taskName, taskDate, taskDetails, taskPriority, addTaskBtn];
    }

    this.updateTaskList = (task) => {
        const taskList = document.getElementById(`${thisProject.name}list`);
        const newTask = document.createElement('li');
        newTask.textContent = task.name;

        taskList.appendChild(newTask);
    }

    this.addAnotherTask = () => {
        const addAnotherTask = document.createElement('button');
        addAnotherTask.textContent = 'Add Another Task';

        mainBody.appendChild(addAnotherTask);
        addAnotherTask.addEventListener('click', function(){
            thisProject.addTasks();
            addAnotherTask.remove();
        })

    }

    this.addTasks = () => {
        //grab taskList from buildProjectDetails 
        const taskList = thisProject.buildProjectDetails();
        //grab taskform from taskForm and build form
        const taskForm = thisProject.taskForm();
        //taskbtn is last element in task form
        const addTaskBtn = taskForm[taskForm.length - 1];

        addTaskBtn.addEventListener('click', function(){
            const newTask = new Task();
            newTask.name = taskForm[0].value;
            newTask.date = taskForm[1].value;
            newTask.details = taskForm[2].value;
            newTask.priority = taskForm[3].value;
            newTask.project = thisProject.name;
            thisProject.updateTaskList(newTask);
            thisProject.emptyTaskForm();
            thisProject.addAnotherTask();
            thisProject.taskList.push(newTask);
            console.log(thisProject.taskList);
        })
    }

    this.emptyTaskForm = () => {
        const taskList = document.getElementById('taskList');
        for (let i = taskList.length; i >= 0; i--) {
            let e = taskList[i];
            e.remove();
        }
        taskList.remove();
    }
}


module.exports = {Project};