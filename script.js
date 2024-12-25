function add_butt() {
    let taskValue = document.getElementById('inp').value;
    let taskListContainer = document.getElementById('html_div');

    let taskDiv = document.createElement('div');
    taskDiv.className = 'js_div';

    let taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.className = 'js_check';

    taskCheckbox.addEventListener('change', function() {
        if (taskCheckbox.checked) {
            taskDiv.classList.add('completed');
        } else {
            taskDiv.classList.remove('completed');
        }
    });

    let deleteButton = document.createElement('button');
    deleteButton.className = 'js_delete';
    let delIcon = document.createElement('i');
    delIcon.className = "bi bi-trash";
    deleteButton.appendChild(delIcon);

    deleteButton.addEventListener('click', function() {
        taskDiv.remove();
    });

    taskDiv.innerHTML += taskValue;

    taskDiv.insertBefore(taskCheckbox, taskDiv.firstChild);
    taskDiv.appendChild(deleteButton);

    taskListContainer.prepend(taskDiv);
    document.getElementById('inp').value = '';
}
