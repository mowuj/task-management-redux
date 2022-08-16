import * as Types from '../../types/types'
const initializeSate = {
  tasks: [],
  taskForm: {
    _id:null,
    Title: '',
    Description: '',
    Priority:''
  }

};

function TaskReducer(state=initializeSate,action) {
  switch (action.type) {
    
    case Types.GET_TASKS:
      return {
        ...state,
        tasks:action.payload
      };
    break;
  case Types.ADD_TASKS:
      return {
        ...state,
    taskForm: {
    Title: '',
    Description: '',
    Priority:''
  }
      };
      break;
  case Types.GET_TASK_DETAIL:
      return {
        ...state,
    taskForm:action.payload,
      };
      break;
    
    case Types.CHANGE_TASK_INPUT:
      const taskForm = { ...state.taskForm };
      taskForm[action.payload.name]=action.payload.value
      return {
        ...state,
        taskForm,
      };
      break;
    
    default:
      break;
  }
  return state;
}
export default TaskReducer;