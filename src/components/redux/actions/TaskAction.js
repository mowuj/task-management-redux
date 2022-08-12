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
    axios.post("https://todo-app37.herokuapp.com/addTodo",taskItem )
      .then(res => {
        dispatch({type:'ADD_TASK',payload:taskItem})
        dispatch(getTaskDataAction())

    });

    
}