let btn = document.getElementById('addbtn');

btn.addEventListener("click", function getInput() {
    let inputText = document.getElementById('todo');
    let taskText = inputText.value.trim();

    
    if (taskText === '') {
        alert("Please Enter a Task");
        return;
    }

    
    let taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';


    let taskContent = document.createElement('span');
    taskContent.className = 'task-text';
    taskContent.textContent = taskText;
    taskContainer.appendChild(taskContent);

 
    let doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.className = 'done';
    doneBtn.addEventListener('click', function () {
        taskContainer.classList.toggle('done');
    });
    taskContainer.appendChild(doneBtn);

   
    let delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete';
    delBtn.addEventListener('click', function () {
        taskContainer.remove();
    });
    taskContainer.appendChild(delBtn);

   
    document.getElementById('container').appendChild(taskContainer);

 
    inputText.value = '';
});
