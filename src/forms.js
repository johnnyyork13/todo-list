
function createForms(bodyType) {
    const mainBody = document.getElementById('mainBody');
    //new project body
    switch (bodyType){
        case 'newProject':
            const projectForm = document.createElement('div');
            const projectName = document.createElement('input');
            const projectDetails = document.createElement('input');
            const addProjectBtn = document.createElement('button');
            projectForm.id = 'projectForm';
            projectName.id = 'projectName';
            projectDetails.id = 'projectDetails';
            addProjectBtn.id = 'addProjectBtn';
            projectName.placeholder = 'Project Name';
            projectDetails.placeholder = 'Project Details';
            addProjectBtn.textContent = 'Add Project';
            projectForm.appendChild(projectName);
            projectForm.appendChild(projectDetails);
            projectForm.appendChild(addProjectBtn);
            mainBody.appendChild(projectForm);
            break;
        case 'newTask':
            const newTaskHeader = document.createElement('h3');
            const formTaskList = document.createElement('ul');
            const newTaskBtn = document.createElement('button');
            const finishProjectBtn = document.createElement('button');
            finishProjectBtn.addEventListener('click', function(){
                deleteBody('finishProject');
            })
            newTaskHeader.textContent = 'Current Tasks';
            formTaskList.id = 'formTaskList';
            newTaskBtn.textContent = 'New Task';
            newTaskBtn.id = 'newTaskBtn';
            finishProjectBtn.textContent = 'Done';
            mainBody.appendChild(newTaskHeader);
            mainBody.appendChild(formTaskList);
            mainBody.appendChild(newTaskBtn);
            mainBody.appendChild(finishProjectBtn);
            break;
        case 'addTask':
            const taskHeader = document.createElement('h3');
            const taskForm = document.createElement('div');
            const taskName = document.createElement('input');
            const taskDetails = document.createElement('input');
            const taskDate = document.createElement('input');
            const taskPriority = document.createElement('select');
            const taskPriorityLow = document.createElement('option');
            const taskPriorityMedium = document.createElement('option');
            const taskPriorityHigh = document.createElement('option');
            const addTaskBtn = document.createElement('button');
            taskHeader.id = 'taskHeader';
            taskHeader.textContent = 'Add Task';
            taskForm.id = 'taskForm';
            taskName.id = 'taskName';
            taskDetails.id = 'taskDetails';
            taskDate.id = 'taskDate';
            taskDate.type = 'date';
            taskPriority.id = 'taskPriority';
            taskPriorityLow.textContent = 'Low';
            taskPriorityMedium.textContent = 'Medium';
            taskPriorityHigh.textContent = 'High';
            addTaskBtn.textContent = 'Add Task';
            addTaskBtn.id = 'addTaskBtn';
            taskPriority.appendChild(taskPriorityLow);
            taskPriority.appendChild(taskPriorityMedium);
            taskPriority.appendChild(taskPriorityHigh);
            taskForm.appendChild(taskHeader);
            taskForm.appendChild(taskName);
            taskForm.appendChild(taskDetails);
            taskForm.appendChild(taskDate);
            taskForm.appendChild(taskPriority);
            taskForm.appendChild(addTaskBtn);
            mainBody.appendChild(taskForm);
            break;
        case 'viewProject':
            const viewProjectName = document.createElement('h3');
            const viewProjectDetails = document.createElement('h3');
            const viewProjectDate = document.createElement('h3');
            const viewProjectPriority = document.createElement('h3');
            const viewProjectTasks = document.createElement('ul');
            viewProjectName.id = 'viewProjectName';
            viewProjectDetails.id = 'viewProjectDetails';
            viewProjectDate.id = 'viewProjectDate';
            viewProjectPriority.id = 'viewProjectPriority';
            viewProjectTasks.id = 'viewProjectTasks';
            mainBody.appendChild(viewProjectName);
            mainBody.appendChild(viewProjectDetails);
            mainBody.appendChild(viewProjectDate);
            mainBody.appendChild(viewProjectPriority);
            mainBody.appendChild(viewProjectTasks);
    }
}

function createHeader(){
    if (mainSection.children.length === 0) {
        const mainHeader = document.createElement('div');
        mainHeader.id = 'mainHeader';
        mainSection.appendChild(mainHeader);
    }
}

function updateHeader(bodyType, header){
    const mainHeader = document.getElementById('mainHeader');
    switch (bodyType) {
        case 'newProject':
            mainHeader.textContent = 'Add New Project';
            break;
        case 'nameProject':
            mainHeader.textContent = header;
            break;
    }
}

function createBody(){
    const mainBody = document.createElement('div');
    mainBody.id = 'mainBody';
    mainSection.appendChild(mainBody);
}



function deleteBody(bodyType){
    switch (bodyType) {
        case 'newProject':
            const projectForm = document.getElementById('projectForm');
            projectForm.remove();
            break;
        case 'addTask':
            const taskForm = document.getElementById('taskForm');
            taskForm.remove();
            break;
        case 'finishProject':
            const mainSection = document.getElementById('mainSection');
            for (let i = mainSection.children.length -1; i >= 0; i--){
                let e = mainSection.children[i];
                e.remove();
            }
            break;
    }
}

module.exports = {
    createHeader,
    updateHeader,
    createBody,
    createForms,
    deleteBody}