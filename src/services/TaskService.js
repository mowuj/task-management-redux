import axios from 'axios';
export const getTaskData = () => {
    axios.get("http://todo-app37.herokuapp.com/loadtodo")
      .then(res => {
      const data=res.data
    console.log(data);
        
    })
}