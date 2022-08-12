import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
    
    const counter =useSelector(state=>state.counter)
    return (
        <div>
            <h2>
                
                {counter}
               
            </h2>
        </div>
    );
};

export default Counter;