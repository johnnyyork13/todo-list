function Task(){
    this.name = '';
    this.details = '';
    this.date = '';
    this.buildForm = function(){
        const mainBody = document.getElementById('mainBody');
        const name = document.createElement('input');
        name.type = 'text';
        
        const submitBtn = document.createElement('button');
        submitBtn.textContent = "Submit";
        
        mainBody.appendChild(name);
        mainBody.appendChild(submitBtn);
        
        submitBtn.addEventListener('click', function(){
            if (name.value != "") {
                console.log(name.value);
                return [name.value];
            }
        })
}


}

const myTask = new Task();

module.exports = {Task};