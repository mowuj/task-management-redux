import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { deleteTaskDataAction } from '../redux/actions/TaskAction';
const TaskDetails = ({ item, index }) => {
    const dispatch=useDispatch()
    return (
        
            <tr>
                <td>{ index+1}</td>
                <td>{item?.Title }</td>
                <td>{ item?.Description}</td>
                <td>{ item?.Priority}</td>
                        <td>
                           <Link to={`/edit/${item._id}`}>
                             <i className='fa fa-pencil text-success pointer' title='Edit Task'></i></Link> 
                                
                
                    <i className='fa fa-trash text-danger ms-3 pointer' title='Delete Task'
                    onClick={()=>dispatch(deleteTaskDataAction(item._id))}
                    ></i>
                
                            
                            
                                
                </td>
        </tr>
    );
};

export default TaskDetails;