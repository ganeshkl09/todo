function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;
  li.onclick = () => li.classList.toggle('done');

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '❌';
  removeBtn.style.marginLeft = '10px';
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}
