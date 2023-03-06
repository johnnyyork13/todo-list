const {Project} = require('./addProject.js');

const mainSection = document.getElementById('mainSection');
const addProject = document.getElementById('addProject');

//name project on click

addProject.addEventListener('click', function(){
    if (addProject.children.length === 0) {
        addProject.textContent = "";
        const addProjectNameInput = document.createElement('input');
        addProjectNameInput.type = 'text';
        const addProjectBtn = document.createElement('button');
        addProjectBtn.textContent = 'Add';
        addProject.appendChild(addProjectNameInput);
        addProject.appendChild(addProjectBtn);
    }
    
    addProjectBtn.addEventListener('click', function(){
        if (addProjectNameInput != "") {
            const newProject = new Project(addProject.children[0].value);
            console.log(newProject.name);
        }
    })
    addProject.removeEventListener();
})