import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

import './Task.css'
import TaskForm from './TaskForm';
const Task = () => {
    const [isCreate, setIsCreate] = useState(false);
    return (
        <div className='container'>
            {
                isCreate && (
                    <TaskForm></TaskForm>
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
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Title</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Test</td>
          <td>Description</td>
          <td>High</td>
                        <td>
                            
                                
                                <i className='fa fa-pencil text-success pointer' title='Edit Task'></i>
                            
                            
                                <i className='fa fa-trash text-danger ms-3 pointer' title='Delete Task'></i>
                          
          </td>
        </tr>
        
        
      </tbody>
    </Table>
        </div>
    );
};

export default Task;