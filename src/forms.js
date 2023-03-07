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
            const taskForm = document.createElement('div');
            const taskName = document.createElement('input');
            const taskDetails = document.createElement('input');
            const taskDate = document.createElement('input');
            const taskPriority = document.createElement('select');
            const taskPriorityLow = document.createElement('option');
            const taskPriorityMedium = document.createElement('option');
            const taskPriorityHigh = document.createElement('option');
            const addTaskBtn = document.createElement('button');
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
            taskForm.appendChild(taskName);
            taskForm.appendChild(taskDetails);
            taskForm.appendChild(taskDate);
            taskForm.appendChild(taskPriority);
            taskForm.appendChild(addTaskBtn);
            mainBody.appendChild(taskForm);
            break;
    }
}

function createHeader(){
    if (mainSection.children.length === 0) {
        const mainHeader = document.createElement('div');
        mainHeader.id = 'mainHeader';
        mainSection.appendChild(mainHeader);
    }
}

function updateHeader(bodyType){
    const mainHeader = document.getElementById('mainHeader');
    switch (bodyType) {
        case 'newProject':
            mainHeader.textContent = 'Add New Project';
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
        case 'newTask':
            const taskForm = document.getElementById('taskForm');
            taskForm.remove();
    }
}

module.exports = {
    createHeader,
    updateHeader,
    createBody,
    createForms,
    deleteBody}