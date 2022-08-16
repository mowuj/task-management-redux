import axios from 'axios';
import * as Types from '../types/types'
export const getTaskDataAction =()=>(dispatch) => {
    axios
    .get("http://todo-app37.herokuapp.com/loadtodo")
    .then(res => {
        let data = res.data
        data.sort();
        data.reverse();
        dispatch({type: Types.GET_TASKS,payload:data})
      // console.log(data);
        
    });
}
export const storeTaskDataAction =(taskItem)=>(dispatch) => {
    if (taskItem.Title.length === 0) {
      alert('Please give a Title !')
    }
    if (taskItem.Description.length === 0) {
      alert('Please give a Description !')
    }
    if (taskItem.Priority.length === 0) {
      alert('Please give a Priority !')
    }
    axios.post("https://todo-app37.herokuapp.com/addTodo",taskItem )
      .then(res => {
        dispatch({type: Types.ADD_TASKS,payload:taskItem})
        dispatch(getTaskDataAction())

    });

    
}
export const changeTaskFormAction =(name,value)=>(dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
 dispatch({type: Types.CHANGE_TASK_INPUT,payload:formData})
}