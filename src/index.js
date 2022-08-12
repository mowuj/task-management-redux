import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
const initalizeSate = {
  counter: 100,
  tasks:[]

};

function CounterReducer(state=initalizeSate,action) {
  switch (action.type) {
    case 'GET_COUNTER':
      return {
        ...state,
      };
      break;
    case 'INCREMENT':
      let updateInc = typeof action.payload ==='undefined'? 1:action.payload
      updateInc=parseInt(updateInc)
      return {
        ...state,
        counter:state.counter+updateInc
      };
    case 'UPDATE':
      return {
        ...state,
        counter:state.counter+parseInt(action.payload)
      };
    case 'GET_TASKS':
      return {
        ...state,
        tasks:action.payload
      };
    case 'ADD_TASK':
      return {
        ...state,
        
      };
      break;
    case 'DECREMENT':
      return {
        ...state,
        counter:state.counter-1
      };
      break;

    default:
      break;
  }
  return state;
}
// set a store
let store = createStore(CounterReducer,
window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
