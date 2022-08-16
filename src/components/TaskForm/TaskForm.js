
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTaskFormAction, storeTaskDataAction } from '../redux/actions/TaskAction';
const TaskForm = () => {
  const dispatch = useDispatch();
  const taskForm =useSelector((state)=>state.TaskReducer.taskForm)
  const handleChangeInput = (name,value) => {
    dispatch(changeTaskFormAction(name, value));
  }
  const createTask = async (e) => {
    e.preventDefault();

  

    // await storeTaskData(taskItem)
    dispatch(storeTaskDataAction(taskForm))
    // let data = await getTaskData();
    //   data.sort();
    //   data.reverse();
    //   dispatch({type:"GET_TASKS",payload:data})
      // setTitle('')
      // setDescription('')
      // setPriority('')

  }
    return (
        <div container>
            <div>
                <h2>Create Task</h2>
            </div>
            <Form onSubmit={(e)=>createTask(e)}>
      <Form.Group className="mb-3" controlId="title">
        
            <Form.Control
              type="text"
              placeholder="Enter Title"
              value={taskForm.Title} onChange={(e) => handleChangeInput("Title",e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        
            <Form.Control
              type="text" as="textarea"
              placeholder="Description"
            value={taskForm.Description} onChange={(e) => handleChangeInput("Description",e.target.value)}/>
                </Form.Group>
                
      <Form.Group className="mb-3" controlId="formBasicPassword">
            <select className='form-control' name="" id=""
            value={taskForm.Priority} onChange={(e) => handleChangeInput("Priority",e.target.value)}>
              <option value={''}>Select Text Priority</option>
              <option value={'Low'}>Low</option>
              <option value={'Medium'}>Medium</option>
              <option value={'High'}>High</option>
        </select>
        
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default TaskForm;