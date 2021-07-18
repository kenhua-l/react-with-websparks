import React, { useEffect, useState } from 'react';
import TodoList from '../components/TodoList';
import TodoAdd from '../components/TodoAdd';
import Api from '../helpers/Api';

async function fetchTasks() {
  var tasksArray = [];
  await Api.getTasks().then((res) => {
    var taskList = res.data;
    taskList.forEach((task) => {
      tasksArray.push({
        task: task,
        editMode: false
      })
    });
  }).catch((err) => {
    console.log('Error fetching data: ' + err);
  });
  return tasksArray;
}

function TodoListContainerStateless(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const asyncFetchTasks = async () => {
      var tasks = await fetchTasks();
      setTasks(tasks);
    }
    asyncFetchTasks();
  }, []);

  function handleAdd(newTaskName) {
    let newTasks = [...tasks];
    var newTask = {
      task: newTaskName,
      editMode: false
    }
    newTasks = newTasks.concat(newTask);
    setTasks(newTasks);
  }

  function handleDelete(id) {
    let newTasks = [...tasks];
    newTasks.splice(id, 1);
    setTasks(newTasks);
  }

  function handleEdit(id) {
    let newTasks = [...tasks];
    var taskToEdit = newTasks[id];
    taskToEdit.editMode = true;
    newTasks[id] = taskToEdit;
    setTasks(newTasks);
  }

  function editTask(id, newTask) {
    let newTasks = [...tasks];
    var taskToEdit = newTasks[id];
    taskToEdit.task = newTask;
    taskToEdit.editMode = false;
    newTasks[id] = taskToEdit;
    setTasks(newTasks);
  }

  return (
    <section>
        <div className="container">
          <h1>{props.title}</h1>
          <TodoAdd 
            onAdd={handleAdd}
          />
          <TodoList 
            taskList={tasks}
            onEdit={handleEdit}
            onDelete={handleDelete}
            editTask={editTask}
          /> 
        </div>
      </section>
  );
}

export default TodoListContainerStateless;
