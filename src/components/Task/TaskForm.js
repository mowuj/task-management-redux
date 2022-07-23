import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const TaskForm = () => {
    return (
        <div container>
            <div>
                <h2>Create Task</h2>
            </div>
            <Form>
      <Form.Group className="mb-3" controlId="title">
        
        <Form.Control type="text" placeholder="Enter Title" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        
        <Form.Control type="text" as="textarea" placeholder="Description" />
                </Form.Group>
                
      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control as="select" >
        <option value={''}>Select Text Priority</option>
        <option value={'Low'}>Low</option>
        <option value={'Medium'}>Medium</option>
                        <option value={'High'}>High</option>
                    </Form.Control>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default TaskForm;