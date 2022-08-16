import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
    
    const counter =useSelector(state=>state.CounterReducer.counter)
    return (
        <div>
            <h2>
                
                {counter}
               
            </h2>
        </div>
    );
};

export default Counter;