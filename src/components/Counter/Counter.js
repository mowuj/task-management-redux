import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
    const dispatch=useDispatch()
    const counter =useSelector(state=>state.counter)
    return (
        <div>
            <h2>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
                {counter}
               <button onClick={()=>dispatch({ type: 'DECREMENT' }) }>-</button> {""}
            </h2>
        </div>
    );
};

export default Counter;