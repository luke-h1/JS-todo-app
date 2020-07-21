loadEvents();

function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);
    document.getElementById('clear').addEventListener('click', clearList);
    document.querySelector('ul').addEventListener('click', deleteOrTick);
}

// delete tick :

function deleteOrTick(e) {
    if (e.target.className == 'delete') deleteTask(e);
    else {
        tickTask(e);
    }
}

// delete task:

function deleteTask(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

// tick a task:

function tickTask(e) {
    const task = e.target.nextSibling;
    if (e.target.checked) {
        task.style.textDecoration = 'line-through';
        task.style.color = '#ff0000';
    } else {
        task.style.textDecoration = 'none';
        task.style.color = '#2f4f4f';
    }
}

function clearList(e) {
    // Clear out ul innerHTML
    const ul = (document.querySelector('ul').innerHTML = '');
}

// submit data function

function submit(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value != '') addTask(input.value);
    input.value = '';
}

// add To-do tasks

function addTask(task) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = `<span class="delete">x</span><input type="checkbox"><label>${task}`; // fixed on styles.css
    ul.appendChild(li);
    document.querySelector('tasklist').style.display = 'block';
}

