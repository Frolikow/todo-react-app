import { makeCommunicationActionCreators } from 'redux-make-communication';

import * as NS from '../../namespace';

export const {
  execute: loadTodoList,
  completed: loadTodoListSuccess,
  failed: loadTodoListFail,
} = makeCommunicationActionCreators<
NS.LoadTodoList,
NS.LoadTodoListSuccess,
NS.LoadTodoListFail
>(
  'TODO_LIST:LOAD_TODO_LIST',
  'TODO_LIST:LOAD_TODO_LIST_SUCCESS',
  'TODO_LIST:LOAD_TODO_LIST_FAIL',
);

export const {
  execute: changeStatusTodo,
  completed: changeStatusTodoSuccess,
  failed: changeStatusTodoFail,
} = makeCommunicationActionCreators<
NS.ChangeStatusTodo,
NS.ChangeStatusTodoSuccess,
NS.ChangeStatusTodoFail
>(
  'TODO_LIST:CHANGE_STATUS_TODO',
  'TODO_LIST:CHANGE_STATUS_TODO_SUCCESS',
  'TODO_LIST:CHANGE_STATUS_TODO_FAIL',
);

export const {
  execute: addTodo,
  completed: addTodoSuccess,
  failed: addTodoFail,
} = makeCommunicationActionCreators<
NS.AddTodo,
NS.AddTodoSuccess,
NS.AddTodoFail
>(
  'TODO_LIST:ADD_TODO',
  'TODO_LIST:ADD_TODO_SUCCESS',
  'TODO_LIST:ADD_TODO_FAIL',
);

export const {
  execute: changeTodo,
  completed: changeTodoSuccess,
  failed: changeTodoFail,
} = makeCommunicationActionCreators<
NS.ChangeTodo,
NS.ChangeTodoSuccess,
NS.ChangeTodoFail
>(
  'TODO_LIST:CHANGE_TODO',
  'TODO_LIST:CHANGE_TODO_SUCCESS',
  'TODO_LIST:CHANGE_TODO_FAIL',
);

export const {
  execute: removeTodo,
  completed: removeTodoSuccess,
  failed: removeTodoFail,
} = makeCommunicationActionCreators<
NS.RemoveTodo,
NS.RemoveTodoSuccess,
NS.RemoveTodoFail
>(
  'TODO_LIST:REMOVE_TODO',
  'TODO_LIST:REMOVE_TODO_SUCCESS',
  'TODO_LIST:REMOVE_TODO_FAIL',
);