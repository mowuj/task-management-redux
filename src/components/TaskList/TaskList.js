import React from 'react';
import { Table } from 'react-bootstrap';
import TaskDetails from '../TaskDetails/TaskDetails';

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
                <TaskDetails key={index} item={ item} index={index} />
              ))
            }
        
        
        
      </tbody>
    </Table>
        </div>
    );
};

export default TaskList;