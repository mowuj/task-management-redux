import React from 'react';

const TaskDetails = ({item,index}) => {
    return (
        
            <tr>
                <td>{ index+1}</td>
                <td>{item.title }</td>
                <td>{ item.description}</td>
                <td>{ item.priority}</td>
                        <td>
                            
                                
                                <i className='fa fa-pencil text-success pointer' title='Edit Task'></i>
                            
                            
                                <i className='fa fa-trash text-danger ms-3 pointer' title='Delete Task'></i>
                </td>
        </tr>
    );
};

export default TaskDetails;