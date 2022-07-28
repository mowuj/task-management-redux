import { getValue } from '@testing-library/user-event/dist/utils';
import { createStore } from 'redux'

// Initialize a store object
const initalizeSate = {
  counter: 0,
  value: 2,
  taskFrom: {
    Title: "",
    Priority: "",
  },
  taskList:[]
};

// Action on any changes
function CounterReducer(state=initalizeSate,action) {
  switch (action.type) {
    case 'GET_COUNTER':
      return {
        ...state,
      };
      break;
    
    case 'UPDATE_COUNTER':
      return {
        ...state,
        counter:125,
      };
      break;
    case 'UPDATE_VALUE':
      return {
        ...state,
        value:125,
      };
      break;
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter:state.counter+1,
      };
      break;
    case 'DECREMENT_COUNTER':
      return {
        ...state,
        counter:state.counter-1,
      };
      break;
    case 'DYNAMIC_DATA':
      console.log('action',action);
      console.log('in Dynamic Data');
      console.log(action.payload)
      return {
        ...state,
        counter:state.value+action.payload
      };
      break;
    case 'ADD_TASK':

      console.log(action.payload)
      return {
        ...state,
        taskForm:action.payload
      };
      break;
    case 'ADD_NEW_TASK':

      console.log(action.payload)
      return {
        ...state,
        taskList:[...state.taskList,action.payload]
      };
      break;
    
    default:
      break;
  }
  return state;
}
// set a store
let store = createStore(CounterReducer);
// Listen that anything changes in store
store.subscribe(() => console.log(store.getState()))
// get data
store.dispatch({ type: 'GET_COUNTER' })
// update data in store / global store
store.dispatch({ type: 'UPDATE_COUNTER' })
store.dispatch({ type: 'UPDATE_VALUE' })
store.dispatch({ type: 'INCREMENT_COUNTER' })
store.dispatch({ type: 'DECREMENT_COUNTER' })
store.dispatch({ type: 'DYNAMIC_DATA', payload: 15 })
const taskData= {
    Title: "Dynamic Title",
    Priority: "High",
  }
store.dispatch({ type: 'ADD_TASK', payload:taskData })
store.dispatch({ type: 'ADD_NEW_TASK', payload:taskData })


// taskList: [],
//   taskFrom: {
//     Title: "",
//     Priority: "",
//   },
//   isTaskAdded: false,