import * as NS from '../../namespace';
import { initial } from '../initial';

function dataReducer(state: NS.IReduxState['data'] = initial.data, action: NS.Action): NS.IReduxState['data'] {
  switch (action.type) {
    case 'TODO_LIST:LOAD_TODO_LIST_SUCCESS': {
      return {
        ...state,
        todoList: action.payload,
      };
    }

    case 'TODO_LIST:ADD_TODO_SUCCESS': {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    }

    case 'TODO_LIST:CHANGE_TODO_SUCCESS': {
      const { id, value } = action.payload;
      const newTodoList = state.todoList && state.todoList.map(todo => {
        if (todo.id === id) return { ...todo, value: value };
        return todo;
      });
      return {
        ...state,
        todoList: newTodoList,
      };
    }

    case 'TODO_LIST:CHANGE_STATUS_TODO_SUCCESS': {
      const newTodoList = state.todoList && state.todoList.map(todo => {
        if (todo.id === action.payload) return { ...todo, isCompleted: !todo.isCompleted };
        return todo;
      });
      return {
        ...state,
        todoList: newTodoList,
      };
    }

    case 'TODO_LIST:REMOVE_TODO_SUCCESS': {
      return {
        ...state,
        todoList: state.todoList && state.todoList.filter(todo => todo.id !== action.payload)
      };
    }

    default:
      return state;
  }
}

export { dataReducer };
