import React from 'react';
import { Table } from 'react-bootstrap';

const TaskList = ({tasks}) => {
    return (
        <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Index</th>
          <th>Task Title</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Action</th>
        </tr>
      </thead>
          <tbody>
            {
              tasks.map((item, index) => (
                <tr key={index}>
                  <td>{ index+1}</td>
                  <td>{item.title }</td>
                  <td>{ item.description}</td>
                  <td>{ item.priority}</td>
                        <td>
                            
                                
                                <i className='fa fa-pencil text-success pointer' title='Edit Task'></i>
                            
                            
                                <i className='fa fa-trash text-danger ms-3 pointer' title='Delete Task'></i>
                          
                  </td>
                  
        </tr>
              ))
            }
        
        
        
      </tbody>
    </Table>
        </div>
    );
};

export default TaskList;