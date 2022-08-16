
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { changeTaskFormAction, getTaskDetailAction, storeTaskDataAction, updateTaskDataAction } from '../redux/actions/TaskAction';
import { useEffect } from 'react';
const EditTask = () => {
    const dispatch = useDispatch();
    const params = useParams()
    const { id } = params;
  const taskForm =useSelector((state)=>state.TaskReducer.taskForm)

  const handleChangeInput = (name,value) => {
    dispatch(changeTaskFormAction(name, value));
    }
    useEffect(() => {
      dispatch(getTaskDetailAction(id));
    },[])
  const updateTask = async (e) => {
    e.preventDefault();

    dispatch(updateTaskDataAction(taskForm,id))

  }
    return (
        <div container>
            <div>
                <h2>Create Task</h2>
            </div>
            <Form onSubmit={(e)=>updateTask(e)}>
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

export default EditTask;