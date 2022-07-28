import React, { useEffect, useState } from 'react';

import './Task.css'
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import { getTaskData } from '../../services/TaskService';
import useTaskData from '../../hooks/useTaskData';

const Task = () => {
    const [isCreate, setIsCreate] = useState(false);
  const [tasks, setTasks] = useTaskData()
  const [isAdded, setIsAdded] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState();
  const createTask = (e) => {
    e.preventDefault();

    if (title.length === 0) {
      alert('Please give a Title !')
    }
    if (description.length === 0) {
      alert('Please give a Description !')
    }
    if (priority.length === 0) {
      alert('Please give a Priority !')
    }
    const taskItem = {
      
      title,
      description,
      priority,
    }
    const taskData = tasks;
    taskData.unshift(taskItem);
    setTasks(taskData)
    setIsAdded(true)
    setTitle('')
    setDescription('')
    setPriority('')
  }

    return (
        <div className='container'>
        {
          isCreate && (
            <TaskForm
              tasks={tasks} setTasks={setTasks} setIsAdded={setIsAdded}
              createTask={createTask}
              title={title} setTitle={setTitle}
              description={description} setDescription={setDescription}
              priority={priority} setPriority={setPriority}
            ></TaskForm>
                )
            }
            
            <div>
                <div className='float-start'>
                <h2 className='mt-5 pb-5'>My Task</h2>
            </div>
            <div className='float-end'>
                    <h2><button onClick={()=>setIsCreate(isCreate ?false :true) }
                        className='btn btn-primary'>
                        <i className='fa fa-plus-circle pointer' title='Create Task'>
                        </i></button></h2>
            </div>
            <div className='clearfix'></div>
        </div>
        
            <TaskList tasks={tasks}></TaskList>
        </div>
    );
};

export default Task;