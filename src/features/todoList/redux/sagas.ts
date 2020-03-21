import { put, call, all, takeLatest, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { IDependencies } from 'shared/types/app';
import { getErrorMsg } from 'shared/helpers';
import { actionCreators as notificationActionCreators } from 'services/notification';

import * as NS from '../namespace';
import * as actionCreators from './actionCreators';

function getSaga(deps: IDependencies) {
  const loadTodoListType: NS.LoadTodoList['type'] = 'TODO_LIST:LOAD_TODO_LIST';
  const changeStatusTodoType: NS.ChangeStatusTodo['type'] = 'TODO_LIST:CHANGE_STATUS_TODO';
  const addTodoType: NS.AddTodo['type'] = 'TODO_LIST:ADD_TODO';
  const changeTodoType: NS.ChangeTodo['type'] = 'TODO_LIST:CHANGE_TODO';
  const removeTodoType: NS.RemoveTodo['type'] = 'TODO_LIST:REMOVE_TODO';

  return function* saga(): SagaIterator {
    yield all([
      takeLatest(loadTodoListType, executeLoadTodoList, deps),
      takeEvery(changeStatusTodoType, executeChangeStatusTodo, deps),
      takeLatest(addTodoType, executeAddTodo, deps),
      takeLatest(changeTodoType, executeChangeTodo, deps),
      takeEvery(removeTodoType, executeRemoveTodo, deps),
    ]);
  };
}

function* executeLoadTodoList({ api }: IDependencies) {
  try {
    const todoList = yield call(api.loadTodoList);
    yield put(actionCreators.loadTodoListSuccess(todoList));
    yield put(notificationActionCreators.setNotification({ kind: 'info', text: 'TODO loaded!' }));
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    yield put(actionCreators.loadTodoListFail(errorMsg));
    yield put(notificationActionCreators.setNotification({ kind: 'error', text: errorMsg }));
  }
}

function* executeChangeStatusTodo({ api }: IDependencies, { payload }: NS.ChangeStatusTodo) {
  try {
    const todo = yield call(api.getTodo, payload);
    yield call(api.changeStatusTodo, todo);
    yield put(actionCreators.changeStatusTodoSuccess(payload));
    yield put(notificationActionCreators.setNotification({ kind: 'info', text: 'TODO status changed!' }));
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    yield put(actionCreators.changeStatusTodoFail(errorMsg));
    yield put(notificationActionCreators.setNotification({ kind: 'error', text: errorMsg }));
  }
}

function* executeAddTodo({ api }: IDependencies, { payload }: NS.AddTodo) {
  try {
    yield call(api.addTodo, payload);
    yield put(actionCreators.addTodoSuccess(payload));
    yield put(notificationActionCreators.setNotification({ kind: 'info', text: 'TODO added!' }));
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    yield put(actionCreators.addTodoFail(errorMsg));
    yield put(notificationActionCreators.setNotification({ kind: 'error', text: errorMsg }));
  }
}

function* executeChangeTodo({ api }: IDependencies, { payload }: NS.ChangeTodo) {
  try {
    const todo = yield call(api.getTodo, payload.id);
    yield call(api.changeTodo, payload, todo);
    yield put(actionCreators.changeTodoSuccess(payload));
    yield put(notificationActionCreators.setNotification({ kind: 'info', text: 'TODO changed!' }));
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    yield put(actionCreators.changeTodoFail(errorMsg));
    yield put(notificationActionCreators.setNotification({ kind: 'error', text: errorMsg }));
  }
}

function* executeRemoveTodo({ api }: IDependencies, { payload }: NS.RemoveTodo) {
  try {
    yield call(api.removeTodo, payload);
    yield put(actionCreators.removeTodoSuccess(payload));
    yield put(notificationActionCreators.setNotification({ kind: 'info', text: 'TODO removed!' }));
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    yield put(actionCreators.removeTodoFail(errorMsg));
    yield put(notificationActionCreators.setNotification({ kind: 'error', text: errorMsg }));
  }
}

export { getSaga };
