/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
//import modules
const {Project} = __webpack_require__(/*! ./addProject.js */ "./src/addProject.js");

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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRCxRQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGtCQUFrQjs7Ozs7O1VDOUdsQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7QUN0QkE7QUFDQSxPQUFPLFNBQVMsRUFBRSxtQkFBTyxDQUFDLDRDQUFpQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG5cblxuZnVuY3Rpb24gUHJvamVjdCgpe1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Cb2R5Jyk7XG5cbiAgICB0aGlzLm5hbWUgPSAnJztcbiAgICB0aGlzLmRldGFpbHMgPSAnJztcbiAgICB0aGlzLmRhdGUgPSAnJztcbiAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgY29uc3QgdGhpc1Byb2plY3QgPSB0aGlzO1xuXG4gICAgLy9jcmVhdGUgRE9NIGVsZW1lbnRzIGZvciBzaWRlYmFyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0aGlzLmJ1aWxkTmV3UHJvamVjdFdpbmRvdyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5hbWVCb3gucGxhY2Vob2xkZXIgPSBcIk5hbWUgb2YgUHJvamVjdFwiXG4gICAgICAgIG5hbWVCb3gudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgbmFtZUJveC5pZCA9ICduYW1lJztcbiAgICAgICAgY29uc3QgZGV0YWlsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGV0YWlsQm94LnBsYWNlaG9sZGVyID0gXCJEZXRhaWxzIG9mIFByb2plY3RcIjtcbiAgICAgICAgZGV0YWlsQm94LnR5cGUgPSAndGV4dCc7IFxuICAgICAgICBkZXRhaWxCb3guaWQgPSAnZGV0YWlscyc7XG4gICAgICAgIGNvbnN0IGRhdGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlQm94LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGRhdGVCb3guaWQgPSAnZGF0ZSc7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjcmVhdGVCdG4udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFByb2plY3QnO1xuICAgICAgICBjcmVhdGVCdG4uaWQgPSAnY3JlYXRlQnRuJztcbiAgICAgICAgcmV0dXJuIFtuYW1lQm94LCBkZXRhaWxCb3gsIGRhdGVCb3gsIGNyZWF0ZUJ0bl07XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dExpc3QgPSB0aGlzUHJvamVjdC5idWlsZE5ld1Byb2plY3RXaW5kb3coKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlID0gaW5wdXRMaXN0W2ldO1xuICAgICAgICAgICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1Byb2plY3QuYWRkUHJvamVjdChpbnB1dExpc3QpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkUHJvamVjdCA9IChpbnB1dExpc3QpID0+IHtcbiAgICAgICAgLy9naXZlIGJ1dHRvbiBhIGxpc3RlbmVyIHRvIGZpcmUgY3JlYXRpb24gb2YgcHJvamVjdFxuICAgICAgICAvL2NyZWF0ZSBwcm9qZWN0XG4gICAgICAgIC8vYnV0dG9uIGlzIGFsd2F5cyBvbiB0aGUgZW5kIG9mIHRoZSBpbnB1dExpc3RcbiAgICAgICAgY29uc3QgYnRuID0gaW5wdXRMaXN0W2lucHV0TGlzdC5sZW5ndGggLSAxXTtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXNQcm9qZWN0LnNldFZhbHVlcyhpbnB1dExpc3QpO1xuICAgICAgICAgICAgdGhpc1Byb2plY3QudXBkYXRlUHJvamVjdHModGhpc1Byb2plY3QubmFtZSk7XG4gICAgICAgICAgICB0aGlzUHJvamVjdC5jbGVhblVwRm9ybSgpO1xuICAgICAgICAgICAgdGhpc1Byb2plY3QuYWRkRXZlbnQoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvL2Fzc2lnbiB0ZXh0Ym94IHZhbHVlcyB0byBwcm9qZWN0IG5hbWUgYW5kIGRldGFpbHNcbiAgICB0aGlzLnNldFZhbHVlcyA9IGZ1bmN0aW9uKGxpc3Qpe1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN3aXRjaCAobGlzdFtpXS5pZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBsaXN0W2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkZXRhaWxzJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzID0gbGlzdFtpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSA9IGxpc3RbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jbGVhblVwRm9ybSA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IG1haW5Cb2R5LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgZSA9IG1haW5Cb2R5LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vdXBkYXRlcyBzaWRlYmFyIHByb2plY3QgbGlzdFxuICAgIHRoaXMudXBkYXRlUHJvamVjdHMgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgcHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpbmsnKTtcbiAgICAgICAgcHJvamVjdExpbmsuaWQgPSBwcm9qZWN0TmFtZTtcbiAgICBcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQocHJvamVjdExpbmspO1xuICAgICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChsaSk7XG4gICAgXG4gICAgICAgIC8vY2hhbmdlIG9yZGVyIG9mIHByb2plY3RzIGluIGxpc3RcbiAgICAgICAgcHJvamVjdHMuaW5zZXJ0QmVmb3JlKGxpLCBsaS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKTtcbiAgICB9XG4gICAgXG4gICAgLy9hZGQgZXZlbnQgbGlzdGVuZXIgdG8gc2lkZWJhciBsaW5rXG4gICAgdGhpcy5hZGRFdmVudCA9ICgpID0+IHtcbiAgICAgICAgcHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpc1Byb2plY3Qudmlld1Byb2plY3QoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvL3ZpZXcgcHJvamVjdCBkYXRhIHdoZW4gY2FsbGVkXG4gICAgdGhpcy52aWV3UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY29uc3QgZGV0YWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtQcm9qZWN0fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy9pbXBvcnQgbW9kdWxlc1xuY29uc3Qge1Byb2plY3R9ID0gcmVxdWlyZSgnLi9hZGRQcm9qZWN0LmpzJyk7XG5cbi8vZ2V0IGVsZW1lbnRzIGZyb20gRE9NXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbmNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdExpbmsnKTtcblxuLy9ob2xkIHByb2plY3RzIGluIGxpc3RcbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5cbi8vc2lkZWJhclxuLy9hZGQgcHJvamVjdCBidXR0b24gXG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZiAoY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBidWlsZFdpbmRvdygnQWRkIE5ldyBQcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCgpO1xuICAgICAgICAvL2FkZCBwcm9qZWN0IHRvIGxpc3RcbiAgICAgICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgLy9zZXQgdXAgdGhlIG5ldyBmb3JtIGluIHRoZSBjb250YWluZXJcbiAgICAgICAgbmV3UHJvamVjdC5jcmVhdGVGb3JtKCk7XG4gICAgfVxuICAgIFxufSlcblxuZnVuY3Rpb24gYnVpbGRXaW5kb3codGV4dCl7XG4gICAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbWFpblNlY3Rpb24uaWQgPSAnbWFpblNlY3Rpb24nO1xuICAgIG1haW5IZWFkZXIuaWQgPSAnbWFpbkhlYWRlcic7XG4gICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XG4gICAgbWFpbkJvZHkuaWQgPSAnbWFpbkJvZHknO1xuXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluQm9keSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblNlY3Rpb24pO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=