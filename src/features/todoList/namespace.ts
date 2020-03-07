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

export type ChangeStatusTodo = IAction<'TODO_LIST:CHANGE_STATUS_TODO', number>;
export type ChangeStatusTodoSuccess = IPlainAction<'TODO_LIST:CHANGE_STATUS_TODO_SUCCESS'>;
export type ChangeStatusTodoFail = IPlainFailAction<'TODO_LIST:CHANGE_STATUS_TODO_FAIL'>;

export type AddTodo = IAction<'TODO_LIST:ADD_TODO', string>;
export type AddTodoSuccess = IPlainAction<'TODO_LIST:ADD_TODO_SUCCESS'>;
export type AddTodoFail = IPlainFailAction<'TODO_LIST:ADD_TODO_FAIL'>;

export type ChangeTodo = IAction<'TODO_LIST:CHANGE_TODO', Pick<Todo, 'id' | 'value'>>;
export type ChangeTodoSuccess = IPlainAction<'TODO_LIST:CHANGE_TODO_SUCCESS'>;
export type ChangeTodoFail = IPlainFailAction<'TODO_LIST:CHANGE_TODO_FAIL'>;

export type RemoveTodo = IAction<'TODO_LIST:REMOVE_TODO', number>;
export type RemoveTodoSuccess = IPlainAction<'TODO_LIST:REMOVE_TODO_SUCCESS'>;
export type RemoveTodoFail = IPlainFailAction<'TODO_LIST:REMOVE_TODO_FAIL'>;

export type IAction =
  | LoadTodoList
  | LoadTodoListSuccess
  | LoadTodoListFail
  | ChangeStatusTodo
  | ChangeStatusTodoSuccess
  | ChangeStatusTodoFail
  | AddTodo
  | AddTodoSuccess
  | AddTodoFail
  | ChangeTodo
  | ChangeTodoSuccess
  | ChangeTodoFail
  | RemoveTodo
  | RemoveTodoSuccess
  | RemoveTodoFail;
