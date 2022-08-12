
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { storeTaskDataAction } from '../redux/actions/TaskAction';
const TaskForm = () => {
const dispatch =useDispatch()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('')
  const createTask = async (e) => {
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
      
        Title: title,
        Description:description,
        Priority: priority,
      
    }
    // await storeTaskData(taskItem)
    dispatch(storeTaskDataAction(taskItem))
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
        
        <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        
        <Form.Control type="text" as="textarea" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
                </Form.Group>
                
      <Form.Group className="mb-3" controlId="formBasicPassword">
            <select className='form-control' name="" id="" value={priority} onChange={(e)=>setPriority(e.target.value)}>
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