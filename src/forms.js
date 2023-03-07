
function createForms(bodyType, project, task) {
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
            if (project === '') {
                projectName.placeholder = 'Project Name';
                projectDetails.placeholder = 'Project Details';
            } else {
                projectName.value = project.name;
                projectDetails.value = project.value;
            }
            addProjectBtn.textContent = 'Add Project';
            projectForm.appendChild(projectName);
            projectForm.appendChild(projectDetails);
            projectForm.appendChild(addProjectBtn);
            mainBody.appendChild(projectForm);
            break;
        case 'newTask':
            const formTaskList = document.createElement('ul');
            const newTaskBtn = document.createElement('button');
            const finishProjectBtn = document.createElement('button');
            finishProjectBtn.addEventListener('click', function(){
                deleteBody('finishProject');
            })
            formTaskList.id = 'formTaskList';
            newTaskBtn.textContent = '+';
            newTaskBtn.id = 'newTaskBtn';
            finishProjectBtn.textContent = 'Done';
            finishProjectBtn.id = 'finishProjectBtn';
            mainBody.appendChild(formTaskList);
            mainBody.appendChild(newTaskBtn);
            mainBody.appendChild(finishProjectBtn);
            break;
        case 'addTask':
            const taskHeader = document.createElement('h3');
            const taskForm = document.createElement('div');
            const taskName = document.createElement('input');
            const taskDetails = document.createElement('input');
            const taskDateContainer = document.createElement('div');
            const taskDateLabel = document.createElement('label');
            const taskDate = document.createElement('input');
            const taskPriorityContainer = document.createElement('div');
            const taskPriorityLabel = document.createElement('label');
            const taskPriority = document.createElement('select');
            const taskPriorityLow = document.createElement('option');
            const taskPriorityMedium = document.createElement('option');
            const taskPriorityHigh = document.createElement('option');
            const addTaskBtn = document.createElement('button');
            taskHeader.id = 'taskHeader';
            taskDetails.id = 'taskDetails';
            taskForm.id = 'taskForm';
            taskName.id = 'taskName';
            taskPriority.id = 'taskPriority';
            taskPriorityLow.textContent = 'Low';
            taskPriorityMedium.textContent = 'Medium';
            taskPriorityHigh.textContent = 'High';
            taskDateContainer.id = 'taskDateContainer';
            taskDateLabel.textContent = 'Task Deadline';
            taskDate.id = 'taskDate';
            taskDate.type = 'date';
            taskPriorityContainer.id = 'taskPriorityContainer';
            taskPriorityLabel.textContent = 'Task Priority';
            addTaskBtn.textContent = 'Add Task';
            addTaskBtn.id = 'addTaskBtn';
            if (task === '') {
                taskHeader.textContent = 'New Task';
                taskName.placeholder = 'Enter Task Name';
                taskDetails.placeholder = 'Enter Task Details';
            } else {
                taskHeader.textContent = task.name;
                taskName.value = task.name;
                taskDetails.value = task.details;
                taskDate.value = task.date;
                taskPriority.value = task.priority;
            }
            taskPriority.appendChild(taskPriorityLow);
            taskPriority.appendChild(taskPriorityMedium);
            taskPriority.appendChild(taskPriorityHigh);
            taskPriorityContainer.appendChild(taskPriorityLabel);
            taskPriorityContainer.appendChild(taskPriority);
            taskDateContainer.appendChild(taskDateLabel);
            taskDateContainer.appendChild(taskDate);
            taskForm.appendChild(taskHeader);
            taskForm.appendChild(taskName);
            taskForm.appendChild(taskDetails);
            taskForm.appendChild(taskDateContainer);
            taskForm.appendChild(taskPriorityContainer);
            taskForm.appendChild(addTaskBtn);
            mainBody.appendChild(taskForm);
            break;
        case 'viewProject':
            const viewProjectName = document.createElement('h3');
            const viewProjectDetails = document.createElement('h4');
            const viewProjectTasks = document.createElement('ul');
            viewProjectName.id = 'viewProjectName';
            viewProjectDetails.id = 'viewProjectDetails';
            viewProjectTasks.id = 'viewProjectTasks';
            mainBody.appendChild(viewProjectName);
            mainBody.appendChild(viewProjectDetails);
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