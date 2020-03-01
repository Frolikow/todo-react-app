import { IPlainFailAction, IAction, IPlainAction } from 'shared/types/redux';
import { Todo } from './view/containers/TodoList/TodoList';

export interface IReduxState {
  data: {
    todoList: Todo[]
  }
}

export type LoadTodoList = IPlainAction<'TODO_LIST:LOAD_TODO_LIST'>;
export type LoadTodoListSuccess = IPlainAction<'TODO_LIST:LOAD_TODO_LIST_SUCCESS'>;
export type LoadTodoListFail = IPlainFailAction<'TODO_LIST:LOAD_TODO_LIST_FAIL'>;

export type ChangeStatusTodo = IPlainAction<'TODO_LIST:CHANGE_STATUS_TODO'>;
export type ChangeStatusTodoSuccess = IPlainAction<'TODO_LIST:CHANGE_STATUS_TODO_SUCCESS'>;
export type ChangeStatusTodoFail = IPlainFailAction<'TODO_LIST:CHANGE_STATUS_TODO_FAIL'>;

export type AddTodo = IAction<'TODO_LIST:ADD_TODO', Todo>;
export type AddTodoSuccess = IPlainAction<'TODO_LIST:ADD_TODO_SUCCESS'>;
export type AddTodoFail = IPlainFailAction<'TODO_LIST:ADD_TODO_FAIL'>;

export type ChangeTodo = IPlainAction<'TODO_LIST:CHANGE_TODO'>;
export type ChangeTodoSuccess = IPlainAction<'TODO_LIST:CHANGE_TODO_SUCCESS'>;
export type ChangeTodoFail = IPlainFailAction<'TODO_LIST:CHANGE_TODO_FAIL'>;

export type RemoveTodo = IPlainAction<'TODO_LIST:REMOVE_TODO'>;
export type RemoveTodoSuccess = IPlainAction<'TODO_LIST:REMOVE_TODO_SUCCESS'>;
export type RemoveTodoFail = IPlainFailAction<'TODO_LIST:REMOVE_TODO_FAIL'>;

export type IAction =
  | LoadTodoList
  | LoadTodoListSuccess
  | LoadTodoListFail
  | AddTodo
  | AddTodoSuccess
  | AddTodoFail
  | ChangeTodo
  | ChangeTodoSuccess
  | ChangeTodoFail
  | RemoveTodo
  | RemoveTodoSuccess
  | RemoveTodoFail;
