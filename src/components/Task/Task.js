import React, { useEffect, useState } from 'react';
import './Task.css'
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskDataAction } from '../redux/actions/TaskAction';

const Task = () => {
    const [isCreate, setIsCreate] = useState(false);
  const dispatch =useDispatch()
  const tasks =useSelector(state=>state.TaskReducer.tasks)
  useEffect(() => {
      dispatch(getTaskDataAction())
    },[])
    
  

    return (
        <div className='container'>
        {
          isCreate && (
            <TaskForm
              // tasks={tasks} setTasks={setTasks} setIsAdded={setIsAdded}
              // createTask={createTask}
              // title={title} setTitle={setTitle}
              // description={description} setDescription={setDescription}
              // priority={priority} setPriority={setPriority}
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