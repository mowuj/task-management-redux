import React from 'react';
import Counter from '../Counter/Counter';
import CounterHit from '../Counter/CounterHit';
import Task from '../Task/Task';
const Layout = () => {
    return (
        <div>
            <Counter></Counter>
            <CounterHit></CounterHit>
            <Task />
            
            
        </div>
    );
};

export default Layout;