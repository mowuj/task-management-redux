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
    });
}
export const getTaskDetailAction =(id)=>(dispatch) => {
    axios
    .get(`http://todo-app37.herokuapp.com/singleTodo?id=${id}`)
    .then(res => {
        let data = res.data
        dispatch({type: Types.GET_TASK_DETAIL,payload:data})
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
export const updateTaskDataAction =(taskItem,id)=>(dispatch) => {
    if (taskItem.Title.length === 0) {
      alert('Please give a Title !')
    }
    if (taskItem.Description.length === 0) {
      alert('Please give a Description !')
    }
    if (taskItem.Priority.length === 0) {
      alert('Please give a Priority !')
    }
  axios.patch(`http://todo-app37.herokuapp.com/updateTodo?id=${id}`,
    taskItem)
    .then(res => {
      if (res.data.ok == 1) {
        alert('Task Updated Successfully')
      }
      else {
        alert("Something Went wrong")
      }
    });

    
}
export const deleteTaskDataAction =(id)=>(dispatch) => {
    
  axios
    .delete(`http://todo-app37.herokuapp.com/deleteTodo?id=${id}`)
    .then(res => {
      if (res.data.ok == 1) {
        alert('Are Yoy Sure?')
        dispatch(getTaskDataAction())
      }
      else {
        alert("Something Went wrong")
      }
    });

    
}
export const changeTaskFormAction =(name,value)=>(dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
 dispatch({type: Types.CHANGE_TASK_INPUT,payload:formData})
}