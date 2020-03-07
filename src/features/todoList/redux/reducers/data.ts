import * as NS from '../../namespace';
import { initial } from '../initial';

function dataReducer(state: NS.IReduxState['data'] = initial.data, action: NS.IAction): NS.IReduxState['data'] {
  switch (action.type) {
    case 'TODO_LIST:ADD_TODO': {
      console.log('action.payload', action.payload)
      const newTodo = {
        id: state.todoList && state.todoList[state.todoList.length - 1].id + 1 || 0,
        value: action.payload,
        isCompleted: false,
      }
      return {
        ...state,
        todoList: [...state.todoList, newTodo],
      };
    }

    case 'TODO_LIST:CHANGE_TODO': {
      console.log('action.payload', action.payload)
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

    case 'TODO_LIST:CHANGE_STATUS_TODO': {
      console.log('action.payload', action.payload)
      const newTodoList = state.todoList && state.todoList.map(todo => {
        if (todo.id === action.payload) return { ...todo, isCompleted: !todo.isCompleted };
        return todo;
      });
      return {
        ...state,
        todoList: newTodoList,
      };
    }

    case 'TODO_LIST:REMOVE_TODO': {
      console.log('action.payload', action.payload)
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
