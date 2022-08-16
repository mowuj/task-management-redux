import * as Types from '../../types/types'
const initalizeSate = {
  counter: 100,

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
export default CounterReducer;