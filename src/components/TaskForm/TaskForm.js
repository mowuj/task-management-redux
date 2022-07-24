
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const TaskForm = ({tasks,setTasks,setIsAdded,createTask,title,setTitle,description,setDescription,priority,setPriority}) => {

  
  
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