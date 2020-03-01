import * as NS from '../../namespace';
import { initial } from '../initial';

function dataReducer(state: NS.IReduxState['data'] = initial.data, action: NS.IAction): NS.IReduxState['data'] {
  switch (action.type) {
    // case 'TODO_LIST:LOAD_TODO_LIST_SUCCESS': {
    //   const { data, totalResults } = action.payload;
    //   return { ...state, foundRepositories: data, totalResults };
    // }
    case 'TODO_LIST:ADD_TODO': {
      console.log('action.payload', action.payload)
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    }
    default:
      return state;
  }
}

export { dataReducer };
