import CounterReducer from "../reducers/CounterReducer";
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares)
 const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

export default function store(previousState){
   const Store = createStore(
    CounterReducer,
    previousState,
   composedEnhancers 
       // window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return Store;
};