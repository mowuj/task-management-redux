import axios from 'axios';
import React, { useEffect, useState } from 'react';
const useTaskData = () => {
    
    const [tasks, setTasks] = useState([])
    useEffect( () => {
        axios.get("http://todo-app37.herokuapp.com/loadtodo")
            .then(res => {
                const data = res.data
                setTasks(data);
        
            })
    
    }, []);
    return[tasks,setTasks]
}
export default useTaskData;