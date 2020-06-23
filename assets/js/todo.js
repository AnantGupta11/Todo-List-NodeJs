
// (function () {
//     let tasks = [];
//     const tasksList = document.getElementById('list');
//     const addTaskInput = document.getElementById('add');
//     const tasksCounter = document.getElementById('tasks-counter');
//     const toastContainer = document.getElementById('toast');
    
    
//     function addTaskToDOM (task) {
//       const li = document.createElement('li');
    
//       li.innerHTML = `<input type="checkbox" id="${task.id}" ${task.done ? 'checked' : ''} class="custom-checkbox">
//                       <label for="${task.id}">${task.text}</label>
//                       <img src="bin.svg" class="delete" data-id="${task.id}"/>
//                       `;
//       tasksList.appendChild(li);
//     }
    
//     function renderList () {
//       // first empty out the list
//       tasksList.innerHTML = '';
    
//       for (let i = 0; i < tasks.length; i++) {
//         addTaskToDOM(tasks[i]);
//       }
    
//       // set tasks count
//       tasksCounter.innerHTML = tasks.length;
//     }
    
//     function markTaskAsComplete (taskId) {
//       // find the task
//       const taskIndex = tasks.findIndex(task => task.id === taskId);
    
//       if (taskIndex > -1) {
//         // update the task
//         tasks[taskIndex].done = !tasks[taskIndex].done;
//         renderList();
//         showNotification('success', `Task ${tasks[taskIndex].done ? 'checked' : 'unchecked'} successfully!`);
//         return;
//       }
    
//       // show error
//     }
    
//     function deleteTask (taskId) {
//       // filter out the tasks
//       const newTasks = tasks.filter(function (task) {
//         return task.id !== taskId;
//       });
    
//       tasks = newTasks;
//       renderList();
//       showNotification('error', 'Task deleted successfully!');
//     }
    
//     function addTask (task) {
//       if (task) {
//         tasks.push(task);
//         renderList();
//         showNotification('success', 'Task addedd successfully!');
//         return;
//       }
    
//       // show error
//       showNotification('error', 'Task can not be empty!');
//     }
    
//     function handleClickLisetner (e) {
      
//       if (e.target.className === 'delete') {
//         // handle delete task click
//         const taskId = e.target.dataset.id;
//         deleteTask(taskId);
    
//         return;
//       } else if (e.target.className === 'custom-checkbox') {
//         // handle marking task as complete
//         const taskId = e.target.id;
//         markTaskAsComplete(taskId);
    
//         return;
//       }
//     }
    
//     function handleInputKeypress (e) {
//       if (event.key === 'Enter') {
//         const text = e.target.value;
    
//         if (!text) {
//           showNotification('error', 'Task text can not be empty!');
//           return;
//         }
    
//         const task = {
//           text,
//           id: Date.now().toString(),
//           done: false
//         }
//         e.target.value = '';
//         addTask(task);
//       }
//     }
    
//     function initializeTodoList () {
//       document.addEventListener('click', handleClickLisetner);
//       addTaskInput.addEventListener('keyup', handleInputKeypress);
//     }
    
//     function showNotification (type, message) {
//       if (type === 'error') {
//         toastContainer.classList.remove('toast-success');
//         toastContainer.classList.add('toast-error');
//       } else if (type === 'success') {
//         toastContainer.classList.remove('toast-error');
//         toastContainer.classList.add('toast-success');
//       }
//       toastContainer.style.display = 'block';
//       toastContainer.innerText = message;
    
//       setTimeout(() => {
//         toastContainer.style.display = 'none';
//       }, 1000)
//     }
    
//     initializeTodoList();
    
//   })();
  