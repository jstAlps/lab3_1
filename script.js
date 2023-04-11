
// Функція для додавання нової задачі до списку taskList
function addTask(event) {
  event.preventDefault();
  if (taskInput.value) { //перевірка щоб не заповняти список пустими строками
    const taskItem = document.createElement('li'); //створення елементу li
    const taskText = document.createElement('p');
    taskText.innerText = taskInput.value; //текст у li
    taskItem.appendChild(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = '';
    taskItem.addEventListener('click', completeTask); //обробник , коли натискають на елемент списку
    const deleteButton = document.createElement('button'); //створення кнопки видалення задачі
    deleteButton.innerText = 'Видалити';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', deleteTask); //обробник події , коли натискають на кнопку видалення
    taskItem.appendChild(deleteButton);
  }
}

// Функція для видалення задачі із li
function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskList.removeChild(taskItem);
}

// Функція для позначення завдання як виконане
function completeTask(event) {
  const taskItem = event.target;
  taskItem.classList.toggle('done');
}

// Додавання обробника подій до форми taskForm
taskForm.addEventListener('submit', addTask);
