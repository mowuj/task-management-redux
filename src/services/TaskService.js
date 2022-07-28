import axios from 'axios';
export const getTaskData = async () => {
  let data = [];
  await axios.get("http://todo-app37.herokuapp.com/loadtodo")
    .then(res => {
      data = res.data
      // console.log(data);
        
    });
  return data;
}
export const storeTaskData = async (taskItem) => {
  
  let isAdded = false;
  await axios.post("https://todo-app37.herokuapp.com/addTodo",taskItem )
      .then(res => {
        
        isAdded = res.data;
    });
  return isAdded;
}