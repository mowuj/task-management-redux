import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
const CounterHit = () => {
    const dispatch = useDispatch();
    const [number,setNumber]=useState()
    return (
        <div>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={()=>dispatch({ type: 'DECREMENT' }) }>-</button>
            <br />
            <input value={number} onChange={(e) =>setNumber(e.target.value)} />
            <button onClick={()=>dispatch({ type: 'INCREMENT',payload:number }) }>Submit</button>
        </div>
    );
};

export default CounterHit;